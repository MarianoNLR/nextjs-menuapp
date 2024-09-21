import { getFood, updateFood, deleteFood } from "@/src/controllers/foodController.js";

export default async function handler(req, res) {
    if ( req.method === 'GET' ) {
        getFood(req, res)
    } else if ( req.method === 'PUT' ) {
        updateFood(req, res)
    } else if ( req.method === 'DELETE' ) {
        deleteFood(req, res)
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${req.method} is not Allowed`)
    }
}