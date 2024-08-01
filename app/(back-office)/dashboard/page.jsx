import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import DashboardCharts from '@/components/backoffice/DashboardCharts';
import React from 'react';
// import CustomDataTable from '@/components/backoffice/CustomDataTable';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { getData } from '@/lib/getData';
import OrderDetails from '@/components/backoffice/OrderDetails';

export default async function page() {
  const session = await getServerSession(authOptions)
  const role  = session?.user?.role;
  const sales = await getData("sale")
  const products = await getData("products");
  const orders  = await getData("orders");

  return (
    <div>
        <Heading title="Dashboard Overview"/>
        {/* Large Cards */}
        <LargeCards sales={sales} />
        {/* Small Cards */}
        <SmallCards  orders={orders}/>
        {/* Charts */}
        <DashboardCharts sales={sales} orders={orders}/>
        {/* Recent Orders Table */}
        <OrderDetails />
    </div>
  );
}
