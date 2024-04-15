import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@/contexts/themeContext";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "@/assets/scss/style.scss";
import { Copyright } from "@/components/footer/Copyright";

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
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
