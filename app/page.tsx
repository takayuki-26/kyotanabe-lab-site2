"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronRight,
  ArrowRight,
  Workflow,
  MapPin,
  Clock,
  Info,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Code,
  Database,
  Cpu,
  Network,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"
import SplashScreen from "@/components/splash-screen"
import ScrollAnimation from "@/components/scroll-animation"
import ParticlesBackground from "@/components/particles-background"
import WaveAnimation from "@/components/wave-animation"
import SectionDivider from "@/components/section-divider"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const innovationRef = useRef<HTMLDivElement>(null)

  // パララックス効果のための変換
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const aboutY = useTransform(scrollYProgress, [0.1, 0.4], [50, -50])
  const innovationY = useTransform(scrollYProgress, [0.3, 0.6], [50, -50])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SplashScreen />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              LUVO Kyotanabe Lab
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 ml-auto mr-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <Link href="#access" className="text-sm font-medium hover:text-primary">
              Access
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div>
            <Button asChild className="glow">
              <Link href="#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden dynamic-bg grid-pattern"
        >
          <ParticlesBackground count={100} color="rgba(59, 130, 246, 0.5)" className="z-0" />

          <div className="absolute inset-0 z-0 tech-circuit"></div>

          <motion.div className="container relative z-10 mx-auto px-4 text-center text-white" style={{ y: heroY }}>
            <motion.div
              className="mb-8 floating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
            >
              <div className="inline-block p-2 px-4 bg-blue-600/20 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
                <span className="text-sm font-medium">AI時代の新しい働き方を探求する</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl mb-6 glow-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
            >
              仕事は、してもいい
            </motion.h1>

            <motion.p
              className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.8 }}
            >
              AIの力で非生産的な業務を削減し、あなたの個性が生きるクリエイティブな仕事に時間を使う。
              <span className="inline-block">LUVO Kyotanabe Labは、AIの可能性を探求する場所です。</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.1, duration: 0.8 }}
            >
              <Button size="lg" asChild className="animated-gradient text-white border-none">
                <Link href="#about">
                  詳しく見る
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              >
                <Link href="#contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* 浮遊する要素 */}
            <motion.div
              className="absolute top-1/4 left-[10%] w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.3, duration: 0.8 }}
              style={{ animation: "floating 4s ease-in-out infinite", animationDelay: "0.5s" }}
            ></motion.div>
            <motion.div
              className="absolute top-2/3 right-[15%] w-20 h-20 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              style={{ animation: "floating 6s ease-in-out infinite", animationDelay: "1s" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-1/4 left-[20%] w-16 h-16 bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.7, duration: 0.8 }}
              style={{ animation: "floating 5s ease-in-out infinite", animationDelay: "1.5s" }}
            ></motion.div>
          </motion.div>

          {/* 波形の装飾 */}
          <WaveAnimation className="z-10" />
        </section>

        {/* 新しいセクション区切り */}
        <SectionDivider type="wave" direction="dark-to-light" />

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className="w-full py-12 md:py-24 lg:py-32 tech-light-bg relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <div className="inline-block p-2 px-4 bg-blue-600/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-blue-700">ABOUT US</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 whitespace-nowrap">
                  About
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">LUVO Kyotanabe Labについて</p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollAnimation direction="right" delay={0.2}>
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 whitespace-nowrap">
                    AIの可能性を探求する場所
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    LUVO Kyotanabe Labは、学生を主軸とした開発組織で、AI時代にAIを使いこなすエンジニアを育成します。
                    <span className="inline-block">
                      若いエンジニアたちが"自分の発想を試せる拠点"として、自由な環境を提供しています。
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="animated-gradient text-white border-none">
                      <Link href="#activities">
                        活動内容を見る
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.4}>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  {/* コンセプト画像 */}
                  <div className="absolute inset-0">
                    <img
                      src="/my-photo.png"
                      alt="プログラミングとデジタル技術を表現した画像"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 装飾要素 */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
                    style={{ animation: "floating 4s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
                    style={{ animation: "floating 3s ease-in-out infinite", animationDelay: "1s" }}
                  ></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* 新しいセクション区切り */}
        <SectionDivider type="tech" direction="light-to-dark" />

        {/* Kyoto Innovation Section */}
        <section
          id="innovation"
          ref={innovationRef}
          className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden dynamic-bg grid-pattern"
        >
          <ParticlesBackground count={50} color="rgba(59, 130, 246, 0.3)" className="z-0" />
          <div className="absolute inset-0 z-0 tech-circuit"></div>

          <motion.div className="container relative z-10 mx-auto px-4 text-white" style={{ y: innovationY }}>
            <ScrollAnimation direction="up">
              <div className="max-w-[600px]">
                <div className="inline-block p-2 px-4 bg-blue-600/20 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
                  <span className="text-sm font-medium">INNOVATION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-6 whitespace-nowrap glow-text">
                  京都から広がるイノベーション
                </h2>
                <p className="text-lg mb-6">
                  歴史と先端技術が出会う街で、新しい発想を生み出す。
                  <span className="inline-block">
                    伝統と革新が共存するこの街で、次世代のエンジニアリングを探究する。
                  </span>
                </p>
                <p className="text-lg font-medium mb-8">
                  <span className="inline-block sm:inline">
                    AIの可能性を活かし、人が本来持つ創造力をさらに高める環境を
                  </span>
                  <span className="inline-block sm:inline">共につくりませんか？</span>
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
                >
                  <Link href="#contact">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            {/* 装飾要素 */}
            <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-[30%] w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"></div>
          </motion.div>

          {/* 波形の装飾 */}
          <WaveAnimation color="rgba(255, 255, 255, 0.1)" className="z-10" />
        </section>

        {/* 新しいセクション区切り */}
        <SectionDivider type="cyber" cyberPosition="both" />

        {/* Activities Section */}
        <section id="activities" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 tech-light-bg opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-cyan-50/10"></div>
          <div className="absolute inset-0 grid-pattern-light"></div>
          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <div className="inline-block p-2 px-4 bg-blue-600/10 rounded-full mb-4 shadow-sm">
                  <span className="text-sm font-medium text-blue-700">ACTIVITIES</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 whitespace-nowrap relative inline-block">
                  <span className="relative z-10">活動内容</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/30 -rotate-1 z-0"></span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  LUVO Kyotanabe Labでは、AIの可能性を最大限に引き出すための
                  <span className="inline-block">様々な取り組みを行っています</span>
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-10 lg:grid-cols-2">
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="flex flex-col md:flex-row gap-6 items-start group bg-white/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-all duration-300 shadow-md">
                    <Database className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 whitespace-nowrap group-hover:text-blue-600 transition-colors">
                      RAG・ベクトルDB等の活用実験
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      テキストや情報資源の管理・検索を効率化し、"人が本当に欲しい情報"へ
                      <span className="inline-block">スムーズにアクセスする手法を研究・共有しています。</span>
                    </p>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-blue-100">
                      {/* 活動画像1: RAGシステムの実験風景 */}
                      <div className="absolute inset-0">
                        <img
                          src="/rag-vector-lab.png"
                          alt="RAGシステムの実験風景"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.4}>
                <div className="flex flex-col md:flex-row gap-6 items-start group bg-white/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all duration-300 shadow-md">
                    <Workflow className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 whitespace-nowrap group-hover:text-purple-600 transition-colors">
                      ワークフロー設計の検証
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      タスクやプロセスを自動化し、クリエイティブな労働へ集中できる環境づくりを目指します。
                      <span className="inline-block">実験プロジェクトを通じて、独自のベストプラクティスを模索中。</span>
                    </p>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-purple-100">
                      {/* 活動画像2: ワークフロー設計のホワイトボード */}
                      <div className="absolute inset-0">
                        <img
                          src="/collaborative-workflow-design.png"
                          alt="ワークフロー設計のホワイトボード"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.6}>
                <div className="flex flex-col md:flex-row gap-6 items-start group bg-white/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-all duration-300 shadow-md">
                    <Code className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 whitespace-nowrap group-hover:text-cyan-600 transition-colors">
                      API連携の可能性探究
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      社内外のツールやサービスをシームレスに繋ぐことで、より広範なユーザー体験や
                      <span className="inline-block">アイデア創出の幅を広げる取り組みを行っています。</span>
                    </p>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-cyan-100">
                      {/* 活動画像3: API連携の図解とチーム作業 */}
                      <div className="absolute inset-0">
                        <img
                          src="/collaborative-api-architecture.png"
                          alt="API連携の図解とチーム作業"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.8}>
                <div className="flex flex-col md:flex-row gap-6 items-start group bg-white/60 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-all duration-300 shadow-md">
                    <Cpu className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 whitespace-nowrap group-hover:text-green-600 transition-colors">
                      AI駆動開発の可能性の追求
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      AIを活用した開発プロセスの効率化と、
                      <span className="inline-block">人間の創造性を最大限に引き出す方法を探求しています。</span>
                    </p>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-green-100">
                      {/* 活動画像4: AI駆動開発の実践風景 */}
                      <div className="absolute inset-0">
                        <img
                          src="/AI-Enhanced-Development.png"
                          alt="AI駆動開発の実践風景"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* 新しいセクション区切り */}
        <SectionDivider type="simple" direction="light-to-dark" />

        {/* Community Section */}
        <section id="community" className="w-full py-12 md:py-24 lg:py-32 tech-light-bg relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollAnimation direction="right">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  {/* コミュニティ画像 */}
                  <div className="absolute inset-0">
                    <img
                      src="/tech-team-doshisha.png"
                      alt="同志社大学生を中心としたチームの集合写真"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 装飾要素 */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
                    style={{ animation: "floating 4s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
                    style={{ animation: "floating 3s ease-in-out infinite", animationDelay: "1s" }}
                  ></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.3}>
                <div>
                  <div className="inline-block p-2 px-4 bg-blue-600/10 rounded-full mb-4">
                    <span className="text-sm font-medium text-blue-700">COMMUNITY</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-6 whitespace-nowrap">
                    多様な才能が集まるコミュニティ
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4">
                    LUVO Kyotanabe Labでは、多数の同志社大学生が中心となって活躍しています。
                    <span className="inline-block">
                      様々な学部・学科からの学生が集まり、それぞれの専門知識や視点を活かした取り組みを行っています。
                    </span>
                  </p>
                  <p className="text-muted-foreground text-lg mb-6">
                    技術的なバックグラウンドだけでなく、デザイン、ビジネス、人文科学など多様な分野の知見が交わることで、
                    <span className="inline-block">より創造的で実用的なAI活用の可能性を探求しています。</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="animated-gradient text-white border-none">
                      <Link href="#contact">
                        お問い合わせ
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* 新しいセクション区切り */}
        <SectionDivider type="wave" direction="light-to-dark" />

        {/* Events Section */}
        <section
          id="events"
          className="w-full py-12 md:py-24 lg:py-32 dynamic-bg grid-pattern relative overflow-hidden"
        >
          <ParticlesBackground count={30} color="rgba(59, 130, 246, 0.3)" className="z-0" />
          <div className="absolute inset-0 z-0 tech-circuit"></div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <div className="inline-block p-2 px-4 bg-blue-600/20 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
                  <span className="text-sm font-medium text-white">EVENTS</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 whitespace-nowrap text-white glow-text">
                  Events
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">
                  LUVO Kyotanabe Labで開催される様々なイベント情報
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="max-w-3xl mx-auto">
                <div className="border border-blue-500/30 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5">
                  <div className="max-h-[500px] overflow-y-auto">
                    {/* イベントリスト */}
                    <div className="divide-y divide-blue-500/20">
                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/07/15 13:00～17:00</div>
                            <div className="font-medium text-white">AI×アート展示会</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付中
                          </div>
                          <Link
                            href="/events/ai-art-exhibition"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/06/08 10:00～16:00</div>
                            <div className="font-medium text-white">産学連携ミートアップ</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付中
                          </div>
                          <Link
                            href="/events/industry-meetup"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/05/12 13:00～16:00</div>
                            <div className="font-medium text-white">AI×プログラミング入門講座</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付中
                          </div>
                          <Link
                            href="/events/ai-programming"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/04/18 14:00～16:30</div>
                            <div className="font-medium text-white">AI倫理とガバナンス講座</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付中
                          </div>
                          <Link href="/events/ai-ethics" className="text-blue-400 hover:text-blue-300 hover:underline">
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">
                              2024/03/05 10:00～2024/03/07 18:00
                            </div>
                            <div className="font-medium text-white">学生向けAIハッカソン</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付中
                          </div>
                          <Link
                            href="/events/student-hackathon"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/02/10 13:00～16:00</div>
                            <div className="font-medium text-white">AI×ビジネス活用事例発表会</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付中
                          </div>
                          <Link
                            href="/events/ai-business-cases"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/08/20 14:00～17:00</div>
                            <div className="font-medium text-white">未来テックシンポジウム</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付前
                          </div>
                          <Link
                            href="/events/future-tech-symposium"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/09/15 13:00～16:00</div>
                            <div className="font-medium text-white">AIデータ分析ワークショップ</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付前
                          </div>
                          <Link
                            href="/events/ai-data-analysis"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/10/10 10:00～12:00</div>
                            <div className="font-medium text-white">スマートシティ構想発表会</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付前
                          </div>
                          <Link href="/events/smart-city" className="text-blue-400 hover:text-blue-300 hover:underline">
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/11/05 14:00～17:00</div>
                            <div className="font-medium text-white">次世代ロボティクスセミナー</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付前
                          </div>
                          <Link
                            href="/events/robotics-seminar"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/12/10 13:00～16:00</div>
                            <div className="font-medium text-white">AIと医療の未来シンポジウム</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付前
                          </div>
                          <Link
                            href="/events/ai-medical-symposium"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between p-4 hover:bg-blue-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-300 whitespace-nowrap">2024/12/10 13:00～16:00</div>
                            <div className="font-medium text-white">AIと医療の未来シンポジウム</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                            受付前
                          </div>
                          <Link
                            href="/events/ai-medical-symposium"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            詳細
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* 新しいセクション区切り */}
          <SectionDivider type="tech" direction="dark-to-light" />
        </section>

        {/* Access Section */}
        <section id="access" className="w-full py-12 md:py-24 lg:py-32 tech-light-bg relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <div className="inline-block p-2 px-4 bg-blue-600/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-blue-700">ACCESS</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 whitespace-nowrap">
                  Access
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                  LUVO Kyotanabe Labへのアクセス情報
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollAnimation direction="right">
                <div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-xl">
                    {/* 地図画像 */}
                    <div className="absolute inset-0">
                      <img
                        src="/doshisha-kyotanabe-aerial.png"
                        alt="同志社大学京田辺キャンパスの航空写真"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 装飾要素 */}
                    <div
                      className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
                      style={{ animation: "floating 4s ease-in-out infinite" }}
                    ></div>
                    <div
                      className="absolute bottom-4 left-4 w-8 h-8 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-500/30"
                      style={{ animation: "floating 3s ease-in-out infinite", animationDelay: "1s" }}
                    ></div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 text-blue-700"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/Doshisha+University+Kyotanabe+Campus/@34.8022248,135.7686247,15z/data=!4m6!3m5!1s0x600122e7d0a8e2c7:0x3e4e7bd9f1a9c4f9!8m2!3d34.8022248!4d135.7686247!16s%2Fm%2F0_1c0c9?entry=ttu",
                        "_blank",
                      )
                    }
                  >
                    Google マップで見る
                  </Button>
                </div>
              </ScrollAnimation>

              <div className="space-y-8">
                <ScrollAnimation direction="left" delay={0.2}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">所在地</h3>
                      <p className="text-muted-foreground">
                        〒610-0394 京都府京田辺市多々羅都谷1-3
                        <br />
                        同志社大学 京田辺キャンパス ○○館 ○階
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.4}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-all duration-300">
                      <Network className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                        アクセス方法
                      </h3>
                      <p className="text-muted-foreground">
                        JR学研都市線「同志社前駅」から徒歩10分
                        <br />
                        近鉄京都線「興戸駅」から徒歩15分
                        <br />
                        京都駅からJR学研都市線で約30分
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.6}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Clock className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors">開館時間</h3>
                      <p className="text-muted-foreground">
                        平日: 10:00 - 18:00
                        <br />
                        土曜: 10:00 - 17:00
                        <br />
                        日曜・祝日: 休館
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.8}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-all duration-300">
                      <Info className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">注意事項</h3>
                      <p className="text-muted-foreground">
                        ・見学・利用は事前予約制となっております
                        <br />
                        ・学外の方は受付にて身分証明書をご提示ください
                        <br />
                        ・施設内は撮影可能ですが、他の利用者のプライバシーにご配慮ください
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* 新しいセクション区切り */}
        <SectionDivider type="wave" direction="light-to-dark" />

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 dynamic-bg grid-pattern relative overflow-hidden"
        >
          <ParticlesBackground count={40} color="rgba(59, 130, 246, 0.3)" className="z-0" />
          <div className="absolute inset-0 z-0 tech-circuit"></div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <div className="inline-block p-2 px-4 bg-blue-600/20 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30">
                  <span className="text-sm font-medium text-white">CONTACT</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 whitespace-nowrap text-white glow-text">
                  Contact
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 text-lg">お問い合わせ・ご質問はこちらから</p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollAnimation direction="right">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-2xl font-bold mb-6 text-white">お問い合わせ</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          お名前
                        </label>
                        <Input
                          id="name"
                          placeholder="山田 太郎"
                          className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="affiliation" className="text-sm font-medium text-gray-300">
                          所属
                        </label>
                        <Input
                          id="affiliation"
                          placeholder="会社名・学校名など"
                          className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        メールアドレス
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        件名
                      </label>
                      <Input
                        id="subject"
                        placeholder="お問い合わせの件名"
                        className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        お問い合わせ内容
                      </label>
                      <Textarea
                        id="message"
                        placeholder="お問い合わせ内容をご記入ください"
                        rows={6}
                        className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="pt-2">
                      <Button className="w-full animated-gradient text-white border-none" size="lg">
                        送信する
                      </Button>
                    </div>
                  </form>
                </div>
              </ScrollAnimation>

              <div className="space-y-8">
                <ScrollAnimation direction="left" delay={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-white">連絡先情報</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <p className="text-gray-300">info@luvo-kyotanabe-lab.jp</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 text-blue-400"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <p className="text-gray-300">0774-XX-XXXX（平日10:00-18:00）</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.5}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                    <h3 className="text-xl font-bold mb-4 text-white">SNS</h3>
                    <div className="flex gap-4">
                      <motion.a
                        href="https://twitter.com/luvokyotanabelab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="h-6 w-6 text-blue-400" />
                      </motion.a>
                      <motion.a
                        href="https://facebook.com/luvokyotanabelab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Facebook className="h-6 w-6 text-blue-400" />
                      </motion.a>
                      <motion.a
                        href="https://instagram.com/luvokyotanabelab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="h-6 w-6 text-blue-400" />
                      </motion.a>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.7}>
                  <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                    {/* お問い合わせ画像 */}
                    <div className="absolute inset-0">
                      <img
                        src="/glass-tech-hub.png"
                        alt="LUVO Kyotanabe Labの外観"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 装飾要素 */}
                    <div
                      className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
                      style={{ animation: "floating 3s ease-in-out infinite" }}
                    ></div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          {/* 装飾要素 */}
          <SectionDivider type="cyber" cyberPosition="top" className="absolute top-0 left-0 z-10" />
        </section>
      </main>
      <footer className="w-full border-t py-12 dynamic-bg grid-pattern">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">LUVO Kyotanabe Lab</h3>
              <p className="text-sm text-gray-300 mb-4">AIの可能性を探求し、人間の創造性を最大限に引き出す場所</p>
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} LUVO Kyotanabe Lab All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">サイトマップ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#access" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Access
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">関連リンク</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://luvo.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    株式会社LUVO
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">ポリシー</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500/30 text-center">
            <p className="text-xs text-gray-400">
              LUVO Kyotanabe Labは、先進技術領域に強みをもつ
              <a
                href="https://luvo.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                株式会社LUVO
              </a>
              との協力のもと運営されています。
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
