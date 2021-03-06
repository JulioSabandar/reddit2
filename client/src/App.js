import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Post from './pages/Post'
import NewSubreddit from './pages/NewSubreddit'
import Subreddit from './pages/Subreddit'
import Chat from './chatComponents/Chat/Chat'
import Search from './pages/Search'
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/submit">
          <NewPost />
        </Route>
        <Route path="/createsubreddit">
          <NewSubreddit/>
        </Route>
        <Route path="/r/:subreddit/:id">
          <Post/>
        </Route>
        <Route path="/r/:subreddit">
          <Subreddit/>
        </Route>
        <Route path="/chat/" component={Chat}>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/search/" component={Search}>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
