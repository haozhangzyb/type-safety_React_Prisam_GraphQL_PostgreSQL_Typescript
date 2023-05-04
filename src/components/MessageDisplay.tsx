import { FC } from "react";
import { Message } from "../types";
import Branch from "./Branch";

interface MessageDisplayProps {
  index: number;
  message: Message;
}

const MessageDisplay: FC<MessageDisplayProps> = ({ index, message }) => {
  return (
    <div className='group rounded-lg bg-zinc-700 w-48 h-20 mb-2 flex items-center drop-shadow-md relative'>
      <Branch isFirstMessage={index === 0} />
      <p className='text-gray-200 font-bold text-sm px-4'>
        {message.body}
      </p>
    </div>
  );
};

export default MessageDisplay;
