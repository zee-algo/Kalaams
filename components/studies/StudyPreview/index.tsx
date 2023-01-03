import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import { Type as KalaamsType } from '../../../collections/Kalaams';
import useStyles from './css';

type Props = {
  template: number
  kalaam: KalaamsType
  first: boolean
  last: boolean
}

const templates = {
  1: One,
  2: Two,
  3: Three,
};

const StudyPreview: React.FC<Props> = ({ template, kalaam, first, last }) => {
  // console.log('template', template);
  const Template = templates[template];
  const classes = useStyles({ first, last });

  return (
    <div className={classes.preview}>
      <Template {...kalaam} />
    </div>
  );
};

export default StudyPreview;
