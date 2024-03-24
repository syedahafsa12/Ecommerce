"use client";
import React from 'react'

    // import { Button } from "@/components/ui/button";
    import Link from "next/link";
    import { usePathname } from "next/navigation";
import { Button } from './ui/button';
    import { ShoppingBag } from 'lucide-react';
    import { useShoppingCart } from "use-shopping-cart";
    
    const links = [
      { name: "Home", href: "/" },
      { name: "Men", href: "/Men" },
      { name: "Women", href: "/Women" },
      { name: "Kids", href: "/kids" },
    ];
    
    export default function Navbar() {
      const pathname = usePathname();
      const { handleCartClick } = useShoppingCart();

  return (
    <main>

        <header className="mb-8 border-b">
          <div className="flex items-center justify-between mx-auto max-w-2xl  py-3 px-4 sm:px-6 lg:max-w-7xl">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-bold">
                Hafsa<span className="text-primary">Commerce</span>
              </h1>
            </Link>
    
            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathname === link.href ? (
                    <Link
                      className="text-lg font-semibold text-primary"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
    
            <div className="flex divide-x border-r sm:border-l">
              <Button
                  onClick={() => handleCartClick()}
                // onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10 rounded-5">
             
                <ShoppingBag className='w-40 h-40 text-white md:w-40 md:h-40 ' />
                {/* <span className="hidden text-xs font-semibold text-white sm:block pb-2  ">
                  Cart
                </span> */}
                
            </Button>
            </div>
          </div>
        </header>
      
    </main>
  )
}

