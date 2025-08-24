import aboutImg from '../images/about.jpeg'
import Title from './Title'
import { tours } from '../data'
const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />
        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImg} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>History</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <h3>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <h3>vision</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#about" className="btn" rel="noopener noreferrer">
              read more
            </a>
          </article>
        </div>
      </section>
      <section className="section" id="about">
        <Title title="Team" subTitle="members" />
        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, image, title, info } = tour
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
