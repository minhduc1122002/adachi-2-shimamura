import './ChapterList.css'
import { Link } from 'react-router-dom'

function ChapterNavigation( {chapters} ) {
  return (
    <div class="chapter-list">
        <table id="chapters">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Pages</th>
            </tr>
            </thead>
            <tbody id="chapterTable">
                {chapters.map(chapter => (
                    <tr class="table-default" data-chapter={chapter.id}>
                        <td>
                            <Link to={`${chapter.path}/id=${chapter.id}`} className="title">
                                    {chapter.title}
                            </Link>
                        </td>
                        <td>{`${chapter.total_pages} Pages`}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default ChapterNavigation;