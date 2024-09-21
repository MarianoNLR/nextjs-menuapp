import { login } from "@/src/controllers/userController.js"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return login(req, res)
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}