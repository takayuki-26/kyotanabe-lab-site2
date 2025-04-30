import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { ReactNode } from "react"
import ParticlesBackground from "@/components/particles-background"
import WaveAnimation from "@/components/wave-animation"

interface EventDetailLayoutProps {
  children: ReactNode
}

export default function EventDetailLayout({ children }: EventDetailLayoutProps) {
  return (
    <div className="min-h-screen dynamic-bg grid-pattern">
      <header className="sticky top-0 z-50 w-full border-b bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/5">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl text-white">
              LUVO Kyotanabe Lab
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 ml-auto mr-6">
            <Link href="/#about" className="text-sm font-medium text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/#events" className="text-sm font-medium text-gray-300 hover:text-white">
              Events
            </Link>
            <Link href="/#access" className="text-sm font-medium text-gray-300 hover:text-white">
              Access
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>
          <div>
            <Button asChild className="bg-blue-500/80 hover:bg-blue-600/80 border-blue-400/30 glow">
              <Link href="/#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="absolute inset-0 z-0 tech-circuit"></div>
      <ParticlesBackground count={40} color="rgba(59, 130, 246, 0.3)" className="z-0" />

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            asChild
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          >
            <Link href="/events">
              <ChevronLeft className="mr-2 h-4 w-4" />
              イベント一覧に戻る
            </Link>
          </Button>
        </div>
        <div className="relative z-10">{children}</div>
      </main>

      <WaveAnimation color="rgba(255, 255, 255, 0.1)" height={80} className="z-10" />

      <footer className="w-full border-t py-6 bg-slate-900/80 backdrop-blur-sm text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              © {new Date().getFullYear()} LUVO Kyotanabe Lab All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-sm text-slate-300 hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-sm text-slate-300 hover:text-white">
                利用規約
              </Link>
              <a
                href="https://luvo.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-white"
              >
                株式会社LUVO
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
