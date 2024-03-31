import React, { ReactNode } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  dataSlider: ReactNode
  customSettings?: Partial<typeof defaultSettings>
}

const defaultSettings = {
  dots: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  dotsClass: 'slick-dots slick-thumb',
  appendDots: (dots: string) => (
    <div
      style={{
        marginBottom: '26px',
        padding: '2px',
      }}
    >
      <ul
        style={{
          margin: '0px',
        }}
      >
        {dots}
      </ul>
    </div>
  ),
}
export const SliderComponent: React.FC<Props> = ({
  dataSlider,
  customSettings,
}): React.ReactElement => {
  const settings = customSettings ? customSettings : defaultSettings
  return (
    <section>
      <Slider {...settings}>{dataSlider}</Slider>
    </section>
  )
}
