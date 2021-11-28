import { Link, useParams } from 'react-router-dom';

const ArtDescription = ({ gallery }) => {
  const { artId } = useParams();
  const art = gallery.objects.find(object => object.id === parseInt(artId));
  
  return (
    <div>
      <Link to={`/galleries/${gallery.id}`}>
        Back to Gallery
      </Link>
      <div>
        <a href={art.url}>{art.title}</a>
        <div className='artwork-images'>
          {art.images.map(image => 
            <img src={image.baseimageurl} alt=''/>
          )}
        </div>
        <ul>
          <li>{art.description}</li>
          <li>{art.technique}</li>
          <li>{art.creditline}</li>
        </ul>
      </div>
    </div>
  );
};

export default ArtDescription;