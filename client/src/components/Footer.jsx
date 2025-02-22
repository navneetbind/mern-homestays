import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Link to="/"><img src="/assets/logo.png" alt="logo" /></Link>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 8851442817</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>navneetkumar1705@gmail.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer