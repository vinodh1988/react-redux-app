import React, { Component } from 'react';

export class Offers extends Component{
    render(){
        return(
        <div class="jumbotron">
            <div class="alert alert-dark"style={{margin:"30px", width:"50%"}}>
               <h3>{this.props.offermessage}</h3>

               OfferCode: <b style={{color:"darkred"}}>{this.props.code}</b>

            </div>
             <button class="btn btn-dark" 
             onClick={this.props.changeOffer}>Check Other offers</button>
         </div>
        )
    }
}