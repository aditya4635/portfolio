

const FormField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  isTextArea = false,
  required = true,
  rows = 5,
}) => {
  return (
    <label className="space-y-3">
      <span className="field-label">{label}</span>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className="field-input"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="field-input"
          placeholder={placeholder}
        />
      )}
    </label>
  );
};

export default FormField;
