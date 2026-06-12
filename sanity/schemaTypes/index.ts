
import { type SchemaTypeDefinition } from 'sanity'
import { profile } from './profile'
import { project } from './project'
import { experience } from './experience'
import { contact } from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project, experience, contact],  
}
