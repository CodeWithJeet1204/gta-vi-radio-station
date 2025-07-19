// app/fonts.ts
import localFont from 'next/font/local'

export const satoshi = localFont({
  variable: '--font-satoshi',
  display : 'swap',
  src: [
    { path: '../public/fonts/satoshi/Satoshi-Variable.ttf', weight: '100 900', style: 'normal' },
  ],
})
