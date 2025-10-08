import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from "next/router";
import withGA from "next-ga";

import Nav from '../components/nav'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Events from '../components/Events'
import ResponsiveEmbed from '../components/ResponsiveEmbed';
import GalleryTwo from '../components/GalleryTwo';
import { PrismicProvider, PrismicRichText } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import { createClient } from '../prismicio'
import { predicate } from '@prismicio/client';


const Home = ({ homepage, banner }) => {

  const events = homepage.data.slices.filter(el => el.slice_type === 'event')
  const prices = homepage.data.slices.filter(el => el.slice_type === 'price')
  const aboutUs = homepage.data.about

  const [videoSrc, setVideoSrc] = React.useState("");
  React.useEffect(() => {
    setVideoSrc('https://www.youtube.com/embed/Ini6IOEtt4w?autoplay=1&mute=1&loop=1&list=PLTSjZvUszrelOv_S12gO2M8BB9ADaLLy4')
  }, [])
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <div>
        <Head>
          <title>Les Thermes - Sauna Gay - Toulouse</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <link href="/static/image-gallery.css" rel="stylesheet" /> */}

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content="Les Thermes, sauna gay à Toulouse, est ouvert 7/7 de 12h00 à 02h00. Sur 600m2, nous proposons un Jacuzzi, des douches collectives, un hammam, un sauna finlandais, un espace restauration, ainsi que des cabines ludiques et thématiques." />
        </Head>

        <Nav />
        <div className="main-content">
          <div className="branding">
            <img src="/logo.svg" alt="Logo Les Thermes: Un minautore musclé" className="logo" />
            <img src="/les-thermes.svg" alt="Lettrage Les Thermes - Sauna Masculin" className="name" />
          </div>

          <div className="banner">
            <h1>{banner.data.title[0].text}</h1>
            <h1><strong>{banner.data.banner_content[0].text}</strong></h1>
          </div>
          <div className="video-container" >
            <ResponsiveEmbed src={videoSrc} allowFullScreen />
          </div>
          <h1>Votre Nouveau Sauna Gay à Toulouse</h1>
          <div className="presentation">
            <PrismicRichText field={homepage.data.presentation} />

            <Link href="/#a-propos">
              <a>
                Plus d'infos...
              </a>
            </Link>
            <br /><br />

            <div className="cta-container">
              <a className="cta" href={"https://maps.app.goo.gl/yFtcgbNuzvYxrkPJA"} target={`_blank`} >
                M'Y RENDRE
              </a>
            </div>

          </div>

          <Events events={events} />



          <div id="infos-pratiques">
            <h1>INFOS PRATIQUES</h1>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" space="preserve">
                  <path fill="#FFFFFF" d="M18,10c0-1,0.8-1.9,1.8-2C19.9,8,20,7.9,20,7.8V5c0-0.6-0.4-1-1-1H1C0.4,4,0,4.4,0,5v2.8C0,7.9,0.1,8,0.2,8  C1.2,8.1,2,9,2,10c0,1-0.8,1.9-1.8,2C0.1,12,0,12.1,0,12.2V15c0,0.6,0.4,1,1,1h14.5c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5  c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5H19c0.6,0,1-0.4,1-1v-2.8c0-0.1-0.1-0.2-0.2-0.2C18.8,11.9,18,11,18,10z M15.5,14  c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5C16,13.8,15.8,14,15.5,14z M15.5,12c-0.3,0-0.5-0.2-0.5-0.5  c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5C16,11.8,15.8,12,15.5,12z M15.5,10C15.2,10,15,9.8,15,9.5C15,9.2,15.2,9,15.5,9  C15.8,9,16,9.2,16,9.5C16,9.8,15.8,10,15.5,10z M15.5,8C15.2,8,15,7.8,15,7.5C15,7.2,15.2,7,15.5,7C15.8,7,16,7.2,16,7.5  C16,7.8,15.8,8,15.5,8z M15.5,6C15.2,6,15,5.8,15,5.5C15,5.2,15.2,5,15.5,5C15.8,5,16,5.2,16,5.5C16,5.8,15.8,6,15.5,6z" />
                </svg>
              </div>
              <div className="card-content columns">
                {prices.map(el => {
                  return (
                    <table className="tarifs">
                      <tr>
                        {el.primary.title.map(price => (
                          <td>{price.text}</td>
                        ))}
                        {el.primary.price.map(price => (
                          <td>{price.text}</td>
                        ))}
                      </tr>
                    </table>
                  )
                })}
                <span className="non-cumulable">(Offres non cumulables)</span>
              </div>
            </div>

            <div className="card darker">
              <div className="card-icon location">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" version="1.1" viewBox="0 0 266 380" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd">
                  <g><path fill="#FFFFFF" d="M133 0c73,0 133,60 133,133 0,91 -79,187 -133,254 -54,-67 -133,-163 -133,-254 0,-73 60,-133 133,-133zm0 62c39,0 71,32 71,71 0,39 -32,71 -71,71 -39,0 -71,-32 -71,-71 0,-39 32,-71 71,-71z" /></g></svg>
              </div>
              <div className="card-content">
                <p className="location">
                  <PrismicRichText field={homepage.data.address} />
                  <br></br>
                  <br></br>
                  Ouvert tous les jours <br></br> de 12h à 2h
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon phone ">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" x><g><g><path fill="#FFFFFF" d="M61.9,68.4c-1.2,0.1-2.3-0.5-3.4-1.1C48.4,61.4,39.8,53,33.8,43c-1.1-1.7-2.1-3.7-1.7-5.7    c0.7-3.8,5.5-5.3,6.9-8.9c1.3-3.1-0.4-6.6-2.4-9.3c-3.3-4.5-7.5-8.4-12.3-11.3C22,6.4,19.5,5.2,16.8,5C4.7,4.4,4,24.6,5.6,32.5    c1.7,8.2,5.8,15.8,10.6,22.7c11.3,16.4,26.8,30.3,45.6,36.9c6.6,2.3,13.7,3.7,20.5,2.1c3.4-0.8,6.6-2.3,9-4.9    c2.4-2.5,3.7-6.1,3.1-9.5c-0.6-3.5-3-6.3-5.4-8.8c-3.5-3.6-7.4-6.8-11.6-9.6c-0.8-0.5-1.6-1-2.5-1.1c-1-0.1-1.9,0.4-2.8,0.9    c-2.5,1.4-4.8,3.1-6.8,5c-0.9,0.9-1.9,1.8-3.1,2C62.1,68.3,62,68.4,61.9,68.4z" /></g></g></svg>
              </div>
              <div className="card-content phone">
                <p className="phone">
                  {homepage.data.phone[0].text}
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* <GalleryTwo /> */}
        <AboutUs aboutUs={aboutUs} />
        <Footer />

        <style jsx global>{`
      @font-face {
        font-family: "Russian";
        src: url("/fonts/Russian.ttf") format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: "infini";
        src: url("/fonts/infini-bold.otf") format("opentype");
        font-weight: bold;
        font-display: swap;
      }
      @font-face {
        font-family: "infini";
        src: url("/fonts/infini.otf") format("opentype");
        font-weight: normal;
        font-display: swap;
      }
      html, body {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
      }
      *, *::after, *::before {
        box-sizing: border-box;
      }
      .banner {
        background-color: black;
        width: 100%;
        padding: 16px;
      }
      .banner h1 {
        margin: 0px;
      }
      body {
        background: #292929;
        font-family: 'infini',  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        text-rendering: optimizeLegibility;
        color: white;
      }
      body {
      }
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
      }
      ul,
      ul li {
        margin:0;
        padding: 0;
        text-indent: 0;
        list-style-type: none;
      }
      h1 {
        font-weight: normal;
        font-size: 1.8rem;
        text-align: center;
        margin: 30px 0px;
        letter-spacing: .2rem;
      }
      .main-content {
        min-height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        align-items:center;
      }

    `}</style>
        <style jsx>{`
      .branding {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 50px;
      }
      .branding > .logo {
        margin: 4vw 0;
        width: 25vw;
      }

      .branding > .name {
        margin: 2vw 0;
        width: 70vw;
      }

      @media only screen and (min-width: 600px) {
        .branding > .logo {
        margin: 20px 0;
        width: 100px;
        max-width: 100px;
      }

        .branding > .name {
          margin: 10px 0;
          width: 300px;
          max-width: 300px;

        }
        .presentation {
          max-width: 800px;
          
      }
      }

      .presentation {
        font-weight: normal;
          font-size: 1.2rem; 
          margin: 0px 16px;
          text-align: justify;
      }

      .video-container {
        width: 100vw;
      }

      .dark-grey {
        background: #1C1C1A;
      }

      .events {
        display: flex;
      }

      .cta-container {
        display: flex;
        justify-content:center;
        margin-bottom: 1.8rem;
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

      .cta:hover {
        cursor: pointer;
      }


      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin: 40px 0px;
      }

      .card.darker {
        background: #1C1C1A;
      }
      .card-icon {
        width: 4rem;
      }

      .card-icon.location {
        width: 2rem;
        margin-top: 50px;
      }

      .card-icon.phone {
        width: 3rem;
      }

      .columns {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .non-cumulable {
        margin-top: 1rem;
        font-size: 1.2rem;      
        font-style: italic;
      }

      .card-content {
        font-size: 1.5rem;
        width: 100%;
        padding: 1rem 1.5rem;
      }

      .card-content.phone {
        padding: 0px;
      }
      .tarifs {
        margin: auto;
        max-width: 300px;
      }
      .tarifs tr td:nth-child(1) {
        width: 100%;
        font-size: 1.2rem;

      }
      .tarifs tr td:nth-child(2) {
        text-align: right;
      }

        .location {
          text-align: center;
        }


        .phone {
          font-weight: bold;
          font-size: 2rem;
          text-align: center;
          font-family:   -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
    `}</style>
      </div>
    </PrismicProvider>
  )
}

export default withGA("UA-154970973-1", Router)(Home);

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const homepage = await client.getSingle('homepage')
  const banner = await client.getSingle('banner')

  return {
    props: { homepage, banner },
  }
}