import { useDarkMode } from "~/hooks/useDarkMode";
import Button from "~/components/Button";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <Header />

      <main className="container mx-auto p-8 space-y-12">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">¡Bienvenidos al Grado Superior en Informática!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Un programa de formación avanzada que te prepara para las mejores oportunidades en el mundo digital.
            Aprende a programar, gestionar sistemas y redes, y desarrollar aplicaciones móviles.
          </p>
         
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-center mb-6">Plan de Estudios</h3>
          <ul className="grid md:grid-cols-2 gap-6 px-6">
            <li className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-blue-600">Desarrollo de aplicaciones web</h4>
              <p>Aprende a crear aplicaciones completas usando las últimas tecnologías web.</p>
            </li>
            <li className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-blue-600">Redes y telecomunicaciones</h4>
              <p>Conviértete en un experto gestionando redes de comunicación en entornos complejos.</p>
            </li>
            <li className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-blue-600">Bases de datos y sistemas</h4>
              <p>Gestiona grandes volúmenes de datos y desarrolla soluciones de almacenamiento eficientes.</p>
            </li>
            <li className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold text-blue-600">Desarrollo de aplicaciones móviles</h4>
              <p>Desarrolla apps móviles para Android e iOS usando las mejores herramientas.</p>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-center mb-6">Salidas Laborales</h3>
          <ul className="space-y-4">
            <li className="text-lg">Desarrollador de software</li>
            <li className="text-lg">Administrador de sistemas</li>
            <li className="text-lg">Especialista en redes</li>
            <li className="text-lg">Consultor IT</li>
            <li className="text-lg">Ingeniero de bases de datos</li>
          </ul>
        </section>

        <section className="text-center mt-8">
          <Button onClick={() => alert("Más información sobre el grado")}>¡Solicita Información Ahora!</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
