import React from 'react';
import './about.css';

const About = () => {
    return (
        <div>About</div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    alerts: state.alert,
  });
  

export default About