/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}', // 혹시 pages 디렉토리도 사용하신다면 포함
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './sections/**/*.{js,ts,jsx,tsx,mdx}',
      // 다른 경로가 있다면 여기에 추가하세요
    ],
    theme: {
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            // foreground: 'hsl(var(--destructive-foreground))', // globals.css에 destructive-foreground가 특정되지 않은 것으로 가정
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          chart: { // globals.css의 차트 색상 (예시)
            1: 'hsl(var(--chart-1))',
            2: 'hsl(var(--chart-2))',
            3: 'hsl(var(--chart-3))',
            4: 'hsl(var(--chart-4))',
            5: 'hsl(var(--chart-5))',
          },
          sidebar: { // globals.css의 사이드바 색상
            DEFAULT: 'hsl(var(--sidebar))',
            foreground: 'hsl(var(--sidebar-foreground))',
            primary: {
              DEFAULT: 'hsl(var(--sidebar-primary))',
              foreground: 'hsl(var(--sidebar-primary-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--sidebar-accent))',
              foreground: 'hsl(var(--sidebar-accent-foreground))',
            },
            border: 'hsl(var(--sidebar-border))',
            ring: 'hsl(var(--sidebar-ring))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
          xl: 'calc(var(--radius) + 4px)', // globals.css 패턴에 따라 추가
        },
        // 커스텀 폰트를 사용하신다면 여기에 정의하세요
        // fontFamily: {
        //   sans: ['var(--font-sans)', 'sans-serif'],
        //   mono: ['var(--font-mono)', 'monospace'],
        // },
      },
    },
    plugins: [
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/forms'),
      // require('tailwindcss-animate'), // 애니메이션에 이 플러그인을 사용하신다면
    ],
  };