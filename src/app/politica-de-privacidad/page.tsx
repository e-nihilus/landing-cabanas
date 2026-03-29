import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad | Cabañas Chica de Navalmelendro",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-text-dark mb-8">
            Política de Privacidad
          </h1>
          <p className="text-text-muted text-sm mb-10">
            Última actualización: 29 de marzo de 2026
          </p>

          <div className="space-y-8 text-text-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                1. Responsable del tratamiento
              </h2>
              <p>
                El responsable del tratamiento de los datos personales
                recogidos a través de este sitio web es:
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
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                2. Datos que recopilamos
              </h2>
              <p>Podemos recopilar los siguientes datos personales:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Nombre y apellidos, dirección de correo electrónico y número
                  de teléfono proporcionados a través de los formularios de
                  contacto o reserva.
                </li>
                <li>
                  Datos de navegación recogidos automáticamente (dirección IP,
                  tipo de navegador, páginas visitadas).
                </li>
                <li>
                  Información de pago necesaria para procesar las reservas
                  (gestionada por pasarelas de pago seguras de terceros).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                3. Finalidad del tratamiento
              </h2>
              <p>Los datos personales se utilizan para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Gestionar las reservas y la comunicación con los huéspedes.</li>
                <li>Responder a consultas y solicitudes de información.</li>
                <li>Enviar comunicaciones comerciales, solo con su consentimiento previo.</li>
                <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
                <li>Cumplir con obligaciones legales y fiscales.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                4. Base legal del tratamiento
              </h2>
              <p>
                El tratamiento de sus datos se basa en el consentimiento que
                usted presta al facilitar sus datos a través de nuestros
                formularios, así como en la ejecución del contrato de
                alojamiento y en el cumplimiento de obligaciones legales
                aplicables.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                5. Cesión de datos a terceros
              </h2>
              <p>
                No se cederán datos personales a terceros salvo obligación
                legal. Los datos podrán ser comunicados a plataformas de
                reserva (como Airbnb) y proveedores de servicios de pago que
                actúan como encargados del tratamiento con las debidas
                garantías.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                6. Conservación de los datos
              </h2>
              <p>
                Los datos personales se conservarán mientras exista una
                relación contractual o durante el tiempo necesario para
                cumplir con las obligaciones legales aplicables. Una vez
                finalizada la relación, los datos se mantendrán bloqueados
                durante los plazos legalmente previstos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                7. Derechos del usuario
              </h2>
              <p>
                Usted tiene derecho a acceder, rectificar, suprimir, limitar u
                oponerse al tratamiento de sus datos personales, así como a la
                portabilidad de los mismos. Para ejercer estos derechos, puede
                contactar con nosotros a través de los medios de contacto
                indicados en nuestro sitio web.
              </p>
              <p className="mt-2">
                Asimismo, tiene derecho a retirar el consentimiento en
                cualquier momento sin que ello afecte a la licitud del
                tratamiento previo.
              </p>
              <p className="mt-2">
                También tiene derecho a presentar una reclamación ante la
                Agencia Española de Protección de Datos (
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.aepd.es
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                8. Cookies
              </h2>
              <p>
                Este sitio web puede utilizar cookies propias y de terceros
                para mejorar la experiencia de navegación. El usuario puede
                configurar su navegador para rechazar las cookies, aunque esto
                puede afectar al funcionamiento del sitio web.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-text-dark mb-3">
                9. Seguridad
              </h2>
              <p>
                Hemos adoptado las medidas técnicas y organizativas necesarias
                para garantizar la seguridad de los datos personales y evitar
                su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
