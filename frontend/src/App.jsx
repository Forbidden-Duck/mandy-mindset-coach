import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// TODO setup app route

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" render={() => <h1>Home</h1>} />
            </Switch>
        </Router>
    );
}

export default App;
