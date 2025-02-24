'use client'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto'>
          <div>
            <h3 className='font-bold mb-2'>Footer.Get to Know Us</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/careers'>Footer.Careers</Link>
              </li>
              <li>
                <Link href='/page/blog'>Footer.Blog</Link>
              </li>
              <li>
                <Link href='/page/about-us'>Footer.About name, {APP_NAME}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>{'Footer.Make Money with Us'}</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/sell'>
                  Footer.Sell products on, {APP_NAME}
                </Link>
              </li>
              <li>
                <Link href='/page/become-affiliate'>
                  Footer.Become an Affiliate
                </Link>
              </li>
              <li>
                <Link href='/page/advertise'>
                  Footer.Advertise Your Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>Footer.Let Us Help You</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/page/shipping'>
                  Footer.Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link href='/page/returns-policy'>
                  Footer.Returns & Replacements
                </Link>
              </li>
              <li>
                <Link href='/page/help'>Footer.Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
