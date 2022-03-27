import { SET_REQUEST, SET_REQUEST_POINT } from '../types'

const initialState = {
  requestList: [
    { requestId: 1, loadingPointId: 1, unloadingPointId: 5 },
    { requestId: 2, loadingPointId: 4, unloadingPointId: 6 },
    { requestId: 3, loadingPointId: 2, unloadingPointId: 4 },
    { requestId: 4, loadingPointId: 5, unloadingPointId: 3 }
  ],
  requestPoints: [
    { id: 1, name: 'Москва', location: [55.755819, 37.617644] },
    { id: 2, name: 'Тверь', location: [56.859625, 35.911860] },
    { id: 3, name: 'Краснодар', location: [45.035470, 38.975313] },
    { id: 4, name: 'Уфа', location: [54.735152, 55.958736] },
    { id: 5, name: 'Владимир', location: [56.129057, 40.406635] },
    { id: 6, name: 'Липецк', location: [52.608826, 39.599229] }
  ],
  selectedRequestId: 1
}

const requests = (state = initialState, action) => {
  switch(action.type) {
    case SET_REQUEST:
      return { ...state, selectedRequestId: action.payload }
    case SET_REQUEST_POINT: {
      const requestIndex = state.requestList.findIndex((request) => request.requestId === action.payload.requestId)
      const request = state.requestList[requestIndex]

      action.payload.type === 'loading'
        ? request.loadingPointId = action.payload.pointId
        : request.unloadingPointId = action.payload.pointId

      return {
        ...state,
        requestList: [
          ...state.requestList.slice(0, requestIndex),
          request,
          ...state.requestList.slice(requestIndex + 1)
        ]
      }
    }
    default:
      return state
  }
}

export default requests
