import { data } from "@/mockData"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  
  // Simulating async data fetching
  const car = data.find(car => car.id === id)

  if (!car) {
    return (
      <div className="p-8 text-center text-xl text-gray-700">
        <h1>Car not found</h1>
        <p>Sorry, we couldn't find the car you're looking for.</p>
      </div>
    )
  }

  return (
    <div className="p-4 text-white h-screen w-screen">

      {/* Car Image */}
      <div className="relative w-full mb-8">
        <img
          src={car.image}
          alt={car.name}
          className="rounded-lg shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      <section className="py-16 px-8 bg-[#256774] rounded-lg">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-semibold text-green-300">{car.year} {car.name}</h2>
          <p className="mt-4 text-lg font-light text-gray-300">Experience cutting-edge technology and speed like never before.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
              <h3 className="text-2xl font-medium">Speed</h3>
              <p className="mt-2 text-xl font-light">{car.speed} km/h</p>
            </div>
            <div className="p-6 bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
              <h3 className="text-2xl font-medium">Engine</h3>
              <p className="mt-2 text-xl font-light">{car.engine}</p>
            </div>
            <div className="p-6 bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
              <h3 className="text-2xl font-medium">Price</h3>
              <p className="mt-2 text-xl font-light">{car.price}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
