import { defineField, defineType } from "sanity";

// sanity/schemaTypes/contact.ts
export const contact = defineType({
    name: 'contact',
    title: 'Contact Form Submissions',
    type: 'document',
    fields: [
        defineField({
            name: 'name', title: 'Sender Name', type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'email', title: 'Email', type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'subject', title: 'Subject', type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'message', title: 'Message', type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'status', title: 'Status', type: 'string', options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Archived', value: 'archived' }
                ],
            },
            initialValue: 'new',
        }),
    ],
});