import React from 'react'

import AdPreview from './AdPreview'

const AdList = ({ data }) => {
  return <div>
    {
      data.map(ad => <AdPreview key={ad.id} data={ad} />)
    }
  </div>
}

export default AdList
