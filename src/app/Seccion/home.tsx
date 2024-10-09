import AUNAR from '../assets/logo.jpg';
import aprendizaje from '../assets/aprendizaje.png';
import investigacion from '../assets/investigacion.png';
import Institucional from '../assets/institu.png';
import Projegrado from '../assets/institu.png';
import grado from '../assets/graduado.png';
import fondo from '../assets/imagenprincipal.jpg';

export default function Home() {  // Asegúrate de que el componente esté bien nombrado
  return (
    <div className="">  
      <div className="header-container">
        <header className="bg-[linear-gradient(to_bottom,#F8DC0B_80%,#034873_25%)] text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <img src={AUNAR.src} alt="Logo AUNAR" className="w-80 h-auto" />
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
            <nav className="flex items-center justify-end space-x-6 mt-4">
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

      <div className="main-content-container">
        <main className="container mx-auto py-12 px-4">
          <section
            className="bg-gray-800 text-white p-6 rounded-lg text-center relative"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
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

        <div className="icons-container">
          <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <img src={aprendizaje.src} alt="Objeto de Aprendizaje" className="h-16 mb-2" />
              <p className="text-center">Objetos de Aprendizaje</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={investigacion.src} alt="Producción Editorial" className="h-16 mb-2" />
              <p className="text-center">Producción Editorial</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Institucional.src} alt="Memorias Institucionales" className="h-16 mb-2" />
              <p className="text-center">Memorias Institucionales</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Projegrado.src} alt="Proyecto de Grado" className="h-16 mb-2" />
              <p className="text-center">Proyecto de Grado</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={grado.src} alt="Investigación Formativa" className="h-16 mb-2" />
              <p className="text-center">Investigación Formativa</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
