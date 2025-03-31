"use client"

// import ThemeToggle from "@/app/darkMode/themeToggle"
import dynamic from 'next/dynamic'
import ThemeToggle from "@/app/darkMode/themeToggle";

export default function DarkModePage() {
    return (
        <div className={"h-screen w-screen bg-background flex flex-col justify-between items-center gap-"}>
            <div className={"text-primary text-4xl"}>Nhe</div>
            <ThemeToggle />
        </div>
    )
}
