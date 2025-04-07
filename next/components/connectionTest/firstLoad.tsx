import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { getStoreLastUsedTime, storeLastUsedTime } from "./storage"

interface ConnectionTestProps {
    //se quiser modificar states no root para bloquear acessos
    setNavigationLock: (n: boolean) => void
}

let attempts = 0
/*
* setNavigationLock → true _> não navega para outras áreas
* */
export const ConnectionTest = ({setNavigationLock}: ConnectionTestProps) => {
    const router = useRouter()
    const [errorToastId, setErrorToastId] = useState<string | number | null>(null)

    const handleCancel = () => {
        setNavigationLock(true)
        toast.dismiss(errorToastId ?? 1)
        toast.warning("Cancelled")
    }
    const actionArea = (
        <div className={"flex gap-x-2 min-w-fit"}>
            <Button
                onClick={() => router.push("/local/bot")}
                className={"text-sm"}
            >Play with Bot?</Button>
            <Button
                onClick={handleCancel}
                className={"text-sm border-2 border-red-600 hover:bg-red-700" +
                    "dark:border-2 dark:border-red-600 dark:hover:bg-red-700"}
            >Cancel</Button>
        </div>
    )

    const handleTestAgainClick = async () => {
        if(attempts > 12) {
            toast.error("Server didn't started, sorry!")
            return true
        }

        // não precisa carregar tudo
        //TODO -> Permitir que salve para não recarregar sempre
        const oldTime = getStoreLastUsedTime() ?? 1
        const now = Date.now()

        if (oldTime + 1000 * 60 * 10 > now) {
            setNavigationLock(false)
            return true
        }

        // todo -> Criar um service para isso
        // - must have a call to some endpoint and a timeout (8s)
        // return in the general api call handler format
        // const res = await TestApiWorkService()

        // if (res.isError)
            return false


        storeLastUsedTime(now)
        setNavigationLock(false)


        toast.info("Server is ready!")
        return true
    }

    const TryAgain = async () => {
        attempts++

        const success = await handleTestAgainClick()

        if (success) {
            toast.dismiss(errorToastId ?? 1)
            return
        }

        setTimeout(async () => {
            await TryAgain()
        }, 5000)
    }

    useEffect(() => {
        //TODO -> to personalize, disable this
        if(process.env.NODE_ENV == "development") {
            setNavigationLock(false)
            return
        }

        (async () => {
            const success = await handleTestAgainClick()
            // caso dê errado
            if (success)
                return


            const toastErrorID = toast.info("Server starting, please wait 1 minute...", {
                action: actionArea,
                duration: 60_000,
            })

            setErrorToastId(toastErrorID)

            // recursivo
            setTimeout(() => TryAgain(), 5000)
        })()
    }, [])

    return null
}
