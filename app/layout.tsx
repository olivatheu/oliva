import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Oliva | Aplicações Web, Automações & IA",
  description: "Transforme seu negócio com soluções avançadas em Desenvolvimento Web, Automação de Processos e Inteligência Artificial. Inovação e eficiência para resultados reais.",
  metadataBase: new URL("https://olivamatheus.com.br"),
  keywords: ["Desenvolvimento Web", "Automação", "Inteligência Artificial", "IA", "Software", "Tecnologia", "Sites", "Aplicativos", "Oliva"],
  authors: [{ name: "Matheus Oliva" }],
  creator: "Matheus Oliva",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Oliva | Aplicações Web, Automações & IA",
    description: "Soluções em Desenvolvimento Web, Automação e IA.",
    siteName: "Oliva",
    images: [
      {
        url: "/images/logo-oliva-m.webp",
        width: 1200,
        height: 630,
        alt: "Oliva - Tecnologia e Inovação",
      },
    ],
  },
  icons: {
    icon: "/images/bird1-fav.png",
    apple: "/images/bird1-fav.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-background`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
