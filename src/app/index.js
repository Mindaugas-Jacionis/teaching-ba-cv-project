import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import TagList from './components/TagList';
import Link from './components/Link';
import { CONTACTS, INTERESTS } from './data';

function ContactListItem({ label, text, ...rest }) {
  const Component = rest.href ? Link : 'span';

  return (
    <li className="flex justify-between">
      <span>{label}</span>
      <Component {...rest}>{text}</Component>
    </li>
  );
}

function StarsRating({ amount }) {
  return [...Array(amount)].map((item, index) => (
    <span key={index} role="img" aria-label="Star emoji">
      ⭐
    </span>
  ));
}

class App extends React.Component {
  state = {
    language: 'en',
  };

  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({ language: 'jp' });
  }

  setLanguage = e => {
    console.log('set lang');
    this.setState({ language: e.target.value });
  };

  render() {
    console.log('render');
    const { language } = this.state;

    return (
      <div className="App">
        <select value={language} onChange={this.setLanguage}>
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
                {CONTACTS[language].map((item, index) => (
                  <ContactListItem key={index} {...item} />
                ))}
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
                Pie pie cake apple pie chocolate bar gummies bonbon powder. Oat cake jelly-o pie
                jelly beans. Chocolate soufflé fruitcake sweet powder. Pastry candy sweet carrot
                cake. Sweet jelly-o carrot cake toffee wafer bonbon sugar plum cookie. Marzipan
                sugar plum bonbon halvah jujubes tootsie roll wafer chocolate cake wafer.
              </p>
            </Section>
            <Section className="pattern-top" title="Skills">
              <ul>
                <li>
                  JavaScript - <StarsRating amount={5} />
                </li>
                <li>
                  Html - <StarsRating amount={5} />
                </li>
                <li>
                  Css - <StarsRating amount={1} />
                </li>
                <li>
                  WoW - <StarsRating amount={3} />
                </li>
                <li>
                  Eating - <StarsRating amount={7} />
                </li>
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
}

export default App;
