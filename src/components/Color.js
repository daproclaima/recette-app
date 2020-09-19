import React, {Component} from 'react';

const ColorContext = React.createContext()

// A kind of HOC
class ColorProvider extends Component {
    // we simulate user has seagreen
    state = {
        color: 'seagreen'
    }
    render() {
        return (
            // note: within the Header component is a Consumer, which uses the context. We want to change Header background color
            <ColorContext.Provider
                 // We define who uses the context and the wanted consumer
                 // We load an object embedding the state
            value={{
                state: this.state
            }}>
                 {/*Any components passing through this ContextProvider make him inherit their props and add the provided value*/}
                {this.props.children}
            </ColorContext.Provider>
        );
    }
}

// need to be exported to consume its context
export { ColorContext }

export default ColorProvider;
