const fs = require("fs");
const path = require("node:path");

const contactsPath = path.basename("/db/contacts.json");

console.log(contactsPath);

function listContacts() {}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
