import React, { ReactNode } from "react";

import { ThemeProvider } from "@/contexts/themeContext";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "@/assets/scss/style.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   dispatch(getMenu()).then(() => {
  //     setLoading(true);
  //   });
  // }, []);

  // if (!loading) return <Loader />;
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <CustomCursor />
          {/* <SmoothScrolling> */}
          <Header />
          {children}
          <Footer />
          {/* </SmoothScrolling> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
