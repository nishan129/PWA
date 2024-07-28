
import React from 'react';
import { getData } from '@/lib/getData';
import FormHeader from './FormHeader';
import NewCategoryForm from './NewCategoryForm';
export  default async function NewCategory() {
  // Markets 
  const marketData = await  getData("markets");
  const market = marketData.map((market) => {
    return {
        id: market.id,
        title: market.title
    }
})

  return (
    <div>
        <FormHeader title="New Product Category"/>
        <NewCategoryForm markets={market} />
  </div>)
  
}
