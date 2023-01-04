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
          {!items.length && (
            <>
              <div />
              <NoResults>No Ads :(</NoResults>
              <div />
            </>
          )}
          {items.map(ad => (
            <AdPreview key={ad.id} data={ad} highlightPremium={highlightPremium} />
          ))}
        </Grid>
      )}
    </Wrapper>
  )
}

export default AdList
