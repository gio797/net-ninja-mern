import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WOrkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    // fetch("http://localhost:4000/api/workouts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}

export default Home;
