import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    points: state.points
  };
};

const ConnectedPoints = ({ points }) => {
  return (
    <div className="points">
      <span className="points__count">{points}</span>
      <span className="points__medal">
        <i className="fas fa-medal" />
      </span>
    </div>
  );
};

const Points = connect(mapStateToProps)(ConnectedPoints);
export default Points;
