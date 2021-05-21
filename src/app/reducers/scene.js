import {combineForms} from 'react-redux-form';

const initialScene = {
  xsize: 300,
  ysize: 300,
  backgroundredcolour: '0',
  backgroundgreencolour: '0',
  backgroundbluecolour: '0',
  timeIncrement: 't+1',
  xInitialValue: 0,
  xIncrement: 'x+1',
  yInitialValue: 0,
  yIncrement: 'y+1'
};

export default combineForms({
  scene: initialScene
});
