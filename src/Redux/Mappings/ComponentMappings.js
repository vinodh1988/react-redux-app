import {combineReducers} from 'redux';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {OfferReducer,CartReducer,ReviewReducer} from '../Reducers/PageReducers';
import {Offers} from '../../Pages/offers';
import {Reviews} from '../../Pages/reviews';
import cart from '../../Pages/cart';
import {OfferAction} from '../Actions/OfferAction';
import {CartAction} from '../Actions/CartAction';
import cb from '../../Components/coursebox';

let  mapStateToProps=(state)=>{
    return {offermessage:state.offerData.offer.message,code:state.offerData.offer.code};
}

let mapStateToCartProps=(state)=>{
    return {cart:state.cartData.items}
}

let mapStatetoReviewProps=(state)=>{
    return {reviews:state.reviewData.reviews}
}

let mapActionToProps=(dispatch)=>{
    return bindActionCreators({changeOffer:OfferAction},dispatch);
}

let mapActionToHomeProps=(dispatch)=>{
    return bindActionCreators({cartItem:CartAction},dispatch);
}

export let Offer=connect(mapStateToProps,mapActionToProps)(Offers);
export let CourseBox=connect(null,mapActionToHomeProps)(cb);
export let Cart=connect(mapStateToCartProps,null)(cart);
export let ReviewList=connect(mapStatetoReviewProps,null)(Reviews);

export default combineReducers({
    offerData:OfferReducer,
    cartData:CartReducer,
    reviewData:ReviewReducer});