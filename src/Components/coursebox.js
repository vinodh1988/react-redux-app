import React, { Component } from 'react';
import  {Link} from "react-router-dom";

export default class CourseBox extends Component
{
    render(){
        let url="http://162.241.222.49:8894/rest-api/images/"+this.props.course.filename;
        let url2="/coursedetails/"+this.props.course.modulecode;
        return(
            <div>
              <div class="media border p-3">
                <img src={url}
                     alt="No Image" class="mr-3 mt-3 rounded-circle" 
                style={{width:"60px"}}/>
            <div class="media-body">
                <h4>{this.props.course.modulename}</h4>
                <p>{this.props.course.description}</p>   
                <h6>Price:: &#8377; {this.props.course.price}, Duration:: {this.props.course.duration} Hours</h6>   
                <Link to={url2}><button className="btn btn-dark">Course Contents</button></Link>
                &nbsp; &nbsp; &nbsp;
                <button className="btn btn-dark"
                onClick={()=>{this.props.cartItem(this.props.course.modulename)}}>Add to cart</button>
            </div>
                </div>
            </div>
        )
    }
}