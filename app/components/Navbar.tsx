import Link from "next/link"
import dynamic from 'next/dynamic';

const DynamicSearch = dynamic(() => import('./Search'), {
  ssr: false
});

export default function Navbar() {
  return (
   <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
    <h1 className="text-3xl front-bold text-white grid-place-content-center mb-2 md:mb-0">
        <Link href="/">WikiSearcher</Link>
    </h1>
    <DynamicSearch />
   </nav>
  )
}
