import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Blog1 from "../img/Blog1.jpg";
import Blog2 from "../img/Blog2.jpg";
import Blog3 from "../img/Blog3.jpg";
function Blog() {
  return (
    <>
      <Navbar />
      <div className="row justify-content-center text-center">
        <Card
          title="Meditazione Mattutina: Inizia la Tua Giornata con Consapevolezza e Speranza"
          text="Risveglia la Tua Mente e il Tuo Cuore per un Nuovo Inizio"
        >
          {Blog1}
        </Card>
        <Card
          title="Rilassamento Muscolare Delicato per il Burnout e la Fatica Cronica"
          text="Guida a una Profonda Guarigione e Rilassamento"
        >
          {Blog2}
        </Card>
        <Card
          title="Meditazione di Consapevolezza: Alleviare lo Stress e le Preoccupazioni"
          text="Ritrova la Calma Interiore e l'Equilibrio Emotivo"
        >
          {Blog3}
        </Card>
      </div>
    </>
  );
}

export default Blog;
