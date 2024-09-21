import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    } 

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <>
            Register
            <main>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Registro de Usuario</h2>

                        <form action="#">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-semibold px-2">Username</label>
                                <input type="text" 
                                id="username" 
                                name="username" 
                                className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                onChange={(e) => onChangeUsername(e)}
                                required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold px-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" onChange={(e) => onChangeEmail(e)} required/>
                            </div>

                            <div className="mb-6 relative">
                                <label htmlFor="password" className="block text-gray-700 font-semibold px-2">Contraseña</label>
                                <input type="password" id="password" name="password" className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" onChange={(e) => onChangePassword(e)} required/>
                            </div>

                            <div className="mb-6 relative">
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold px-2">Confirmar Contraseña</label>
                                <input type="confirmPassword" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" onChange={(e) => onChangeConfirmPassword(e)} required/>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                Registrarme
                            </button>

                            <p className="mt-4 text-sm text-gray-600 text-center">
                                Ya tienes una cuenta? <a href="#" className="text-blue-500 hover:underline">Iniciar Sesion</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}