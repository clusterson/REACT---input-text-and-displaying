import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    setDisplayedText(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {displayedText && <p>{displayedText}</p>}
    </div>
  );
}

export default App;
