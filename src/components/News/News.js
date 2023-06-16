import "./News.css";
import { useEffect, useRef, useState } from "react";

const News = () => {
  const newsFeed = useRef(null);
  const [data, setData] = useState([]);

  let news_url =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-12-30&sortBy=publishedAt&apiKey=81adb761029b462681e942a88dc7e73a";

  let req = new Request(news_url);

  function showDataNews() {
    fetch(req)
      .then(function (response) {
        console.log(response.json());
      })
      .then((data) => setData(data.articles));
  }

  useEffect(() => {
    showDataNews();
  }, []);

  return (
    <>
      <div className="news">
        <div className="news_content">
          <input
            type="text"
            className="news_search_input"
            placeholder="Search Twitter"
          />
          <div className="news_info_container">
            <h2>Trends for you</h2>
            <div className="news_feed" ref={newsFeed}>
              {data.map((item) => (
                <p key={item.title}>{item.urlToImage}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
