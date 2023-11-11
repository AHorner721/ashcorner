import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <div>
          <h1>Hello! I'm Ashly Horner (aka Ash)</h1>
          <p>
            I'm a web developer, video game player, and an anime enthusiast.
          </p>
          <p>Welcome to my corner of the internet!</p>
        </div>
        <div>{/* TODO: Add Headshot */}</div>
      </header>

      <article>
        <section>
          <h2>My Background</h2>
          <p>
            I am currently employed as computer scientist, but my personal focus
            is in frontend development.
          </p>
          <p>
            I graduated from Jackson State University with my Bachelor's Degree
            in Computer Science in 2021. Since then, I have worked as a
            consultant with both commercial and government clients as a subject
            matter expert in web development.
          </p>
          <p>
            My favorite thing about this field is helping people solve problems
            and delivering a better end user experience.
          </p>
          <button>Download my resume</button> <button>Get in touch</button>
        </section>
        <section>
          <h3>Technical Skills</h3>
          <ul>
            <li>JavaScript / Node JS</li>
            <li>React / Next JS</li>
            <li>C# / ASP.Net Core</li>
            <li>Python / Flask</li>
            <li>PHP / WordPress</li>
            <li>Certified Comptia Security+</li>
            <li>AWS Certified Cloud Practicioner</li>
          </ul>
        </section>
      </article>

      <article>
        <section>
          <h2>My Projects</h2>
          <div>
            <h3>Gus Campaign</h3>
            <p>
              A progressive web application (PWA) to support local political
              campaign.
            </p>
          </div>
          <div>
            <h3>Pokedex</h3>
            <p>
              A dictionary application listing the type, height, weight and
              description of Pokemon.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
