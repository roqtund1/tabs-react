import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export default function Duties({ duties }) {
  return (
    <>
      {duties.map((duty) => {
        const id = uuidv4();

        return (
          <div key={id} className="job-text">
            <MdKeyboardDoubleArrowRight className="icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </>
  );
}
