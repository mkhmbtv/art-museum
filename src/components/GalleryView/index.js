import { Route, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";
import './GalleryView.css';

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));
  
  return (
    <div>
      <h2>{gallery.name}</h2>
      <div className="art-image-container">
        <Route exact path='/galleries/:galleryId'>
          {gallery.objects.map(art =>
            <ArtImageTile key={art.id} art={art} />
          )}
        </Route>
      </div>
      <Route path='/galleries/:galleryId/art/:artId'>
        <ArtDescription gallery={gallery} />
      </Route>
    </div>
  );
};

export default GalleryView;