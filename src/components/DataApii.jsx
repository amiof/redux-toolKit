import React from 'react'
import { useGetAllProductsQuery } from '../../redux/services/apiSlice.js'
import { useSelector } from 'react-redux'

function DataApi() {
  const {data}= useGetAllProductsQuery("")
  console.log(data)
  const products = useSelector((state) => state.Api.queries['getAllProducts("")']?.data?.products)
  console.log("product", products)
  return (
    <div>DataApi</div>
  )
}

export default DataApi
