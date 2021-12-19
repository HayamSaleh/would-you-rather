import React from "react";
import {GiRank1, GiRank2, GiRank3 } from "react-icons/gi";

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <GiRank3 />;
    case 2:
      return <GiRank2 />;   
    case 3:
      return <GiRank1 />;   
    default:
      return null;
  }
}

function LeaderboardCard(props){
  const { user, rank } = props;

  return (
      <div key={user.id} className="leaderboard-card">
        <img src={user.avatar} alt="avatar"/>
        <div className="arrow-right">
          <span>{getRankIcon(rank)}</span>
        </div>
        <div className='leaderboard-info'>
          <div className="name">{user.name}</div>
          <div className="row">
            <div className="col col-10">Answered Questions</div>
            <div className="col col-2">{user.answeredQuestionCount}</div>
          </div>
          <div className="row">
            <div className="col col-10">Created Questions</div>
            <div className="col col-2">{user.askedQuestionCount}</div>
          </div>
        </div>
        <div className='leaderboard-score'>
          <div className="score-header">Score</div>
          <div className="score"><p>{user.totalScore}</p></div>
        </div>
      </div>
    )
}

export default LeaderboardCard