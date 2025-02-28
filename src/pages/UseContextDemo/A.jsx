import B from "./B"
import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
export default function A() {
    const { setTheme } = useContext(ThemeContext)
    return (
        <div className="bg-blue-400 h-screen flex flex-col gap-5">
            A Component
            <button className="bg-black text-white p-2 w-20" onClick={() => setTheme("dark")}>Dark</button>
            <button className="bg-white text-black p-2 w-20" onClick={() => setTheme("light")}>Light</button>
            <B />
        </div>
    )
}
