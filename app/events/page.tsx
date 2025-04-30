import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ParticlesBackground from "@/components/particles-background"
import WaveAnimation from "@/components/wave-animation"

export default function EventsPage() {
  // イベ���トデータ（実際の実装ではデータベースやAPIから取得）
  const events = [
    {
      id: "ai-art-exhibition",
      title: "AI×アート展示会",
      date: "2024年7月15日",
      time: "13:00～17:00",
      description: "AIを活用したアート作品の展示会。テクノロジーと芸術の融合を体験できます。",
      category: "展示会",
      status: "受付中",
    },
    {
      id: "industry-meetup",
      title: "産学連携ミートアップ",
      date: "2024年6月8日",
      time: "10:00～16:00",
      description: "企業と学生が交流し、AI活用のアイデアを共有するミートアップイベント。",
      category: "ミートアップ",
      status: "受付中",
    },
    {
      id: "ai-programming",
      title: "AI×プログラミング入門講座",
      date: "2024年5月12日",
      time: "13:00～16:00",
      description: "プログラミング初心者向けのAI活用講座。基本的なコーディングからAI連携まで学べます。",
      category: "講座",
      status: "受付中",
    },
    {
      id: "ai-ethics",
      title: "AI倫理とガバナンス講座",
      date: "2024年4月18日",
      time: "14:00～16:30",
      description: "AI活用における倫理的課題とガバナンスについて考える講座。実務者必見の内容です。",
      category: "講座",
      status: "受付中",
    },
    {
      id: "student-hackathon",
      title: "学生向けAIハッカソン",
      date: "2024年3月5日",
      time: "10:00～2024年3月7日 18:00",
      description: "3日間で社会課題をAIで解決するプロダクトを開発。メンターのサポートあり、初心者歓迎。",
      category: "ハッカソン",
      status: "受付中",
    },
    {
      id: "ai-business-cases",
      title: "AI×ビジネス活用事例発表会",
      date: "2024年2月10日",
      time: "13:00～16:00",
      description: "企業におけるAI活用の最新事例を紹介。ビジネスプロセス改善のヒントが得られます。",
      category: "発表会",
      status: "受付中",
    },
    {
      id: "rag-seminar",
      title: "RAGシステム構築セミナー",
      date: "2024年1月20日",
      time: "14:00～17:30",
      description: "Retrieval Augmented Generationの基礎から応用まで。実践的なRAGシステムの構築方法を解説します。",
      category: "セミナー",
      status: "終了",
    },
    {
      id: "ai-workshop",
      title: "AI活用ワークショップ",
      date: "2023年12月15日",
      time: "13:00～17:00",
      description: "AIツールを活用した業務効率化について学ぶワークショップ。初心者から参加可能です。",
      category: "ワークショップ",
      status: "終了",
    },
    {
      id: "open-lab-day",
      title: "オープンラボデイ",
      date: "毎月第3土曜日",
      time: "10:00～16:00",
      description: "LUVO Kyotanabe Labの活動を体験できるオープンデイ。見学や体験が可能です。",
      category: "オープンデイ",
      status: "受付中",
    },
    {
      id: "ai-medical-symposium",  // URLのパスとして使用される一意のID
      title: "AIと医療の未来シンポジウム",
      date: "2024年12月10日",
      time: "13:00～16:00",
      description: "医療分野におけるAI活用の最前線と未来の可能性について議論するシンポジウム。",
      category: "シンポジウム",
      status: "受付前",
    },
  ]

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
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>
        </div>
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white glow-text">Events</h1>
          <p className="text-gray-300 text-lg">LUVO Kyotanabe Labで開催される様々なイベント情報</p>
        </div>

        {/* イベントリスト（テーブル形式） */}
        <div className="mb-16">
          <div className="border border-blue-500/30 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5">
            <div className="divide-y divide-blue-500/30">
              {events.slice(0, 6).map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-blue-500/10"
                >
                  <div className="flex-1 mb-3 sm:mb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="text-sm text-gray-300 whitespace-nowrap">
                        {event.date} {event.time}
                      </div>
                      <div className="font-medium text-white">{event.title}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                      {event.status}
                    </div>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={`/events/${event.id}`} className="text-blue-300 hover:text-blue-100">
                        詳細
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* イベントリスト（カード形式） */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-blue-500/30"
            >
              <CardHeader>
                <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 backdrop-blur-sm border border-blue-400/30">
                  {event.category}
                </div>
                <CardTitle className="text-white">{event.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {event.date} {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === "受付中"
                      ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                      : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                  }`}
                >
                  {event.status}
                </div>
                <Button
                  variant="outline"
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
                >
                  <Link href={`/events/${event.id}`}>
                    詳細を見る
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
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
