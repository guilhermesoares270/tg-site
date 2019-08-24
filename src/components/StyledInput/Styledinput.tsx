import React from 'react';
import './StyledInput.css';

class StyledInput extends React.Component<{
    name: string,
    type: string,
    val?: string,
    refe?: any
}> {
    render() {
        const { name, type, val, refe } = this.props;
        return(
            <div id={ name } className="StyledInput">
                <section>
                    <input ref={ refe } type={ type }
                        placeholder={ name }
                        value={ val }
                    />
                </section>
            </div>
        );
    }
}

// const StyledInput: React.FC<{
//     name: string, 
//     type: string,
//     val?: string
// }> = ({ name, type, val }) => {
//     return(
//         <div id={ name } className="StyledInput">
//             <section>
//                 <input type={ type } placeholder={name} value={ val }/>
//             </section>
//         </div>
//     );
// }

export default StyledInput;