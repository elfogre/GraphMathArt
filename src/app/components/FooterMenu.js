import React, {Component} from 'react';

import {Button, Row, Col} from 'react-bootstrap';

const HTML_TEMPLATE = '<!DOCTYPE html><html><head><script></script></head><body><h1>My Web Page</h1></body></html>';

class FooterMenu extends Component {

  handleExportGraph() {
    const newWindow = window.open();
    newWindow.document.write(HTML_TEMPLATE);
  }

  render() {
    return (
      <Row className="show-grid">
        <Col xs={4}></Col>
        <Button onClick={this.handleExportGraph}>Export graph</Button>
      </Row>
          
    );
  }
}

export default FooterMenu;
