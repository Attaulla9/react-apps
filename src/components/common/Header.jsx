
import { useState } from 'react'
function Home() {
    const [count, setCount] = useState(0)
    return (
      <>
       <div className="mt-5 flex flex-col justify-center justify-items-center items-center">
        <h1 className='text-bold'>Home page</h1>
        <p>count is {count}</p>
        <div>
          <button className='p-2 m-2 bg-red-500 text-white rounded shadow-lg' onClick={() => setCount((count) => count + 1)}>
            click
          </button>
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  