import React, {PropTypes, Component} from 'react';
import { Control, Form, actions } from 'react-redux-form';
import TodoTextInput from './TodoTextInput';
import { Grid, Row, Col, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';

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
        <Grid>
          <Row className="show-grid">
            <Col md={2}>
              <FormGroup controlId="red">
              <ControlLabel>Red</ControlLabel>
              <Control.text model="scene.backgroundredcolour" />
              </FormGroup>
            </Col>

            <Col xs={4}>
              <label>Green</label>
              <Control.text model="scene.backgroundgreencolour" />
            </Col>

            <Col xs={4}>
              <label>Blue</label>
              <Control.text model="scene.backgroundbluecolour" />
            </Col>

          </Row>
        </Grid>
        <Grid>
          <Row className="show-grid">
            <Col xs={4}>
            <label>xwidth</label>
            <Control.text model="scene.xsize" />
            </Col>

            <Col xs={4}>
            <label>ywidth</label>
            <Control.text model="scene.ysize" />
            </Col>
          </Row>
        </Grid>

        <Button  type="submit">Submit!</Button>
      </Form>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
