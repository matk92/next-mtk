import Link from "next/link"
import { Rocket, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Next-MTK</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your gateway to space exploration. Discover the wonders of the universe through cutting-edge technology
              and immersive experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/missions" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Missions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Next-MTK. All rights reserved. Made with ❤️ for space enthusiasts.</p>
        </div>
      </div>
    </footer>
  )
}
