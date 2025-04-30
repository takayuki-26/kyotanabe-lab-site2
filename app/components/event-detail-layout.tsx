import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { ReactNode } from "react"

interface EventDetailLayoutProps {
  children: ReactNode
}

export default function EventDetailLayout({ children }: EventDetailLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              LUVO Kyotanabe Lab
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 ml-auto mr-6">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/#events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <Link href="/#access" className="text-sm font-medium hover:text-primary">
              Access
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div>
            <Button asChild>
              <Link href="/#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" asChild>
            <Link href="/events">
              <ChevronLeft className="mr-2 h-4 w-4" />
              イベント一覧に戻る
            </Link>
          </Button>
        </div>
        {children}
      </main>
      <footer className="w-full border-t py-6 bg-slate-900 text-white">
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
