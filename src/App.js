import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing.js'
import Contact from './Components/Contact.js'
import SignUp from './Components/SignUp.js'
import {Switch,Route} from 'react-router-dom'
import UserProfile from './Components/UserProfile'
import MeetSomeone from './Components/MeetSomeone'
import Connect from './Components/Connect'
import ProfileSettings from './Components/ProfileSettings'
import BurgerContext from './Components/Context/BurgerContext'
import SignIn from './Components/SignIn'



function App() {
  return (
    <BurgerContext>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profile' component={UserProfile} />
          <Route path='/meet' component={MeetSomeone} />
          <Route path='/connect' component={Connect} />
          <Route path='/settings' component={ProfileSettings} />
          <Route path='/signin' component={SignIn} />

        </Switch>
      


      </div>
    </BurgerContext>
   
  );
}

export default App;
