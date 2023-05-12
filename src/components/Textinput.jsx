export default function Textinput({
  inputDescription = 'Descrição do input',
  valueInput = 'Valor padrão',
  onInputChanger = null,
  id = 'id_input_text',
  autoFocus,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChanger) {
      const newValue = currentTarget.value;
      onInputChanger(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {inputDescription}
      </label>
      <input
        autoFocus={autoFocus}
        className="border p-2"
        type="text"
        name="inputName"
        id={id}
        value={valueInput}
        onChange={handleInputChange}
      />
    </div>
  );
}
