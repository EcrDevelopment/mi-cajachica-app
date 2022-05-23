
import { Link } from 'react-router-dom'


const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center p-3 " to='/' >
            <img src="log.png" alt="" width="40" height="32" className="d-inline-block align-text-top"/>  
            MI CAJA
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link  to='/' className="nav-link">inicio</Link>
              </li>
              <li className="nav-item">
                <Link  to='/registrarUsuario' className="nav-link" >registro Usuarios</Link>
              </li>            
            </ul>
          </div>
        </div>
      </nav>
    )
};


export default Navbar;