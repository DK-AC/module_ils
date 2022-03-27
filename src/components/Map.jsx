import React from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer } from 'react-leaflet'
import RoutingMachine from './RoutingMachine'

const Map = () => {
  const requestsState = useSelector((state) => state.requests)
  const { requestList, requestPoints, selectedRequestId } = requestsState

  const selectedRequest = requestList.find((request) => request.requestId === selectedRequestId)
  const loadingPoint = requestPoints.find((point) => point.id === selectedRequest.loadingPointId).location
  const unloadingPoint = requestPoints.find((point) => point.id === selectedRequest.unloadingPointId).location

  return (
    <div className="map">
      <MapContainer center={loadingPoint} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine loadingPoint={loadingPoint} unloadingPoint={unloadingPoint} />
      </MapContainer>
    </div>
  )
}

export default Map
