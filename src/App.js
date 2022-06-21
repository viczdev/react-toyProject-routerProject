import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuotes from "./pages/NewQuotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuuotes></AllQuuotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuotes></NewQuotes>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
