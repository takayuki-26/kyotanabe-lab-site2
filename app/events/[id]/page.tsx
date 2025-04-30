"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import EventDetailLayout from "@/components/event-detail-layout"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"

// イベントデータ（実際の実装ではデータベースやAPIから取得）
const events = {
  "ai-workshop": {
    title: "AI活用ワークショップ",
    date: "2023年12月15日",
    time: "13:00 - 17:00",
    location: "LUVO Kyotanabe Lab セミナールーム",
    description:
      "AIツールを活用した業務効率化について学ぶワークショップです。ChatGPT、Midjourney、AutoGPTなどの最新AIツールの活用方法を実践形式で学びます。初心者から参加可能で、ビジネスシーンですぐに活用できるスキルを身につけることができます。",
    agenda: [
      "13:00 - 13:30 オープニング・AI技術の最新動向",
      "13:30 - 14:30 ChatGPTを活用した業務効率化",
      "14:30 - 14:45 休憩",
      "14:45 - 15:45 画像生成AIの活用方法",
      "15:45 - 16:45 自動化ツールとの連携",
      "16:45 - 17:00 Q&A・クロージング",
    ],
    speaker: "山田 太郎（LUVO AI研究開発部門 リーダー）",
    capacity: "30名（先着順）",
    fee: "一般: 5,000円、学生: 2,000円",
    requirements: "ノートPCをご持参ください。事前準備は不要です。",
    category: "ワークショップ",
  },
  "rag-seminar": {
    title: "RAGシステム構築セミナー",
    date: "2024年1月20日",
    time: "14:00 - 17:30",
    location: "LUVO Kyotanabe Lab セミナールーム",
    description:
      "Retrieval Augmented Generation（RAG）の基礎から応用まで学べるセミナーです。大規模言語モデルと組み合わせた情報検索・生成システムの構築方法を解説します。実際のコードを用いた実践的な内容で、参加者は自社のドキュメントやナレッジベースを活用したRAGシステムの構築方法を学ぶことができます。",
    agenda: [
      "14:00 - 14:30 RAGの基本概念と活用事例",
      "14:30 - 15:30 ベクトルデータベースの選定と構築",
      "15:30 - 15:45 休憩",
      "15:45 - 16:45 LLMとの連携実装",
      "16:45 - 17:15 パフォーマンス最適化とプロンプトエンジニアリング",
      "17:15 - 17:30 Q&A・クロージング",
    ],
    speaker: "佐藤 花子（LUVO AI研究員）",
    capacity: "25名（先着順）",
    fee: "一般: 8,000円、学生: 3,000円",
    requirements: "Python基礎知識、ノートPC必須",
    category: "セミナー",
  },
  "ai-business-cases": {
    title: "AI×ビジネス活用事例発表会",
    date: "2024年2月10日",
    time: "13:00 - 16:00",
    location: "LUVO Kyotanabe Lab 多目的ホール",
    description:
      "企業におけるAI活用の最新事例を紹介するイベントです。様々な業界でAIをどのように活用し、どのような成果を上げているのかを実例を交えて紹介します。ビジネスプロセス改善のヒントが得られるだけでなく、参加企業同士の交流の場としても活用いただけます。",
    agenda: [
      "13:00 - 13:15 オープニング",
      "13:15 - 14:00 製造業におけるAI活用事例（株式会社A社）",
      "14:00 - 14:45 金融業におけるAI活用事例（B銀行）",
      "14:45 - 15:00 休憩",
      "15:00 - 15:45 小売業におけるAI活用事例（C社）",
      "15:45 - 16:00 パネルディスカッション・Q&A",
    ],
    speakers: ["田中 一郎（株式会社A社 CTO）", "鈴木 次郎（B銀行 DX推進部長）", "伊藤 三郎（C社 マーケティング部長）"],
    capacity: "50名",
    fee: "5,000円（軽食・飲み物付き）",
    requirements: "特になし",
    category: "発表会",
  },
  "student-hackathon": {
    title: "学生向けAIハッカソン",
    date: "2024年3月5日～2024年3月7日",
    time: "10:00 - 18:00（3日間）",
    location: "LUVO Kyotanabe Lab イノベーションスペース",
    description:
      "3日間で社会課題をAIで解決するプロダクトを開発するハッカソンです。学生を対象とし、AIを活用した革新的なソリューションの開発に挑戦します。経験豊富なメンターがサポートするため、AI開発初心者でも安心して参加できます。優秀なプロジェクトには賞品も用意されています。",
    agenda: [
      "【1日目】",
      "10:00 - 10:30 オープニング・ルール説明",
      "10:30 - 12:00 チーム形成・アイデアソン",
      "12:00 - 13:00 ランチ（提供あり）",
      "13:00 - 18:00 開発時間",
      "【2日目】",
      "10:00 - 12:00 中間発表・フィードバック",
      "12:00 - 13:00 ランチ（提供あり）",
      "13:00 - 18:00 開発時間",
      "【3日目】",
      "10:00 - 15:00 開発時間",
      "15:00 - 17:00 最終プレゼンテーション",
      "17:00 - 18:00 審査・表彰式・クロージング",
    ],
    speakers: [
      "高橋 誠（LUVO AI研究開発部門）",
      "中村 智子（同志社大学 情報学部 准教授）",
      "吉田 健太（テックカンパニーX社 エンジニア）",
    ],
    capacity: "30名（チーム参加も可）",
    fee: "無料（学生証必須）",
    requirements: "ノートPC必須、プログラミング経験があると望ましい（Python/JavaScript等）",
    category: "ハッカソン",
    prizes: ["最優秀賞：10万円分の開発支援金", "技術賞：最新AIデバイス", "アイデア賞：クラウドクレジット5万円分"],
  },
  "ai-ethics": {
    title: "AI倫理とガバナンス講座",
    date: "2024年4月18日",
    time: "14:00 - 16:30",
    location: "LUVO Kyotanabe Lab セミナールーム",
    description:
      "AI技術の急速な発展に伴い重要性を増しているAI倫理とガバナンスについて学ぶ講座です。企業や組織がAIを責任を持って活用するための枠組みや、考慮すべき倫理的課題について解説します。実務者向けの内容で、AIプロジェクトを推進する立場の方に特におすすめです。",
    agenda: [
      "14:00 - 14:30 AI倫理の基本概念と重要性",
      "14:30 - 15:15 AIガバナンスの枠組みと実装方法",
      "15:15 - 15:30 休憩",
      "15:30 - 16:15 ケーススタディ：AI倫理的課題への対応",
      "16:15 - 16:30 Q&A・クロージング",
    ],
    speaker: "大山 恵子（AI倫理研究所 代表）",
    capacity: "40名",
    fee: "一般: 6,000円、学生: 2,500円",
    requirements: "特になし（AI基礎知識があると望ましい）",
    category: "講座",
  },
  "ai-programming": {
    title: "AI×プログラミング入門講座",
    date: "2024年5月12日",
    time: "13:00 - 16:00",
    location: "LUVO Kyotanabe Lab コンピュータルーム",
    description:
      "プログラミング初心者を対象としたAI活用講座です。基本的なプログラミングの概念からスタートし、AIライブラリやAPIの利用方法まで学びます。実際にコードを書きながら、AIを活用した簡単なアプリケーションを作成する実践的な内容です。",
    agenda: [
      "13:00 - 13:30 プログラミング基礎とAI概論",
      "13:30 - 14:30 Python基礎とAIライブラリの紹介",
      "14:30 - 14:45 休憩",
      "14:45 - 15:45 AIモデルの利用と簡単なアプリケーション開発",
      "15:45 - 16:00 Q&A・今後の学習リソース紹介",
    ],
    speaker: "松本 直樹（LUVO エンジニア）",
    capacity: "20名（少人数制）",
    fee: "一般: 5,000円、学生: 2,000円",
    requirements: "ノートPC必須（環境構築手順は事前に案内します）",
    category: "講座",
  },
  "industry-meetup": {
    title: "産学連携ミートアップ",
    date: "2024年6月8日",
    time: "10:00 - 16:00",
    location: "LUVO Kyotanabe Lab 多目的ホール",
    description:
      "企業と学生が交流し、AI活用のアイデアを共有するミートアップイベントです。企業からの課題提示、学生からの提案、グループディスカッションなどを通じて、産学連携の可能性を探ります。ネットワーキングの機会も豊富で、インターンシップや共同研究のきっかけにもなります。",
    agenda: [
      "10:00 - 10:30 オープニング・趣旨説明",
      "10:30 - 11:30 企業プレゼンテーション（各社5分）",
      "11:30 - 12:30 学生ポスターセッション",
      "12:30 - 13:30 ランチ交流会（軽食提供）",
      "13:30 - 15:00 テーマ別グループディスカッション",
      "15:00 - 16:00 成果発表・ネットワーキング",
    ],
    speakers: [
      "参加企業：株式会社A社、B銀行、C社、D社、E社（計10社予定）",
      "ファシリテーター：川島 正人（LUVO 産学連携推進部）",
    ],
    capacity: "企業：10社、学生：50名",
    fee: "企業：10,000円、学生：無料（学生証必須）",
    requirements: "企業：事前に課題・テーマの提出が必要、学生：特になし",
    category: "ミートアップ",
  },
  "ai-art-exhibition": {
    title: "AI×アート展示会",
    date: "2024年7月15日",
    time: "13:00 - 17:00",
    location: "LUVO Kyotanabe Lab ギャラリースペース",
    description:
      "AIを活用したアート作品の展示会です。テクノロジーと芸術の融合をテーマに、AIを用いて制作された様々な作品を展示します。絵画、音楽、インタラクティブアートなど多様な表現方法を通じて、AIの創造性と可能性を体験できます。アーティストによるトークセッションも予定しています。",
    agenda: [
      "13:00 - 13:30 オープニングセレモニー",
      "13:30 - 15:00 自由鑑賞",
      "15:00 - 16:00 アーティストトークセッション「AIと創造性の未来」",
      "16:00 - 17:00 自由鑑賞・交流会",
    ],
    speakers: [
      "黒田 美咲（デジタルアーティスト）",
      "ジョン・スミス（AIアート研究者）",
      "西川 隆（音楽プロデューサー）",
    ],
    exhibitors: [
      "山本 彩（「AIが見た夢」シリーズ）",
      "テクノアートコレクティブ（インタラクティブAIインスタレーション）",
      "同志社大学メディアアート研究会（学生作品展示）",
    ],
    capacity: "入場自由（最大100名程度）",
    fee: "無料",
    requirements: "特になし",
    category: "展示会",
  },
  "future-tech-symposium": {
    title: "未来テックシンポジウム",
    date: "2024年8月20日",
    time: "14:00 - 17:00",
    location: "LUVO Kyotanabe Lab メインホール",
    description:
      "未来技術に関する最新トレンドを紹介するシンポジウムです。AI、量子コンピュータ、スマートシティ、宇宙開発など多岐にわたる技術領域の専門家が講演します。",
    agenda: [
      "14:00 - 14:10 開会の挨拶",
      "14:10 - 14:40 次世代AI技術（株式会社テックブレイン CEO）",
      "14:40 - 15:10 量子コンピュータと未来社会（大学教授）",
      "15:10 - 15:20 休憩",
      "15:20 - 15:50 スマートシティの実装と課題（都市開発研究所）",
      "15:50 - 16:20 民間宇宙開発の現状と展望（民間宇宙企業 CTO）",
      "16:20 - 17:00 パネルディスカッション・質疑応答",
    ],
    speakers: [
      "佐々木 智也（株式会社テックブレイン CEO）",
      "渡辺 美咲（京都未来大学 教授）",
      "山口 英二（都市開発研究所）",
      "アンナ・リー（民間宇宙企業 CTO）",
    ],
    capacity: "80名（先着順）",
    fee: "一般: 6,000円、学生: 3,000円",
    requirements: "特になし",
    category: "シンポジウム",
  },
  "ai-medical-symposium": {
    title: "AIと医療の未来シンポジウム",
    date: "2024年12月10日",
    time: "13:00 - 16:00",
    location: "LUVO Kyotanabe Lab 多目的ホール",
    description:
      "医療分野におけるAI活用の最前線と未来の可能性について議論するシンポジウムです。医療診断、治療計画、医薬品開発など、様々な分野でのAI活用事例と課題、そして将来の展望について、第一線の研究者と医療従事者が講演とパネルディスカッションを行います。",
    agenda: [
      "13:00 - 13:15 オープニング",
      "13:15 - 14:00 基調講演「AIによる医療診断の進化」",
      "14:00 - 14:45 事例紹介「AI創薬の最前線」",
      "14:45 - 15:00 休憩",
      "15:00 - 15:45 パネルディスカッション「医療AIの倫理と課題」",
      "15:45 - 16:00 Q&A・クロージング",
    ],
    speakers: [
      "佐藤 健太（医療AI研究所 所長）",
      "田中 美咲（大学病院 AI診断部門 責任者）",
      "鈴木 一郎（製薬会社 研究開発部門）",
    ],
    capacity: "50名",
    fee: "一般: 5,000円、学生: 2,000円、医療従事者: 3,000円",
    requirements: "特になし",
    category: "シンポジウム",
  },
  "robotics-seminar": {
    title: "次世代ロボティクスセミナー",
    date: "2024年11月15日",
    time: "14:00 - 17:00",
    location: "LUVO Kyotanabe Lab セミナールーム",
    description:
      "次世代ロボティクスの最��動向と応用事例について学ぶセミナーです。AI、IoT、ビッグデータなどの技術を活用したロボット開発の現状と未来について、研究者とエンジニアが講演とデモンストレーションを行います。",
    agenda: [
      "14:00 - 14:15 オープニング",
      "14:15 - 15:00 基調講演「AIとロボティクスの融合」",
      "15:00 - 15:45 事例紹介「ロボットによる自動化の最前線」",
      "15:45 - 16:00 休憩",
      "16:00 - 16:45 パネルディスカッション「ロボティクスの倫理と課題」",
      "16:45 - 17:00 Q&A・クロージング",
    ],
    speakers: [
      "山田 太郎（ロボティクス研究所 所長）",
      "中村 美咲（大学 ロボット工学部門 責任者）",
      "加藤 一郎（ロボット開発会社 研究開発部門）",
    ],
    capacity: "40名",
    fee: "一般: 7,000円、学生: 3,000円、企業: 12,000円",
    requirements: "特になし",
    category: "セミナー",
  },
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events[params.id as keyof typeof events]

  if (!event) {
    notFound()
  }

  return (
    <EventDetailLayout>
      <div className="mb-8">
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-500/20 text-blue-300 backdrop-blur-sm border border-blue-400/30">
          {event.category}
        </div>
        <h1 className="text-4xl font-bold mb-2 text-white glow-text">{event.title}</h1>
        <p className="text-xl text-gray-300">
          {event.date} {event.time}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-[300px] rounded-xl overflow-hidden bg-blue-900/20 backdrop-blur-sm border border-blue-500/30">
            {/* イベント画像 */}
            {params.id === "ai-medical-symposium" ? (
              // AIと医療の未来シンポジウムの画像
              <div className="absolute inset-0">
                <img
                  src="/ai-medical-symposium.png"
                  alt="AIと医療の未来シンポジウム"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : params.id === "robotics-seminar" ? (
              // 次世代ロボティクスセミナーの画像
              <div className="absolute inset-0">
                <img
                  src="/robotics-seminar.png"
                  alt="次世代ロボティクスセミナー"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              // その他のイベントには関連する画像を表示
              <div className="absolute inset-0">
                {params.id === "ai-workshop" && (
                  <img
                    src="/ai-workshop-classroom.png"
                    alt="AI活用ワークショップ"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "rag-seminar" && (
                  <img
                    src="/rag-seminar-discussion.png"
                    alt="RAGシステム構築セミナー"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "ai-business-cases" && (
                  <img
                    src="/ai-case-study-presentation.png"
                    alt="AI×ビジネス活用事例発表会"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "student-hackathon" && (
                  <img
                    src="/ai-hackathon-collaboration.png"
                    alt="学生向けAIハッカソン"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "ai-ethics" && (
                  <img
                    src="/ai-ethics-lecture.png"
                    alt="AI倫理とガバナンス講座"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "ai-programming" && (
                  <img
                    src="/ai-coding-classroom.png"
                    alt="AI×プログラミング入門講座"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "industry-meetup" && (
                  <img
                    src="/industry-academia-connect.png"
                    alt="産学連携ミートアップ"
                    className="w-full h-full object-cover"
                  />
                )}
                {params.id === "ai-art-exhibition" && (
                  <img src="/digital-canvas-gallery.png" alt="AI×アート展示会" className="w-full h-full object-cover" />
                )}
                {params.id === "future-tech-symposium" && (
                  <img
                    src="/placeholder.svg?height=300&width=800&query=futuristic technology symposium with speakers and audience in a high-tech venue"
                    alt="未来テックシンポジウム"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}

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

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4 text-white">イベント概要</h2>
            <p className="text-gray-300 whitespace-pre-line">{event.description}</p>
          </div>

          {event.agenda && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">プログラム</h2>
              <ul className="space-y-2">
                {event.agenda.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.speaker && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">講師</h2>
              <p className="text-gray-300">{event.speaker}</p>
            </div>
          )}

          {event.speakers && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">登壇者</h2>
              <ul className="space-y-2">
                {event.speakers.map((speaker, index) => (
                  <li key={index} className="text-gray-300">
                    {speaker}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.exhibitors && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">出展者</h2>
              <ul className="space-y-2">
                {event.exhibitors.map((exhibitor, index) => (
                  <li key={index} className="text-gray-300">
                    {exhibitor}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.prizes && (
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4 text-white">賞</h2>
              <ul className="space-y-2">
                {event.prizes.map((prize, index) => (
                  <li key={index} className="text-gray-300">
                    {prize}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
            <h2 className="text-xl font-bold mb-4 text-white">イベント詳細</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-blue-300">日時</dt>
                <dd className="text-gray-300">
                  {event.date} {event.time}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-blue-300">場所</dt>
                <dd className="text-gray-300">{event.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-blue-300">定員</dt>
                <dd className="text-gray-300">{event.capacity}</dd>
              </div>
              <div>
                <dt className="font-medium text-blue-300">参加費</dt>
                <dd className="text-gray-300">{event.fee}</dd>
              </div>
              {event.requirements && (
                <div>
                  <dt className="font-medium text-blue-300">参加条件</dt>
                  <dd className="text-gray-300">{event.requirements}</dd>
                </div>
              )}
            </dl>
          </div>

          <ApplicationForm eventTitle={event.title} />

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
            <p className="text-sm text-gray-300">
              ※ お申し込み後、確認メールをお送りします。イベント前日までに詳細な案内をお送りします。
            </p>
          </div>
        </div>
      </div>
    </EventDetailLayout>
  )
}

function ApplicationForm({ eventTitle }: { eventTitle: string }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    university: "",
    department: "",
    year: "",
    reason: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 実際の実装ではここでAPIエンドポイントにデータを送信します
    // 例: await fetch('/api/event-registration', { method: 'POST', body: JSON.stringify(formState) })

    // 送信成功をシミュレート
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 text-center">
        <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">お申し込みありがとうございます</h3>
        <p className="text-gray-300 mb-4">
          「{eventTitle}」への参加申し込みを受け付けました。
          <br />
          確認メールを送信しましたのでご確認ください。
        </p>
        <Button
          variant="outline"
          className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          onClick={() => setIsSubmitted(false)}
        >
          別の情報で再申し込み
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
      <h2 className="text-xl font-bold mb-4 text-white">参加申し込み</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            氏名 <span className="text-red-400">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="山田 太郎"
            required
            className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            メールアドレス <span className="text-red-400">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
            className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="university" className="text-sm font-medium text-gray-300">
            大学名 <span className="text-red-400">*</span>
          </label>
          <Input
            id="university"
            name="university"
            value={formState.university}
            onChange={handleChange}
            placeholder="同志社大学"
            required
            className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="department" className="text-sm font-medium text-gray-300">
              学部・学科
            </label>
            <Input
              id="department"
              name="department"
              value={formState.department}
              onChange={handleChange}
              placeholder="情報学部"
              className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="year" className="text-sm font-medium text-gray-300">
              学年
            </label>
            <Input
              id="year"
              name="year"
              value={formState.year}
              onChange={handleChange}
              placeholder="3年"
              className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium text-gray-300">
            参加理由・意気込み
          </label>
          <Textarea
            id="reason"
            name="reason"
            value={formState.reason}
            onChange={handleChange}
            placeholder="参加理由や意気込みをご記入ください"
            rows={4}
            className="bg-white/10 border-blue-500/30 text-white placeholder:text-gray-400"
          />
        </div>

        <Button
          type="submit"
          className="w-full animated-gradient text-white border-none glow"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              送信中...
            </>
          ) : (
            "参加を申し込む"
          )}
        </Button>
      </form>
    </div>
  )
}
