import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../imgs/icon.png'
import {Button, Form} from 'react-bootstrap';
import { setAuthedUser } from '../../redux/actions/authorizedUser';

function Login(props){
  const [user, setUser] = useState(null);
  const { authedUser, users, dispatch } = props;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(authedUser != null){
      redirectToPrevPage();
    }
  }, []);

  const signIn = () => {
    dispatch(setAuthedUser(user))
    redirectToPrevPage();
  }

  const redirectToPrevPage = () => {
    let pathname = location.pathname;
    if(pathname === '/login'){
      pathname = '/';
    }
    navigate(pathname)
  }

  return (
    <div className="login-card">
        <div className="login-title-div">
          <div className="login-title">Welcome To Would Rather App</div>
          <div className="" >Please sign in to continue</div>
          <div className="underline-title"></div>
        </div>
        <img src={logo} alt="logo" />
        <div>
          <div className="signin">Select User</div>
          <Form.Select
            defaultValue='select'
            onChange={(e) => setUser(e.target.value)}>
          <option key='select' disabled value='select'>
            Select User
          </option>
          {Object.entries(users).map(([id, user]) => {
               return <option key={id} value={id}>{user.name}</option>
            })}
          </Form.Select>
          <Button 
            disabled={user === null} 
            onClick={signIn}>Sign in</Button>
        </div>
    </div>
  )
}

function mapStateToProps ({ users, authedUser }, props) {
  return {
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Login)