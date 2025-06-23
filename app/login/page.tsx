import { LoginForm } from "@/components/auth/login-form"
import { StarField } from "@/components/star-field"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <StarField />

      <Link
        href="/"
        className="absolute top-6 left-6 text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2 z-10"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="w-full max-w-md relative z-10">
        <LoginForm />
      </div>
    </div>
  )
}
