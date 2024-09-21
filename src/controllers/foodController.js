import Food from '../models/foodModel.js'
import Restaurant from '../models/restaurantModel.js'

export async function getAllByRestaurantName (req, res, restaurantName) {
    const { userId } = req

    try {
        const restaurantData = await Restaurant.findOne({where: {name: restaurantName}})

        const dishes = await Food.findAll({
            where: {restaurantId: restaurantData.dataValues.id},
            include: [{ //Para obtener los datos del restaurante en la consulta
                model: Restaurant,
            }]
        })
        if (!dishes) return res.status(400).json({error: 'Something Went Wrong.'})

        return res.status(200).json({result: dishes})
    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error'})
    }
}

export async function getFood (req, res) {
    const { foodId } = req.params
    const { userId } = req

    try {
        const foodData = await Food.findByPk(foodId)

        if (!foodData) return res.status(404).json({error: 'Food not found.'})
        
        return res.status(200).json({result: foodData})
    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error.'})
    }
}

export async function createFood (req, res) {
    const { userId } = req
    const { restaurantName } = req.query
    const { name, price, description } = req.body

    if (!name  || !price) return res.status(400).json({error: 'Name and price must have a value.'})
    
    if (typeof price !== 'number') return res.status(400).json({error: 'Price must be a number.'})

    try {
        const restaurantData = await Restaurant.findOne({name: restaurantName})

        if (restaurantData.userId != userId) return res.status(401).json({error: 'Unauthorized.'})

        const result = await Food.create({name, price, description, restaurantId: restaurantData.id})

        return res.status(201).json({msg: 'Food has been created succesfully.', data: result})

    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error. Please, try again.'})
    }
}

export async function deleteFood (req, res) {
    const {foodId} = req.params
    const {userId} = req

    try {
        const food = await Food.findOne({
            where: {id: foodId},
            include: [{ //Para obtener los datos del restaurante en la consulta
                model: Restaurant,
            }]
        })

        console.log(food, food.Restaurant.userId)

        if (food.Restaurant.userId != userId) {
            return res.status(401).json({msg: 'Unauthorized.'})
        }

        await Food.destroy({
            where: {
                id: foodId
            }
        })

        return res.status(200).json({data: food, msg: 'Food has been deleted.'})
    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error.'})
    }
}

export async function updateFood (req, res) {
    const {foodId} = req.params
    const {userId} = req
    const {name, price, description} = req.body

    try {
        const food = await Food.findOne({
            where: {id: foodId},
            include: [{ //Para obtener los datos del restaurante en la consulta
                model: Restaurant,
            }]
        })

        if (food.Restaurant.userId != userId) {
            return res.status(401).json({msg: 'Unauthorized.'})
        }

        await food.update({name, price, description})
        await food.reload()

        return res.status(200).json({data: food, msg: 'Food has been updated.'})

    } catch (error) {
        return res.status(500).json({error: 'Internal Server Error.'})
    }
}