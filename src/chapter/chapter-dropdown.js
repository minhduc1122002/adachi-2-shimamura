import { useState } from "react";
import "./chapter-dropdown.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'
import Data from '../data/db.json'

function Dropdown({ selected, setSelected, current }) {
  const [isActive, setIsActive] = useState(false);
  let prev_chap = Data.find(chapter => chapter.id == current - 1)
  let next_chap = Data.find(chapter => chapter.id == current + 1)
  return (
      <div className="chapter-nav-bar">
        <a href={prev_chap ? `/${prev_chap.path}/id=${current - 1}` : "/"} 
            class={prev_chap ? "prev" : "no-prev"}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isActive && (
            <div className="dropdown-content">
            {Data.map((chapter) => (
                <div
                onClick={(e) => {
                    window.location.href=`/${chapter.path}/id=${chapter.id}`
                    setIsActive(false);
                }}
                className="dropdown-item"
                >
                {chapter.title}
                </div>
            ))}
            </div>
        )}
        </div>
        <a href={next_chap ? `/${next_chap.path}/id=${current + 1}` : "/"} 
            class={next_chap ? "next" : "no-next"}>
            <FontAwesomeIcon icon={faChevronRight} />
        </a>
    </div>
  );
}

export default Dropdown;