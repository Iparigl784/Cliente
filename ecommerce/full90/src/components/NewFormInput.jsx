const NewFormInput = ({ label, id, error, className, required = false, textarea, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {textarea ?? ( <input id={id} required={required} className={className} {...props} />)}
      {textarea && (<textarea id={id} required={required} className={className} {...props}></textarea>)}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default NewFormInput;