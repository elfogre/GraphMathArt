import { combineForms } from 'react-redux-form';

const initialScene = {
    xsize: 300,
    ysize: 300,
    backgroundredcolour:   '255',
    backgroundgreencolour: '255',
    backgroundbluecolour:  '255',
    timeIncrement: 1
  };

export const scene = combineForms({
    scene: initialScene,
  });
