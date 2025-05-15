import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Star, UserCircle } from "lucide-react";
import { GridBackground } from "@/components/ui/grid-background";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title = "브랜드의 첫 인상을 함께 완성했습니다",
  subtitle = "디자인을 넘어, 비즈니스의 본질을 고민한 결과. 고객은 그 가치를 알아봅니다",
  badgeText = "고객 후기",
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <GridBackground className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {testimonials.map((t, i) => {
            const stars = typeof t.rating === "number" ? t.rating : 0;
            return (
              <Card key={i} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: stars }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${
                            idx < stars
                              ? "fill-primary text-primary"
                              : "text-muted fill-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{t.text}"</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex items-center gap-4">
                    {t.avatar ? ( // avatar URL 문자열이 존재하고 비어있지 않다면 이미지 표시
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="rounded-xl w-8 h-8 object-cover"
                      />
                    ) : ( // avatar 값이 비어있거나 null, undefined 등 falsy 값이면 아이콘 표시
                      <UserCircle className="rounded-xl w-8 h-8 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      </GridBackground>
    </section>
  );
}
