import Image from "next/image"
import Link from "next/link"

export default function CardCard(props: { name: string; year: string; image: string; id: string }) {
  return (
    <Link href={`/car/${props.id}`}>
      <div className="m-2 group relative flex flex-col items-center justify-start w-[30vw] h-[20vw] bg-[#256774] rounded-2xl shadow-md shadow-zinc-800 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer">
        <div className="w-full h-[70%] relative">
        <Image
            src={props.image}
            alt={props.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-t-2xl"
            />

        </div>
        <div className="w-full h-[30%] px-4 py-2 text-center">
          <h1 className="text-lg font-semibold text-white">{props.name}</h1>
          <h2 className="text-sm text-gray-400">{props.year}</h2>
        </div>
      </div>
    </Link>
  )
}