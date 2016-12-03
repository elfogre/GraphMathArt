import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { PageHeader, Jumbotron} from 'react-bootstrap';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import RenderBox from '../components/RenderBox';
import FooterMenu from '../components/FooterMenu';
import * as TodoActions from '../actions/index';

class App extends Component {
  render() {
    const {scene, todos, actions} = this.props;
    return (
      <div className="row">
        <PageHeader>GraphMathArt <small>converting functions in actual art</small></PageHeader>

          <Header
            scene={scene}
            addTodo={actions.addTodo}
            />

        <div>
          <RenderBox scene={scene}
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
