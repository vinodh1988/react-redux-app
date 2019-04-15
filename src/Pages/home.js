import React, {
    Component
} from 'react';
//import CourseBox from '../Components/coursebox';
import {CourseBox} from '../Redux/Mappings/ComponentMappings';
import PubSub from 'pubsub-js';

import {courselist} from '../Data/Services/CourseService';

export class Home extends Component {
    constructor(){
        super();
        this.state={clist:courselist};
    }
    render() {
        
        let code=this.state.clist.map((x)=><CourseBox course={x}></CourseBox>);
        return ( 
            <div>
                <h3>Course Offered</h3>
                {code}
            </div>
        )
    }

   componentDidMount(){
       PubSub.subscribe("courseupdate",(msg,data)=>{
          this.setState(this.state);
       });
   }
}