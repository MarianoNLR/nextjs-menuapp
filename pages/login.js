export default function Login () {
    return (
        <>
            <main>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Inicio de Sesión</h2>

                        <form action="#">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-semibold px-2">Username</label>
                                <input type="text" id="username" name="username" className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required/>
                            </div>

                            <div className="mb-6 relative">
                                <label htmlFor="password" className="block text-gray-700 font-semibold px-2">Contraseña</label>
                                <input type="password" id="password" name="password" className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required/>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                Iniciar Sesion
                            </button>

                            <p className="mt-4 text-sm text-gray-600 text-center">
                                No tienes cuenta aún? <a href="#" className="text-blue-500 hover:underline">Registrarme</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}