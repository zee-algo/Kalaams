import Link from 'next/link';
import React from 'react';
import { Styles } from 'react-jss';
import Media from '../Media';
import Parallax from '../Parallax';
import useStyles from './css';

type Props = {
  label?: string;
  className?: string;
  css?: Styles;
  image?: unknown;
  id: string;
  title: string;
  type: string;
};

const Card: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { image, id, title } = props;
  return (
    <Link href={`/kalaam/${id}`}>
      <div className={classes.card}>
        {image && (
          <Parallax yDistance={100}>
            <Media
              preferredSize="portrait"
              {...image}
              className={classes.image}
            />
          </Parallax>
        )}
        <p className={classes.title}>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
