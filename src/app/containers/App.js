import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import RenderBox from '../components/RenderBox';
import * as TodoActions from '../actions/index';

class App extends Component {
  render() {
    const {scene, todos, actions} = this.props;
    return (
      <div>

        <Header
          addTodo={actions.addTodo}
          />
          <RenderBox scene={scene}
          />
        <MainSection
          todos={todos}
          actions={actions}
          />
      </div>
    );
  }
}

App.propTypes = {
  scene: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    scene: state.scene
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
