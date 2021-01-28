import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
		<div>
		  <div><h2 className="mb-0 pb-0"><Link className="navbar-brand p-0 m-0" to="/">Imran Khan</Link></h2></div>
		  <div className="text-light">Web Designer &amp; Developer</div>
			
		</div>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav ml-auto mr-5">
		      <li className="nav-item mr-3 border-bottom border-danger text-light">
		        <Link className="nav-link" to="/">Home</Link>
		      </li>
		      <li className="nav-item mr-3 border-bottom border-danger text-light">
		        <Link className="nav-link" to="/projects">Projects</Link>
		      </li>
		      <li className="nav-item mr-3 border-bottom border-danger text-light">
		        <Link className="nav-link" to="/contact">Contact</Link>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
}

export default Navbar;