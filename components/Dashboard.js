import 'bootstrap/dist/css/bootstrap.css'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
            <div className="navbar-nav ">
                <a className="navbar-brand fs-1 ms-3 my-auto" href="#">LOADHITCH</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className={navStyles.color}>
                    <div className="navbar-nav ms-md-15 ms-3 ">
                        <a className="nav-link" href="#">Dashboard</a>
                        <a className="nav-link" href="#">Profile</a>
                        <a className="nav-link" href="#">Quotes</a>
                        <a className="nav-link" href="#">Trip Admin</a>
                        <a className="nav-link" href="#">Folder</a>
                        <a className="nav-link" href="#">Inbox</a>
                        <div className="float-right"> <a className="nav-link" href="#">Inbox</a></div>
                    </div>
                </div>
            </div >
        </nav >
    )
}
export default Nav