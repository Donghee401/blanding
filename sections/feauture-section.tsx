import { BentoGrid } from "@/components/ui/bento-grid";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface FeatureSectionProps {
    items?: BentoItem[];
    id?: string;
    badgeText?: string;
    title?: string;
    subtitle?:string;
}

// FeatureSection 컴포넌트 수정
// prop으로 items를 받도록 변경하고, BentoItem prop은 제거 (BentoGrid가 items를 받으므로)
export function FeatureSection({ 
    id = "features",
    title = "전문직 홈페이지부터 글로벌 SaaS 랜딩까지",
    subtitle = "디자인을 넘어, 비즈니스의 본질을 고민한 결과. 고객은 그 가치를 알아봅니다",
    badgeText = "작업 범위",
    items,
}: FeatureSectionProps) {
  return (
    <section className="w-full py-16" id={id}>
        <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground/80">
              {badgeText}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 md:text-5xl/tight">
              {title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-3xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      <BentoGrid items={items || [] } /> {/* props로 받은 items를 BentoGrid에 전달 */}
      </div>
    </section>
  );
}
