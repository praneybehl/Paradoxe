import { userHasContact } from '/imports/api/collections/users';

Security.defineMethod('ifHasContact', {
  fetch: [],
  transform: null,
  allow(type, arg, userId, doc) {
    return userId && userHasContact(Meteor.user(), doc[arg.contactIdField]);
  },
});
