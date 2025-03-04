    "use client"

    import {Toaster} from "sonner";

    interface ProvidersProps {
        children: React.ReactNode;
    }

    export const Providers = ({children}: ProvidersProps) => {

        return (
            <div>
                <Toaster richColors closeButton position={"top-right"} duration={2000} theme="dark"/>
                {children}
            </div>
        )
    }