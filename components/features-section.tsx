"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Globe, Satellite, Zap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const cards = cardsRef.current?.children
    if (!cards) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const features = [
    {
      icon: Rocket,
      title: "Space Missions",
      description: "Track and explore current and upcoming space missions from agencies worldwide.",
    },
    {
      icon: Globe,
      title: "Planet Discovery",
      description: "Discover exoplanets and learn about their unique characteristics and potential for life.",
    },
    {
      icon: Satellite,
      title: "Satellite Tracking",
      description: "Monitor satellites in real-time and understand their orbits and purposes.",
    },
    {
      icon: Zap,
      title: "Cosmic Events",
      description: "Stay updated on astronomical events like eclipses, meteor showers, and more.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Discover the Universe</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our platform offers cutting-edge tools and resources for space exploration enthusiasts
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-500/20 rounded-full w-fit group-hover:bg-purple-500/30 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
