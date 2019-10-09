import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import TagList from './components/TagList';
import Link from './components/Link';
import ErrorBoundary from './components/ErrorBoundary';
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

class StarsRating extends React.Component {
  state = {};
  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', nextProps, this.props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');

  //   return true;
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.amount >= 5) {
      return { text: 'Amazing' };
    }

    return { text: '' };
  }

  render() {
    const { amount, val, language } = this.props;
    const { text } = this.state;

    console.log('render text', text, val, this.props, this.state);

    if (language === 'jp') {
      throw new Error('Errrrrrrrrr');
    }

    return (
      <span>
        {[...Array(amount)].map((item, index) => (
          <span key={index} role="img" aria-label="Star emoji">
            ⭐
          </span>
        ))}
        {this.state.text}
      </span>
    );
  }
}

class SectionAboutMe extends React.Component {
  interval = -1;

  componentDidMount() {
    this.interval = setInterval(() => console.log('Hi'), 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    clearInterval(this.interval);
  }

  render() {
    return (
      <Section className="pattern-top" title="About Me">
        <p>
          Pie pie cake apple pie chocolate bar gummies bonbon powder. Oat cake jelly-o pie jelly
          beans. Chocolate soufflé fruitcake sweet powder. Pastry candy sweet carrot cake. Sweet
          jelly-o carrot cake toffee wafer bonbon sugar plum cookie. Marzipan sugar plum bonbon
          halvah jujubes tootsie roll wafer chocolate cake wafer.
        </p>
      </Section>
    );
  }
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
    // this.setState({ language: 'jp' });
  }

  setLanguage = e => {
    console.log('set lang');
    this.setState({ language: e.target.value });
  };

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');

    return { name: 'Jon', lastName: 'Snow' };
  }

  componentDidUpdate(prevProps, prevState, random) {
    console.log('componentDidUpdate', random);
  }

  render() {
    console.log('render');
    const { language, loading } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <ErrorBoundary component={() => <p>Oh My GOD, we CRASHED!</p>}>
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
              {language !== 'jp' && <SectionAboutMe />}
              <Section className="pattern-top" title="Skills">
                <ul>
                  <li>
                    JavaScript - <StarsRating language={language} amount={5} />
                  </li>
                  <li>
                    Html - <StarsRating amount={language === 'en' ? 5 : 3} />
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
      </ErrorBoundary>
    );
  }
}

export default App;
