import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import {Button} from 'react-bootstrap';

const HTML_TEMPLATE='<!DOCTYPE html><html><head><script></script></head><body><h1>My Web Page</h1></body></html>';

class FooterMenu extends Component {

  constructor(props) {
    super(props);
  }

  exportGraph() {
    var newWindow = window.open();
    newWindow.document.write(HTML_TEMPLATE);
  }


  render() {
    return (
        <Button onClick={this.exportGraph}>Export graph</Button>
    );
  }
}



export default FooterMenu;
