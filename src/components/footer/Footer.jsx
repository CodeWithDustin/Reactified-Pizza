const Footer = ({ isOpen }) => {
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order-container">
          <p>
            We're open! From 10:00 AM to 10:00 PM. Come visit us or order
            online!
          </p>
          <button>Order</button>
        </div>
      ) : (
        <p>
          We're closed, we welcome you to return between 10:00 AM and 10:00 PM.
        </p>
      )}
    </footer>
  );
};

export default Footer;
