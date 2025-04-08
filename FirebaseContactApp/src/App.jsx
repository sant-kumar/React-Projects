import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className="max-w-[370px] max-auto px-4">
      <Navbar/>
      <div className="flex">
        <input type="text" className="h-10 bg-transparent border border-white rounded-md flex-grow" />
      </div>
    </div>
  )
}

export default App