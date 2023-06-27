import { Fragment } from "react";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

    const DUMMY_QUOTES =[
        {id:'1' , author:'mohamed' , text:'You Will Be The Best !'},
        {id:'2' , author:'Seoud' , text:'Only You Have To Do Is Look !'}
    ] 

const QuoteDetail = ()=> {

    const params = useParams();
    const quote = DUMMY_QUOTES.find(item => item.id===params.quoteId)

    if(!quote){
        return(<h1>No Quote Found ........</h1>)
    }

    return(
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
        <p>{params.quoteId}</p>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments/>
        </Route>
        </Fragment>
    )
};

export default QuoteDetail;