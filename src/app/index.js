import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';

const INTERESTS = ['Magic', 'Computers', 'Procrastination', 'Sleeping', 'Spaceships'];

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <div className="Col">
          <Section className="pattern-top" title="Details">
            <p>
              Candy canes candy gummi bears candy. Dragée muffin chocolate bar chocolate bar bear claw brownie. Wafer toffee sesame snaps. Cheesecake jujubes jujubes.
            </p>
            <ul className="List--two-col">
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
          </Section>
          <Section className="pattern-top" title="Experience">
            <ul className="List--two-col">
              <li><span>2019</span> <span>present, Hogwartz, Lecturer</span></li>
              <li><span>2018 - 2019</span> <span>Twitter, Software Nana</span></li>
              <li><span>2017 - 2018</span> <span>Code Academy, Student</span></li>
            </ul>
          </Section>
        </div>
        <div className="Col">
          <Section className="pattern-top" title="About Me">
            <p>
              Pie pie cake apple pie chocolate bar gummies bonbon powder. Oat cake jelly-o pie jelly beans. Chocolate soufflé fruitcake sweet powder. Pastry candy sweet carrot cake. Sweet jelly-o carrot cake toffee wafer bonbon sugar plum cookie. Marzipan sugar plum bonbon halvah jujubes tootsie roll wafer chocolate cake wafer.
            </p>
          </Section>
          <Section className="pattern-top" title="Skills">
            <ul>
              <li>JavaScript - Advanced</li>
              <li>Html - Advanced</li>
              <li>Css - Beginner</li>
              <li>WoW - Intermediate</li>
              <li>Eating - Super Advanced</li>
            </ul>
          </Section>
          <Section className="pattern-top" title="Interests">
            <ul className="List--tag-list">
              {INTERESTS.map((interest, i) => <li key={i}>{interest}</li>)}
            </ul>
          </Section>
        </div>
      </Main>
    </div>
  );
}

export default App;
