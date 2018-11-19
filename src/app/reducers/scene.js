import {combineForms} from 'react-redux-form';

const initialScene = {
  xsize: 300,
  ysize: 300,
  backgroundredcolour: '0',
  backgroundgreencolour: '0',
  backgroundbluecolour: '0',
  timeIncrement: 't+1'
};

export default combineForms({
  scene: initialScene
});
