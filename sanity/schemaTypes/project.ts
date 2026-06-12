// sanity/schemaTypes/project.ts
import { defineType, defineField } from 'sanity';
import { CaseIcon } from '@sanity/icons';

export const project = defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    icon: CaseIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Web Application', value: 'web' },
                    { title: 'Mobile Application', value: 'mobile' },
                    { title: 'Infrastructure / Open Source', value: 'infra' },
                ],
            }
        }),
        defineField({
            name: 'liveUrl',
            title: 'Live URL',
            type: 'url'
        }),
        defineField({
            name: 'githubUrl',
            title: 'Github URL',
            type: 'url',
        }),
        defineField({
            name: 'isFeatured',
            title: 'Feature on Homepage',
            type: 'boolean',
            initialValue: false,
        })
    ]
})
