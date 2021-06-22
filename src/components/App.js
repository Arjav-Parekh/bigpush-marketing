import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //import the package
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CaseStudy from "../pages/Case Studies/CaseStudy";
import Blog from "../pages/Blog/Blog";


function App(){
    
    return(
        <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/case-studies" component={CaseStudy} />
                    <Route exact path="/blogs" component={Blog} />
                </Switch>

       </BrowserRouter>

    )
}
export default App