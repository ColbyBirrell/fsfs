import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Goodbye from "./components/goodbye/goodbye";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/posts" component={Posts} />
    <Route path="/post" component={Post} />
    <Route path="/goodbye" component={Goodbye} />
  </Switch>
);
