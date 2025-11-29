import React from 'react';
import { Rocket } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-2 rounded-lg text-white">
                <Rocket size={20} />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-800">
                Gateway<span className="text-brand-600">AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              シニアの経験とAIの可能性を融合させ、日本を元気にするスモールビジネスを生み出す。
              人生100年時代の新しい働き方を提案します。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-800 mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600">AI起業診断</a></li>
              <li><a href="#" className="hover:text-brand-600">カリキュラム一覧</a></li>
              <li><a href="#" className="hover:text-brand-600">メンター紹介</a></li>
              <li><a href="#" className="hover:text-brand-600">成功事例</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4">サポート</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-brand-600">よくある質問</a></li>
              <li><a href="#" className="hover:text-brand-600">利用規約</a></li>
              <li><a href="#" className="hover:text-brand-600">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2024 GatewayAI Ventures. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with 💙 for Senior Entrepreneurs</p>
        </div>
      </div>
    </footer>
  );
};