import { Link } from 'react-router-dom'

function About() {

  return (
    <>
      <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/about">About</Link>
          </li>
          <li>
             <Link to="/products">Products</Link>
          </li>
       </ul>
      </nav>
    </>
  )
}

export default About
