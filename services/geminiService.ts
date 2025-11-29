import { GoogleGenAI, Type } from "@google/genai";
import { BusinessIdea } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const BENEFITS_LIST = `
1. 現行問題点の解決
2. 既存商品の性能の進化
3. 新しい便益の提供
4. 自動化
5. 簡単化
6. 効率化
7. より良いデザイン
8. 速い
9. 小さい
10. 軽い
11. 安全
12. ECO
13. より良い五感の刺激
14. ファンタジー 
15. ラクチン
16. 快適
17. 保存・長持ち
18. 自然に近い
19. 便利 
20. おトク（安い）
21. 選択肢が多い
22. カスタマイズ
23. 新しい体験
24. 本物に近い
25. 健康に良い
26. 老化を防ぐ
27. 美しくなれる
28. 異性にもてる
29. 暇つぶし
30. 連帯感
31. 向上心の刺激
32. 競争心の刺激
33. 失敗を未然に防ぐ
34. 家族的な繋がり
35. やすらぎ
36. 興奮・高揚
37. 郷愁
38. 共感
39. 自己顕示欲
40. 遊び心
41. 楽しい
42. 探せる
43. 遠隔操作
44. 社会的地位
45. 個性
46. 称賛される
47. 成功体験
48. 存在感
49. 優位性
50. 誇示
`;

const OSBORNE_LIST = `
1. 転用 (Put to other uses)
2. 応用 (Adapt)
3. 変更 (Modify)
4. 拡大 (Magnify)
5. 縮小 (Minify)
6. 代用 (Substitute)
7. 置換 (Rearrange)
8. 逆転 (Reverse)
9. 結合 (Combine)
10. 排除 (Eliminate)
`;

export const generateBusinessIdeas = async (
  career: string,
  hobby: string,
  strength: string
): Promise<BusinessIdea[]> => {
  try {
    const prompt = `
      あなたはシニア起業支援の専門家であり、論理的なビジネスコンサルタントです。
      以下の「ユーザー情報」をもとに、指定されたフレームワークを用いて、
      **ユーザーの強みを活かした、具体的で実現可能性の高いスモールビジネスのアイデア**を3つ提案してください。

      【ユーザー情報】
      - 過去の経歴: ${career}
      - 現在の趣味・関心: ${hobby}
      - 自分の強み: ${strength}

      【重要制約事項】
      **生成するビジネスアイデア自体には、AIや最新デジタル技術を「商品・サービスの核」として組み合わせないでください。**
      ユーザー（シニア層）が自身の経験や身体性を活かして提供できる、地に足のついたサービスや商品を考えてください。

      【思考プロセス（内部実行）】
      1. まず、ユーザーの情報から、このユーザーが世の中に最も提供できる価値を、以下の「50のベネフィットリスト」から3つ選定してください。
      ${BENEFITS_LIST}

      2. 次に、選定したそれぞれのベネフィットに対し、以下の「オズボーンのチェックリスト」の発想手法を適用し、ビジネスモデルとして具体化・洗練させてください。
      ${OSBORNE_LIST}

      3. 突飛なものではなく、シニアが無理なく始められ、かつ市場ニーズがある堅実なビジネスモデルとして出力してください。

      【出力形式】
      思考プロセスの内容は出力せず、最終的な3つのアイデアのみを以下のJSONスキーマに従って出力してください。
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "ビジネスアイデアの魅力的なタイトル" },
              description: { type: Type.STRING, description: "ターゲット・ベネフィット・オズボーン手法を用いた具体的な内容" },
              targetAudience: { type: Type.STRING, description: "このサービスを求める具体的なターゲット層" },
              monetization: { type: Type.STRING, description: "現実的な収益化の仕組み" }
            },
            required: ["title", "description", "targetAudience", "monetization"],
          },
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) return [];
    
    return JSON.parse(jsonText) as BusinessIdea[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("アイデアの生成に失敗しました。もう一度お試しください。");
  }
};