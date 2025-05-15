import { HeaderSection } from "@/sections/header-section";
import { HeroGeometric } from "@/sections/hero-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { FeatureSection } from "@/sections/feauture-section";
import { CheckCircle, TrendingUp } from "lucide-react";
import { Globe, Video } from "lucide-react";


export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroGeometric />
      <TestimonialsSection testimonials={[
        {
          name: "이준호",
          role: "CEO",
          text: "제품의 기능만 나열하는 기존 방식에서 벗어나, 브랜드의 철학과 무드를 정확히 담아낸 결과물이 나왔습니다. 론칭 이후 실제로 투자자 미팅 때도 이 랜딩을 가장 먼저 보여줄 정도예요. 단순한 외주라기보단, 내부 팀처럼 함께 고민해준 점이 가장 인상 깊었습니다.",
          avatar: "",
          rating: 5,
        },
        {
          name: "이률",
          role: "CEO",
          text: "브랜드 특유의 고요한 감도와 메시지를 해치지 않으면서도, 직관적인 흐름과 구조를 제안해 주셨어요. 덕분에 고객 문의 전환율도 확연히 늘었고, 내부에서도 '우리가 찾던 감성'이라는 말이 나왔습니다. 본질을 이해하고 표현해줄 수 있는 드문 팀이었습니다.",
          avatar: "",
          rating: 5,
        },
      ]} />
      <FeatureSection items={[
        {
          title: "전문직 맞춤형 랜딩페이지",
          description: "변호사, 의사, 회계사 등 전문직을 위한 신뢰도 높은 맞춤형 랜딩페이지를 제작하여 고객 유치를 극대화하세요.",
          icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
          tags: ["전문직", "고객유치", "신뢰도"],
        },
        {
          title: "매출 증대 커머스 랜딩페이지",
          description: "상품의 매력을 극대화하고 구매 전환율을 높이는 커머스 특화 랜딩페이지로 온라인 비즈니스 성장을 경험하세요.",
          icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
          tags: ["커머스", "매출증대", "전환율최적화"],
          colSpan: 2,
        },
        {
          title: "SaaS 솔루션 소개 랜딩페이지",
          description: "복잡한 SaaS 솔루션의 가치를 명확하게 전달하고 잠재 고객을 실제 사용자로 전환하는 효과적인 랜딩페이지를 구축합니다.",
          icon: <Globe className="w-4 h-4 text-sky-500" />,
          tags: ["SaaS", "솔루션소개", "사용자전환"],
          colSpan: 2,
        },
        {
          title: "신뢰를 주는 병원/의원 랜딩페이지",
          description: "환자들에게 신뢰감을 주는 영상 콘텐츠와 함께 병원/의원의 전문성을 효과적으로 알리는 랜딩페이지를 통해 더 많은 방문을 유도합니다.",
          icon: <Video className="w-4 h-4 text-purple-500" />,
          tags: ["병원", "의원", "환자유치", "전문성"],
        },
      ]} />
    </div>
  );
}
