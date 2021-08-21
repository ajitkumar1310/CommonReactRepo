import React from 'react'

const WithScrollHoc = (WrappedComponent) => {
    return class WithScrollContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = { style: 'false' }
        }
        componentDidMount() {
            window.addEventListener('click', this.onScroll)
        }
        componentWillUnmount() {
            window.removeEventListener('click', this.onScroll)
        }
        onScroll = () => {
            this.setState({ style: 'scrollstyle' })
        }
        render() {
            return (
                <WrappedComponent {...this.props} style={this.state.style} />
            )
        }
    }
}

export const Component = (props) => {
    return (
        <div>The style applied is: {props.style}</div>
    )

}

const HigherOrderComponent = WithScrollHoc(Component)
export { HigherOrderComponent }