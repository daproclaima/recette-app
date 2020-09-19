// import React, {Component} from 'react';
//
// const withPlaceholder =  WrappedComponent => (
//     class HOC extends Component {
//         render() {
//             return (
//                 <WrappedComponent
//                     placeholder={'Test mon HOC'}
//                 {/*    brings all props in destructured of the argument component in that*/}
//                     {...this.props}
//                 />
//             );
//         }
//     }
// )

// v2 cleaner and lighter
import React from 'react';
const withPlaceholder =  WrappedComponent => (props) => (
        <WrappedComponent
            placeholder={'Test mon HOC'}
            //    brings all props in destructured of the argument component in that ( here js comment tag as not jsx)
            {...props}
        />
)

export default withPlaceholder;
