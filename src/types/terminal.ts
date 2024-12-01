export interface Command {
  name: string;
  description: string;
  execute: () => string | JSX.Element;
}

export interface Theme {
  name: string;
  background: string;
  text: string;
  prompt: string;
  selection: string;
}

export interface TerminalHistory {
  command: string;
  output: string | JSX.Element;
}