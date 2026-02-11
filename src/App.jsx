import { useState } from "react";

// const loveMessages = [
//   "Happy Valentine's Day! You mean more to me than words can explain.",
//   "Even from a distance, my heart chooses you every single day.",
//   "You are my favorite notification and my sweetest thought.",
//   "Loving you feels easy, natural, and endlessly beautiful.",
//   "Every day with you in my heart is a good day.",
// ];

const loveMessages = [
  "My love, you are sweeter than Agege bread and hotter than Lagos afternoon sun. Loving you is my full-time job and I no dey resign. Happy Valentine's my love!",

  "Even if NEPA takes light and everywhere is dark, your love still dey shine for my life. You be my constant power supply. Happy Valentine's my love!",

  "If loving you was transport fare, I go pay am without asking for change. Because with you, I don already reach my destination. Happy Valentine's my love!",

  "You be my answered prayer, my soft place to land, and the only person wey fit calm my stubborn head. Na you be my person. Happy Valentine's my love!",

  "In this life of hustle and wahala, you are my peace. No matter the distance, my heart dey with you — steady and sure. Happy Valentine's my love!",
];



function App() {
  const [name, setName] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [message, setMessage] = useState("");


  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }

  function handleOpen(e) {
    e.preventDefault()

    if (name.trim() === "") {
      return
    }

     const randomIndex = Math.floor(Math.random() * loveMessages.length);
    
    setMessage(loveMessages[randomIndex]);
    
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
          <h2>💌 A Valentine Message 🌹</h2>
          <form onSubmit={handleOpen}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={handleOpen}>Open Envelope</button>
          </form>
        </div>
      ) : (
        <div className="envelope opened">
          <h2>💖 Dear {name},</h2>
          <p>{message}</p>
          <p className="signature">- Yours always 💘</p>
        </div>
      )}
    </div>
  );
}

export default App;
