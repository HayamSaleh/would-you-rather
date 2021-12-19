import React from "react";
import { connect } from "react-redux";
import LeaderboardCard from "../LeaderboardCard";

function Leaderboard(props){
  return (
    <div className="leaderboard-container">
      <div>Leaderboard Page</div>
      {props.leaderboardUsers.map((user, index) => {
        return <LeaderboardCard key={user.id} user={user} rank={index+1} />
      })}
    </div>
  )
}

function formatUser(user){
  const answeredQuestionCount = Object.values(user.answers).length;
  const askedQuestionCount = user.questions.length;

  return {
    id: user.id,
    avatar: user.avatarURL,
    name: user.name,
    answeredQuestionCount,
    askedQuestionCount,
    totalScore: answeredQuestionCount + askedQuestionCount,
  }
}

function mapStateToProps({users}){
  const leaderboardUsers = [];

  Object.values(users).forEach(user => {
    leaderboardUsers.push(formatUser(user))
  })

  leaderboardUsers.sort((a, b) =>  b.totalScore - a.totalScore);

  return {
    leaderboardUsers,
  }
}


export default connect(mapStateToProps)(Leaderboard)