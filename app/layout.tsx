import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mares - Soluções Extraordinárias',
  description: 'Ajudamos empresas a projetar, desenvolver e posicionar seus produtos como soluções formidáveis que inspiram e transformam.',
  keywords: ['design', 'desenvolvimento', 'estratégia digital', 'consultoria', 'inovação'],
  authors: [{ name: 'Mares' }],
  creator: 'Mares',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mares.com',
    title: 'Mares - Soluções Extraordinárias',
    description: 'Ajudamos empresas a projetar, desenvolver e posicionar seus produtos como soluções formidáveis que inspiram e transformam.',
    siteName: 'Mares',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mares - Soluções Extraordinárias',
    description: 'Ajudamos empresas a projetar, desenvolver e posicionar seus produtos como soluções formidáveis que inspiram e transformam.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
