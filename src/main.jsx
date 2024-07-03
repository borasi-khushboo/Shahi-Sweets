import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import DefaultContainer from './routes/DefaultContainer'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import CardContainer from './components/CardContainer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import FoodStore from './store'
import IndividualItem from './components/IndividualItem'
import AboutSection from './components/AboutSection'
import ProductContainer from './components/ProductContainer'
import FaqSection from './components/FaqSection'
import DishOfTheDay from './components/DishOfTheDay'





const route = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {
        path: "/", element: <DefaultContainer />
      },
      {
        path: "/card", element: <CardContainer />
      },
      {
        path: "/view", element: <IndividualItem />
      },
      {
        path: "/about", element: <AboutSection />
      },
      {
        path: "/dishes", element: <ProductContainer />
      },
      {
        path: "/faq", element: <FaqSection />
      },
      {
        path: "/DishOfDay", element: <DishOfTheDay />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={FoodStore}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
)
