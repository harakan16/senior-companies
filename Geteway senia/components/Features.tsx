import React from 'react';
import { MonitorPlay, Users, TrendingUp, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <MonitorPlay size={40} className="text-white" />,
      title: "シニア向けAIカリキュラム",
      desc: "専門用語を使わず、実践的なツールの使い方を動画で解説。ChatGPTや画像生成AIをビジネスでどう使うか、ゼロから学べます。",
      color: "bg-blue-500"
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "同世代の起業家コミュニティ",
      desc: "同じ志を持つ仲間と交流。孤独になりがちな起業準備期間も、励まし合い、情報交換できる環境があります。",
      color: "bg-emerald-500"
    },
    {
      icon: <TrendingUp size={40} className="text-white" />,
      title: "スモールビジネス特化",
      desc: "巨額の資金調達は不要。元手0円〜10万円で始められる、リスクを最小限に抑えたビジネスモデルのみを推奨しています。",
      color: "bg-purple-500"
    },
    {
      icon: <ShieldCheck size={40} className="text-white" />,
      title: "専門家による伴走サポート",
      desc: "AI技術のサポートだけでなく、法務・税務など、シニア起業特有の悩みも専門家がバックアップします。",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            なぜ、<span className="text-brand-400">GatewayAI</span>なのか？
          </h2>
          <p className="text-slate-400 text-lg">
            ただの学習サイトではありません。私たちは「行動」と「結果」にコミットする、
            シニア起業家のための総合プラットフォームです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-500 hover:bg-slate-750 transition-all duration-300 group">
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};