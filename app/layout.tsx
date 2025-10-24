import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Extraordinário - Soluções Digitais Extraordinárias',
  description: 'Ajudamos empresas a projetar, desenvolver e posicionar seus produtos como soluções formidáveis que inspiram e transformam.',
  keywords: ['design', 'desenvolvimento', 'estratégia digital', 'consultoria', 'inovação'],
  authors: [{ name: 'Extraordinário' }],
  creator: 'Extraordinário',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://extraordinario.com',
    title: 'Extraordinário - Soluções Digitais Extraordinárias',
    description: 'Ajudamos empresas a projetar, desenvolver e posicionar seus produtos como soluções formidáveis que inspiram e transformam.',
    siteName: 'Extraordinário',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extraordinário - Soluções Digitais Extraordinárias',
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
