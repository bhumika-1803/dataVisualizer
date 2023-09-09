import { Link } from "react-router-dom";

export function Navbar({theme,changeTheme}) {

  return (
    <div className={theme?"navlight":"nav"}> 
      <div className="navLeft">      
        <Link className="nav_a" to="/">HOME</Link>
      </div>
      <div className="navRight">        
        <Link className="nav_a" to="/about">ABOUT</Link>
        <Link className="nav_a" to="/contact">CONTACT US</Link>
        {theme?
        <div className="nav_a" onClick={()=>changeTheme(!theme)}>🌜DARKMODE</div>
        :<div className="nav_a" onClick={()=>changeTheme(!theme)}>☀️LIGHTMODE</div>}
      </div>
    </div>
  );
}