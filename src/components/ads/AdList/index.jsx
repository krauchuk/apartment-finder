import React from 'react'

import AdPreview from '../AdPreview'

import { Wrapper, Title, Grid } from './styles'

const AdList = ({ items, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <Grid>
        {items.map(ad => (
          <AdPreview key={ad.id} data={ad} />
        ))}
      </Grid>
    </Wrapper>
  )
}

export default AdList
