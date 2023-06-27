import { Fragment } from "react";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";

const QuoteDetail = ()=> {

    const params = useParams();
    return(
        <Fragment>
        <h1>Quote Detail Page.......</h1>
        <p>{params.quoteId}</p>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments/>
        </Route>
        </Fragment>
    )
};

export default QuoteDetail;