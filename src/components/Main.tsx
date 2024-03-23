import Image from "next/image";

import Link from "next/link";
import {client, urlFor} from '@/app/lib/sanity'

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}


export default async function Jero() {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16 ml-20">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-6">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
          Discover Your Style, Define Your Look!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
         
Explore curated fashion for the trendsetter in you. Elevate your style with our exclusive collection.
          </p>
        </div>

        <div className=" mb-12 flex w-full md:mb-10 lg:w-2/3 mt-0">
          <div>
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full object-cover object-center ml-60 "
              priority
              width={500}
              height={200}
            />
          </div>
          </div>   

      </div> 


      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 bg-primary items-center justify-center text-white transition duration-100 hover:bg-gray-100 hover:text-primary active:bg-gray-200 active:text-primary"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 bg-primary items-center justify-center text-white transition duration-100 hover:bg-gray-100 hover:text-primary active:bg-gray-200 active:text-primary"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 bg-primary items-center justify-center text-white transition duration-100 hover:bg-gray-100 hover:text-primary active:bg-gray-200 active:text-primary"
          >
            Teens
          </Link>
        </div>
        </div>
    </section>
  

  );
}