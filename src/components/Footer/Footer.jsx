import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneIcon as WhatsApp,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    name: "instagram",
    icon: Instagram,
    color: "hover:bg-gradient-to-tr from-purple-500 to-pink-500",
    href: "https://www.instagram.com/argentinagrosrl/",
  },
  {
    name: "email",
    icon: Mail,
    color: "hover:bg-red-500",
    href: "mailto:argentinagrosl@gmail.com",
  },
  {
    name: "facebook",
    icon: Facebook,
    color: "hover:bg-blue-600",
    href: "https://www.facebook.com/Argentinagrosrl/?locale=es_LA",
  },
  {
    name: "whatsapp",
    icon: WhatsApp,
    color: "hover:bg-green-500",
    href: "https://wa.link/r80kjj",
  },
  {
    name: "youtube",
    icon: Youtube,
    color: "hover:bg-red-600",
    href: "https://www.youtube.com/@argentinagrodetrenquelauqu8241",
  },
  {
    name: "location",
    icon: MapPin,
    color: "hover:bg-orange-500",
    href: "https://www.google.com/maps/place/35%C2%B059'45.4%22S+62%C2%B042'28.1%22W/@-35.995844,-62.709142,16z/data=!4m4!3m3!8m2!3d-35.9959444!4d-62.7078056?hl=es&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
  },
];

const contacts = [
  {
    name: "La Argentina",
    phone: "2392-480555",
    href: "https://wa.link/m884l1",
  },
  {
    name: "Ing. Agrónomo Mauricio J. Font",
    phone: "2392-401144",
    href: "https://wa.link/pmi5kx",
  },
  { name: "Patricio J. Font", phone: "2392-510966" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 gap-8 ">
          <div className="relative w-64 h-24 transform hover:scale-105 transition-transform ">
            <img
              src="/logoBN.svg"
              alt="La Argentina Logo"
              className="object-contain"
            />
          </div>

          <div className=" w-full max-w-[300px] aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1735312126204!6m8!1m7!1s8E1CBa7_RQQOU0n_DRmFtg!2m2!1d-35.99116334970015!2d-62.70232038676443!3f213.68590745263296!4f-6.161529308558855!5f0.7820865974627469https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1766.6312178272992!2d-62.70914242364199!3d-35.99584397391906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDU5JzQ1LjQiUyA2MsKwNDInMjguMSJX!5e0!3m2!1ses!2sus!4v1735312530038!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de La Argentina"
              className="hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-6">
          <h3 className="text-2xl font-semibold text-blue-200 mb-4 relative inline-block">
            Contactos
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left hover:scale-x-110 transition-transform"></span>
          </h3>
          <div className="space-y-4">
            <p className="hover:text-blue-200 transition-colors inline-flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-300" />
              Trenque Lauquen (B6400)
            </p>
            {contacts.map((contact) => (
              <div
                key={contact.phone}
                className="group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-medium group-hover:text-blue-200 transition-colors">
                  {contact.name}
                </p>
                <p className="text-blue-200 opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <WhatsApp className="h-4 w-4" />
                  {contact.phone}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-blue-200 text-center md:text-left mb-4 relative inline-block">
            Síguenos
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left hover:scale-x-110 transition-transform"></span>
          </h3>
          <div className="grid grid-cols-3 gap-6 max-w-[240px] mx-auto md:mx-0">
            {socialLinks.map(({ name, icon: Icon, color, href }) => (
              <a
                target="_blank"
                key={name}
                href={href}
                className={`flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 ${color}`}
                aria-label={name}
              >
                <Icon className="w-6 h-6 text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center text-blue-200/80 text-sm border-t border-white/10">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            className="text-blue-200/80 p-0 hover:underline font-semibold"
            href="https://www.instagram.com/gena_rossi?igsh=MWFzcmpzdnBpazNsNg=="
          >
            Genaro Rossi
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
