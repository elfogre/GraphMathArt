import React, {PropTypes, Component} from 'react';

var timeSign = 1;
var ctx;

var lastTime = 0;
var gameTick = null;
var prevElapsed = 0;
var prevElapsed2 = 0;

class RenderBox extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ctx = this.refs.canvas.getContext('2d');
    this.updateCanvas();
    this.startrun(this.updateCanvas);

  }
  componentDidUpdate() {
    //this.updateCanvas();
  }
  // That's how you define the value of a pixel //
  drawPixel (x, y, r, g, b, a, canvasData) {
    var index = (x + y * this.props.scene.scene.xsize) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
  }
  updateCanvas() {
    var t = this.props.time.time;
    var canvasData = eval("var canvasData = ctx.getImageData(0, 0, "+this.props.scene.scene.xsize+", "+this.props.scene.scene.ysize+"); for (var x = 0; x < "+this.props.scene.scene.xsize+"; x++) { for (var y = 0; y < "+this.props.scene.scene.ysize+"; y++) { this.drawPixel (x,y, "+this.props.scene.scene.backgroundredcolour+"%256, "+this.props.scene.scene.backgroundgreencolour+"%256, "+this.props.scene.scene.backgroundbluecolour+"%256, 255, canvasData);}}; canvasData;");
    if (! this.props.time.timepaused) {
      this.props.actions.setTime(eval(this.props.scene.scene.timeIncrement));
      //this.props.actions.setTime(t+1);
    }
    ctx.putImageData(canvasData, 0, 0);
  }



  startrun(gameTick) {
    console.log('startrun:', this.lastTime);
    var prevTick = this.gameTick;
    this.gameTick = gameTick;
    if (lastTime == 0)
    {
      // Once started, the loop never stops.
      // But this function is called to change tick functions.
      // Avoid requesting multiple frames per frame.
      var bindThis = this;
      console.log('startrun2:');
      requestAnimationFrame(function() { bindThis.tick(); } );
      this.lastTime = 0;
    }
  }

  stoprun() {
    this.startrun(null);
  }

  tick() {
    //console.log('tick:');
    if (this.gameTick !== null)
    {
      var bindThis = this;
      requestAnimationFrame(function() { bindThis.tick(); } );
    }
    else
    {
      this.lastTime = 0;
      return;
    }
    var timeNow = Date.now();
    var elapsed = timeNow - this.lastTime;
    if (elapsed > 0)
    {
      if (this.lastTime !== 0)
      {
        if (elapsed > 1000) // Cap max elapsed time to 1 second to avoid death spiral
        elapsed = 1000;
        // Hackish fps smoothing
        var smoothElapsed = (elapsed + this.prevElapsed + this.prevElapsed2)/3;
        this.gameTick(0.001*smoothElapsed);
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

export default RenderBox;
