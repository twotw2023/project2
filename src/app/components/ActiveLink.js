'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Nav.css';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const path = usePathname();
  const className = path === href ? 'nav-element active' : 'nav-element';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

export default ActiveLink;
