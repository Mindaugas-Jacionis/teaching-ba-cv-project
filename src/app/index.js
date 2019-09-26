import React from 'react';
import './index.css';
import person from '../static/images/person.png';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Hello</h1>
        <div className="Header__title">
          <h3>Mindaugas Jačionis</h3>
          <hr />
          <h3>Software Engineer</h3>
        </div>
        <img className="Header__illustration" src={person} alt="person illustration" />
      </header>
      <main className="Main">
        <div className="Main__Col">
          <section className="pattern-top">
            <h3>Details</h3>
            <p>
              Candy canes candy gummi bears candy. Dragée muffin chocolate bar chocolate bar bear claw brownie. Wafer toffee sesame snaps. Cheesecake jujubes jujubes.
            </p>
            <ul className="Main__List--two-col">
              <li>
                <span>Tel:</span>
                <span>+370623456789</span>
              </li>
              <li>
                <span>Email:</span>
                <span>you@wish.com</span>
              </li>
              <li>
                <span>Twitter:</span>
                <span>@MJacionis</span>
              </li>
              <li>
                <span>Github:</span>
                <span>https://github.com/username</span>
              </li>
              <li>
                <span>Web:</span>
                <span>https://web.web</span>
              </li>
            </ul>
          </section>
          <section className="pattern-top">
            <h3>Experience</h3>
            <ul className="Main__List--two-col">
              <li><span>2019</span> <span>present, Hogwartz, Lecturer</span></li>
              <li><span>2018 - 2019</span> <span>Twitter, Software Nana</span></li>
              <li><span>2017 - 2018</span> <span>Code Academy, Student</span></li>
            </ul>
          </section>
        </div>
        <div className="Main__Col">
          <section className="pattern-top">
            <div>
              <h3>About Me</h3>
              <p>
                Pie pie cake apple pie chocolate bar gummies bonbon powder. Oat cake jelly-o pie jelly beans. Chocolate soufflé fruitcake sweet powder. Pastry candy sweet carrot cake. Sweet jelly-o carrot cake toffee wafer bonbon sugar plum cookie. Marzipan sugar plum bonbon halvah jujubes tootsie roll wafer chocolate cake wafer.
              </p>
            </div>
          </section>
          <section className="pattern-top">
            <div>
              <h3>Skills</h3>
              <ul>
                <li>JavaScript - Advanced</li>
                <li>Html - Advanced</li>
                <li>Css - Beginner</li>
                <li>WoW - Intermediate</li>
                <li>Eating - Super Advanced</li>
              </ul>
            </div>
          </section>
          <section className="pattern-top">
            <div>
              <h3>Interests</h3>
              <ul className="Main__List--tag-list">
                <li>Magic</li>
                <li>Computers</li>
                <li>Procrastination</li>
                <li>Sleeping</li>
                <li>Spaceships</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
