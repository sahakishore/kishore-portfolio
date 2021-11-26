import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
