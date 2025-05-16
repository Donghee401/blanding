import { HeaderSection } from "@/sections/header-section";
import { HeroGeometric } from "@/sections/hero-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { FeatureSection } from "@/sections/feauture-section";
import { CheckCircle, TrendingUp, Globe, Video } from "lucide-react";
import { ProjectSection } from "@/sections/project-section";
import type { CardGrid } from "@/components/card-grid";
import React from "react";
import { createClient } from '@/app/utils/supabase/server';
import { Footer } from "@/sections/footer-section";
import { ContactSection } from "@/sections/contact-section";
import { ContactFormData } from "@/components/contact-form";

// 추천서 데이터 타입 정의
interface TestimonialItem {
  name: string;
  category: string;
  text: string;
  avatar: string;
  rating: number;
}

// 통합된 데이터 패칭 함수
async function fetchPageData() {
  const supabase = await createClient();
  
  // 모든 패칭을 병렬로 실행
  const [projectsResult, testimonialsResult] = await Promise.all([
    // 프로젝트 데이터 패칭
    supabase
      .from('projects')
      .select('thumbnail, service_name, contents, type')
      .order('created_at', { ascending: false }),
    
    // 리뷰 데이터 패칭
    supabase
      .from('testimonials')
      .select(`
        contents,
        client,
        clients:client (
          name,
          company,
          logo
        )
      `)
      .order('created_at', { ascending: false })
  ]);
  
  // 프로젝트 데이터 가공
  let projectItems: CardGrid[] = [];
  if (projectsResult.error) {
    console.error('Error fetching project data:', projectsResult.error);
    projectItems = [{
      category: "Error",
      title: "데이터 로드 실패",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: `프로젝트 데이터를 가져오지 못했습니다: ${projectsResult.error.message}`,
      type: "app",
    }];
  } else if (projectsResult.data) {
    projectItems = projectsResult.data.map((item: any) => ({
      src: item.thumbnail,
      title: item.service_name,
      category: "Project Category",
      content: item.contents as string,
      type: item.type as 'app' | 'web' | undefined,
    }));
  }
  

  let testimonials: TestimonialItem[] = [];
  if (testimonialsResult.error) {
    console.error('Error fetching testimonial data:', testimonialsResult.error);
    testimonials = [{
      name: "Error",
      category: "Error",
      text: `리뷰 데이터를 가져오지 못했습니다: ${testimonialsResult.error.message}`,
      avatar: "",
      rating: 5,
    }];
  } else if (testimonialsResult.data) {
    testimonials = testimonialsResult.data.map((item: any) => ({
      name: item.clients?.name || "Unknown",
      category: item.clients?.company || "Unknown",
      text: item.contents,
      avatar: item.clients?.logo || "",
      rating: 5,
    }));
  }
  
  return {
    projectItems,
    testimonials
  };
}

// 서버 액션 정의
export async function submitContactForm(formData: ContactFormData) {
  try {
    const supabase = await createClient();
    
    // DB 구조에 맞는 필드만 포함
    const { error } = await supabase
      .from('clients')
      .insert({
        name: formData.name,
        company: formData.company,
        category: formData.category || null,
        email: formData.email,
        message: formData.message,
        created_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error inserting client data:', error);
      throw new Error(`Failed to submit contact form: ${error.message}`);
    }
    
    return { success: true };
  } catch (error: any) {
    console.error('서버 액션 에러:', error);
    return { success: false, error: error.message };
  }
}

export default async function Home() {
  // 하나의 함수로 모든 데이터 패칭
  const { projectItems, testimonials } = await fetchPageData();

  return (
    <div>
      <HeaderSection />
      <HeroGeometric />
      <TestimonialsSection testimonials={testimonials} />
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
      <ContactSection />
      <Footer />
    </div>
  );
}
