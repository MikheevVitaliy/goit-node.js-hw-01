const contactsFs = require('./contacts');
const { program } = require('commander');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await contactsFs.listContacts();
      console.table(contacts);
      break;
    case 'get':
      const contact = await contactsFs.getContactById(id);
      console.log(contact);
      break;
    case 'add':
      const newContact = await contactsFs.addContact(name, email, phone);
      console.log(newContact);
      break;
    case 'update':
      const updateContact = await contactsFs.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;
    case 'remove':
      const removeContact = await contactsFs.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv).catch(err => console.error(err));

// ====================================
// const actionIndex = process.argv.indexOf('--action');
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   const id = process.argv[actionIndex + 3];
//   const name = process.argv[actionIndex + 3];
//   const email = process.argv[actionIndex + 5];
//   const phone = process.argv[actionIndex + 7];

//   invokeAction({ action, id, name, email, phone }).catch(err =>
//     console.error(err)
//   );
// }
// ====================================

// contacts
//   .listContacts()
//   .then(contacts => console.log(contacts))
//   .catch(err => console.error(err));

// contacts
//   .getContactById('rsKkOQUi80UsgVPCcLZZW')
//   .then(contacts => console.log(contacts))
//   .catch(err => console.error(err));

// contacts.listContacts().then(data => {
//   // console.log(typeof data);
//   // console.log(Array.isArray(data));
//   console.log(data);
//   // contacts.write(data);
// });

//   .catch(console.error);
// ====================================
// const fs = require('node:fs');
// const fs = require('node:fs/promises');
// ====================================
// // Чтение данных и вывод через колбэк =============
// fs.readFile(
//   // Название файла
//   'db/contacts.json',
//   { encoding: 'utf-8' },
//   // функция которая выполнится после чнения
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );
// ----------------------------------------------

// // Чтение данных и вывод через промисы =============
// fs.promises
//   .readFile(
//     // Название файла
//     'db/contacts.json',
//     { encoding: 'utf-8' }
//   )
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// // ------------------------------------

// Чтение данных и вывод через промисы =============
// fs.readFile(
//   // Название файла
//   'db/contacts.json',
//   { encoding: 'utf-8' }
// )
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// ------------------------------------

// С применением async await ==============
// async function readFile(path, options) {
//   const data = await fs.promises.readFile(path, options);
//   return data;
// }
// readFile('db/contacts.json', { encoding: 'utf-8' })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// ----------------------------------------

// Запись данных ====================
// fs.writeFile(
//   // Название файла
//   'db/text.txt',
//   'Helloo World',
//   { encoding: 'utf-8' }
// )
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// ------------------------------------

// Добавление данных ====================
// fs.appendFile(
//   // Название файла
//   'db/text.txt',
//   '-Привет мир\n',
//   { encoding: 'utf-8' }
// )
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// ------------------------------------

// ES6 ====================
// {
//   "type": "module"
// }
// ------------------------------------
