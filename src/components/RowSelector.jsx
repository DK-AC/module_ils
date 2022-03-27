import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'antd'
import { SET_REQUEST_POINT_ASYNC } from '../redux/types'

const RowSelector = ({ defaultValue, requestId, type }) => {
  const dispatch = useDispatch()
  const requestPoints = useSelector((state) => state.requests.requestPoints)

  const onPointChangeHandler = (pointId) => {
    const point = { pointId, requestId, type }
    dispatch({ type: SET_REQUEST_POINT_ASYNC, payload: point})
  }

  return (
    <Select defaultValue={defaultValue} onChange={(pointId) => onPointChangeHandler(pointId)}>
      {requestPoints.map((point) => (
        <Select.Option key={point.id} value={point.id}>{point.name}</Select.Option>
      ))}
    </Select>
  )
}

export default RowSelector
