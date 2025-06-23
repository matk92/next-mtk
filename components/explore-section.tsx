"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Calendar } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const children = contentRef.current?.children
    if (!children) return

    gsap.fromTo(
      children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const missions = [
    {
      name: "Mars Perseverance",
      location: "Mars",
      date: "2021-2024",
      status: "Active",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "James Webb Telescope",
      location: "L2 Lagrange Point",
      date: "2021-Present",
      status: "Operational",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Artemis Program",
      location: "Moon",
      date: "2024-2030",
      status: "Planned",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={contentRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Current Space Missions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow the latest space missions and discoveries happening right now
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg overflow-hidden border border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={mission.image || "/placeholder.svg"}
                    alt={mission.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <Badge
                    className={`absolute top-4 right-4 ${
                      mission.status === "Active"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : mission.status === "Operational"
                          ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    }`}
                  >
                    {mission.status}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {mission.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{mission.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{mission.date}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-purple-400 text-purple-300 hover:bg-purple-500/10 group"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
