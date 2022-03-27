import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'antd'
import { SET_REQUEST_ASYNC } from '../redux/types'
import RowSelector from './RowSelector'

const RequestTable = () => {
  const dispatch = useDispatch()
  const requestsState = useSelector((state) => state.requests)
  const { requestList, requestPoints, selectedRequestId } = requestsState

  const dataSource = requestList.map((request) => ({
    key: request.requestId,
    requestId: request.requestId,
    loadingPoint: requestPoints.find((point) => point.id === request.loadingPointId).name,
    unloadingPoint: requestPoints.find((point) => point.id === request.unloadingPointId).name
  }))

  const columns = [
    {
      title: 'Заявка',
      dataIndex: 'requestId',
      key: 'requestId',
      className: 'table-column'
    },
    {
      title: 'Погрузка',
      dataIndex: 'loadingPoint',
      key: 'loadingPoint',
      className: 'table-column',
      render: (value, record) => <RowSelector defaultValue={value} requestId={record.requestId} type="loading" />
    },
    {
      title: 'Разгрузка',
      dataIndex: 'unloadingPoint',
      key: 'unloadingPoint',
      className: 'table-column',
      render: (value, record) => <RowSelector defaultValue={value} requestId={record.requestId} type="unloading" />
    }
  ]

  const rowSelection = {
    type: 'radio',
    selectedRowKeys: selectedRequestId ? [selectedRequestId] : [],
    onChange: (selectedRowKeys) => dispatch({ type: SET_REQUEST_ASYNC, payload: selectedRowKeys[0] })
  }

  return (
    <Table className="table" columns={columns} dataSource={dataSource} rowSelection={rowSelection} />
  )
}

export default RequestTable
