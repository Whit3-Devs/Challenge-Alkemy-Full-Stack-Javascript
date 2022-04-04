import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ABM from "./views/ABM";
import Home from "./views/Home";
import DetailAndUpdate from './views/DetailAndUpdate';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/operations">
        <ABM />
      </Route>
      <Route exact path="/operations/:id">
        <DetailAndUpdate />
      </Route>
    </Switch>
    </>
  );
}

export default App;
