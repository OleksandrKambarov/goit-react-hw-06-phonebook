import ContactList from './Components/ContactsList';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
