import React, {PureComponent} from 'react'
import styled from 'styled-components'
import autoBind from 'auto-bind'

export default () => {
    const [value, setValue] = React.useState("");
    return (
        <div className="App">
            <Input/>
            <Button/>
        </div>
    );
}
const Input = () => {
    const [input, setInput] = React.useState('')
    const handleInputChange = e => {
        setInput(e.target.value);
    };
    return <input value={input} onChange={handleInputChange}/>
}
const Button = () => <button>Button</button>

// class Game extends PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             value: '',
//         }
//     }
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return nextState !== this.state
//     }
//
//
//
//     render() {
//         return (
//             <div className="App">
//                 <InputField value = {this.state.value}/>
//                 <ButtonClick/>
//                 <OutputField value = {this.state.value}/>
//             </div>
//         )
//     }
// }

// export default Game;