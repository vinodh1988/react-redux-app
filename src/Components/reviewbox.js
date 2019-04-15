import React, { Component } from 'react';

export class ReviewBox extends Component{
    render(){
        return(
            <div class="alert alert-info" style={{margin:"10px"}}>
                <h3>{this.props.review.name} reviewed {this.props.review.course}.....</h3>
                <p style={{color: "darkgray",padding: "10px" ,fontSize:"italic"}}>
                    {this.props.review.message}
                </p>
                <div style={{textAlign:"right",color:"darkred"}}>
                {this.props.review.reviewdate}</div>
            </div>
        )
    }
}