// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"             // <html class="dark"> 적용
      defaultTheme="dark"         // 시스템 설정 감지
      enableSystem={false}           // 시스템 설정 활성화
    >
      {children}
    </ThemeProvider>
  )
}