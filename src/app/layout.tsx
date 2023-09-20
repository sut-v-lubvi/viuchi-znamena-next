import Header from "@/widgets/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/store/provider";
import StyledComponentsRegistry from "../../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Znamena",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="container">
            <StyledComponentsRegistry>
              <Header />
              <div className="container_container">
                <div className="container_layout">{children}</div>
              </div>
            </StyledComponentsRegistry>
          </div>
        </Providers>
      </body>
    </html>
  );
}
