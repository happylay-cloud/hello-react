import './App.css';
import Home from './views/home'
import Login from './views/login'
import List from './views/list'
import {   BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home">首页|</Link>
        <Link to="/login">登录|</Link>
        <Link to="/list">列表</Link>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/list" component={List}></Route>
       </Switch>

      </Router>
  
    </div>
  );
}

export default App;
