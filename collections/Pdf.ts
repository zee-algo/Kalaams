import { CollectionConfig } from 'payload/types';

export type PdfType = {
    filename: string
    width: number
    height: number
    alt: string
    sizes: {
      card?: {
        filename: string
        width: number
        height: number
      }
      feature?: {
        filename: string
        width: number
        height: number
      }
    }
  }

const PDF: CollectionConfig = {
  slug: 'pdf',
  access: {
    create: (): boolean => true,
    read: (): boolean => true, // Everyone can read Media
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  upload: {
    staticURL: '/books',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default PDF;
