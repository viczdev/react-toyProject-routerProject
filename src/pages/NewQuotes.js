import QuoteFrom from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    history.push("/quotes");
  };
  return <QuoteFrom onAddQuote={addQuoteHandler}></QuoteFrom>;
};

export default NewQuotes;
