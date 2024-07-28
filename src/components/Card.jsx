function Card({ text, title, img, onRead }) {
  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top mt-1" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary" onClick={onRead}>
          Read
        </button>
      </div>
    </div>
  );
}

export default Card;
