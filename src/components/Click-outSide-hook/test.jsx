import { useRef, useState } from "react";
import useOutsideClick from ".";

const UseOnclickOutsideClick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      {
      showContent ? (
        <div ref={ref}>
          <h1>This is Random Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            necessitatibus eveniet ipsum perspiciatis corporis, pariatur rerum
            eum nihil fuga consequatur rem, ab earum perferendis, obcaecati
            numquam sed. Cum, nostrum modi.
          </p>
        </div>
      ) : (
        <button onClick={()=>setShowContent(true)}>Response</button>
      )
      }
    </div>
  );
};
export default UseOnclickOutsideClick;
