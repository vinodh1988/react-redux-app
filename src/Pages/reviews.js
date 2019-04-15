import React, { Component } from 'react';
import {ReviewBox} from '../Components/reviewbox';
export class Reviews extends Component{
    render(){
        return(
        <div>
           {this.props.reviews.map(x=>
            <ReviewBox review={x}></ReviewBox>)}
         </div>
        )
    }
}