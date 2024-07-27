function Card({ text, title, children }) {
  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img src={children} className="card-img-top mt-1" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
