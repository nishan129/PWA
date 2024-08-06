import DiscountPorducts from '@/components/frontend/discount'
import React from 'react'

export default function page({params: {discount}}) {
  return (
    <div >
        <DiscountPorducts discount={discount}/>
    </div>
  )
}
