export default function home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-yellow-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img
            src="ruta-logo-aqui" // Sustituye por la ruta del logo
            alt="Logo"
            className="h-12"
          />
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Comunidades</a>
            <a href="#" className="hover:underline">Navegar</a>
            <a href="#" className="hover:underline">Estadísticas</a>
            <a href="#" className="hover:underline">Contactos</a>
          </nav>
          <div className="flex space-x-4">
            <select className="bg-yellow-500 border-none text-white">
              <option>Español</option>
              <option>Inglés</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
              Iniciar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto py-12 px-4">
        <section className="bg-gray-800 text-white p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-yellow-300">Repositorio Institucional</h1>
          <p className="text-lg mb-6">
            Iluminando nuestro camino hacia la comprensión y el crecimiento personal.
          </p>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Buscar en el Repositorio..."
              className="w-2/3 p-2 rounded-lg border border-gray-300 text-gray-900"
            />
          </div>
        </section>

        {/* Sección de íconos */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center">
            <img src="ruta-icono-1" alt="Objeto de Aprendizaje" className="h-16 mb-2" />
            <p className="text-center">Objetos de Aprendizaje</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="ruta-icono-2" alt="Producción Editorial" className="h-16 mb-2" />
            <p className="text-center">Producción Editorial</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="ruta-icono-3" alt="Memorias Institucionales" className="h-16 mb-2" />
            <p className="text-center">Memorias Institucionales</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="ruta-icono-4" alt="Proyecto de Grado" className="h-16 mb-2" />
            <p className="text-center">Proyecto de Grado</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="ruta-icono-5" alt="Investigación Formativa" className="h-16 mb-2" />
            <p className="text-center">Investigación Formativa</p>
          </div>
        </section>
      </main>
    </div>
  )
}
