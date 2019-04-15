import React, {
    Component
} from 'react';

export default class Cart extends Component{
    static defaultProps={cart:["NO SELECTIONS YET"]}
    render(){
        return(
        <div>
            <h3><u>Courses added in the cart</u></h3>
        <ul>
           { this.props.cart.map(x=><li key={x}>{x}</li>)}
        </ul>
        </div>
        );
    }
} 

