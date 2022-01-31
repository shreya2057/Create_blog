import "./NavBar.css"


const NavBar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <div className="brand">
                    <a href="/">CreateBlogApp</a>
                </div>
                <div className="nav-menu">
                    <div className="about">
                        <a href="#">About</a>
                    </div>
                    
                    <div className="new-blog">
                        <a href="#">New Blog</a>
                    </div>
                </div>
            </div>
            
        </nav>
     );
}
 
export default NavBar;