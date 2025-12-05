import { OrderManagementTable } from "@/components/OrderManagementTable";

export default function Home() {
  return (
   <main>
    <section className="w-1/2 mx-auto">
      <h1 className="text-4xl">Welcome to CheckMinistry</h1>
      <h2>Order management</h2>
      <OrderManagementTable />
    </section>
   </main>
  );
}
