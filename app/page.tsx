import { HeaderSection } from "@/sections/header-section";
import { HeroGeometric } from "@/sections/hero-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { FeatureSection } from "@/sections/feauture-section";
import { CheckCircle, TrendingUp } from "lucide-react";
import { Globe, Video } from "lucide-react";
import { ProjectSection } from "@/sections/project-section";
import type { CardGrid } from "@/components/ui/card-grid";
import React from "react";
import { createClient } from '@/utils/supabase/server';
import { Footer } from "@/sections/footer-section";

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

async function fetchProjectData(): Promise<CardGrid[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('projects')
    .select('thumbnail, service_name, contents, type')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching project data from Supabase:', error);
    return [
      {
        category: "Error",
        title: "Failed to load projects",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <p>Could not fetch project data: {error.message}</p>,
        type: "app",
      },
    ];
  }

  if (!data) {
    return [];
  }

  return data.map((item: any) => ({
    src: item.thumbnail,
    title: item.service_name,
    category: "Project Category",
    content: <p>{item.contents}</p>,
    type: item.type as 'app' | 'web' | undefined,
  }));
}

export default async function Home() {
  const projectItems = await fetchProjectData();

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
          colSpan: 2,
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
          colSpan: 2
        },
      ]} />
      <ProjectSection items={projectItems} />
      <Footer />
    </div>
  );
}
