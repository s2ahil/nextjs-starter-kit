'use client';

import { Button } from '@/components/ui/button';
import NavBar from '@/components/wrapper/navbar';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function SuccessPage() {
  const { userId } = useAuth();

  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <NavBar />
      <h1 className="mt-[35vh] mb-3 scroll-m-20  text-5xl font-semibold tracking-tight transition-colors first:mt-0">
        Welcome to Nextjs Starter Kit 🎉
      </h1>
      <p className="leading-7 text-center w-[60%]">
        Let&apos;s get cooking
      </p>
      <Link href={userId ? "/dashboard" : "/pricing"} className='mt-4'>
        <Button>{userId ? "Access Dashboard" : "View Pricing"}</Button>
      </Link>
    </main>
  )
}
