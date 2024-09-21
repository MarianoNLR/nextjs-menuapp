import { deleteUser, getById } from "@/src/controllers/userController";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        getById(req, res)
    } else if (req.method === 'DELETE') {
        deleteUser(req, res)
    } else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}