import { getAll, createRestaurant } from "@/src/controllers/restaurantController.js"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return getAll(req, res)
    } else if (req.method === 'POST') {
        return createRestaurant(req, res)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}