import React, { useState } from 'react'

import Image from '../Image'
import Button from '../Button'

import { Wrapper, ImageWrapper, ButtonBar, Arrow, Counter } from './styles'

const Carousel = ({ images = [] }) => {
  const [page, setPage] = useState(0)

  const prevPageHandler = () => {
    if (page > 0) setPage(p => p - 1)
  }

  const nextPageHandler = () => {
    if (page < images.length - 1) setPage(p => p + 1)
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={images[page]} />
      </ImageWrapper>
      {images.length > 1 && (
        <ButtonBar>
          <Button onClick={prevPageHandler} disabled={page === 0}>
            <Arrow left />
          </Button>
          <Button onClick={nextPageHandler} disabled={page === images.length - 1}>
            <Arrow />
          </Button>
        </ButtonBar>
      )}
      <Counter>
        {page + 1} / {images.length}
      </Counter>
    </Wrapper>
  )
}

export default Carousel
