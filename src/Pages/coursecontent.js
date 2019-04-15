import React, { Component } from 'react';

export default class CourseContent extends Component
{
    constructor(){
        super();
        console.log("Component created...!!!!!");
    }
    render(){
        const {ccode} = this.props.match.params;
        return(
            <div>
        <h1>Course Content will be rendered Here...!!!!</h1>
           <hr/>
           <h5>The course code is {ccode}</h5>
           </div>

        );
    }
}