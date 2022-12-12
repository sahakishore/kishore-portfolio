import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Pages";

const App = ()=> {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
