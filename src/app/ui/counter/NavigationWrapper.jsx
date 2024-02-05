'use client';
import { useEffect, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import Link from 'next/link';
// import { useRouter } from 'next/router'; // Cambiado de next/navigation a next/router
import { usePathname } from 'next/navigation';
import ExampleClientComponent from '../main/Example';

export default function NavigationWrapper({ children }) {
  const path = usePathname();
  console.log(path);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const currentCounter = parseInt(path.split('/').pop(), 10);
    if (!isNaN(currentCounter)) {
      setCounter(currentCounter);
    }
  }, [path]);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const pathEnd = ['', 1, 2];

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
        {path !== '/counter/2' && (
          <Link href={`/counter/${pathEnd[counter + 1]}`}>
            <SlArrowRight size={90} color="black" onClick={handleIncrement} />
          </Link>
        )}
      </div>
    </div>
  );
}
