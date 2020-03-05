import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Goodbye from "./components/goodbye/goodbye";
import Form from "./components/form/Form";

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/form" component={Form} />
    <Route path="/posts" component={Posts} />
    <Route path="/post" component={Post} />
    <Route path="/goodbye" component={Goodbye} />
  </Switch>
);
