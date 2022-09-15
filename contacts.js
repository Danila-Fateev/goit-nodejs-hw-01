const fs = require("fs");
const path = require("node:path");

const contactsPath = path.join(__dirname, "contacts.json");

console.log(contactsPath);

function listContacts() {
  const listOfContacts = fs.readFile(contactsPath, "utf-8");
  console.log(listOfContacts);
  return JSON.parse(listOfContacts);
}

function getContactById(contactId) {
  const listOfContacts = listContacts();
  const contactFoundById = listOfContacts.find((item) => item.id === contactId);
}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
