import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = ()=> {
    const DUMMY_QUOTES =[
        {id:'1' , author:'mohamed' , text:'You Will Be The Best !'},
        {id:'2' , author:'Seoud' , text:'Only You Have To Do Is Look !'}
    ] 
    return(
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
};

export default AllQuotes;