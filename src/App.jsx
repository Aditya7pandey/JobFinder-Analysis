import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ResultPage from "./pages/ResultPage"
import {Provider} from "react-redux"
import { store } from "./store"

function App() {
  return (
    <>
    {/* <Provider store={store}> */}
      <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/search' element={<ResultPage />}/>
    </Routes>
    {/* </Provider> */}
    </>
  )
}

export default App
