import ContactList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p className="App-find">Find contacts by name</p>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
