import { useParams } from "react-router-dom";
import "./chapter.css"
import Data from '../data/db.json'
import Dropdown from "./chapter-dropdown";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'

function Chapter() {
  const { path, id } = useParams()
  const current_chap = Data.filter(chapter => chapter.id == id)[0]
  const [selected, setSelected] = useState(current_chap.title)
  let prev_chap = Data.find(chapter => chapter.id == current_chap.id - 1)
  let next_chap = Data.find(chapter => chapter.id == current_chap.id + 1)
  let images = []
  for (let i = 1; i <= current_chap.total_pages; i++) {
    if (i <= 9) {
      images.push(<p><img src={`../content/${current_chap.path}/0${i}.jpg`} alt={i}/></p>)
    } else {
      images.push(<p><img src={`../content/${current_chap.path}/${i}.jpg`} alt={i}/></p>)
    }
  }
    return (
      <div class="chapter-container">
          <h1 class="chapter-title">Adachi to Shimamura, {current_chap.title}</h1>
          <Dropdown selected={selected} setSelected={setSelected} current={current_chap.id} />
            {images}
          <div class="nav-last-page">
            <a href={Data.find(chapter => chapter.id == current_chap.id - 1) ? `/${prev_chap.path}/id=${current_chap.id - 1}` : "/"} 
              class={Data.find(chapter => chapter.id == current_chap.id - 1) ? "prev" : "no-prev"}>
              <FontAwesomeIcon icon={faChevronLeft} />Previous Chapter
            </a>
            <a href={Data.find(chapter => chapter.id == current_chap.id + 1) ? `/${next_chap.path}/id=${current_chap.id + 1}` : "/"} 
              class={Data.find(chapter => chapter.id == current_chap.id + 1) ? "next" : "no-next"}>Next Chapter
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
      </div>
    );
  }

  
  export default Chapter;