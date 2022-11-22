import React from 'react'

import AdPreview from '../AdPreview'
import Spinner from '../../common/Spinner'

import { Wrapper, Title, Grid } from './styles'

const AdList = ({ items, loading, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          {items.map(ad => (
            <AdPreview key={ad.id} data={ad} />
          ))}
        </Grid>
      )}
    </Wrapper>
  )
}

export default AdList
