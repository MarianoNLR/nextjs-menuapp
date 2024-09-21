import { getAll } from '@/src/controllers/userController.js'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        getAll(req, res)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}