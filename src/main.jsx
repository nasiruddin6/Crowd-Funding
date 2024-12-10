import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './components/HomeLayout';
import Home from './components/Home';
import AllCampaign from './components/AllCampaign';
import AddCampaign from './components/AddCampaign';
import MyCampaign from './components/MyCampaign';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './providers/AuthProviders';
import PrivetRout from './Route/PrivetRout';
import UpdateCampaign from './components/UpdateCampaign';
import ErrorElement from './components/ErrorElement';
import DateLineCampaign from './components/DateLineCampaign';
import DonateHome from './components/DonateHome';
// import MyDonation from './components/MyDonation';
// import DonationForm from './components/DonationForm';




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allCampaign',
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('https://crowd-funding-server-one.vercel.app/addCampaign'),
      },
      {
        path: 'datelineCampaign',
        element: <DateLineCampaign></DateLineCampaign>,
        loader: () => fetch('https://crowd-funding-server-one.vercel.app/addCampaign'),
      },
      {
        path: 'addCampaign',
        element: <PrivetRout><AddCampaign></AddCampaign></PrivetRout>
      },
      {
        path: 'homeDonation',
        element: <DonateHome></DonateHome>,
        children: [
          {
            path:'myDonate',
            element: <MyCampaign></MyCampaign>,
          },
          {
            path:'donateForm',
            element: <AddCampaign></AddCampaign>
          }
        ]
      },


      {
        path: 'myCampaign',
        element: <PrivetRout><MyCampaign></MyCampaign> </PrivetRout>,
        loader: () => fetch('https://crowd-funding-server-one.vercel.app/addCampaign')
      },
      {
        path: 'updateCampaign/:id',
        element: <PrivetRout> <UpdateCampaign></UpdateCampaign></PrivetRout>,
        loader: ({ params }) => fetch(`https://crowd-funding-server-one.vercel.app/addCampaign/${params.id}`)
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
