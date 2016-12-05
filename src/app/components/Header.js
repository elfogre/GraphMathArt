import React, {PropTypes, Component} from 'react';
import { Control, Form } from 'react-redux-form';
import TodoTextInput from './TodoTextInput';
import { Grid, Row, Col, FormControl, ControlLabel, FormGroup, Button, Panel, Checkbox } from 'react-bootstrap';

const MyTextInput = (props) => <FormControl type="text" {...props} />;
const MyCheckbox = (props) => <Checkbox {...props} />;

const bkgcolor = (
  <h3>Background color</h3>
);
const framesize = (
  <h3>Frame size</h3>
);
const timecontrol = (
  <h3>Time control</h3>
);

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
          <Panel header={bkgcolor}>
            <Row className="show-grid">
              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>Red value</ControlLabel>
                  <Control.text model="scene.backgroundredcolour" component={MyTextInput} value={this.props.scene.scene.backgroundredcolour}/>
                </FormGroup>
              </Col>

              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>Green value</ControlLabel>
                  <Control.text model="scene.backgroundgreencolour" component={MyTextInput} value={this.props.scene.scene.backgroundgreencolour}/>
                </FormGroup>
              </Col>

              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>Blue value</ControlLabel>
                  <Control.text model="scene.backgroundbluecolour" component={MyTextInput} value={this.props.scene.scene.backgroundbluecolour}/>
                </FormGroup>
              </Col>

            </Row>
          </Panel>
          <Panel header={framesize}>
            <Row className="show-grid">
              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>x size</ControlLabel>
                  <Control.text model="scene.xsize" component={MyTextInput} value={this.props.scene.scene.xsize}/>
                </FormGroup>
              </Col>

              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>y size</ControlLabel>
                  <Control.text model="scene.ysize" component={MyTextInput} value={this.props.scene.scene.ysize}/>
                </FormGroup>
              </Col>
            </Row>
          </Panel>
          <Panel header={timecontrol}>
            <Row className="show-grid">
              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>Time function</ControlLabel>
                  <Control.text model="scene.timeIncrement" component={MyTextInput} value={this.props.scene.scene.timeIncrement}/>
                </FormGroup>
              </Col>

              <Col xs={4}>
                <FormGroup>
                  <ControlLabel>Actual time: </ControlLabel> {this.props.time.time}
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup>
                { this.props.time.timepaused ?
                            <Button onClick={this.props.actions.startTime}>Play</Button>
                            :
                            <Button onClick={this.props.actions.pauseTime}>Pause</Button>
                }
                <Button onClick={this.props.actions.restartTime}>Restart</Button>
                </FormGroup>
              </Col>
              </Row>
            </Panel>
          </Grid>
        </Form>
      );
    }
  }

  Header.propTypes = {
    scene: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  export default Header;
