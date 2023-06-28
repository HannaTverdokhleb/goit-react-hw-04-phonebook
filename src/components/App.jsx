import { useState, useEffect } from 'react';
import shortid from 'shortid';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchFilter from 'components/SearchFilter/SearchFilter';


const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if(contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    let isExist = contacts.find(contact => name === contact.name);
    if (isExist) {
      alert(name + " is allready in contacts");
      return
  }

  let newContact = {
    id: shortid.generate(),
    name,
    number
  };
  setContacts([...contacts, newContact]);
}

  const searchHandler = (query) => {
    setFilter(query);
  }

  const deleteHandler = (e) => {
    let name = e.target.value;
    let contactsCopy = contacts;
    contactsCopy = contactsCopy.filter((el) => !el.name.includes(name));
    setContacts(contactsCopy);
  }

  return (
    <div className="container">
      <h1 className="main-title">Phonebook</h1>
      <AddContactForm onSubmit={formSubmitHandler} />
      
      <h2 className="title">Contacts</h2>
      <SearchFilter toFind={searchHandler} />

      <ContactList searchValue={filter} contacts={contacts} deleteContact={deleteHandler} />
    </div>
  )
}


export default App;
