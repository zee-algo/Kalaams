/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Link from 'next/link';
// import { Grid, Cell } from '@faceless-ui/css-grid';
import { Type as KalaamsType } from '../../../../collections/Kalaams';
// import GridContainer from '../../../layout/GridContainer';
import useStyles from './css';
// import Button from '../../../Button';
// import Parallax from '../../../Parallax';
// import Media from '../../../Media';
import Card from '../../../Card';

const StudyPreviewOne: React.FC<KalaamsType> = (props) => {
  // const { title, meta, id, previewMedia } = props;
  const classes = useStyles();

  // console.log("props", props);

  return (
    <Card {...props} />
    // <GridContainer>
    // <div>
    // {/* <h2>
    // <Link href={`/kalaam/${id}`}>
    //   <a className={classes.title}>{title}</a>
    // </Link>
    // </h2> */}
    // {/* <Grid> */}
    // {/* <Cell
    //     start={3}
    //     startM={2}
    //     cols={6}
    //   > */}
    // {/* <p>{meta?.description}</p> */}
    // {/* <Link href={`/kalaam/${id}`}>
    //   <a className={classes.link}>
    //     <Button label="Read the Naat" />
    //   </a>
    // </Link> */}
    // {/* </Cell> */}
    // {/* </Grid> */}
    // {/* <Grid>
    // {previewMedia?.[0]?.media && (
    //   <Cell
    //     cols={7}
    //     colsM={4}
    //     className={classes.previewMediaOne}
    //   >
    //     <Parallax yDistance={100}>
    //       <Media
    //         preferredSize="portrait"
    //         {...previewMedia[0].media}
    //       />
    //     </Parallax>
    //   </Cell>
    // )}
    //   {previewMedia?.[1]?.media && (
    //     <Cell
    //       cols={5}
    //       colsM={4}
    //       className={classes.previewMediaTwo}
    //     >
    //       <Parallax yDistance={50}>
    //         <Media
    //           preferredSize="portrait"
    //           {...previewMedia[1].media}
    //         />
    //       </Parallax>
    //     </Cell>
    //   )}
    // </Grid> */}
    // {/* </GridContainer> */}
    // </div>
  );
};

export default StudyPreviewOne;
