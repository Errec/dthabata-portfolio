import type { PropsWithChildren } from "react";

import Toaster from "@/components/atoms/Toaster";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";

const PortfolioLayout = ({ children }: PropsWithChildren) => (
  <div className="geometric-bg min-h-screen bg-background">
    <Header />
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:flex lg:items-start lg:gap-8 lg:px-8">
      <Sidebar />
      <main className="flex-1 pb-24 pt-16 lg:pb-0">{children}</main>
    </div>
    <Footer />
    <Toaster />
  </div>
);

export default PortfolioLayout;
