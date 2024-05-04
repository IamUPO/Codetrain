import React from 'react'

function Button(props) {

    return (
        <div>
            <button>{props.name}</button>
        </div>
    )
}

// class Button extends React.PureComponent{
//     render(){
//         return (
//             <div>
//                 <button style={{backgroundColor: this.props.buttonColor, color: this.props.textColor }}>{this.props.name}</button>
//             </div>
//         )
//     }
// }

export default Button
