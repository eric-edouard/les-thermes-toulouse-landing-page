import React from 'react'
import Link from 'next/link'
import c from 'classnames'
import { PrismicRichText } from '@prismicio/react'


const Events = ({ events }) => {

  return (
    <div>
      <div className='events-container' id='evenements'>
        {/* <h1>Évènement spécial !</h1>
        <img
          src='23_Septembre.jpg'
          className='clim-image'
          alt='Evènement spécial Les Thermes Toulouse - 23 Septembre: Journée naturiste + soirée blackout & naturiste'
        /> */}

        <h1>Calendrier évènements</h1>

        {events.map(event => {
          return (
            <div className='event lighter'>
              <div className='event-title-mobile'>
                {event.primary.title[0]?.text}
              </div>
              <img
                src={event.primary.image.url}
                className={event.primary.description[0] ? 'event-image' : 'event-image-horizontal'}
                alt={event.primary.description[0] || 'poster-soirée'}
              />
              {event.primary.description[0] || event.primary.title[0] ?
                <p className='event-description'>
                  <div className='event-title-desktop'>
                    {event.primary.title[0]?.text}
                  </div>
                  <PrismicRichText field={event.primary.description} />
                </p>
                : null
              }
            </div>
          )
        })}
        <div className="cta-container">
          <a className="cta" href={"https://maps.app.goo.gl/yFtcgbNuzvYxrkPJA"} target={`_blank`} >
            M'Y RENDRE
          </a>
        </div>

      </div>
      <style jsx>
        {`

          .clim-container {
            flex-direction: column;
            display: flex;
            max-width: 100vw;
            margin: auto;
            align-items: center;
            margin-top: 24px;
            margin-bottom: 36px;
          }

          .clim-image {
            width: 100vw;
          }

          .clim-description {
            display: block;
            font-size: 20px;
            text-align: center;
          }

          .events-container {
            background-color: #1c1c1a;
            padding: 30px 0px 50px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;

          }

          .event {
            width: 100vw;
            max-width: 100vw;
            display: flex;
            flex-direction: column;
            max-height: 1000px;
            _border: 1px solid red;
            justify-content: center;
          }

          .event.lighter {
            _background-color: #292929;
          }

          .event-image {
            width: 100%;
            _border: 1px solid yellow;
          }

          .event-description {
            width: 100%;
            _border: 1px solid blue;
            font-size: 1.2rem;
            padding: 20px 16px 60px 16px;
          }
          .event-title-mobile {
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 10px;
            margin-left: 16px;
          }

          .event-title-desktop {
            display: none;
          }


      .cta-container {
        display: flex;
        justify-content:center;
        margin-top: 1.8rem;
      }

      .cta {

        position: relative;
        font-size: 1.8rem; 
        text-align: center;
        display: flex;
        justify-content:center;
        align-items: center;
        font-family:   -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: #1C1C1A;
        background: white;
        padding: .9rem;
        font-weight: bold;
      }

          @media only screen and (max-width: 600px) {
            .event-image-horizontal {
              margin-bottom: 100px;
            }
  
          }

          @media only screen and (min-width: 600px) {

            .clim-container {
              max-width: 500px;
            }

            .clim-image {
              width: 500px;
              margin: auto;
            }

            .event {
              width: 100vw;
              max-width: 100vw;
              display: flex;
              flex-direction: row;
              max-height: 1000px;
              _border: 1px solid red;
              justify-content: center;
              padding: 20px 0px;
              align-items: center;
            }

            .event.lighter {
              _background-color: #292929;
            }

            .event-image {
              width: 400px;
              padding: 0px 30px;
              _border: 1px solid yellow;
            }

            .event-image-horizontal {
              width: 800px;
              padding: 0px 30px;
              _border: 1px solid yellow;
            }
            .event-description {
              width: 400px;
              padding: 0px 30px;
              _border: 1px solid blue;
              font-size: 23px;
            }
            .event-title-mobile {
              display: none;
            }
            .event-title-desktop {
              display: block;
              font-weight: bold;
              font-size: 30px;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Events

