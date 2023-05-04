import { FC } from "react";
import clx from "classnames";

interface BranchProps {
  isFirstMessage: boolean;
}

const Branch: FC<BranchProps> = ({ isFirstMessage }) => {
  return (
    <div
      className={clx(
        "h-full",
        "border-blue-500",
        isFirstMessage ? "w-24" : "w-16",
        !isFirstMessage && "border-l-4",
        isFirstMessage ? "-translate-x-24" : "-translate-x-16",
        "border-b-4",
        "-translate-y-10",
        "absolute",
        "group-hover:border-teal-400",
        "transition",
        "ease-in-out",
        "duration-300",
        "scale-y-110"
      )}
    />
  );
};

export default Branch;
