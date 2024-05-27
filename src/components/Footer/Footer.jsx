import "./Footer.css";
export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>{date} &copy; Bowen University. All rights reserved</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};
