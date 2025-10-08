import dynamic from 'next/dynamic';

const ImageGallery = dynamic(() => import('react-image-gallery'));

function createImageArray() {
  const array = [
  ];
  for (let i = 1; i < 20; i++) {
    array.push({
      original: '/photos/photo' + i + '.jpg',
      thumbnail: '/photos/thumbnails/thumbnail' + i + '.jpg',
      originalAlt: "Photo intérieur " + i +  "-  Les Thermes - Sauna Gay - Marseille",
      thumbnailAlt: "Miniature Photo intérieur " + i +  "-  Les Thermes - Sauna Gay - Marseille"
    })
  }
  return array;
}

const images = createImageArray();

export default class GalleryTwo extends React.Component {
  
  render() {
    return (
      <div className="gallery-wrapper" id="gallerie">
        <h1>GALLERIE</h1>
        <div className="gallery-container">
          <ImageGallery items={images} showPlayButton={false} useBrowserFullscreen={false} lazyLoad={true} />
        </div>
        
        <style jsx>{`
        .gallery-wrapper {
          background-color: #1C1C1A;
          padding-top: 15px;
          display:flex;
          flex-direction:column;
          align-items: center;
        }

        .gallery-container {
          max-width: 900px;
          width: 100%;
        }

    `}
      </style>
      </div>
    );
  }
}