import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IdeaGenerator } from './components/IdeaGenerator';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <IdeaGenerator />
        <Features />
        
        {/* Simple CTA Section before footer */}
        <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-6">人生最高の仕事は、これから創れる。</h2>
            <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
              迷っている時間はありません。AIという最強のパートナーと共に、<br/>
              あなたの経験を社会の価値に変えましょう。
            </p>
            <button className="bg-white text-brand-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-slate-100 hover:scale-105 transition-all">
              無料で会員登録する
            </button>
            <p className="mt-4 text-sm opacity-70">クレジットカード登録は不要です</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;