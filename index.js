const contactsFunction = require("./contacts");

const fn = async () => {
  const data = await contactsFunction.addContact(
    "John Martin",
    "demon@gmail.com",
    "+380 48 348 34"
  );

  console.log(data);
};

fn();
