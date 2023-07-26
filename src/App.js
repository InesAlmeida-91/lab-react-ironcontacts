import { useState } from 'react';
import contacts from "./contacts.json";
import Oscar from "./images/oscar.png";
import Emmy from "./images/emmy.png";
import './App.css';

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  const addContact = () => {
    const remainingContacts = contacts.filter(
      contact => !contactsList.some(existingContact => existingContact.id === contact.id)
    );
  
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
  
      const updatedContactsList = [...contactsList, randomContact];
  
      setContactsList(updatedContactsList);
    }
  };

  const sortByPopularity = () => {
    const popularitySort = [...contactsList].sort((a,b) => b.popularity - a.popularity);

    setContactsList(popularitySort)
  }

  const sortByName = () => {
    const nameSort = [...contactsList].sort(function(a,b) {
      if(a.name < b.name) { 
        return -1
      };
      if(a.name > b.name) {
      return 1 
    };
      return 0
    })
    
    setContactsList(nameSort)
  }

  const deleteContact = (id) => {
    const updatedContactsList = contactsList.filter((contact) => contact.id !== id);
  
    setContactsList(updatedContactsList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map(contact => (
            <tr key={contact._id}>
              <td><img className="contact-img" src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && <img className="award-img" src={Oscar} alt='Oscar'/>}</td>
              <td>{contact.wonEmmy && <img className="award-img" src={Emmy} alt='Emmy'/>}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;