import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to='/'>Home</NavLink>
      {galleries.map(gallery => 
        <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
      )}
    </nav>
  )
};

export default GalleryNavigation;