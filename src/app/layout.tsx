import React, { ReactNode } from "react";
import { Box } from "@mui/material";
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
        <Header />
        {children}
        <Box
          sx={{
            borderTop: "1px solid #E6E8EC",
          }}
          mt={"150px"}
        >
          <Box
            sx={{
              width: "1124px",
              margin: "auto",
            }}
          >
            <Footer />
          </Box>
          <Box sx={{ borderTop: "1px solid #E6E8EC" }}>
            <Box
              sx={{ width: "1124px", margin: "auto" }}
              pt={"20px"}
              pb={"20px"}
            >
              <Copyright />
            </Box>
          </Box>
        </Box>
      </body>
    </html>
  );
}
