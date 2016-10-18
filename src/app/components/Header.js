import React, {PropTypes, Component} from 'react';
import { Control, Form, actions } from 'react-redux-form';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(values) {
    // Do anything you want with the form value
    console.log(JSON.stringify(values, null, 2));
  }

  render() {
    return (
      <Form
        model="scene"
        onSubmit={(val) => this.handleSubmit(val)}
      >
        <label>Red</label>
        <Control.text model="scene.backgroundredcolour" />

        <label>Green</label>
        <Control.text model="scene.backgroundgreencolour" />

        <label>Blue</label>
        <Control.text model="scene.backgroundbluecolour" />

        <label>xwidth</label>
        <Control.text model="scene.xsize" />

        <label>ywidth</label>
        <Control.text model="scene.ysize" />

        <button>Submit!</button>
      </Form>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
