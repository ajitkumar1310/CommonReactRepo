import React from "react"
import { ThemeContext } from "./CreateContext"
export const ContextComponent = () => {
    return (
        <ThemeContext.Consumer>
            {value => <div>{value.theme}</div>}
        </ThemeContext.Consumer>
    )
}

class CreateClassComponent extends React.Component {
    componentDidMount() {

    }
    render() {
        let value = this.context;
        return (
            <div>{value.theme}</div>
        );
    }
}
CreateClassComponent.contextType = ThemeContext;
export { CreateClassComponent };