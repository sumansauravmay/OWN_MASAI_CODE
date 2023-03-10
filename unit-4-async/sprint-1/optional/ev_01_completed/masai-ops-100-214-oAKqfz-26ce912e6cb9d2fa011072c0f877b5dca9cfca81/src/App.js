// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
import Courses from "./Components/Courses";

export default function App() {
    
  return (
  <>
    <Title/>

    <UserCard />

<Courses/>
  </>
  )
}

