import { defineField, defineType } from "sanity";

// sanity/schemaTypes/experience.ts
export const experience = defineType({
    name: 'experience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        defineField({ name: 'company', title: 'Company Name', type: 'string'}),
        defineField({ name: 'role', title: 'Job Role', type: 'string'}),
        defineField({ name: 'startDate', title: 'Start Date', type: 'date'}),
        defineField({ name: 'endDate', title: 'End Date (Leave blank if Current', type: 'date'}),
        defineField({ name: 'responsibilities', title: 'Responsibilities', type: 'array', of: [{ type: 'block' }]})
    ],
});