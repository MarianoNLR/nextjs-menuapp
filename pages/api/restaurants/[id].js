import { deleteRestaurant, getById, updateRestaurant} from "@/src/controllers/restaurantController.js";

export default async function handler (req, res) {
    if (req.method === 'GET') {
        return getById(req, res)
    } else if (req.method === 'PUT') {
        return updateRestaurant(req, res)
    } else if (req.method === 'DELETE') {
        return deleteRestaurant(req, res)
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}