import { Link, useParams } from 'react-router-dom';
import './ArtImageTile.css';

const ArtImageTile = ({ art }) => {
  const { galleryId } = useParams();

  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img className="artwork" src={art.primaryimageurl} alt="artwork"/>
    </Link>
  );
};

export default ArtImageTile;