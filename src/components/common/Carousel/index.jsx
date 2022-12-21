import React, { useState } from 'react'

import Image from '../Image'
import Button from '../Button'

import { Wrapper, ImageWrapper, PrevBtn, NextBtn, Arrow, Counter, CloseBtn, Title } from './styles'

const Carousel = ({ title, images = [] }) => {
  const [page, setPage] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const prevPageHandler = () => {
    if (page > 0) setPage(p => p - 1)
  }

  const nextPageHandler = () => {
    if (page < images.length - 1) setPage(p => p + 1)
  }

  const zoomHandler = () => setFullscreen(!fullscreen)

  return (
    <Wrapper fullscreen={fullscreen}>
      <ImageWrapper onClick={fullscreen ? null : zoomHandler}>
        <Image src={images[page]} />
      </ImageWrapper>
      {images.length > 1 && (
        <>
          <PrevBtn>
            <Button onClick={prevPageHandler} disabled={page === 0}>
              <Arrow left />
            </Button>
          </PrevBtn>
          <NextBtn>
            <Button onClick={nextPageHandler} disabled={page === images.length - 1}>
              <Arrow />
            </Button>
          </NextBtn>
        </>
      )}
      <Counter fullscreen={fullscreen}>
        {page + 1} / {images.length}
      </Counter>
      {fullscreen && (
        <>
          <CloseBtn>
            <Button onClick={zoomHandler}>X</Button>
          </CloseBtn>
          {title && <Title>{title}</Title>}
        </>
      )}
    </Wrapper>
  )
}

export default Carousel
