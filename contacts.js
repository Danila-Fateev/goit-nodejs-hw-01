const fs = require("fs/promises");
const path = require("node:path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const listOfContacts = await fs.readFile(contactsPath, "utf-8");
  const parsedListOfContacts = JSON.parse(listOfContacts);
  return parsedListOfContacts;
};

const getContactById = async (contactId) => {
  const listOfContacts = await listContacts();
  const contactFoundById = listOfContacts.find(
    (item) => item.id.toString() === contactId.toString()
  );
  console.log(contactFoundById);
  await fs.writeFile(contactsPath, JSON.stringify(listOfContacts, null, 2));

  return contactFoundById;
};

const removeContact = async (contactId) => {
  const listOfContacts = await listContacts();
  const contactIndex = listOfContacts.findIndex(
    (item) => item.id.toString() === contactId.toString()
  );
  listOfContacts.splice(contactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(listOfContacts, null, 2));
  console.log(listOfContacts);
  return listOfContacts;
};

const addContact = async (name, email, phone) => {
  const listOfContacts = await listContacts();
  const newContact = { id: shortid.generate(), name, email, phone };
  listOfContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(listOfContacts, null, 2));
  console.log(listOfContacts);
  return listOfContacts;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
