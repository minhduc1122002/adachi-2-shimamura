import ChapterNavigation from "../chapter/ChapterList";
import "./home.css"
import Data from '../data/db.json'

function Home() {
    return (
      <div class = "home-container">
        <div class="col-1">
          <figure>
              <img src="../img/81QLZwbrQbL.jpg" alt=""/>
          </figure>
          <div class="info">
            <table class="table-info">
              <tbody>
                <tr>
                <th>Author</th>
                <td class="text-sm">Hitoma Iruma</td>
                </tr>
                <tr>
                <th>Artist</th>
                <td class="text-sm">Mani</td>
                </tr>
                <tr>
                <th>Genre(s)</th>
                <td class="text-sm">Romance, School Life, Shoujo Ai, Slice of Life</td>
                </tr>
                <tr>
                <th>Total Chapters</th>
                <td class="text-sm">{`${Data.length} Chapters`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-2">
          <article>
            <img src="../img/81QLZwbrQbL.jpg" alt=""/>
            <table class="table-info">
              <tbody>
                <tr>
                <th>Author</th>
                <td class="text-sm">Hitoma Iruma</td>
                </tr>
                <tr>
                <th>Artist</th>
                <td class="text-sm">Mani</td>
                </tr>
                <tr>
                <th>Genre(s)</th>
                <td class="text-sm">Romance, School Life, Shoujo Ai, Slice of Life</td>
                </tr>
                <tr>
                <th>Total Chapters</th>
                <td class="text-sm">{`${Data.length} Chapters`}</td>
                </tr>
              </tbody>
            </table>
            <h1>Adachi to Shimamura</h1>
            <h2>安達としまむら</h2>
            <p>Adachi to Shimamura<br/>
            is a Shounen Yuri series that follows Adachi Sakura and Shimamura Hougetsu, 
            two girls who one day meet upstairs in the gym while skipping class. They 
            begin to spend a lot of time together and become great friends and possibly more. 
            The series has several light novels, two manga adaptations, and currently an anime 
            with 12 episodes.
            </p>
          </article>
          <ChapterNavigation chapters={Data}/>
        </div>
      </div>
    );
  }
  
  export default Home;