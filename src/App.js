import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Series from "./components/Series/Series";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Series}/>
            <Route path="/shows/:id" exact component={Series}/>
            <Route render={() => <h1>404 Not Found</h1>}/>
        </Switch>
    </Layout>
);


export default App;
