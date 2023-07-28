import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputValueChange = ({target}) => {
    setInputValue(target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitForm} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar gifs ..."
        value={inputValue}
        onChange={onInputValueChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
