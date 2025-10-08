import React from 'react'
import Link from 'next/link'
import c from "classnames"
import { PrismicRichText } from '@prismicio/react'

const AboutUs = ({aboutUs}) => {

  return (
    <div>
      <div className="about-container" id="a-propos">
        <h1>À PROPOS</h1>
        <p className="about">
        <PrismicRichText field={aboutUs} />
        </p>
      </div>
      <style jsx>{`
        .about-container {
          _border: 1px solid blue;
          background-color: #1C1C1A;
          padding: 30px 16px 50px 16px;
          display: flex;
          flex-direction: column;
          align-items:center;

        }
        
        .about {
          font-weight: normal;
          font-size: 1.2rem;  
          max-width: 800px;
          text-align: justify;

        }

        .authors {
          text-align: right;
        }


    `}
      </style>
    </div>
  )
}

export default AboutUs
