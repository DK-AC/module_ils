import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet-routing-machine'

const RoutingMachine = ({ loadingPoint, unloadingPoint }) => {
  const map = useMap()

  useEffect(() => {
    if (!map) return
    map.setView(loadingPoint)

    const instance = L.Routing.control({
      waypoints: [
        L.latLng(loadingPoint[0], loadingPoint[1]),
        L.latLng(unloadingPoint[0], unloadingPoint[1])
      ],
      lineOptions: {
        styles: [{ color: '#3187CC', weight: 2 }]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map)

    return () => map.removeControl(instance)
  }, [map, loadingPoint, unloadingPoint])

  return null
}

export default RoutingMachine
