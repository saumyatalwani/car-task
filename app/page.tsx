import { data } from "@/mockData"; 
import CardCard from "@/components/CarCard";

export default function Home() {
  return (
    <div className="pl-10">
      <h1 className="text-6xl font-bold my-5">Cars</h1>
      <div className="flex flex-wrap">
        {
          data.map(car => {
            return (
              <CardCard key={car.id} {...car}/>
            )
          })
        }
      </div>

    </div>
  );
}
