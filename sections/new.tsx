'use client';
import React, { useState, useEffect } from 'react';

interface DiagramIcon {
  id: string;
  iconSrc: string;
  altText: string;
  positionClasses: string;
  sizeClasses?: string;
}

// Adjusted positions and sizes for the icons based on the diagram structure
// The text labels seen in the image are mostly part of backgroud.svg
const icons: DiagramIcon[] = [
  // Column 1: Icons within the left vertical rounded area of backgroud.svg
  { id: 'icon-1-1', iconSrc: '/svg/1-1.svg', altText: '지인 소개 영역', positionClasses: 'top-[26.1%] left-[6.0%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-1-2', iconSrc: '/svg/1-2.svg', altText: '외부 광고로 인지 영역', positionClasses: 'top-[52.3%] left-[6.0%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-1-3', iconSrc: '/svg/1-3.svg', altText: '후기 검색 영역', positionClasses: 'top-[78.8%] left-[6.0%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },

  // Column 2: Large 'N' icon
  { id: 'icon-2-1', iconSrc: '/svg/2.svg', altText: '네이버 검색 영역', positionClasses: 'top-[52.5%] left-[24.8%]', sizeClasses: 'w-[75px] h-[74px] sm:w-[88px] sm:h-[86px] md:w-[100px] md:h-[98px]' },

  // Column 3: Icons for '플레이스', '파워링크', '블로그'
  { id: 'icon-3-1', iconSrc: '/svg/3-1.svg', altText: '플레이스 영역', positionClasses: 'top-[26.5%] left-[40.6%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-3-2', iconSrc: '/svg/3-2.svg', altText: '파워링크 영역', positionClasses: 'top-[52.5%] left-[40.6%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-3-3', iconSrc: '/svg/3-3.svg', altText: '블로그 영역', positionClasses: 'top-[79.8%] left-[40.6%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },

  // Column 4: Icons for '홈페이지', '브랜드 블로그', '소셜 미디어'
  { id: 'icon-4-1', iconSrc: '/svg/4-1.svg', altText: '홈페이지 영역', positionClasses: 'top-[26.4%] left-[59.6%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-4-2', iconSrc: '/svg/4-2.svg', altText: '브랜드 블로그 영역', positionClasses: 'top-[52.5%] left-[59.6%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-4-3', iconSrc: '/svg/4-3.svg', altText: '소셜 미디어 영역', positionClasses: 'top-[81.3%] left-[59.6%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[66px] md:h-[66px]' },

  // Column 5: Icons for '카페', '유튜브, 틱톡'
  { id: 'icon-5-1', iconSrc: '/svg/5-1.svg', altText: '카페 영역', positionClasses: 'top-[36.0%] left-[77.1%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-5-2', iconSrc: '/svg/5-2.svg', altText: '유튜브, 틱톡 영역', positionClasses: 'top-[72.7%] left-[77.1%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[82px] md:h-[72px]' },

  // Column 6: Icons within the right vertical rounded area of backgroud.svg
  { id: 'icon-6-1', iconSrc: '/svg/6-1.svg', altText: '지인 추천 영역', positionClasses: 'top-[26.0%] left-[94.2%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-6-2', iconSrc: '/svg/6-2.svg', altText: '문의 및 결제 영역', positionClasses: 'top-[53.3%] left-[94.2%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
  { id: 'icon-6-3', iconSrc: '/svg/6-3.svg', altText: '재구매/단골 고객 영역', positionClasses: 'top-[79.4%] left-[94.2%]', sizeClasses: 'w-[50px] h-[48px] sm:w-[58px] sm:h-[56px] md:w-[68px] md:h-[66px]' },
];

/**
 * Renders a section displaying a marketing process diagram.
 * The diagram consists of a background SVG with overlaid icons.
 * Text labels are primarily part of the background SVG.
 */
const NewSection = (): React.JSX.Element => {
  const [glowingIconId, setGlowingIconId] = useState<string | null>(null);

  useEffect(() => {
    const sequence = [
      () => { // Step 1: Random from 1-1, 1-2, 1-3
        const group1 = ['icon-1-1', 'icon-1-2', 'icon-1-3'];
        return group1[Math.floor(Math.random() * group1.length)];
      },
      () => 'icon-2-1', // Step 2: Icon 2-1
      () => { // Step 3: Random from 3-1, 3-2, 3-3
        const group3 = ['icon-3-1', 'icon-3-2', 'icon-3-3'];
        return group3[Math.floor(Math.random() * group3.length)];
      },
      () => { // Step 4: Random from 4-1, 4-2, 4-3
        const group4 = ['icon-4-1', 'icon-4-2', 'icon-4-3'];
        return group4[Math.floor(Math.random() * group4.length)];
      },
      () => { // Step 5: Random from 5-1, 5-2
        const group5 = ['icon-5-1', 'icon-5-2'];
        return group5[Math.floor(Math.random() * group5.length)];
      },
      () => { // Step 6: Random from 6-1, 6-2, 6-3
        const group6 = ['icon-6-1', 'icon-6-2', 'icon-6-3'];
        return group6[Math.floor(Math.random() * group6.length)];
      },
    ];

    let currentIndex = 0;
    const intervalTime = 1500; // Time each icon glows, e.g., 1.5 seconds

    const animateGlow = () => {
      setGlowingIconId(sequence[currentIndex]());
      currentIndex = (currentIndex + 1) % sequence.length;
    };

    animateGlow(); // Initial call
    const intervalId = setInterval(animateGlow, intervalTime);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <section className="w-full bg-[#000000] py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* 
          If a title for the section is desired, it can be uncommented and styled:
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:mb-16 lg:text-5xl">
            마케팅 유입 및 전환 프로세스
          </h2> 
        */}
        <div 
          className="relative mx-auto"
          // Using a common large size for the diagram, adjust as needed
        >
          {/* Background SVG containing the main diagram lines, shapes, and text labels */}
          <img
            src="/svg/0.svg" // Corrected typo from 'background.svg' if user's file is 'backgroud.svg'
            alt="마케팅 프로세스 배경 다이어그램"
            className="block pt-14 h-auto w-full" // 'block' to prevent extra space under img, 'w-full h-auto' for responsiveness
          />

          {/* Overlay icons on top of the background diagram */}
          {icons.map((icon) => (
            <div
              key={icon.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${icon.positionClasses} transition-all duration-500 ease-in-out`}
              style={{ willChange: 'transform' }} // Performance hint for transforms
            >
              <img
                src={icon.iconSrc}
                alt={icon.altText}
                className={`${icon.sizeClasses || 'h-12 w-12'} object-contain transition-all duration-500 ease-in-out ${glowingIconId === icon.id ? '[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.9))] lg:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))]' : '[filter:none]'}`}
                loading="lazy" // Improve initial page load performance
                style={{ willChange: 'filter' }} // Performance hint for filter changes
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
