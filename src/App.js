import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Header from './components/Header';
import Leaderboard from './components/pages/Leaderboard';
import NewQuestion from './components/pages/NewQuestion';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './components/pages/Question';
import { useEffect } from 'react';
import { handleGetUsers } from './redux/actions/users';
import { connect } from 'react-redux';
import { handleGetQuestions } from './redux/actions/questions';
import NotFound from './components/pages/NotFound';

function App(props) {
  const { dispatch, authedUser } = props;

  useEffect(() => {
    dispatch(handleGetUsers())
    dispatch(handleGetQuestions())
  }, []);

  return (
    <div className='app'>
      <Router>
        <Header />
          <Routes>
            {authedUser == null ? <Route exact path="*" element={<Login />}/> :
            <>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/leaderboard" element={<Leaderboard/>}/>
              <Route exact path="/add" element={<NewQuestion dispatch={dispatch}/>}/>
              <Route exact path="/question/:question_id" element={<Question/>}/>
              <Route path="*" element={<NotFound />}/>
            </>
          }
          </Routes>
      </Router>
    </div>
  );
}

function mapStateToProps({authedUser}, props){
  return {
    authedUser,
    ...props,
  }
}

export default connect(mapStateToProps)(App)