import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso Legal | Cabañas Chica de Navalmelendro",
};

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-text-dark mb-8">
            Aviso Legal
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Última actualización: 29 de marzo de 2026
          </p>

          <div className="space-y-8 text-text-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                1. Datos identificativos
              </h2>
              <p>
                En cumplimiento del deber de información recogido en el
                artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de
                la Sociedad de la Información y del Comercio Electrónico
                (LSSICE), se facilitan los siguientes datos:
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li>
                  <strong className="text-text-dark">Titular:</strong> Maria
                  Del Mar Rayo
                </li>
                <li>
                  <strong className="text-text-dark">NIF:</strong> 50187182D
                </li>
                <li>
                  <strong className="text-text-dark">Dirección:</strong> Calle
                  Diseminado km 6,5
                </li>
                <li>
                  <strong className="text-text-dark">Email:</strong>{" "}
                  <a
                    href="mailto:chicadenavalmelendro@gmail.com"
                    className="text-primary hover:underline"
                  >
                    chicadenavalmelendro@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="text-text-dark">Actividad:</strong>{" "}
                  Alquiler de cabañas y alojamientos
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                2. Objeto
              </h2>
              <p>
                El presente sitio web tiene como finalidad proporcionar
                información sobre los servicios de alquiler de cabañas
                ofrecidos por Cabañas Chica de Navalmelendro, así como
                facilitar la gestión de reservas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                3. Propiedad intelectual e industrial
              </h2>
              <p>
                Todos los contenidos del sitio web, incluyendo textos,
                fotografías, gráficos, imágenes, logotipos, iconos, software y
                cualquier otro material, están protegidos por la legislación
                vigente en materia de propiedad intelectual e industrial.
              </p>
              <p className="mt-2">
                Queda prohibida la reproducción, distribución, comunicación
                pública, transformación o cualquier otra actividad que se
                realice con los contenidos de este sitio web sin la
                autorización previa y por escrito del titular.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                4. Condiciones de uso
              </h2>
              <p>
                El usuario se compromete a utilizar el sitio web de conformidad
                con la ley, el presente Aviso Legal, la legislación vigente y
                el orden público. El usuario se obliga a no utilizar el sitio
                web con fines ilícitos, lesivos de derechos o intereses de
                terceros.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                5. Exclusión de responsabilidad
              </h2>
              <p>
                Cabañas Chica de Navalmelendro no se hace responsable de los
                daños y perjuicios de cualquier naturaleza que pudieran
                derivarse de:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  La falta de disponibilidad, mantenimiento y efectivo
                  funcionamiento del sitio web o de sus contenidos.
                </li>
                <li>
                  La existencia de virus u otros elementos lesivos en los
                  contenidos que puedan producir alteraciones en los sistemas
                  informáticos del usuario.
                </li>
                <li>
                  El uso ilícito, negligente, fraudulento o contrario al
                  presente Aviso Legal.
                </li>
                <li>
                  La falta de veracidad, exactitud, exhaustividad y/o
                  actualidad de los contenidos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                6. Enlaces a terceros
              </h2>
              <p>
                Este sitio web puede contener enlaces a sitios de terceros
                (como Airbnb). Cabañas Chica de Navalmelendro no asume
                responsabilidad alguna por el contenido, políticas de
                privacidad o prácticas de dichos sitios web externos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                7. Protección de datos
              </h2>
              <p>
                Para más información sobre el tratamiento de datos personales,
                consulte nuestra{" "}
                <a
                  href="/politica-de-privacidad"
                  className="text-primary hover:underline"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                8. Legislación aplicable y jurisdicción
              </h2>
              <p>
                El presente Aviso Legal se rige por la legislación española. Para
                la resolución de cualquier controversia que pudiera surgir, las
                partes se someten a los Juzgados y Tribunales del domicilio
                del titular del sitio web, salvo que la normativa de
                protección de consumidores establezca otro fuero aplicable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                9. Modificaciones
              </h2>
              <p>
                Cabañas Chica de Navalmelendro se reserva el derecho a
                modificar el presente Aviso Legal sin previo aviso. El usuario
                será responsable de revisar periódicamente estas condiciones.
                El uso continuado del sitio web tras la publicación de cambios
                constituirá la aceptación de los mismos.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
