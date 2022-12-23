import React from 'react'

import FAQ from '../components/FAQ'
import Layout from '../components/Layout'

const data = [
  { title: 'Do you like cats?', desc: 'Only dogs' },
  { title: 'Can I buy a car here?', desc: 'No, only real estate is for sale here' },
  { title: 'Why is the design so terrible?', desc: "We don't have a designer" },
  { title: 'I was cheated and lost money, what should I do?', desc: 'Be more careful next time' },
  { title: 'Yes?', desc: 'NO!' },
]

const FAQPage = () => {
  return (
    <Layout>
      <FAQ data={data} />
    </Layout>
  )
}

export default FAQPage
