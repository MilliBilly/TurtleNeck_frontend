import LoginPage from './pages/LoginPage'
import MyInfoPage from './pages/MyInfoPage'
import PostPage from './pages/PostPage'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage}></Route>
          <Route path="/post" component={PostPage}></Route>
          <Route path="/myinfo" component={MyInfoPage}></Route>
        </Switch>
        <ul>
          <li>
            <Link to="/">🚀 Go to Login Pages</Link>
          </li>
          <li>
            <Link to="/post">📝 Go to post Pages</Link>
          </li>
          <li>
            <Link to="/myinfo">👥 Go to Myinfo Pages</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  )
}

export default App
