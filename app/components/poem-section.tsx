import React from 'react';

type Props = {
  children: React.ReactNode;
};

function PoemSection(props: Props) {
  if (typeof props.children !== 'string') {
    return null;
  }

  return (
    <p>
      {props.children.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          <span>{line.trim()}</span>
          <br />
        </React.Fragment>
      ))}
    </p>
  );
}

export default PoemSection;
