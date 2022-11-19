import React from 'react';
import './FormNewItem.css';
import { nanoid } from 'nanoid';

function FormNewItem(props) {
  // Tracking Form Data
  const [formData, setFormData] = React.useState({
    id: '',
    text: '',
  });

  //Handel OnChange
  const handleChange = (event) => {
    const { name, value } = event.target;

    const formatValue =
      value.length === 0
        ? value
        : value[0].toUpperCase() + value.substring(1);
    setFormData(() => {
      return {
        id: nanoid(5),
        [name]: formatValue,
      };
    });
  };

  //Handel OnSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    //Comunicating with Parent
    props.addNewTodo(formData);
    setFormData({ id: '', text: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        className="form-new__input"
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Buy a Book"
      />
      <button
        type="submit"
        className="new-todo__btn"
      >
        Add Goal
      </button>
    </form>
  );
}

export default FormNewItem;
