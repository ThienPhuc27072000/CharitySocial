import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom'
import Newsfeed from './component/Newsfeed';
import Header from './component/item-base/Header';
import Footer from './component/item-base/Footer';
import Navigation from './component/item-base/Navigation';
import SignInUp from './component/item-base/SignInUp';
import ProfileTimeline from './component/profile/profileTimeline';

window.jquery = $;
window.jQuery = $;

function App() {
  return (
    <>  
      <BrowserRouter>
        <Header/>        
        <Switch>
          <Route exact path="/signinup/" component={SignInUp}/>
          <Route exact path="/profile/" component={ProfileTimeline} />
          <Route exact path="/" component={Newsfeed} />
        </Switch>
        <Navigation/>              
        <Footer/>
      </BrowserRouter>     
    </>
  );  
}

export default App;
