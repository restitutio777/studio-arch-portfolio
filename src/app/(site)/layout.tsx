import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import LenisProvider from "@/providers/LenisProvider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <CustomCursor />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </LenisProvider>
  );
}
