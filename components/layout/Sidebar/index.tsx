import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
// import GridContainer from '../GridContainer';
// import Gutter from '../Gutter';
import Link from '../../Link';
import useStyles from './css';

// type Props = { };

const sidebarOptions = [
  {
    id: 0,
    name: 'Home',
    link: '/',
  },
  {
    id: 1,
    name: 'Kalaams',
    link: '/kalaams',
  },
  {
    id: 2,
    name: 'Hamd',
    link: '/hamd',
  },
  {
    id: 3,
    name: 'Naats',
    link: '/naats',
  },
  {
    id: 4,
    name: 'Books',
    link: '/books',
  },
];

const Sidebar: React.FC<unknown> = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Gutter
        right
        className={classes.bgWrap}
      >
        <div className={classes.bg} />
      </Gutter> */}
      <div className={classes.wrap}>
        {/* <Grid> */}
        <div className={classes.logoCell}>Logo</div>
        {sidebarOptions.map((el) => (
          <Cell
            cols={12}
            htmlElement="ul"
            className={classes.nav}
            key={el.id}
          >
            <Link
              href={el.link}
              url={el.link}
            >
              <span className={classes.link}>{el.name}</span>
            </Link>
          </Cell>
        ))}
        {/* </Grid> */}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
