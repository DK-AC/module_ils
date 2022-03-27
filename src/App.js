import React, { useState, useEffect } from 'react'
import { Layout, Divider, Typography } from 'antd'
import RequestTable from './components/RequestTable'
import Map from './components/Map'

const App = () => {
  const [width, setWidth] = useState(460)
  const [dragging, setDragging] = useState(false)

  const onMouseDownHandler = () => setDragging(true)
  const onMouseUpHandler = () => setDragging(false)

  const onMouseMoveHandler = (e) => {
    if (!dragging) return
    setWidth(e.clientX)
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMoveHandler)
    document.addEventListener('mouseup', onMouseUpHandler)

    return () => {
      document.removeEventListener('mousemove', onMouseMoveHandler)
      document.removeEventListener('mouseup', onMouseUpHandler)
    }
  })

  return (
    <Layout className="wrapper">
      <Layout.Sider className="sider" width={width}>
        <Typography.Title>Заявки</Typography.Title>
        <RequestTable />
      </Layout.Sider>
      <Divider className="divider" type="vertical" onMouseDown={onMouseDownHandler} />
      <Layout.Content>
        <Map />
      </Layout.Content>
    </Layout>
  )
}

export default App
