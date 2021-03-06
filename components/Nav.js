import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
            <div className="navbar-nav ">
                <a className="navbar-brand fs-1 ms-3 my-auto" href="/">LOADHITCH</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className={navStyles.color}>
                    <ul className="navbar-nav ms-md-15 ms-3 ">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/profile">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Quotes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trip Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Folder</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inbox</a>
                        </li>

                    </ul>
                </div>
            </div >
        </nav >


        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //   </a>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                         <li><a className="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr className="dropdown-divider" /></li>
        //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //                 </li>
        //             </ul>
        //             <form className="d-flex">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        //                 <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>
    )
}
export default Nav