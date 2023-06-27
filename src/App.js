import { Switch } from "react-router-dom/cjs/react-router-dom";
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>

      <Route path='/' exact>
        <Redirect to='/quotes'/>
      </Route>

      <Route path='/quotes' exact>
        <AllQuotes/>

      </Route>
      <Route path='/quotes/:quoteId'>
      <QuoteDetail/>

      </Route>
      <Route path='/new-quote'>
        <NewQuote/>
      </Route>


    </Switch>
    

  );
}

export default App;
