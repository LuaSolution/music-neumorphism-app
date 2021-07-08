import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import {ThemeContext} from "./Context/ThemeContext";
import BodyContent from "./components/Layout/BodyContent";
import './assets/fonts/fonts.scss';
import 'antd/dist/antd.css';

const App = () => {
    return (
        <ThemeContext>
            <BodyContent>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </BodyContent>
        </ThemeContext>

    );
};

export default App;