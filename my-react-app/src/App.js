
import Osama from "./Osama.jsx";
import Card from "./Card.jsx";

function App() {
  return (
    <>
    <Osama />
    <h1 className="mb-10">Cyber dunya</h1>
    <div className="flex justify-around">
    <Card name="Osama Zafar" des="Computer scientist" />
    <Card name="Laiba " des="Doctor" />
    <Card name="Ali Haider" des="Software Engineer" />
    </div>


    </>
  );
}

export default App;
