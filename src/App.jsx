import { useState } from "react";
import "./App.css";

export function App() {
  const [deadline, setDeadline] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time,setTime] = useState("");
  const [day,setDay] = useState("");


  const AddDeadline = (e) => {
    e.preventDefault()
    const Deadline = {
      id: Math.round(Math.random() * 1000),
      title: title,
      day: day,
      time: time,
      description: description,
      createdAt: Date.now(),
    };

    setDeadline([...deadline,Deadline]);

    console.log(Deadline);
  };

  return (
    <>
      <main class="container flex flex-direction">
        <form action="">
          <div className="form-wrapper">
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              required
              placeholder="Enter a title"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              required
              placeholder="Enter a description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            ></textarea>

            <div className="time-wrapper">
              <input
                class="year"
                type="date"
                required
                onChange={(e) => {
                setDay(e.target.value);
              }}
              value={day}
              />
              <input
                class="vaqt"
                type="time"
                required
                onChange={(e) => {
                setTime(e.target.value);
              }}
              value={time}
              />
            </div>
            <button type="submit" onClick={AddDeadline.length ? AddDeadline : alert("Please,fill the form")}>
              Add task
            </button>
          </div>
        </form>

        <div className="result-wrapper">
          {deadline.length ? (deadline.map((item,index) => {
              return (
                <div className="result-card" key={index}>
                  <div className="left">
                    <div className="title-desc">
                      <h3>Title: </h3>
                      <h2>{item.title}</h2>
                    </div>

                    <div className="desc">
                      <h3>Description:</h3>
                      <p>{item.description}</p>
                    </div>

                    <div className="deadline-time">
                      <h3>Deadline: </h3>
                      <h2>
                        <span class="dating">{item.day}</span>{" "}
                        <span class="timing">{item.time}</span>
                      </h2>
                    </div>
                  </div>

                  <div className="right">
                    <button class="delete-btn">
                      Delete <i class="bx bxs-trash"></i>
                    </button>
                    <button class="edit-btn">
                      Edit <i class="bx bx-edit-alt"></i>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            ""
          )}
        </div>

      </main>
    </>
  );
}

export default App;
