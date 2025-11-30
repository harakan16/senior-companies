import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50 rounded-bl-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400 rounded-full blur-[100px] -z-10 opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-800 rounded-full font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              シニア起業の新時代へ
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              あなたの経験 × <span className="gradient-text">AI</span> ＝ 無限大<br />
              <span className="text-2xl md:text-4xl lg:text-4xl block mt-6 text-slate-700 leading-tight">
                その豊かな知見は、<br className="hidden md:block" />テクノロジーで最強の武器になる。
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              人生100年時代。定年後の「第二の人生」ではなく、「最高の挑戦」を。
              GatewayAIは、あなたが培ってきたキャリアと最新AIを掛け合わせ、
              年齢や体力の壁を超えた新しいビジネスの形を実現します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}>
                AIでアイデアを探す
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                詳しく見る
              </Button>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-600 h-5 w-5" />
                <span>専門知識不要</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-600 h-5 w-5" />
                <span>低リスク・低コスト</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-600 h-5 w-5" />
                <span>経験が最大の資産</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Senior using tablet confidently" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="font-bold text-lg">「AIのおかげで、1人で商社時代の経験を活かしたコンサルを始められました」</p>
                <p className="text-sm opacity-80 mt-1">田中 健一さん (68歳) / 元商社マン</p>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-5 rounded-xl shadow-xl hidden md:block max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold">業務効率化</p>
                  <p className="text-slate-800 font-bold text-lg">+85%</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};