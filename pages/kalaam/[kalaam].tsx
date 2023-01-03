/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
// import { Cell, Grid } from '@faceless-ui/css-grid';
import Link from 'next/link';
import Head from '../../components/Head';
import Template from '../../components/layout/Template';
import useStyles from '../../css/pages/kalaam';
import { Type as FooterType } from '../../globals/Footer';
import { Type as SocialMediaType } from '../../globals/SocialMedia';
import { Type as NaatType } from '../../collections/Kalaams';
// import GridContainer from '../../components/layout/GridContainer';
// import RenderBlocks from '../../components/RenderBlocks';
import Media from '../../components/Media/MediaWithControls';
// import Gutter from '../../components/layout/Gutter';
// import { AbsoluteNoise } from '../../components/Noise/AbsoluteNoise';
import RichText from '../../components/RichText';

export type Props = {
  kalaam: NaatType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Study: React.FC<Props> = (props) => {
  const { footer, socialMedia, kalaam } = props;
  const classes = useStyles();

  return (
    <Template
      className={classes.kalaams}
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={kalaam?.meta?.title || kalaam.title}
        description={kalaam?.meta?.description}
        keywords={kalaam?.meta?.keywords}
      />
      <div className={classes.parentDiv}>
        <header className={classes.header}>
          <div className={classes.label}>
            <Link href="/kalaams">
              <a className={classes.label}>Kalaam</a>
            </Link>
          </div>
        </header>

        <div className={classes.featuredMediaWrap}>
          {/* <Gutter
            // right
            className={classes.featuredMediaGutter}
          > */}
          <Media
            {...kalaam.image}
            preferredSize="feature"
            className={classes.featuredMedia}
          />
          {/* </Gutter> */}
        </div>
        <div>
          <h2 className={classes.title}>{kalaam.title}</h2>
          {/* <div> */}
          <RichText
            content={kalaam.content}
            className={classes.content}
          />
          {/* </div> */}
          {/* {(kalaam?.client || kalaam?.location || kalaam?.categories) && (
          <GridContainer>
            <Grid
              htmlElement="ul"
              className={classes.meta}
            >
              {kalaam?.client && (
                <Cell
                  htmlElement="li"
                  cols={3}
                  start={2}
                >
                  <div className={classes.metaLabel}>Client</div>
                  <div>{kalaam.client}</div>
                </Cell>
              )}
              {kalaam?.categories?.length > 0 && (
                <Cell
                  htmlElement="li"
                  cols={3}
                >
                  <div className={classes.metaLabel}>Categories</div>
                  <div>
                    {stukalaamdy.categories.map((category, i) => (
                      <span key={i}>
                        {category.title}
                        {i !== kalaam.categories.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </Cell>
              )}
              {kalaam?.location && (
                <Cell
                  htmlElement="li"
                  cols={3}
                  startM={2}
                >
                  <div className={classes.metaLabel}>Location</div>
                  <div>{kalaam.location}</div>
                </Cell>
              )}

              <AbsoluteNoise className={classes.backgroundNoise} />
            </Grid>
          </GridContainer>
        )} */}
        </div>
      </div>
      {/* <RenderBlocks layout={kalaam.layout} /> */}
    </Template>
  );
};

export default Study;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.kalaam;

  const studyReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/kalaams?where[id][equals]=${slug}`,
  );
  const studyData = await studyReq.json();

  return {
    props: {
      kalaam: studyData.docs[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const studyReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/kalaams?limit=100`,
  );
  const studyData = await studyReq.json();

  return {
    paths: studyData.docs.map(({ id }) => ({
      params: { kalaam: id },
    })),
    fallback: false,
  };
};
