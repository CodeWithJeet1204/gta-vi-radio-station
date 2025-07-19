import './globals.css'
import { satoshi } from '@/app/fonts'
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="bg-gta-dark text-white font-satoshi antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
