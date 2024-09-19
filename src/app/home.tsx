import AUNAR from '../assets/logo.jpg';

export default function home() {
  return (
    <div className="">

      {/* Contenedor del encabezado */}
      <div className="header-container">
        <header className="bg-[linear-gradient(to_bottom,_#F8DC0B_80%,_#034873_25%)] text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <img src={AUNAR.src} alt="Descripción" className="w-80 h-auto" />
              <div className="flex items-center space-x-4">
                <select className="bg-[#034873] border-none text-[#F8DC0B] px-4 py-1 rounded-lg">
                  <option>Español</option>
                  <option>Inglés</option>
                </select>
                <button className="bg-white hover:bg-blue-700 text-[#034873] px-4 py-1 rounded-lg">
                  Iniciar sesión
                </button>
              </div>
            </div>
            <nav className="flex justify-end space-x-6 mt-4">
              <a href="#">
                <button className="bg-[#034873] text-[#F8DC0B] px-4 py-1 rounded-lg hover:bg-opacity-90">
                  Inicio
                </button>
              </a>
              <a href="#">
                <button className="bg-[#034873] text-[#F8DC0B] px-4 py-1 rounded-lg hover:bg-opacity-90">
                  Comunidades
                </button>
              </a>
              <a href="#">
                <button className="bg-[#034873] text-[#F8DC0B] px-4 py-1 rounded-lg hover:bg-opacity-90">
                  Navegar
                </button>
              </a>
              <a href="#">
                <button className="bg-[#034873] text-[#F8DC0B] px-4 py-1 rounded-lg hover:bg-opacity-90">
                  Estadísticas
                </button>
              </a>
              <a href="#">
                <button className="bg-[#034873] text-[#F8DC0B] px-4 py-1 rounded-lg hover:bg-opacity-90">
                  Contactos
                </button>
              </a>
            </nav>
          </div>
        </header>
      </div>

      {/* Contenedor del contenido principal */}
      <div className="main-content-container">
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
        </main>
      </div>

      {/* Contenedor de los íconos */}
      <div className="icons-container">
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
      </div>
    </div>
  )
}
