import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact ,Student,Staff,BookIn} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/student" exact component={() => <Student />} />
          <Route path="/student" exact component={() => <Student />} />
          <Route path="/staff" exact component={() => <Staff/>} />
          <Route path="/bookin" exact component={() => <BookIn />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
