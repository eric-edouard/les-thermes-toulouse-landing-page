import React from 'react'
import Link from 'next/link'
import c from "classnames"
import { HamburgerSlider } from 'react-animated-burgers'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <img src="/logo.svg" alt="Logo Les Thermes: Un minautore musclé" className="logo" />
      <div >
        Les Thermes - Sauna Gay
      </div>
      <div >
        8 place Belfort
      </div>
      <div >
        35 bis rue Denfert Rochereau
      </div>
      <div>
        31000 Toulouse
      </div>
      <ul style={{display: 'flex', width: "220px", justifyContent: "space-between", padding:"16px 0px 16px 0px"}}>
        <li >
          <a className="accueil" href="https://www.facebook.com/Les-Thermes-Sauna-Masculin-108895520602685/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill='#FFFFFF' d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
          </a>
        </li>
        <li >
          <a className="accueil" href="https://instagram.com/saunalesthermestoulouse?igshid=YmMyMTA2M2Y=" target="_blank">
            <svg fill="#FA5252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="52" height="52">    <path fill='#FFFFFF' d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg>
          </a>
        </li>
        <li >
          <a className="accueil" href="https://twitter.com/les_thermes?s=21&t=pCVhtDT5mm-kR0aj1z1eVA" target="_blank">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="52" height="52">    <path fill='#FFFFFF' d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg>
          </a>
        </li>
      </ul>
      <small className='copyright'>&copy; Copyright {year}, Les Thermes</small>
      <style jsx global>{`
        footer > div {
            margin-bottom: 10px;
        }

      `}</style>
      <style jsx>{`
      :global(footer) {
          padding: 10px 0px 40px 0px;
          display: flex;
          flex-direction: column;
          align-items:center;

          background: #1C1C1A;

        }

        .logo {
          margin-bottom: 30px;
          width: 100px;
        }

        .copyright {
          color: white;
          margin: auto;
        }

      `}
      </style>
    </footer>
  )
}

export default Footer
