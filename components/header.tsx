import Link from "next/link";

export default function Header(){
    return(
        <header className="text-white p-5 flex">
        <Link href={'/'} className="text-4xl font-bold">AutoWisdom</Link>
        <div className="flex ml-auto">
            <Link href={'/'} className="mx-2">Home</Link>
            <Link href={'https://me.techsaumya.in'} className="mx-2">About</Link>
            <Link href={'https://me.techsaumya.in'} className="mx-2">Contact</Link>
        </div>
      </header>
    )
}