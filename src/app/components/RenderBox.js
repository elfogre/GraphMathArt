import React, {Component} from 'react';
import PropTypes from 'prop-types';

let ctx;

const lastTime = 0;

class RenderBox extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    //this.canvas = React.createRef();
  }

  componentDidMount() {
    ctx = this.refs.canvas.getContext('2d');
    this.updateCanvas();
    this.startrun(this.updateCanvas);
  }

  componentDidUpdate() {
    // this.updateCanvas();
  }

  drawPixel(x, y, r, g, b, a, canvasData) {
    const index = (x + y * this.props.scene.scene.xsize) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
  }

  updateCanvas() {
    try {
      const t = this.props.time.time;
      const canvasData = this.evalCanvas(this.props.scene.scene, t);
      if (!this.props.time.timepaused) {
        this.props.actions.setTime(eval(this.props.scene.scene.timeIncrement));
      }
      ctx.putImageData(canvasData, 0, 0);
    } catch (e) {
      console.log("Error", e.stack);
      console.log("Error", e.name);
      console.log("Error", e.message);
    }
  }

  evalCanvas(scene, time) {
    const t = time; // eslint-disable-line no-unused-vars
    const canvasData =  eval(`
    var x = ${scene.xInitialValue};
    var y = ${scene.yInitialValue};
    var canvasData = ctx.getImageData(0, 0, ${scene.xsize}, ${scene.ysize});
    for (var canvasx = 0; canvasx < ${scene.xsize}; canvasx++) {
      y = ${scene.yInitialValue};
      x = ${scene.xIncrement};
      for (var canvasy = 0; canvasy < ${scene.ysize}; canvasy++) {
        y = ${scene.yIncrement};
        this.drawPixel (canvasx,canvasy, (${scene.backgroundredcolour})%256, (${scene.backgroundgreencolour})%256, (${scene.backgroundbluecolour})%256, 255, canvasData);
      }
    }
    canvasData;`);
    return canvasData;
  }

  startrun(gameTick) {
    console.log('startrun:', this.lastTime);
    this.gameTick = gameTick;
    if (lastTime === 0) {
      // Once started, the loop never stops.
      // But this function is called to change tick functions.
      // Avoid requesting multiple frames per frame.
      const bindThis = this;
      requestAnimationFrame(function() { bindThis.tick(); } );
      this.lastTime = 0;
    }
  }

  stoprun() {
    this.startrun(null);
  }

  tick() {
    if (this.gameTick === null) {
      this.lastTime = 0;
      return;
    }
    const bindThis = this;
    requestAnimationFrame(function() { bindThis.tick(); } );
    const timeNow = Date.now();
    let elapsed = timeNow - this.lastTime;
    if (elapsed > 0) {
      if (this.lastTime !== 0) {
        if (elapsed > 1000) { // Cap max elapsed time to 1 second to avoid death spiral
          elapsed = 1000;
        }
        // Hackish fps smoothing
        const smoothElapsed = (elapsed + this.prevElapsed + this.prevElapsed2) / 3;
        this.gameTick(0.001 * smoothElapsed);
        this.prevElapsed2 = this.prevElapsed;
        this.prevElapsed = elapsed;
      }
      this.lastTime = timeNow;
    }
  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.scene.scene.xsize} height={this.props.scene.scene.ysize}/>
    );
  }
}

RenderBox.propTypes = {
  scene: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  time: PropTypes.object.isRequired
};

export default RenderBox;
