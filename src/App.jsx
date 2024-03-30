import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0);

  const [value,inputValue] = useState("");

  return (
    <>
    <main class="container flex flex-direction">
        <form action="">
          <div className="form-wrapper">
            <input type="text" onChange={()=>inputValue(value)} required placeholder='Enter a title'/>
            <textarea name="" id="" cols="30" rows="10" required placeholder='Enter a description'></textarea>

            <div className="time-wrapper">
                <input class="year" required type="date"/>
                <input class="vaqt" required type="time"/>
            </div>
          <button type="submit">Add task</button>
          </div>
        </form>

        <div className="result-wrapper">
            <div className="result-card">

            <div className="left">
              <div className="title-desc">
                <h3>Title: </h3>
                <h2>Read: Atomic Habits</h2>
              </div>


                <div className="desc">
                  <h3>Description:</h3>
                  <p>Read more 20 pages than yesterday</p>
                </div>

                <div className="deadline-time">
                  <h3>Deadline: </h3>
                  <h2><span class="dating">04.05.2024 </span> <span class="timing">08:00</span></h2>
                </div>
            </div>

            <div className="right">
              <button class="delete-btn">Delete <i class='bx bxs-trash'></i></button>
              <button class="edit-btn">Edit <i class='bx bx-edit-alt'></i></button>
            </div>
            </div>
        </div>

    </main>
    </>
  )
}

export default App
