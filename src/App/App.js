import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div >
        <h1>The Knowmadic Local</h1>
      </div>
    );
  }
}

App.propTypes = {
};

export const mapDispatchToProps = (dispatch) => ({
});

export const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
