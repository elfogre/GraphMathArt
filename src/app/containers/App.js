import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {PageHeader} from 'react-bootstrap';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import RenderBox from '../components/RenderBox';
import FooterMenu from '../components/FooterMenu';
import * as TodoActions from '../actions/index';
import * as TimeActions from '../actions/timeActions';

class App extends Component {
  render() {
    const {time, scene, todos, actions, timeActions} = this.props;
    return (
      <div className="row">
        <PageHeader>GraphMathArt <small>converting functions in actual art</small></PageHeader>

        <Header
          scene={scene}
          time={time}
          actions={timeActions}
          />

        <div>
          <RenderBox scene={scene} time={time} actions={timeActions}
            />
          <MainSection
            todos={todos}
            actions={actions}
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
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    time: state.time,
    todos: state.todos,
    scene: state.scene
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
    timeActions: bindActionCreators(TimeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
