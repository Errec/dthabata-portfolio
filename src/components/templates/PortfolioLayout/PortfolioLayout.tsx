import type { PropsWithChildren } from "react";

import Toaster from "@/components/atoms/Toaster";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";

const PortfolioLayout = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen">
    <Header />
    <Sidebar />
    <main className="pb-24 pt-16 lg:ml-16 lg:pb-0">{children}</main>
    <Footer />
    <Toaster />
  </div>
);

export default PortfolioLayout;
