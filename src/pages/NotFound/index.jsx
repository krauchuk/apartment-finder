import React from 'react'

import Layout from '../../components/Layout'
import { InfoBlock, Code, Text } from './styles'

const NotFoundPage = () => {
  return (
    <Layout>
      <InfoBlock>
        <Code>404</Code>
        <Text>Page Not Found</Text>
      </InfoBlock>
    </Layout>
  )
}

export default NotFoundPage
