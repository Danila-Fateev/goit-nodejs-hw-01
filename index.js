const contactsFunction = require("./contacts");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(contactsFunction.listContacts());
      break;

    case "get":
      contactsFunction.getContactById(id);
      break;

    case "add":
      contactsFunction.addContact(name, email, phone);
      break;

    case "remove":
      contactsFunction.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
