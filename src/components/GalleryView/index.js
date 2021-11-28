import { Route, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));
  
  return (
    <h2>
      {gallery.name}
      <Route exact path='/galleries/:galleryId'>
        {gallery.objects.map(art => 
          <ArtImageTile key={art.id} art={art} galleryId={galleryId} />
        )}
      </Route>
      <Route path='/galleries/:galleryId/art/:artId'>
        <ArtDescription gallery={gallery} />
      </Route>
    </h2>
  );
};

export default GalleryView;