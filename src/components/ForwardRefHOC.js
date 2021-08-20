import React from "react";

export class ForwardRefHocParentComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        console.log(this.props.forwardRef)
    }
    render() {
        return (
            <ForwardRefHocComp ref={this.props.forwardRef} />
        )
    }
}

export const ForwardRefHocComp = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} >Hoc Button</button>
    )
})

function HocFunction(WrappedComponent) {
    return React.forwardRef((props, ref) => {
        return (<WrappedComponent forwardRef={ref} />)
    })

}

const HocComp = HocFunction(ForwardRefHocParentComponent);
export const HocFunctionComp = () => {

    const dummyRef = React.createRef();
    return (
        <div>
            <HocComp ref={dummyRef} />
        </div>
    )
}

