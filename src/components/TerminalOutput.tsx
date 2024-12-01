import React from 'react';
import { Theme, TerminalHistory } from '../types/terminal';

interface TerminalOutputProps {
  history: TerminalHistory[];
  theme: Theme;
}

export default function TerminalOutput({ history, theme }: TerminalOutputProps) {
  return (
    <>
      {history.map((entry, i) => (
        <div key={i} className="mb-2">
          <div className={`flex items-center gap-2 ${theme.prompt}`}>
            <span>➜</span>
            <span>{entry.command}</span>
          </div>
          <div className={`mt-1 ${theme.text}`}>{entry.output}</div>
        </div>
      ))}
    </>
  );
}