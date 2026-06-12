// sanity/schemaTypes/profile.ts

import { defineType, defineField } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const profile = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'lastName',
            title: 'LastName',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
        }),
        defineField({
            name: 'animatedWords',
            title: 'Animated Words (Hero Loop)',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Words that cycle in the Hero typewriter/flip effect.'
        }),
        defineField({
            name: 'profileImage',
            title: 'ProfileImage',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'bio',
            title: 'Bio (Markdown/Block Text',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ]
})