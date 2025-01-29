import React from 'react';

export const LineWrapper = ({ children }) => (
  <div>{children}</div>
);

export const WordWrapper = ({ children }) => (
  <span style={{ whiteSpace: 'pre' }}>{children}</span>
);

export const LetterWrapper = ({ children }) => (
  <span>{children}</span>
);
