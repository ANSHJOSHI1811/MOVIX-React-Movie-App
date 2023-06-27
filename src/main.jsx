import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import  {store} from './store/store'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App/>
   </Provider>
)










//?  <React.StrictMode> it ensures that the data is fetch is correct or not 
//? Means it will hit the API 2 Times and check the response are same or not