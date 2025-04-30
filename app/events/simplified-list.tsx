import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "@/components/particles-background"

export default function EventsSimplifiedList() {
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
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 relative">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground count={20} color="rgba(59, 130, 246, 0.3)" className="z-0" />
      </div>

      <div className="mb-8 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-white glow-text">Events</h1>
        <p className="text-gray-300 text-lg">LUVO Kyotanabe Labで開催される様々なイベント情報</p>
      </div>

      <div className="border border-blue-500/30 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 relative z-10">
        <div className="divide-y divide-blue-500/30">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-base text-gray-300 whitespace-nowrap">
                  {event.date} {event.time}
                </div>
                <div className="font-medium text-white">{event.title}</div>
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
        <div className="bg-blue-900/30 p-3 text-center border-t border-blue-500/30">
          <Button variant="ghost" asChild size="sm" className="text-white hover:bg-blue-500/20">
            <Link href="/events">もっと見る</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
