import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

export type Type = {
  title: string;
  slug: string;
};

const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'book',
      label: 'Book',
      type: 'upload',
      relationTo: 'pdf',
    },
    // {
    //   name: 'type',
    //   label: 'Type',
    //   type: 'select',
    //   options: [
    //     {
    //       label: 'Hamd',
    //       value: 'hamd',
    //     },
    //     {
    //       label: 'Naat',
    //       value: 'naat',
    //     },
    //     {
    //       label: 'Manqabat',
    //       value: 'manqabat',
    //     },
    //   ],
    //   required: true,
    // },
    // slug,
  ],
};

export default Books;
