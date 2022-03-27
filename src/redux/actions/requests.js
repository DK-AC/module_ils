import { SET_REQUEST, SET_REQUEST_POINT } from '../types'

export const setRequest = (requestId) => ({
  type: SET_REQUEST,
  payload: requestId
})

export const setPoint = (point) => ({
  type: SET_REQUEST_POINT,
  payload: point
})
