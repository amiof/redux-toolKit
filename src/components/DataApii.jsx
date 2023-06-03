import React from 'react'
import { useGetAllProductsQuery } from '../../redux/services/apiSlice.js'

function DataApi() {
  const { data,isError,isLoading }=useGetAllProductsQuery()
  console.log(data)
  console.log(isLoading)
  console.log(isError)
  return (
    <div>DataApi</div>
  )
}

export default DataApi
