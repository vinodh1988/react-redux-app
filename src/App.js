import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './Pages/home';
import {Videos} from './Pages/videos';
//import {Offers}  from './Pages/offers';
import {Offer,Cart,ReviewList} from './Redux/Mappings/ComponentMappings';
//import {Reviews} from './Pages/reviews';
import CourseContent from './Pages/coursecontent';


import './App.css';
import './Styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    
      <a class="navbar-brand" href="#">CoursesAPP</a>
      
    
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/reviews">Reviews</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/offers">Offers</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link" to="/videos">Videos</Link>
         </li>
      </ul>
      <ul class="navbar-nav ml-md-auto">
        <li 
        ><Link class="nav-link" to="/cart">Cart</Link></li>
     </ul>
    </nav>
    <div id="container">
         <div id="main-area">
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Videos} />
          <Route path="/offers" component={Offer} />
          <Route path="/reviews" component={ReviewList}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/coursedetails/:ccode" component={CourseContent}/>
         </div>
         <div id="right-bar"></div>
    </div>
    </Router>
    </div>
    );
  }
}

export default App;
