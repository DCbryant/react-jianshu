import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './components/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Post from './pages/post';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/post" component={Post} />
            <Route path="/detail/:id" component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
