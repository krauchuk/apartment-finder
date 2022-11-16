import React from 'react'

import AdPreview from './AdPreview'

function AdList({ items }) {
  return (
    <div>
      {items.map(ad => (
        <AdPreview key={ad.id} data={ad} />
      ))}
    </div>
  )
}

export default AdList
