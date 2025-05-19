import GridItem from "@/components/grid-item";
import ItemTable from "@/components/item-talbe";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen gap-10 flex-col">
      <ItemTable />
      <GridItem />
    </main>
  );
}
