import React from 'react'

import AdPreview from './AdPreview'

const AdList = ({ items }) => {
  return <div>
    {
      items.map(ad => <AdPreview key={ad.id} data={ad} />)
    }
  </div>
}

export default AdList
