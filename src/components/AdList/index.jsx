import React from 'react'

import AdPreview from '../AdPreview'
import Spinner from '../common/Spinner'
import { Wrapper, Title, Grid, NoResults } from './styles'

const AdList = ({ items, loading, title, highlightPremium }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          {!items.length && <NoResults>No Ads :(</NoResults>}
          {items.map(ad => (
            <AdPreview key={ad.id} data={ad} highlightPremium={highlightPremium} />
          ))}
        </Grid>
      )}
    </Wrapper>
  )
}

export default AdList
