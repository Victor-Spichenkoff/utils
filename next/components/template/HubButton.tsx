import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

interface IHubButton {
    label: string
    to: `/${string}`
}

export const HubButton = ({to, label}:IHubButton) => {
    const router = useRouter()

    return (
        <Button onClick={() => router.push(to)}
            className="w-fit self-center bg-emerald-500 hover:bg-emerald-600 "
        >
            {label}
        </Button>
    )
}