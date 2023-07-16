import './index.css'
import {FaSistrix, FaAngleDown} from 'react-icons/fa'

const Header = () => (
  <nav className="head-container">
    <div className="first-part">
      <h1 className="main-heading">EDYODA</h1>
      <div className="items">
        <p className="para">Courses</p>
        <FaAngleDown />
      </div>
      <div className="items">
        <p className="para">Programs</p>
        <FaAngleDown />
      </div>
    </div>
    <div className="second-part">
      <FaSistrix />
      <p className="login-name">Log in</p>
      <button type="button" className="button">
        JOIN NOW
      </button>
    </div>
  </nav>
)

export default Header
