import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../common/Button'
import Select from '../common/Select'
import actionTypes from '../../actions'
import { Wrapper, PageButtons, SelectorWrapper, SelectorTitle } from './styles'

const Pagination = () => {
  const { pages } = useSelector(state => state.ads)
  const page = useSelector(state => state.filter.page)
  const perPage = useSelector(state => state.filter.perPage)

  const dispatch = useDispatch()

  const changeHandler = (v, field) => dispatch({ type: actionTypes.UPDATE_FILTER, payload: { [field]: v } })

  const buttonKeys = Array.from(Array(pages).keys(), k => k + 1)

  if (pages === 0) return null

  return (
    <Wrapper>
      <PageButtons>
        {buttonKeys.map(key => (
          <Button key={key} text={key} onClick={() => changeHandler(key, 'page')} disabled={key === page} />
        ))}
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
