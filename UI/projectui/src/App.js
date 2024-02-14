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

import { TrainerProfile } from './components/TrainerProfileComp';
import { FoodDBDisplay } from './components/FoodDBDisplay';
import { AdminHome } from './components/AdminHomeComp';
import { ErrorPage } from './components/ErrorPage';
import { CustomerSidebar } from './components/CustomerSidebar';
import { TrainerSidebar } from './components/TrainerSidebar';
import { AdminSidebar } from './components/AdminSidebar';
import { AddFood } from './components/AddFoodComp';
import { UpdateFood } from './components/UpdateFoodComp';
import { MealHistory } from './components/MealHistoryComp';
import { SelectTrainer } from './components/SelectTrainerComp';
import { ClientList } from './components/ClientListComp';
import { CustomerProfile } from './components/CustomerProfileComp';
import { TrainerProfile } from './components/TrainerProfileComp';
import { AdminProfile } from './components/AdminProfileComp';
import { UpdateCustProfile } from './components/UpdateCustProfileComp';

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
      <div style={{display: myState.loggedIn?"none":"block"}} className='header'>
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
          {/* <li className='nav-item'>
            <Link to='/trainerReg' className='nav-link' id='link'>Trainer Registration</Link>
          </li> */}
        </ul> 
        </div>
        <div style={{display: myState.loggedIn?"block":"none"}} className='header'>
        <ul className='nav navbar' style={{backgroundColor:"black"}}>
                <li><span style={{color:'white'}}>APP NAME</span></li>
                
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' id='link'>logout</Link>
                </li>
            </ul>

        </div>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/login' element={<LoginComp/>}/>
          <Route path='/register' element={<RegComp/>}/>
          {/* <Route path='/CustomerHome' element={<CustomerHome/>}/> */}
          <Route path='/logout' element={<LogoutComp/>}/>
          <Route path='/profile' element={<ProfileComp/>}/>
          <Route path='/updatepass' element={<UpdatePassComp/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/ErrorPage' element={<ErrorPage/>}/>
          {/* <Route path='/fooditems' element={<FoodDBDisplay/>}/> */}
          {/* <Route path='/trainerReg' element={<TrainerRegistration/>}/>
          <Route path='/TrainerHome' element={<TrainerProfile/>}/> */}
          <Route path='/AdminHome' element={<AdminHome/>}/>

          <Route path='/Customer' element={<CustomerSidebar/>}>
              <Route path='fooditems' element={<FoodDBDisplay/>}/>
              <Route path='CustomerHome' element={<CustomerHome/>}/>
              <Route path='Mealhistory' element={<MealHistory/>}/>
              <Route path='Selecttrainer' element={<SelectTrainer/>}/>
              <Route path='Profile' element={<CustomerProfile/>}/>
              <Route path='UpdateProfile' element={<UpdateCustProfile/>}/>
          </Route>

          <Route path='/Trainer' element={<TrainerSidebar/>}>
              <Route path='TrainerHome' element={<TrainerHome/>}/>
              <Route path='ClientList' element={<ClientList/>}/>
              <Route path='Profile' element={<TrainerProfile/>}/>
          </Route>

          <Route path='/Admin' element={<AdminSidebar/>}>
              <Route path='AdminHome' element={<AdminHome/>}/>
              <Route path='trainerReg' element={<TrainerRegistration/>}/>
              <Route path='UpdateFood' element={<UpdateFood/>}/>
              <Route path='AddFood' element={<AddFood/>}/>
              <Route path='Profile' element={<AdminProfile/>}/>
          </Route>


          <Route path='*' element={<h1>please check url</h1>}/>
        </Routes>
    </div>
  );
}

export default App;
