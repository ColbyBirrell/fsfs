import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Goodbye from "./components/goodbye/Goodbye";
import Form from "./components/form/Form";
import MyPosts from "./components/myposts/MyPosts";
import IndiPost from "./components/indiPost/IndiPost";

export default (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/form" component={Form} />
    <Route path="/posts" component={Posts} />
    <Route path="/post" component={Post} />
    <Route path="/indipost" component={IndiPost} />
    <Route path="/myposts" component={MyPosts} />
    <Route path="/goodbye" component={Goodbye} />
  </Switch>
);
