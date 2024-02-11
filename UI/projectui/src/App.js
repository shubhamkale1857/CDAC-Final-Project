import logo from './logo.svg';
import './App.css';
import { About, Blog, Contact } from './components/FunctionalDemoComps';
import { Link, Route, Routes } from 'react-router-dom';
import RegComp from './components/RegComponent'
import { useSelector } from 'react-redux';
import { LoginComp } from './components/Logincomp';
import { HomeComp } from './components/HomeComp';
import { ProfileComp } from './components/ProfileComp';
import { CustomerHome } from './components/CustHomeComp';
import { LogoutComp } from './components/LogoutComp';
import { UpdatePassComp } from './components/UpdatePassComp';
import TrainerRegistration from './components/TrainerRegistration';

function App() {
  const myState = useSelector(state => state.logged);
  return (
    <div >
       {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        
      </header>*/}
      <div style={{display: myState.loggedIn?"none":"block"}}>
      <ul className='nav navbar' style={{backgroundColor:"black"}}>
          <li className='nav-item'>
            <Link to='/register' className='nav-link' id='link'>register</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link' id='link'>HOME</Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link' id='link'>login</Link>
          </li>
          <li className='nav-item'>
            <Link to='/trainerReg' className='nav-link' id='link'>Trainer Registraion</Link>
          </li>
        </ul> 
        </div>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/login' element={<LoginComp/>}/>
          <Route path='/register' element={<RegComp/>}/>
          <Route path='/CustomerHome' element={<CustomerHome/>}/>
          <Route path='/logout' element={<LogoutComp/>}/>
          <Route path='/profile' element={<ProfileComp/>}/>
          <Route path='/updatepass' element={<UpdatePassComp/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/trainerReg' element={<TrainerRegistration/>}/>
          <Route path='*' element={<h1>please check url</h1>}/>
        </Routes>
    </div>
  );
}

export default App;
