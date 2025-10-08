import ImageGallery from 'react-image-gallery'
import ResponsiveEmbed from './ResponsiveEmbed'

const images2 = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

const images = [
  {
    thumbnail: '/video_thumbnail.png',
    renderItem: () => (
      <ResponsiveEmbed
        src='https://www.youtube.com/embed/Umb-UrblvQk?autoplay=1&mute=1&loop=1&list=PLTSjZvUszrekQUceuYxy6ul1Nl8kFjN21'
        allowFullScreen
      />
    ),
    renderFullscreenButton: () => {
      ;<></>
    },
  },
  {
    // original: '/events/mardi.jpg',
    thumbnail: '/events/mardi.jpg',
    renderItem: () => <img src='events/mardi.jpg' className='event-image' />,
  },
  {
    renderItem: () => <img src='events/mercredi.jpg' className='event-image' />,
    thumbnail: '/events/mercredi.jpg',
  },
  {
    renderItem: () => <img src='events/jeudi.jpg' className='event-image' />,
    thumbnail: '/events/jeudi.jpg',
  },
  {
    renderItem: () => (
      <img src='events/naked-party.jpg' className='event-image' />
    ),
    thumbnail: '/events/naked-party.jpg',
  },
  {
    renderItem: () => (
      <img src='events/orgy-party.jpg' className='event-image' />
    ),
    thumbnail: '/events/orgy-party.jpg',
  },
  {
    renderItem: () => (
      <img src='events/sauna-bears.jpg' className='event-image' />
    ),
    thumbnail: '/events/sauna-bears.jpg',
  },
  {
    renderItem: () => <img src='events/divers.jpg' className='event-image' />,
    thumbnail: '/events/divers.jpg',
  },
]

export default class Gallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showPlayButton={false}
        useBrowserFullscreen={false}
        showFullscreenButton={false}
      />
    )
  }
}
