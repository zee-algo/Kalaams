import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Kalaams from './collections/Kalaams';
import Books from './collections/Books';
import Pdf from './collections/Pdf';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    Kalaams,
    Books,
    Pdf,
  ],
});
