import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import s from "./ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <label className={s.FormLabel}>
        Name
        <input
          className={s.FormInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={s.FormLabel}>
        Number
        <input
          className={s.FormInput}
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
