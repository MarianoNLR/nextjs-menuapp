import { getAllByRestaurantName, createFood } from "@/src/controllers/foodController.js";

export default async function handler(req, res) {
    const { restaurantName } = req.query
    if (req.method === 'GET') {
        getAllByRestaurantName(req, res, restaurantName)
    } else if (req.method === 'POST') {
        createFood(req, res)
    } else {
        res.setHeader('Allow', ['GET, POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}