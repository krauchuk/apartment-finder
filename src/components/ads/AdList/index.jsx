import React from 'react'

import AdPreview from '@components/ads/AdPreview'
import Spinner from '@components/common/Spinner'

import { Wrapper, Title, Grid } from './styles'

const AdList = ({ items, loading, title, highlightPremium }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          {items.map(ad => (
            <AdPreview key={ad.id} data={ad} highlightPremium={highlightPremium} />
          ))}
        </Grid>
      )}
    </Wrapper>
  )
}

export default AdList
