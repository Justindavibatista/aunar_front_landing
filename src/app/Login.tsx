import AUNAR from '../assets/logo.jpg';
import fondo from '../assets/imagenprincipal.jpg';
import Link from 'next/link';

export default function Login() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${fondo.src})`,
      }}
    >
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg bg-opacity-90">
        <div className="flex justify-center mb-4">
          <img src={AUNAR.src} alt="Logo AUNAR" className="w-32 h-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#034873]">Iniciar sesión</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Correo electrónico:</label>
            <input
              type="email"
              placeholder="Escribe tu correo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Contraseña:</label>
            <input
              type="password"
              placeholder="Escribe tu contraseña"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <Link href="src/app/Seccion/home.tsx"> {/* Link de Next.js */}
          <button type="button"className="w-full bg-[#034873] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Iniciar sesión
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
