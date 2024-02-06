'use client';
import { useEffect, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import Link from 'next/link';
// import { useRouter } from 'next/router'; // Cambiado de next/navigation a next/router
import { usePathname, useRouter } from 'next/navigation';

export default function NavigationWrapper({ children }) {
  const path = usePathname();
  console.log(path);
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const currentCounter = parseInt(path.split('/').pop(), 10);
    if (!isNaN(currentCounter)) {
      setCounter(currentCounter);
    }
  }, [path]);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      router.push(`/counter/${pathEnd[counter]}`);
    }
  };

  const handleIncrement = () => {
    if (counter < 3) {
      setCounter(counter + 1);
      router.push(`/counter/${pathEnd[counter]}`);
    }
  };
  const pathEnd = ['', 1, 2, 3];

  return (
    <div className="w-screen flex justify-between h-5/6 items-center">
      <div className="w-24 ">
        {path !== '/counter' && (
          <Link href={`/counter/${pathEnd[counter - 1]}`}>
            <SlArrowLeft size={90} color="black" onClick={handleDecrement} />
          </Link>
        )}
      </div>

      <div>{children}</div>
      <div className="w-24 ">
        {path !== '/counter/3' && (
          <Link href={`/counter/${pathEnd[counter + 1]}`}>
            <SlArrowRight size={90} color="black" onClick={handleIncrement} />
          </Link>
        )}
      </div>
    </div>
  );
}
