export const Footer = () => {
    const now = new Date()

    const year = now.getFullYear()
    
    return (
        <footer className={`absolute bottom-0 right-0 bg-gray-600 border-1 border-y-gray-400 px-2 py-1 
        rounded-lg rounded-br-none
        text-xs
        `}>
            Victor Spichenkoff &copy; {year}
        </footer>
    )
}

