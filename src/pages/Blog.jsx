import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import articlesContent from "../components/content.jsx";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

import "../assets/css/Blog.css";
function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadClick = (index) => {
    setSelectedArticle(index);
  };

  return (
    <>
      <Navbar />
      <div className="text-center">
        {selectedArticle === null ? (
          <div className="row justify-content-center text-center">
            {articlesContent.map((article, index) => (
              <Card
                key={index}
                title={article.title}
                text={article.text}
                img={article.img}
                onRead={() => handleReadClick(index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center container-text">
            <h2 className="text-center">
              {articlesContent[selectedArticle].title}
            </h2>
            {articlesContent[selectedArticle].paragraphs.map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
            <button
              className="btn btn-secondary d-block mx-auto"
              onClick={() => setSelectedArticle(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
