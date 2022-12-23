import React, { useState } from 'react'

import { Wrapper, Block, Head, Body } from './styles'

const Question = ({ title, desc }) => {
  const [open, setOpen] = useState(false)

  return (
    <Block>
      <Head onClick={() => setOpen(!open)}>{title}</Head>
      <Body hide={!open}>{desc}</Body>
    </Block>
  )
}

const FAQ = ({ data }) => {
  return (
    <Wrapper>
      <h1>FAQ</h1>
      {data.map(({ title, desc }) => (
        <Question key={title} title={title} desc={desc} />
      ))}
    </Wrapper>
  )
}

export default FAQ
