import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import { useEffect, useState, Suspense, lazy } from 'react'
import { ScrollToTop } from './components/scrolTop/ScrolTop'

import Loader from './components/loader/Loader';

const HomePage = lazy(() => import('./page/homePage/HomePage'));
const Layout = lazy(() => import('./layout/Layout'));
const CarsPage = lazy(() => import('./page/carsPage/CarsPage'));
const AboutPage = lazy(() => import('./page/aboutPage/AboutPage'));
const ContactsPage = lazy(() => import('./page/contactsPage/ContactsPage'));
const ServicePage = lazy(() => import('./page/servicePage/ServicePage'));
const BlogInfoPage = lazy(() => import('./page/blogInfoPage/BlogInfoPage'));
const BlogPage = lazy(() => import('./page/blogPage/BlogPage'));
const ServiceInfoPage = lazy(() => import('./page/serviceInfoPage/ServiceInfoPage'));
const TermsPage = lazy(() => import('./page/termsPage/TermsPage'));
const BrandsPage = lazy(() => import('./page/brandsPage/BrandsPage'));
const CarsInfoPage = lazy(() => import('./page/carsInfoPage/CarsInfoPage'));
const FaqPage = lazy(() => import('./page/faqPage/FaqPage'));
const AllCars = lazy(() => import('./page/carsPage/allCars/AllCars'));
const SearchCars = lazy(() => import('./page/carsPage/searchCars/SearchCars'));
const InstagramImagePage = lazy(() => import('./components/instagram/instagramItem/InstagramImagePage'));
const NotFound = lazy((() => import('./components/not-found/NotFound')))

function App() {
  const [carsUrl, setCarsUrl] = useState('')
  const {pathname} = useLocation()
 
  useEffect(() => {
    if (pathname == "/cars") {
      setCarsUrl("");
    }
  }, [pathname]);
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/cars' element={<CarsPage setCarsUrl={setCarsUrl} />}>
              <Route index element={<AllCars carsUrl={carsUrl} />} />
              <Route path='/cars/:search' element={<SearchCars />} />
            </Route>
            <Route path='/brands' element={<BrandsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/serviceInfoPage/:id' element={<ServiceInfoPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/FAQ' element={<FaqPage />} />
            <Route path='/instagramImagePage/:id' element={<InstagramImagePage />} />
            <Route path='/blog_info/:blogId' element={<BlogInfoPage />} />
            <Route path='/terms_and_conditions' element={<TermsPage />} />
            <Route path='/cars_info/:carsId' element={<CarsInfoPage />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
