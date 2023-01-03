import { createUseStyles } from 'react-jss';
import { small } from '../sizes';
import { label } from '../type';

export default createUseStyles({
  studies: {
    height: '100%',
    paddingTop: small, // headerHeight
  },
  title: {
    ...label,
  },
});
