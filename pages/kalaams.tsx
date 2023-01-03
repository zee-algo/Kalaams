import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { GetStaticProps } from 'next';
import Head from '../components/Head';
import Template from '../components/layout/Template';
import useStyles from '../css/pages/studies';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';
import { Type as StudyType } from '../collections/Kalaams';
// import GridContainer from '../components/layout/GridContainer';
import StudyPreview from '../components/studies/StudyPreview/index';

export type Props = {
  kalaams: StudyType[];
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Kalaams: React.FC<Props> = (props) => {
  const { footer, socialMedia, kalaams } = props;
  const classes = useStyles();

  let previewTemplate = 1; // 0
  return (
    <Template
      className={classes.studies}
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title="Kalaams"
        description="Find case studies, blog posts, and more, all related to architecture and construction, here."
        keywords="engineering, construction, architecture, design build"
      />
      {/* <GridContainer> */}
      <header>
        <h1 className={classes.title}>Kalaams</h1>
      </header>
      {/* </GridContainer> */}
      {/* <GridContainer> */}
      <Grid>
        {kalaams.map((kalaam, i) => {
          if (previewTemplate === 0) {
            previewTemplate = 1;
          } else if (previewTemplate === 1) {
            previewTemplate = 2;
          } else if (previewTemplate === 2) {
            previewTemplate = 3;
          } else if (previewTemplate === 3) {
            previewTemplate = 1;
          }

          return (
            <Cell
              cols={2}
              colsM={2}
              colsL={2}
              colsXL={2}
              key={kalaam.title}
            >
              <StudyPreview
                first={i === 0}
                last={i === Kalaams.length - 1}
                key={i}
                kalaam={kalaam}
                template={1} // previewTemplate
              />
            </Cell>
          );
        })}
      </Grid>
      {/* </GridContainer> */}
    </Template>
  );
};

export default Kalaams;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = ctx.params?.page || 1;

  const kalaamsReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/kalaams?page=${page}`,
  );
  const kalaamsData = await kalaamsReq.json();

  return {
    props: {
      kalaams: kalaamsData.docs,
    },
    revalidate: 1,
  };
};
