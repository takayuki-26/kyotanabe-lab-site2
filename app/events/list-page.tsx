import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function EventsListPage() {
  // イベントデータ（実際の実装ではデータベースやAPIから取得）
  const events = [
    {
      id: "ai-art-exhibition",
      title: "AI×アート展示会",
      date: "2024/07/15",
      time: "13:00～17:00",
      status: "受付中",
    },
    {
      id: "industry-meetup",
      title: "産学連携ミートアップ",
      date: "2024/06/08",
      time: "10:00～16:00",
      status: "受付中",
    },
    {
      id: "ai-programming",
      title: "AI×プログラミング入門講座",
      date: "2024/05/12",
      time: "13:00～16:00",
      status: "受付中",
    },
    {
      id: "ai-ethics",
      title: "AI倫理とガバナンス講座",
      date: "2024/04/18",
      time: "14:00～16:30",
      status: "受付中",
    },
    {
      id: "student-hackathon",
      title: "学生向けAIハッカソン",
      date: "2024/03/05",
      time: "10:00～2024/03/07 18:00",
      status: "受付中",
    },
    {
      id: "ai-business-cases",
      title: "AI×ビジネス活用事例発表会",
      date: "2024/02/10",
      time: "13:00～16:00",
      status: "受付中",
    },
    {
      id: "future-tech-symposium",
      title: "未来テックシンポジウム",
      date: "2024/08/20",
      time: "14:00～17:00",
      status: "受付前",
    },
  ]

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
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>
        </div>
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-muted-foreground text-lg">LUVO Kyotanabe Labで開催される様々なイベント情報</p>
        </div>

        {/* イベントリスト（テーブル形式） */}
        <div className="border rounded-lg overflow-hidden">
          <div className="divide-y">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-slate-50"
              >
                <div className="flex-1 mb-3 sm:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {event.date} {event.time}
                    </div>
                    <div className="font-medium">{event.title}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs font-medium">
                    {event.status}
                  </div>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={`/events/${event.id}`} className="text-primary">
                      詳細
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 p-3 text-center border-t">
            <Button variant="ghost" asChild size="sm">
              <Link href="/events">もっと見る</Link>
            </Button>
          </div>
        </div>
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
