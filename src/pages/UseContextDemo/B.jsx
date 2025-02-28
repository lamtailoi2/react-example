import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function B() {
    const value = useContext(ThemeContext)



    return (
        <div className='bg-red-300 flex flex-col'>
            <p>This is B component</p>
            <p>Context Value: {value}</p>
        </div>
    )
}
