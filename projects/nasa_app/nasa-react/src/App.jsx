import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/Sidebar"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    console.log(import.meta.env.VITE_NASA_API_KEY);
    

    async function fetchAPIData() {
      setLoading(true);

      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      console.log('API Key:', NASA_KEY);

      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        console.log('Cached API Data:', apiData);
        setData(apiData)
        console.log('Fetched from cache today')
        setLoading(false);
        return
      }
      localStorage.clear();

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        console.log(apiData);
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData()
  }, []);

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
