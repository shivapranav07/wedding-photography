import "./Home.css";
import weddingImage from "../assets/wedding.jpg";

function Home() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${weddingImage})`
      }}
    >
      <div className="overlay">

        <h1>
          Capturing Your
          <span> Love Story</span>
        </h1>

        <p>
          We specialize in creating timeless wedding
          photographs that tell the unique story of
          your special day.
        </p>

        <div className="buttons">
          <button>View Our Work</button>
          <button className="outline">
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  );
}

export default Home;