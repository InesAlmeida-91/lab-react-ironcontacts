import { useState } from 'react';
import contacts from "./contacts.json";
import Oscar from "./images/oscar.png";
import Emmy from "./images/emmy.png";
import './App.css';

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

//create function to add a new random contact for every click
const addContact = () => {
  //check all the remaining contact
  //contacts different from the contactList
  //if the contact doesn't belong to the contact list add it 
  //newContact.push
  //update the state with the new contact list
  //setContactsList(contacts + new contact)
}

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={ addContact }>Add Random Contact</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;