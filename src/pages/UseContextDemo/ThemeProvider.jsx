import { createContext, useState, } from "react";


const ThemeContext = createContext({
    theme: "",
    setTheme: () => { }
})

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    const value = {
        theme,
        setTheme
    }
    return (
        <ThemeContext value={value}>
            {children}
        </ThemeContext>

    )
}

export { ThemeContext }