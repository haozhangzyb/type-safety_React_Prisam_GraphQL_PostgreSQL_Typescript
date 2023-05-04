import { FC } from "react";
import { User } from "../types";
import MessageDisplay from "./MessageDisplay";

interface UserDisplayProps {
  user: User;
}

const UserDisplay: FC<UserDisplayProps> = ({ user }) => {
  return (
    <div className='flex gap-x-24 justify-center'>
      <div className='rounded-sm drop-shadow-sm flex justify-center items-center bg-neutral-700 w-48 h-20'>
        <p className='text-xl text-gray-200 font-bold'>{user.name}</p>
      </div>
      <div className=''>
        {user.messages.map((message, index) => (
          <MessageDisplay message={message} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserDisplay;
