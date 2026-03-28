export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 text-center border-b border-white/10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para tu escapada?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Reserva ahora y vive una experiencia única en plena naturaleza.
          </p>
          <a
            href="#reservas"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary-dark px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Reservar Ahora
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏡</span>
              <span className="font-display text-xl font-semibold">
                El Encinar
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Cabañas rurales con encanto y piscina panorámica. Tu refugio
              perfecto en plena naturaleza.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Navegación</h4>
            <ul className="space-y-2">
              {[
                { href: "#cabanas", label: "Cabañas" },
                { href: "#galeria", label: "Galería" },
                { href: "#servicios", label: "Servicios" },
                { href: "#reservas", label: "Reservas" },
                { href: "#opiniones", label: "Opiniones" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contacto</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>📞 +34 600 000 000</li>
              <li>✉️ info@cabanasencinar.es</li>
              <li>📍 Sierra de los Encinares</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Síguenos</h4>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary-dark transition-all duration-300 text-sm font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Cabañas Rurales El Encinar. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
