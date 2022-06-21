import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "react is fun" },
  { id: "q2", author: "max2", text: "react is fun2" },
];
const AllQuuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuuotes;
