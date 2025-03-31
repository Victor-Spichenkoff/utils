"use client"

import {useTheme} from "next-themes"
import {useEffect, useState} from "react"
import {Moon, Sun} from "lucide-react"

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null // Evita renderização incorreta no SSR

    return (
        <button
            className="p-2 transition rounded-md bg-primary/20 hover:bg-primary/30"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}

        >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

//
// export default function ThemeToggle() {
//     const {theme, setTheme} = useTheme()
//     const [mounted, setMounted] = useState(false)
//
//     // Garante que o componente só renderiza no cliente (evita problemas de hidratação)
//     useEffect(() => {
//         setMounted(true)
//     }, [])
//
//     if (!mounted) return null // Evita renderização incorreta no SSR
//
//     return (
//         <div>
//             {mounted && (
//                 <button
//                     className="p-2 transition rounded-md bg-primary/20 hover:bg-primary/30"
//                     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                 >
//                     {theme === "dark" ? <Sun size={20}/> : <Moon size={20}/>}
//                 </button>
//             )
//             }
//         </div>
//     )
// }
