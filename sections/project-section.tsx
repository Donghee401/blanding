import React from "react";
// import { Carousel } from "@/components/ui/apple-cards-carousel"; // Old import
import { ItemGrid } from "@/components/card-grid"; // New import
import type { CardGrid } from "@/components/card-grid";

interface ProjectSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  badgeText?: string;
  items: CardGrid[];
}

export function ProjectSection({ 
  id = "Portfolio",
  title = "홈페이지 그 이상의 고객 접점",
  subtitle = "브랜드의 첫 인상, 서비스의 방향성, 전환을 유도하는 전략적 공간",
  badgeText = "포트폴리오",
  items,
}: ProjectSectionProps) {
return (
  <section className="w-full py-16" id={id}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
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
      <ItemGrid items={items} />
    </div>
    </section>
  );
}

// DummyContent and data will be removed from here and moved/recreated in app/page.tsx
