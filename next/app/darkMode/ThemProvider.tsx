"use client"


// ele precisa ser client, esse ficaria separado e marcado como use client
import {ReactNode} from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function ThemeProvider({ children }: { children: ReactNode }) {
    return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
