import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {PageHeader} from 'react-bootstrap';

import Header from '../components/Header';
import RenderBox from '../components/RenderBox';
import FooterMenu from '../components/FooterMenu';
import * as TimeActions from '../actions/timeActions';

class App extends Component {
  render() {
    const {time, scene, timeActions} = this.props;
    return (
      <div className="row">
        <PageHeader>GraphMathArt <small>converting functions in actual art</small></PageHeader>

        <Header
          scene={scene}
          time={time}
          actions={timeActions}
          />

        <div>
          <RenderBox
            scene={scene}
            time={time}
            actions={timeActions}
            />
        </div>
        <FooterMenu scene={scene}/>
      </div>
    );
  }
}

App.propTypes = {
  time: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired,
  timeActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    time: state.time,
    scene: state.scene
  };
}

function mapDispatchToProps(dispatch) {
  return {
    timeActions: bindActionCreators(TimeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
