import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/snippets/Header';
import Home from './components/Home';
import Checkout from './components/checkout/Checkout';
import Login from './auth/Login';
import { useStateValue } from './StateProvider';
import { auth } from 'firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(authuser){
      if (authuser) {
        dispatch({
          type: "LOGIN_USER",
          user: authuser
        });
      }
      else {
        if (authuser) {
          dispatch({
            type: "LOGIN_USER",
            user: null
          });
        }
      }
    })
    return () =>{
      unsubscribe();
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
