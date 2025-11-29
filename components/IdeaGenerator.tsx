import React, { useState } from 'react';
import { Sparkles, Briefcase, Heart, Award, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from './Button';
import { generateBusinessIdeas } from '../services/geminiService';
import { BusinessIdea, GeneratorStatus, UserInput } from '../types';

export const IdeaGenerator: React.FC = () => {
  const [input, setInput] = useState<UserInput>({
    career: '',
    hobby: '',
    strength: ''
  });
  const [status, setStatus] = useState<GeneratorStatus>(GeneratorStatus.IDLE);
  const [ideas, setIdeas] = useState<BusinessIdea[]>([]);

  const handleGenerate = async () => {
    if (!input.career || !input.hobby) return;
    
    setStatus(GeneratorStatus.LOADING);
    try {
      const results = await generateBusinessIdeas(input.career, input.hobby, input.strength);
      setIdeas(results);
      setStatus(GeneratorStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(GeneratorStatus.ERROR);
    }
  };

  return (
    <section id="generator" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase mb-2 block">AI Business Generator</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            あなたの経験 × <span className="text-brand-600">AI</span>が導く答え
          </h2>
          <p className="text-slate-600 text-lg">
            簡単な質問に答えるだけで、AIがあなたの強みを分析し、
            社会に新たな価値を提供するビジネスモデルを提案します。
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Input Form */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Sparkles className="text-gold-500" />
              プロフィールを入力
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                  <Briefcase size={18} className="text-brand-600" />
                  これまでの主な経歴・仕事
                </label>
                <textarea 
                  className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-0 transition-colors bg-white min-h-[100px]"
                  placeholder="例：35年間、自動車メーカーで品質管理を担当。海外工場での指導経験あり。"
                  value={input.career}
                  onChange={(e) => setInput({...input, career: e.target.value})}
                ></textarea>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                  <Heart size={18} className="text-brand-600" />
                  現在の趣味・興味・関心
                </label>
                <input 
                  type="text"
                  className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-0 transition-colors bg-white"
                  placeholder="例：家庭菜園、歴史小説、孫との旅行"
                  value={input.hobby}
                  onChange={(e) => setInput({...input, hobby: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                  <Award size={18} className="text-brand-600" />
                  自分の強み（性格やスキル）
                </label>
                <input 
                  type="text"
                  className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-0 transition-colors bg-white"
                  placeholder="例：粘り強い、説明が上手いと言われる、英語が少し話せる"
                  value={input.strength}
                  onChange={(e) => setInput({...input, strength: e.target.value})}
                />
              </div>

              <Button 
                onClick={handleGenerate} 
                className="w-full py-4 text-lg shadow-xl shadow-brand-200"
                disabled={!input.career || !input.hobby}
                isLoading={status === GeneratorStatus.LOADING}
              >
                AIにアイデアを聞く
              </Button>
              
              <p className="text-xs text-slate-400 text-center">
                ※入力情報はAIによる生成のみに使用されます。
              </p>
            </div>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-7">
            {status === GeneratorStatus.IDLE && (
              <div className="h-full flex flex-col items-center justify-center min-h-[400px] border-4 border-dashed border-slate-200 rounded-3xl p-8 text-center bg-slate-50/50">
                <Lightbulb size={64} className="text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-400">アイデアがここに表示されます</h3>
                <p className="text-slate-400 mt-2">左のフォームに入力して、AIと共に可能性を探りましょう。</p>
              </div>
            )}

            {status === GeneratorStatus.LOADING && (
              <div className="h-full flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
                 <div className="relative w-24 h-24 mb-6">
                   <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
                   <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
                   <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gold-500 animate-pulse" />
                 </div>
                <h3 className="text-2xl font-bold text-brand-900 animate-pulse">AIが分析中...</h3>
                <p className="text-slate-600 mt-2">あなたの経験と市場のニーズをマッチングさせています</p>
              </div>
            )}

            {status === GeneratorStatus.ERROR && (
              <div className="h-full flex flex-col items-center justify-center min-h-[400px] border-4 border-red-100 bg-red-50 rounded-3xl p-8 text-center">
                <p className="text-red-600 font-bold text-lg mb-4">エラーが発生しました。</p>
                <Button onClick={handleGenerate} variant="outline">再試行する</Button>
              </div>
            )}

            {status === GeneratorStatus.SUCCESS && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 px-2">AIが提案するビジネスモデル</h3>
                {ideas.map((idea, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-brand-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-brand-50 text-brand-700 px-3 py-1 rounded-lg text-sm font-bold">
                        Idea #{index + 1}
                      </div>
                      <span className="bg-gold-100 text-gold-700 text-xs font-bold px-2 py-1 rounded">Recommended</span>
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-black text-slate-800 mb-3">{idea.title}</h4>
                    <p className="text-slate-600 mb-4 leading-relaxed">{idea.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">ターゲット</p>
                        <p className="font-bold text-slate-800 text-sm">{idea.targetAudience}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">収益モデル</p>
                        <p className="font-bold text-slate-800 text-sm">{idea.monetization}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-right">
                       <button className="text-brand-600 font-bold text-sm inline-flex items-center hover:underline">
                         このアイデアで詳しく相談 <ArrowRight size={16} className="ml-1" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};