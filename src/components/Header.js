import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { handleUserLogout } from '../redux/actions/authorizedUser';
import { IoLogOutSharp } from "react-icons/io5";

function Header(props){
  const navigate = useNavigate();

  const { dispatch } = props;

  const logout = () => {
    dispatch(handleUserLogout())
    navigate('/');
  }

  const renderLogoutButton = () => {
    return (
      <button onClick={logout} className="plain-button logout-button" >
        Logout
       <IoLogOutSharp size='1.7rem' color="#d05d68" /> 
      </button>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/">Home</Link>
            <Link to="/add">New Questions</Link>
            <Link to="/leaderboard">Leader Board</Link>
          </Nav>
          <Nav>
            <div className="user-welcome">
              {`Hello, ${props.user.name || 'guest'}`}
            </div>
            {props.user.id && renderLogoutButton()}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

function mapStateToProps({authedUser, users}) {
  return {
    user: users[authedUser] || {},
  }
}
export default connect(mapStateToProps)(Header)
