import { Component } from "react";
import { ThemeContext } from "./App";


export class ClassContextComponet extends Component {
    themeValue(theme) {
        return {
            backgroundColor: theme ? '#fff' : '#000',
            color: theme ? '#000' : '#fff',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeValue(darkTheme)}>Class method</div>}
                }
            </ThemeContext.Consumer>
        )
    }
}