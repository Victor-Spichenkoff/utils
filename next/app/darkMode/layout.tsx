import {ReactNode} from "react";
import {ThemeProvider} from "@/app/darkMode/ThemProvider"


// como se fosse o root, que precisa ser SERVIDOR-SIDE
export default function DarkModeLayout({
                                           children,
                                       }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div>
        {/* <ThemeProvider suppressHydrationWarning>*/}
            {children}
        {/*</ThemeProvider>*/}
        </div>
    )
}

