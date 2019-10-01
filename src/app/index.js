import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import TagList from './components/TagList';
import Link from './components/Link';

const INTERESTS = {
  en: ['Magic', 'Computers', 'Procrastination', 'Sleeping', 'Spaceships'],
  jp: ['First', 'Second', 'Hello'],
};

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <select onChange={e => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="jp">Japanese</option>
      </select>
      <Header />
      <Main>
        <div className="Col">
          <Section className="pattern-top" title="Details">
            <p>
              Candy canes candy gummi bears candy. Dragée muffin chocolate bar chocolate bar bear
              claw brownie. Wafer toffee sesame snaps. Cheesecake jujubes jujubes.
            </p>
            <ul>
              <li className="flex justify-between">
                <span>Tel:</span>
                <Link href="tel:+370623456789">+370623456789</Link>
              </li>
              <li className="flex justify-between">
                <span>Email:</span>
                <Link href="mailto:you@wish.com?subject=Hello World">you@wish.com</Link>
              </li>
              <li className="flex justify-between">
                <span>Twitter:</span>
                <Link href="https://twitter.com/MJacionis" shouldTargetBlank>
                  @MJacionis
                </Link>
              </li>
              <li className="flex justify-between">
                <span>Github:</span>
                <Link href="https://github.com/mindaugas-jacionis" shouldTargetBlank>
                  mindaugas-jacionis
                </Link>
              </li>
              <li className="flex justify-between">
                <span>Web:</span>
                <Link href="https://heroofweb.com" shouldTargetBlank>
                  heroOfWeb.com
                </Link>
              </li>
            </ul>
          </Section>
          <Section className="pattern-top" title="Experience">
            <ul>
              <li className="flex justify-between">
                <span>2019</span> <span>present, Hogwartz, Lecturer</span>
              </li>
              <li className="flex justify-between">
                <span>2018 - 2019</span> <span>Twitter, Software Nana</span>
              </li>
              <li className="flex justify-between">
                <span>2017 - 2018</span> <span>Code Academy, Student</span>
              </li>
            </ul>
          </Section>
        </div>
        <div className="Col">
          <Section className="pattern-top" title="About Me">
            <p>
              Pie pie cake apple pie chocolate bar gummies bonbon powder. Oat cake jelly-o pie jelly
              beans. Chocolate soufflé fruitcake sweet powder. Pastry candy sweet carrot cake. Sweet
              jelly-o carrot cake toffee wafer bonbon sugar plum cookie. Marzipan sugar plum bonbon
              halvah jujubes tootsie roll wafer chocolate cake wafer.
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
            <TagList items={INTERESTS[language]} />
          </Section>
        </div>
      </Main>
    </div>
  );
}

export default App;
