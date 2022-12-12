import React from 'react'

import Layout from '../../components/Layout'
import { Wrapper, Code, Text } from './styles'

const NotFoundPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Code>404</Code>
        <Text>Page Not Found</Text>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
