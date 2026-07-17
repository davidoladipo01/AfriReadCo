// import React from 'react'

import bk1 from '../assets/bk1_result_result.webp'
import bk10Png from '../assets/bk10_result.webp'
import bk11Webp from '../assets/bk11_result.webp'
import bk12Webp from '../assets/bk12_result.webp'
import bk13Jpeg from '../assets/bk13_result_result.webp'
import bk14Webp from '../assets/bk14_result.webp'
import bk15Jpeg from '../assets/bk15_result_result.webp'
import bk16Jpeg from '../assets/bk16_result_result.webp'
import bk17Jpeg from '../assets/bk17_result_result.webp'
import bk19Jpeg from '../assets/bk19_result_result.webp'
import bk2Png from '../assets/bk2_result_result.webp'
import bk20Jpeg from '../assets/bk20_result_result.webp'
import bk21Jpeg from '../assets/bk21_result_result.webp'
import bk22Jpg from '../assets/bk22_result_result.webp'
import bk3Webp from '../assets/bk3_result.webp'
import bk4Webp from '../assets/bk4_result.webp'
import bk5Webp from '../assets/bk5_result.webp'
import bk6Webp from '../assets/bk6_result.webp'
import bk7Webp from '../assets/bk7_result.webp'
import bk8Webp from '../assets/bk8_result.webp'
import bk9Webp from '../assets/bk9_result.webp'
import book1 from '../assets/book1_result.webp'
import person1 from '../assets/person1_result.webp'
import person2 from '../assets/person2_result.webp'
import person3 from '../assets/person3_result.webp'
import rt1 from '../assets/rt1_result_result.webp'
import rt2 from '../assets/rt2_result_result.webp'
import rt3 from '../assets/rt3_result_result.webp'
import rt4 from '../assets/rt4_result_result.webp'
import rt5 from '../assets/rt5_result_result.webp'
import rt6 from '../assets/rt6_result_result.webp'
import rt7 from '../assets/rt7_result_result.webp'
import rt8 from '../assets/rt8_result_result.webp'
import rt9 from '../assets/rt9_result_result.webp'
import rt10Png from '../assets/rt10_result_result.webp'
import rt11 from '../assets/rt11_result_result.webp'
import rt12 from '../assets/rt12_result_result.webp'
import rt13 from '../assets/rt13_result_result.webp'
import rt14 from '../assets/rt14_result_result.webp'
import rt15 from '../assets/rt15_result_result.webp'
import rt16 from '../assets/rt16_result_result.webp'
import rt17 from '../assets/rt17_result_result.webp'
import rt19 from '../assets/rt19_result_result.webp'

const rowOne = [
  { type: "book", src: bk1, alt: 'Book 1' },
  { type: "book", src: bk2Png, alt: 'Book 2 PNG' },
  { type: "book", src: bk3Webp, alt: 'Book 3 WebP' },
  { type: "book", src: bk4Webp, alt: 'Book 4 WebP' },
  { type: "book", src: bk5Webp, alt: 'Book 5 WebP' },
  { type: "book", src: bk6Webp, alt: 'Book 6 WebP' },
  { type: "book", src: bk7Webp, alt: 'Book 7 WebP' },
  { type: "book", src: bk8Webp, alt: 'Book 8 WebP' },
  { type: "book", src: bk9Webp, alt: 'Book 9 WebP' },
  { type: "book", src: bk10Png, alt: 'Book 10 PNG' },
  { type: "book", src: bk11Webp, alt: 'Book 11 WebP' },
  { type: "book", src: bk12Webp, alt: 'Book 12 WebP' },
  { type: "book", src: bk13Jpeg, alt: 'Book 13 JPEG' },
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
