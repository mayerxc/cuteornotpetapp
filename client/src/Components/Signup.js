import React from "react";
import "./../css/Signup.css";
import googleLogo from '../img/googleLogo.png'
//use below to establish communication bewteen store and individual component
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setGuest } from "../actions/authentication"; //Redux action that sets guest account

 function mapStateToProps(state) {
   //only reads store state
   return state;
 }

function mapDispatchToProps(dispatch) {
  //writes to store state
  return bindActionCreators(
    {
      setGuest: setGuest
    },
    dispatch
  );
}
 //..end redux commands

class Signup extends React.Component {
  handleLogin(service) {
    //twitter authentication
    window.location = "/auth/"+service;
  }
  handleGuest() {
    //set guest user
    this.props.setGuest();
  }
  render() {
    if(!this.props.user.user.authenticated && this.props.user.user.username!=="Guest"){
      return (
        <div className="signup">
          <div className="signup__user">
            It's like Hot or Not,<br /> but for pets
            <button
              className="signup__button signup__button__google"
              onClick={() => this.handleLogin("google")}
            >
            <div className = 'signup__button__google__left'>
              <img className = 'googleLogo'src = {googleLogo} alt = ""/>
            </div>
            <p className = 'signup__button__google__text'>Continue with Google</p>
            </button>
            
            <button
              className="signup__button signup__button__twitter"
              onClick={() => this.handleLogin("twitter")}
            >
              <i className="fab fa-twitter" />
              Continue with Twitter
            </button>

          </div>

          <div className="signup__nonuser">
            <p>
            {this.props.user.user.displayName}
              Or, if you don't want to post adorable pictures of your pet,
              just continue as a{" "}
              <span
                className="signup__nonuser__link"
                onClick={() => this.handleGuest()}
              >
                guest
              </span>.
            </p>
          </div>
        </div>
      );
    }
    else{
      return null
    }
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
