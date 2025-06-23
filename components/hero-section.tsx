"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { gsap } from "gsap"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      )
      .fromTo(
        buttonsRef.current ? Array.from(buttonsRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.3",
      )

    // Floating animation for the hero section
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div ref={heroRef} className="text-center max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Explore the{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Infinite
          </span>{" "}
          Cosmos
        </h1>

        <p ref={subtitleRef} className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Embark on an extraordinary journey through space and time. Discover distant galaxies, explore alien worlds,
          and unlock the mysteries of the universe.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/explore">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg group"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </section>
  )
}
