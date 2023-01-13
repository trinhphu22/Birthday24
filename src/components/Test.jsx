import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Test = () => {
  const headings = [
    { id: 1, text: 'Heading 1' },
    { id: 2, text: 'Heading 2' },
    { id: 3, text: 'Heading 3' },
  ];
  const [currentHeading, setCurrentHeading] = useState(0);

  setTimeout(() => {
    setCurrentHeading((currentHeading + 1) % headings.length);
  }, 2000);

  return (
    <div className="App">
      <TransitionGroup>
        {headings.map(({ id, text }) => (
          <CSSTransition key={id} in={currentHeading === id - 1} timeout={500} classNames="slideInUp">
            <h1>{text}</h1>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
