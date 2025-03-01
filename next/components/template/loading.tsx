interface ILoading {
    monitorState?: any
}

export const Loading = ({monitorState}: ILoading) => {
    if(monitorState !== null)
        return null

    return (
        <div className="w-screen h-screen z-30 bg-black/40 flex justify-center items-center fixed top-0 left-0">
            <div className="w-[300px] aspect-square rounded-full border-[40px] border-blue-950 border-l-blue-600 animate-spin">
            </div>
        </div>
    )
}