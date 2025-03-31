    "use client"

    import {Toaster} from "sonner";
    import {ThemeProvider} from "@/app/darkMode/ThemProvider";

    interface ProvidersProps {
        children: React.ReactNode;
    }

    export const Providers = ({children}: ProvidersProps) => {

        return (
            <div>
                <ThemeProvider>
                <Toaster richColors closeButton position={"top-right"} duration={2000} theme="dark"/>
                    {children}

                </ThemeProvider>
            </div>
        )
    }
