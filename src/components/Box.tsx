import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeByPayload } from "../switchSlice";

export default function Box() {
  const animals = ["חתול", "נמר", "אריה", "כלב", "זאב", "שועל"];
  const dispatch = useAppDispatch();
  // const currentState = useAppSelector(state => state.switch.value)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
    dispatch(changeByPayload(e.currentTarget.innerText));
    
  return (
    <div>
      {animals.map((animal) => (
        <button  onClick={handleClick}>{animal}</button>
      ))}
    </div>
  );
}
