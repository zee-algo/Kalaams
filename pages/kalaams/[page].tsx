import { GetServerSideProps, GetStaticPaths } from 'next';
import Studies, { getStaticProps as sharedGetStaticProps } from '../kalaams';

export default Studies;

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetStaticProps.bind(this);
  return func(ctx);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const kalaamsReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/kalaams`,
  );
  const kalaamsData = await kalaamsReq.json();

  return {
    paths: Array.from(Array(kalaamsData.totalPages)).map((page, i) => ({
      params: { page: (i + 1).toString() },
    })),
    fallback: false,
  };
};
