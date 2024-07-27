import ProductList from '@/components/frontend/ProductList'
import React from 'react'

export default function page({params: {slug}}) {
  return (
    <div>
        <ProductList slug={slug} />
    </div>
  )
}
