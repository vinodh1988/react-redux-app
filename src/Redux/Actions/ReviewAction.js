import  Request from 'superagent';

let HandleReviewData=(data)=>{
    return{
        type:"REVIEW_ACTION",
        reviews:data
    }
}

export let ReviewAction=()=>{

    return (dispatch)=>{

        return Request.get("http://162.241.222.49:8894/rest-api/reviews").
        then( (response)=>{
              dispatch(HandleReviewData(response.body))
          }
        ).
        catch(()=>{
             dispatch(HandleReviewData([]))
        }
        );

    }
}