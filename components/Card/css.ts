import { createUseStyles } from 'react-jss';
import { base } from '../../css/base';
import colors from '../../css/colors';
// import { label } from '../../css/type';

export default createUseStyles({
  card: {
    cursor: 'pointer',
    borderRadius: base(1),
    backgroundColor: colors.gray,
    border: 0,
    padding: `${base(1)} ${base(0.75)}`,
    // height: base(4),
    // display: 'inline-flex',
    alignItems: 'center',
    margin: `${base(0)} auto`,
    boxShadow: 'none',
    background: '#181818',
    flex: '1',
    isolation: 'isolate',
    // position: relative;
    // -webkit-transition: background-color .3s ease;
    transition: 'background-color .3s ease',
    width: '100%',
    // ...label,
  },
  title: {
    padding: `${base(1)} ${base(0)}`,
    fontSize: '14px',
  },
  image: {
    width: '200px',
    height: '200px',
    textAlign: 'center',
  },
  'color-none': {
    color: colors.antique,
  },
  'color-antique': {
    color: colors.antique,
  },
  'color-red': {
    color: colors.red,
  },
  'color-blue': {
    color: colors.blue,
  },
  'color-yellow': {
    color: colors.yellow,
  },
  'color-orange': {
    color: colors.orange,
  },
});
