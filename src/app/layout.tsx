import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Professional portfolio showcasing frontend development skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen`}>
        {/* Animated grid background */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        </div>

        {/* Animated blobs */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute -left-4 top-0 h-[500px] w-[500px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute -right-4 bottom-0 h-[500px] w-[500px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute left-1/2 bottom-1/2 h-[500px] w-[500px] bg-gradient-to-br from-pink-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        {/* Stars background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Main content */}
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
