"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

interface IHeader {
    children: React.ReactNode
    className?: string
    useBack?: boolean
}

export const Header = ({ className, children, useBack }: IHeader) => {
    const router = useRouter()
    const back = "<"
    return (
        <header className="w-full border-b mb-4 relative max-w-7xl mx-auto">

            {useBack && (

                <Button className="border-2 border-sky-500 text-white hover:bg-sky-600 absolute left-4 top-[calc(16%)]"
                    onClick={() => router.back()}
                >
                    {back}
                </Button>
            )}
            <h1 className={"py-2 text-3xl text-center text-white font-bold" + " " + className}>
                {children}
            </h1>
        </header>
    )

}