import type {StructureResolver} from 'sanity/structure'
import { UserIcon, EnvelopeIcon } from '@sanity/icons';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Sections')
    .items([
      // Profile Singleton Configuration
      S.listItem()
        .title('Profile Settings')
        .icon(UserIcon)
        .child(
          S.document()
            .schemaType('profile')
            .documentId('singleton-profile') // Static ID guarantees a single entry
        ),
        S.divider(),

        // Standard Collections
        S.documentTypeListItem('project').title('Projects Portfolio'),
        S.documentTypeListItem('experience').title('Professional Timeline'),
        S.divider(),


        // Form Submissions with Filtered Views
        S.listItem()
          .title('Form Inbox')
          .icon(EnvelopeIcon)
          .child(
            S.list()
              .title('Inbox Sub-views')
              .items([
                S.listItem()
                  .title('New Submissions')
                  .child(
                    S.documentList()
                      .title('Unread Messages')
                      .filter('_type == "contact" && status == "new"')
                  ),
                S.listItem()
                  .title('Archived Messages')
                  .child(
                    S.documentList()
                      .title('Archive')
                      .filter('_type == "contact" && status = "archived"')
                  ),
              ]),
          ),
    ]);
   