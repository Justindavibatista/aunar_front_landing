export default function login() {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <nav className="bg-blue-800 p-4 text-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://example.com/logo.png" // Reemplazar con la URL del logo
            alt="AUNAR logo"
            className="w-12"
          />
          <span className="text-lg font-bold">Autónoma de Nariño</span>
        </div>
        <ul className="flex space-x-4">
          <li className="hover:underline cursor-pointer">Inicio</li>
          <li className="hover:underline cursor-pointer">Comunidades</li>
          <li className="hover:underline cursor-pointer">Navegar</li>
          <li className="hover:underline cursor-pointer">Estadísticas</li>
          <li className="hover:underline cursor-pointer">Contactos</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Iniciar sesión</button>
      </nav>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-12 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Sección izquierda (imagen de estudiantes) */}
        <div className="flex-1">
          <img
            src="https://example.com/students.jpg" // Reemplazar con la URL de la imagen
            alt="Estudiantes"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Sección derecha (Formulario de acceso) */}
        <div className="flex-1 bg-blue-700 text-white p-8 rounded-lg shadow-lg max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Universidad Autónoma de Nariño</h2>
          <p className="mb-6">
            La Corporación Universitaria Autónoma de Nariño - AUNAR extensión Villavicencio, es una institución de
            Educación Superior comprometida con la cultura, la ciencia, la investigación, la excelencia en la formación
            de profesionales íntegros y el liderazgo en el desarrollo social.
          </p>

          {/* Formulario */}
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-md">
              Acceder
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
