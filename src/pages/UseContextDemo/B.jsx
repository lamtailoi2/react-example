import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function B() {
    const { theme } = useContext(ThemeContext)



    return (
        theme === 'dark' ? (<div className='bg-black h-1/2'>
            <p className="text-white ">This is B component</p>
        </div>) : (<div className='bg-white h-1/2'>
            <p>This is B component</p>
        </div>)
    )
}
