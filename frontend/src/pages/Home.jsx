import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const LatestCollection = lazy(() => import('../components/LatestCollection'));
const BestSeller = lazy(() => import('../components/BestSeller'));

function Home() {
  return (
    <div>
      <Hero/>

      <Suspense fallback={<div className="text-center py-6">Loading Latest Collection...</div>}>
        <LatestCollection />
      </Suspense>

      <Suspense fallback={<div className="text-center py-6">Loading Best Sellers...</div>}>
        <BestSeller />
      </Suspense>

      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home