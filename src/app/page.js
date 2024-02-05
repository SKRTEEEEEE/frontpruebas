import Link from 'next/link';
import Navbar from './ui/main/Navbar';

export default function Home() {
  return (
    <main className="h-screen ">
      <Navbar className="h-1/6" />
      <div className="flex justify-center items-center h-5/6 ">
        Discover our blockchain number store{' '}
        <Link
          href="/counter"
          className="px-8 border-slate-400 border-2 rounded-md mx-2"
        >
          {' '}
          here
        </Link>
      </div>
    </main>
  );
}
