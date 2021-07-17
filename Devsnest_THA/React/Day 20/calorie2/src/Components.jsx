const Card = ({ title, val, description, id, deleteFun }) => {
    return (
      <div className="card">
        <div className="demo">
          <div className="image-container">
            <h1>{title}</h1>
          </div>
          <button className="btn" onClick={() => deleteFun(id)}> Delete </button>
        </div>
        <p className={val > 100 ? "red" : "green"}>
          {description} {val}
        </p>
      </div>
    );
  };
  export default Card;