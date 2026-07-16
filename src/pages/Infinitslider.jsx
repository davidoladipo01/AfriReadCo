import React from 'react'

import bk1 from '../assets/bk1.jpeg'
import bk10Png from '../assets/bk10.png'
import bk10Webp from '../assets/bk10.webp'
import bk11Jpeg from '../assets/bk11.jpeg'
import bk11Webp from '../assets/bk11.webp'
import bk12Jpeg from '../assets/bk12.jpeg'
import bk12Webp from '../assets/bk12.webp'
import bk13Jpeg from '../assets/bk13.jpeg'
import bk14Jpeg from '../assets/bk14.jpeg'
import bk14Webp from '../assets/bk14.webp'
import bk15Jpeg from '../assets/bk15.jpeg'
import bk16Jpeg from '../assets/bk16.jpeg'
import bk17Jpeg from '../assets/bk17.jpeg'
import bk19Jpeg from '../assets/bk19.jpeg'
import bk2Jpeg from '../assets/bk2.jpeg'
import bk2Png from '../assets/bk2.png'
import bk20Jpeg from '../assets/bk20.jpeg'
import bk21Jpeg from '../assets/bk21.jpeg'
import bk22Jpg from '../assets/bk22.jpg'
import bk3Jpeg from '../assets/bk3.jpeg'
import bk3Webp from '../assets/bk3.webp'
import bk4Jpeg from '../assets/bk4.jpeg'
import bk4Webp from '../assets/bk4.webp'
import bk5Jpeg from '../assets/bk5.jpeg'
import bk5Webp from '../assets/bk5.webp'
import bk6Jpeg from '../assets/bk6.jpeg'
import bk6Webp from '../assets/bk6.webp'
import bk7Jpeg from '../assets/bk7.jpeg'
import bk7Webp from '../assets/bk7.webp'
import bk8Jpeg from '../assets/bk8.jpeg'
import bk8Webp from '../assets/bk8.webp'
import bk9Jpeg from '../assets/bk9.jpeg'
import bk9Webp from '../assets/bk9.webp'
import book1 from '../assets/book1.webp'
import person1 from '../assets/person1.webp'
import person2 from '../assets/person2.webp'
import person3 from '../assets/person3.webp'
import rt1 from '../assets/rt1.png'
import rt2 from '../assets/rt2.jpg'
import rt3 from '../assets/rt3.jpg'
import rt4 from '../assets/rt4.jpg'
import rt5 from '../assets/rt5.jpg'
import rt6 from '../assets/rt6.jpg'
import rt7 from '../assets/rt7.png'
import rt8 from '../assets/rt8.png'
import rt9 from '../assets/rt9.jpg'
import rt10Jpg from '../assets/rt10.jpg'
import rt10Png from '../assets/rt10.png'
import rt11 from '../assets/rt11.jpg'
import rt12 from '../assets/rt12.png'
import rt13 from '../assets/rt13.jpg'
import rt14 from '../assets/rt14.png'
import rt15 from '../assets/rt15.png'
import rt16 from '../assets/rt16.png'
import rt17 from '../assets/rt17.png'
import rt19 from '../assets/rt19.jpg'

