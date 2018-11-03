import React, {Component} from 'react'
import './Person.css'

// class Person extends Component {
//     state = {
//         localName: this.props.name
//     }
//     onClickHandler = () => {
//         this.setState({localName: 'Max'})
//     }
//     render() {
//         return (
//             <div>
//                 <p onClick= {this.onClickHandler}>I'm {this.state.localName}  years old</p>
//             </div> 
//         );       
//     }
// }
class Person extends Component {
    render() {
        return (
            <div class='person'>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
            </div>
        );
    }
}
// const person = (props) => {
//     props.name = 'Max';
//     return (
//     <div>
//         <p>I'm {props.name} and I'm {props.age} years old</p>
//         <p>{props.children}</p>
//     </div>
//     );
// }
export default Person;