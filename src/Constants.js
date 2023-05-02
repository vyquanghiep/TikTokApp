import { Dimensions } from 'react-native';

export default {
  colors: {
    primary: '#fa3c6a',
    secondary: '#F5AF19',
    white: '#ffffff',
    black: '#000000',
    lightGray: '#DADEDF',
    error: '#f44336',
    info: '#2196F3',
    success: '#4caf50',
    warning: '#fb8c00',
    transparent: 'transparent',
    textColor: '#000000',
  },
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  images: {
    musicNoteImg: require('./assets/images/music-note.png'),
    floatingMusicNote: require('./assets/images/floating-music-note.png'),
    discImg: require('./assets/images/disc.png'),
    googleLogo: require('./assets/images/google-logo.png'),
    masterCard: require('./assets/images/master-card.jpg'),
  },
};
