import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import actionTypes from '@actions'

import Spinner from '@components/common/Spinner'
import Carousel from '@components/common/Carousel'
import Breadcrumbs from '@components/ads/Breadcrumbs'

import {
  Wrapper,
  AdHeader,
  AdName,
  AdAddress,
  AdPrice,
  MainInfo,
  MainInfoBlock,
  MainInfoRow,
  Description,
} from './styles'

const Row = ({ title, info, children }) => (
  <MainInfoRow>
    <span>{title}</span>
    <span>
      {info}
      {children}
    </span>
  </MainInfoRow>
)

const AdPage = () => {
  const { id } = useParams()
  const { selected: data, loading } = useSelector(state => state.ads)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_AD_REQUEST, payload: +id })
  }, [dispatch, id])

  if (loading)
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )

  return (
    <Wrapper>
      <Breadcrumbs ad={data} />
      <Carousel images={data.images} />
      <AdHeader>
        <AdName>{data.name}</AdName>
        <AdPrice>${data.price}</AdPrice>
        <AdAddress>
          {data.city}, {data.address}
        </AdAddress>
      </AdHeader>
      <MainInfo>
        <MainInfoBlock>
          <Row title="Rooms" info={data.rooms} />
          <Row title="Square" info={data.square}>
            m<sup>2</sup>
          </Row>
          <Row title="Floor" info={data.floor} />
        </MainInfoBlock>
        <MainInfoBlock>
          <Row title="Construction year" info={data.constructionYear} />
          <Row title="Wall material" info={data.wallMaterial} />
        </MainInfoBlock>
      </MainInfo>
      <Description>{data.desc}</Description>
    </Wrapper>
  )
}

export default AdPage
