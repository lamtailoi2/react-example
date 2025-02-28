import { createContext, } from "react";


const ThemeContext = createContext('')

export default function ThemeProvider({ children }) {

    return (
        <ThemeContext value="dark">
            {children}
        </ThemeContext>

    )
}

export { ThemeContext }