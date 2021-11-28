import { Link } from 'react-router-dom';

const ArtImageTile = ({ art, galleryId }) => {
  
  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.primaryimageurl} alt="artwork"/>
    </Link>
  )
};

export default ArtImageTile;