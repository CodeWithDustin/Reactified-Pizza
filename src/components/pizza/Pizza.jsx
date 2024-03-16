const Pizza = ({ pizza }) => {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <p>${pizza.price}</p>
      {pizza.soldOut && <span className="sold-out-label">Sold Out</span>}
    </li>
  );
};

export default Pizza;
