import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleOpen(e) {
    e.preventDefault()

    if (name.trim() === "") {
      return
    }
    
    setIsOpened(true);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="container">
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>
      {!isOpened ? (
        <div className="envelope closed">
          <h2>💌 A Valentine Message</h2>
          <form onSubmit={handleOpen}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <button onClick={handleOpen}>Open Envelope</button>
          </form>
        </div>
      ) : (
        <div className="envelope opened">
          <h2>💖 Dear {name},</h2>
          <p>
            Happy Valentine's Day, You mean more to me than words can explain.
            Even from a distance, my heart chooses you every single day
          </p>
          <p className="signature">- Yours always</p>
        </div>
      )}
    </div>
  );
}

export default App;
