import { ElegantShape } from "@/components/ui/elegant-shape";
import { AnimatedHeroText } from "@/components/animated-hero-text";

function HeroGeometric({
    badge = "Brand+Landing",
    title1 = "당신의 브랜드를 위한",
    title2 = "오직 하나의 랜딩페이지",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    return (
        <section className="relative w-full flex bg-background">
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <ElegantShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-indigo-500/[0.15]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />

                    <ElegantShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-rose-500/[0.15]"
                        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    />

                    <ElegantShape
                        delay={0.4}
                        width={300}
                        height={80}
                        rotate={-8}
                        gradient="from-violet-500/[0.15]"
                        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    />

                    <ElegantShape
                        delay={0.6}
                        width={200}
                        height={60}
                        rotate={20}
                        gradient="from-amber-500/[0.15]"
                        className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    />

                    <ElegantShape
                        delay={0.7}
                        width={150}
                        height={40}
                        rotate={-25}
                        gradient="from-cyan-500/[0.15]"
                        className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    />
                </div>

                <div className="container max-w-7xl relative z-10 mx-auto px-4 md:px-6">
                    <AnimatedHeroText badge={badge} title1={title1} title2={title2} />
            </div>

            </div>
        </section>
    );
}

export { HeroGeometric }
