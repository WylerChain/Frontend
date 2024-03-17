import {
  LANGUAGE_OPTIONS,
  DEFAULT_NS,
  KEY_PREFIX_OPTIONS,
} from "@/i18n/settings";
import { getTranslation } from "@/i18n";
import { AuthProvider } from "@/contexts/authContext";
import { SnackbarProvider } from "@/contexts/snackbarContext";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer/index.presentation";
import { ThemeProvider } from "@/contexts/themeContext";
// import { formaleGrotesque } from "@/fonts";
import { MeContextProvider } from "@/contexts/meContext";

// Multilingual metadata
export async function generateMetadata({
  params: { lng = LANGUAGE_OPTIONS.ENGLISH },
}) {
  const { t } = await getTranslation(lng, DEFAULT_NS, {
    keyPrefix: KEY_PREFIX_OPTIONS.metadata,
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={``}>
        <ThemeProvider>
          <SnackbarProvider>
            <MeContextProvider>
              <AuthProvider>
                <Header />
                {children}
                {/* <Footer /> */}
              </AuthProvider>
            </MeContextProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
