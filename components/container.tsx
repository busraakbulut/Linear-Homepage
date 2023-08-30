export const Container = ({children} : {children:React.ReactNode}) => {
    return (
        <div className="w-[120rem] mx-auto">
            {children}
        </div>
    )
}