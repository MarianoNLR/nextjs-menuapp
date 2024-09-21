import Restaurant from "../models/restaurantModel.js";

export async function getAll (req, res) {
    try {
        const restaurants = await Restaurant.findAll()

        return res.status(200).json({result : restaurants})
    } catch (error) {
        return res.status(500).json({error: 'Internal error server.'})
    }
}

export async function getById (req, res) {
    const { restaurantId } = req.params

    try {
        const restaurant = await Restaurant.findByPk(restaurantId)

        if (!restaurant) return res.status(404).json({msg : 'Restaurant not found.'})

        return res.status(200).json({result : restaurant})
    } catch (error) {
        return res.status(500).json({error: 'Internal error server.'})
    }
}

export async function createRestaurant (req, res) {
    const { userId } = req
    const { name, address } = req.body
    const replacedName = name.replace(" ", "-")
    try {
        const nameExists = await Restaurant.findOne({where: {name: replacedName}})
        console.log("hola ", nameExists)
        if (nameExists) return res.status(401).json({error: `A restaurant with name '${name}' already exists.`})
        

        const result = await Restaurant.create({ name: replacedName, address, userId })

        console.log(result)

        return res.status(201).json({msg: 'Restaurant has been created successfully.', data: result})
        
    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error.'})
    }
}

export async function updateRestaurant (req, res) {
    const { userId } = req
    const { restaurantName } = req.params
    const { name, address } = req.body
    try {
        if (!name || !address) return res.status(400).json({ error: 'Name and Address needed.' })

        const restaurantData = await Restaurant.findOne({ where: {name: restaurantName}})
    
        if (!restaurantData) return res.status(404).json({error: 'Restaurant not found.'})
        
        if (restaurantData.userId != userId) return res.status(401).json({error: 'Unauthorized.'})
        
        await restaurantData.update({ name, address })

        return res.status(200).json({msg: 'Restaurant has been updated.'})
    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error.'})
    }
}

export async function deleteRestaurant (req, res) {
    const { userId } = req
    const { restaurantId } = req.params

    try {
        const restaurantData = await Restaurant.findByPk(restaurantId)
        
        if (!restaurantData) return res.status(404).json({error: 'Restaurant not found.'})

        if (restaurantData.userId != userId) return res.status(401).json({error: 'Unauthorized.'})

        await Restaurant.destroy({
            where: {
                id: restaurantId
            }
        })

        return res.status(200).json({msg: 'Restaurant has been deleted.'})
    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error.'})
    }
}