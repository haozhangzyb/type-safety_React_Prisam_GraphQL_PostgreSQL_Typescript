import UserDisplay from "./components/UserDisplay";
import { User } from "./types";

const users: User[] = [
  {
    name: "John",
    messages: [
      {
        body: "Hello world",
      },
      {
        body: "Hi there",
      },
    ],
  },
  {
    name: "Jane",
    messages: [
      {
        body: "Hello world",
      },
      {
        body: "Hi there",
      },
    ],
  },
];

function App() {
  return (
    <div className='bg-black h-screen flex flex-col justify-center items-center'>
      {/* <p className='font-extrabold text-red-300 text-4xl'>Hello world</p> */}
      {users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  );
}

export default App;