const rowOne = [
  { type: "book", src: bk1, alt: 'Book 1' },
  { type: "book", src: bk2Jpeg, alt: 'Book 2 JPEG' },
  { type: "book", src: bk2Png, alt: 'Book 2 PNG' },
  { type: "book", src: bk3Jpeg, alt: 'Book 3 JPEG' },
  { type: "book", src: bk3Webp, alt: 'Book 3 WebP' },
  { type: "book", src: bk4Jpeg, alt: 'Book 4 JPEG' },
  { type: "book", src: bk4Webp, alt: 'Book 4 WebP' },
  { type: "book", src: bk5Jpeg, alt: 'Book 5 JPEG' },
  { type: "book", src: bk5Webp, alt: 'Book 5 WebP' },
  { type: "book", src: bk6Jpeg, alt: 'Book 6 JPEG' },
  { type: "book", src: bk6Webp, alt: 'Book 6 WebP' },
  { type: "book", src: bk7Jpeg, alt: 'Book 7 JPEG' },
  { type: "book", src: bk7Webp, alt: 'Book 7 WebP' },
  { type: "book", src: bk8Jpeg, alt: 'Book 8 JPEG' },
  { type: "book", src: bk8Webp, alt: 'Book 8 WebP' },
  { type: "book", src: bk9Jpeg, alt: 'Book 9 JPEG' },
  { type: "book", src: bk9Webp, alt: 'Book 9 WebP' },
  { type: "book", src: bk10Png, alt: 'Book 10 PNG' },
  { type: "book", src: bk10Webp, alt: 'Book 10 WebP' },
  { type: "book", src: bk11Jpeg, alt: 'Book 11 JPEG' },
  { type: "book", src: bk11Webp, alt: 'Book 11 WebP' },
  { type: "book", src: bk12Jpeg, alt: 'Book 12 JPEG' },
  { type: "book", src: bk12Webp, alt: 'Book 12 WebP' },
  { type: "book", src: bk13Jpeg, alt: 'Book 13 JPEG' },
  { type: "book", src: bk14Jpeg, alt: 'Book 14 JPEG' },
  { type: "book", src: bk14Webp, alt: 'Book 14 WebP' },
  { type: "book", src: bk15Jpeg, alt: 'Book 15 JPEG' },
  { type: "book", src: bk16Jpeg, alt: 'Book 16 JPEG' },
  { type: "book", src: bk17Jpeg, alt: 'Book 17 JPEG' },
  { type: "book", src: bk19Jpeg, alt: 'Book 19 JPEG' },
  { type: "book", src: bk20Jpeg, alt: 'Book 20 JPEG' },
  { type: "book", src: bk21Jpeg, alt: 'Book 21 JPEG' },
  { type: "book", src: bk22Jpg, alt: 'Book 22 JPG' },
  { type: "book", src: book1, alt: 'Book 1 WebP' },
]

const rowTwo = [
  { type: "books", src: rt1, alt: 'RT 1' },
  { type: "books", src: rt2, alt: 'RT 2' },
  { type: "books", src: rt3, alt: 'RT 3' },
  { type: "books", src: rt4, alt: 'RT 4' },
  { type: "person", src: person3, alt: 'Person 3' },
  { type: "books", src: rt5, alt: 'RT 5' },
  { type: "books", src: rt6, alt: 'RT 6' },
  { type: "books", src: rt7, alt: 'RT 7' },
  { type: "books", src: rt8, alt: 'RT 8' },
  { type: "books", src: rt9, alt: 'RT 9' },
  { type: "person", src: person1, alt: 'Person 1' },
  { type: "books", src: rt10Jpg, alt: 'RT 10 JPG' },
  { type: "books", src: rt10Png, alt: 'RT 10 PNG' },
  { type: "books", src: rt11, alt: 'RT 11' },
  { type: "books", src: rt12, alt: 'RT 12' },
  { type: "books", src: rt13, alt: 'RT 13' },
  { type: "books", src: rt14, alt: 'RT 14' },
  { type: "books", src: rt15, alt: 'RT 15' },
  { type: "person", src: person2, alt: 'Person 2' },
  { type: "books", src: rt16, alt: 'RT 16' },
  { type: "books", src: rt17, alt: 'RT 17' },
  { type: "books", src: rt19, alt: 'RT 19' },
]

const Infinitslider = () => {

  return (
    <section className="slider-section">

      {/* First Row */}

      

      <div className="slider left">
        {[...rowOne, ...rowOne].map((item, index) => (
          <div key={index} className={item.type}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>

      {/* Second Row */}

      <div className="slider right">
        {[...rowTwo, ...rowTwo].map((item, index) => (
          <div key={index} className={item.type}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Infinitslider
