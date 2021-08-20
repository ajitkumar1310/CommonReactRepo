
import React from 'react'

export const ForwardRefComp = React.forwardRef((props, ref) => {
    return (
        <button ref={ref}>Normal Button</button>
    )
})

export const ForwardRefCompNrml = () => {
    return (
        <button >Normal Button</button>
    )
}
export class ForwardRefParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.DummyRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.DummyRef.current)
    }
    render() {
        return (
            // <div>Hellow</div>
            <ForwardRefComp ref={this.DummyRef} />
        )
    }
}

