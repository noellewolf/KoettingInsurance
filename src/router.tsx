import { createBrowserRouter, Link, RouterProvider, type RouteObject } from 'react-router-dom';
import HomePage from './App';
import ClaimsBillingSection from './components/ClaimsBillingSection';
import SiteLayout from './SiteLayout';

function ClaimsBillingPage() {
  return (
    <main id="main">
      <ClaimsBillingSection />
    </main>
  );
}

function NotFoundPage() {
  return (
    <main id="main" className="container not-found-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>We couldn’t find that page.</h1>
      <p>Try heading back to the homepage.</p>
      <Link className="button button-dark" to="/">
        Back to home
      </Link>
    </main>
  );
}

export const pageRoutes: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'billing-claims', element: <ClaimsBillingPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: pageRoutes,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
