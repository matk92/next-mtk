"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Rocket, User, LogIn } from "lucide-react"
import { gsap } from "gsap"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(".nav-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2 })
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/missions", label: "Missions" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <Link href="/" className="nav-item flex items-center space-x-2 group">
              <div className="relative">
                <Rocket className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg group-hover:bg-purple-300/30 transition-all duration-300"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                Next-MTK
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item text-gray-300 hover:text-purple-300 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Right */}
          <div className="flex items-center justify-end space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="nav-item text-gray-300 hover:text-purple-300 hover:bg-purple-500/10">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="nav-item bg-purple-600 hover:bg-purple-700 text-white">
                  <User className="h-4 w-4 mr-2" />
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-300">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-purple-500/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-purple-300 transition-colors duration-300 py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4 border-t border-purple-500/20">
                    <Link href="/login">
                      <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-purple-300">
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <User className="h-4 w-4 mr-2" />
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
