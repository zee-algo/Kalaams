import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

export type Type = {
  title: string
  slug: string
}

const Kalaams: CollectionConfig = {
  slug: 'Kalaams',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        {
          label: 'Hamd',
          value: 'hamd',
        },
        {
          label: 'Naat',
          value: 'naat',
        },
        {
          label: 'Manqabat',
          value: 'manqabat',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
      // admin : {
      //   components: RichText
      // }
    },
    {
      name: 'book',
      label: 'Book',
      type: 'select',
      options: [
        {
          label: 'Hadaiq e Bakhshish',
          value: 'Hadaiq_e_Bakhshish',
        },
        {
          label: 'Zoq e Naat',
          value: 'Zoq_e_naat',
        },
      ],
      required: true,
    },
    slug,
  ],
};

export default Kalaams;
