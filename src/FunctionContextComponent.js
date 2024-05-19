import { useContext } from "react";
import { ThemeContext } from './App'


export function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext)

    const theme = {
        backgroundColor: darkTheme ? '#fff' : '#000',
        color: darkTheme ? '#000' : '#fff',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div style={theme}>
            dummy
        </div>
    )
}