import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../common/Button'
import Select from '../common/Select'
import actionTypes from '../../actions'
import { Wrapper, PageButtons, SelectorWrapper, SelectorTitle, PageSeparator } from './styles'

const getPageNumbers = (pages, page) => {
  const result = []
  const numbersArray = Array.from(Array(pages).keys(), k => k + 1)
  const startIndex = page < 3 ? 0 : page - 2
  const endIndex = page < 2 ? 2 : page + 1
  const pageSlice = numbersArray.slice(startIndex, endIndex)

  if (pageSlice[0] !== 1) result.push(1)
  if (pageSlice[0] > 2) result.push('...')

  result.push(...pageSlice)

  if (pageSlice[pageSlice.length - 1] !== pages) {
    if (pages - pageSlice[pageSlice.length - 1] > 1) result.push('...')
    result.push(pages)
  }

  return result
}

const Pagination = () => {
  const { pages } = useSelector(state => state.ads)
  const page = useSelector(state => state.filter.page)
  const perPage = useSelector(state => state.filter.perPage)

  const dispatch = useDispatch()

  const changeHandler = (v, field) => dispatch({ type: actionTypes.UPDATE_FILTER, payload: { [field]: v } })

  if (pages === 0) return null

  return (
    <Wrapper>
      <PageButtons>
        {getPageNumbers(pages, page).map((pageNumber, i) => {
          if (pageNumber !== '...')
            return (
              <Button
                key={pageNumber}
                text={pageNumber}
                onClick={() => changeHandler(pageNumber, 'page')}
                disabled={pageNumber === page}
              />
            )

          return <PageSeparator key={`${i}_${pageNumber}`}>...</PageSeparator>
        })}
      </PageButtons>
      <SelectorWrapper>
        <SelectorTitle>Per page:</SelectorTitle>
        <Select
          value={perPage}
          options={[
            { value: 6, text: 6 },
            { value: 12, text: 12 },
            { value: 18, text: 18 },
          ]}
          onChange={({ target }) => changeHandler(target.value, 'perPage')}
        />
      </SelectorWrapper>
    </Wrapper>
  )
}

export default Pagination
