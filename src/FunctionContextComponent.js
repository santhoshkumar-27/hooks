import { UseThemeValue, UseThemeValueUpdate } from './ThemeCustomContext'

export function FunctionContextComponent() {
    const darkTheme = UseThemeValue();
    const toggle = UseThemeValueUpdate();

    const theme = {
        backgroundColor: darkTheme ? '#fff' : '#000',
        color: darkTheme ? '#000' : '#fff',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <div>
                <button onClick={toggle}>Toggle</button>
            </div>
            <div style={theme}>
                dummy
            </div>

        </>
    )
}