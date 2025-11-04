import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-16">
        {/* Columna Izquierda */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest mb-4">
            NEW WAY OF <br /> DOING THINGS
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            If you're eager to embark on an unforgettable journey of capturing
            cherished moments that will be treasured for generations, don't
            hesitate to get in touch with us.
          </p>

          <div className="flex flex-wrap gap-6 text-sm font-semibold tracking-wider text-gray-300">
            <Link href="#" className="hover:text-white transition-colors">
              FACEBOOK
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              INSTAGRAM
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              LINKEDIN
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              TWITTER
            </Link>
          </div>
        </div>

        {/* Columna Centro */}
        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-white transition-colors">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna Derecha */}
        <div>
          <h4 className="font-semibold mb-4">Utility Pages</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Styleguide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Licenses
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Changelog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Password Protected
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                404 Not Found Page
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Photography Studio. All rights reserved.
      </div>
    </footer>
     );
}
 
export default Footer;