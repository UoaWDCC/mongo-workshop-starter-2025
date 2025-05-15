import { Contact } from "./contacts-schema.js";

/**
 * Retrieves all contacts from the database.
 *
 * @returns a list of contacts
 */
export async function retrieveContacts() {
  return await Contact.find();
}

/**
 * Creates a new contact.
 *
 * @param contact the contact to create. Must have a name. optionally a phoneNumber and funFact.
 * @returns the newly created contact, including a uniquely generated _id value.
 * @throws error if the contact has no name, or a non-unique name.
 */
export async function createContact(contact) {
  const dbContact = new Contact(contact);
  await dbContact.save();
  return dbContact;
}

/**
 * Updates the contact with the given _id.
 * @param id the id to search
 * @param contact the update info
 * @returns true if a contact was updated, false otherwise.
 * @throws error if trying to update the contact's name to another name that's already taken.
 */
export async function updateContact(id, contact) {
  delete contact._id; // Don't allow changing the _id
  return await Contact.findByIdAndUpdate(id, contact, { new: true, runValidators: true });
}

/**
 * Deletes the contact with the given id, if any.
 *
 * @param id the id to search
 */
export async function deleteContact(id) {
  return await Contact.findByIdAndDelete(id);
}
