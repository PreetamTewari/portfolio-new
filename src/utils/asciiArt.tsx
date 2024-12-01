import React from 'react';

const generateAsciiArt = (text: string): string => {
  const letters: { [key: string]: string[] } = {
    P: [
      "██████╗ ",
      "██╔══██╗",
      "██████╔╝",
      "██╔═══╝ ",
      "██║     ",
      "╚═╝     "
    ],
    R: [
      "██████╗ ",
      "██╔══██╗",
      "██████╔╝",
      "██╔══██╗",
      "██║  ██║",
      "╚═╝  ╚═╝"
    ],
    E: [
      "███████╗",
      "██╔════╝",
      "█████╗  ",
      "██╔══╝  ",
      "███████╗",
      "╚══════╝"
    ],
    T: [
      "████████╗",
      "╚══██╔══╝",
      "   ██║   ",
      "   ██║   ",
      "   ██║   ",
      "   ╚═╝   "
    ],
    A: [
      " █████╗ ",
      "██╔══██╗",
      "███████║",
      "██╔══██║",
      "██║  ██║",
      "╚═╝  ╚═╝"
    ],
    M: [
      "███╗   ███╗",
      "████╗ ████║",
      "██╔████╔██║",
      "██║╚██╔╝██║",
      "██║ ╚═╝ ██║",
      "╚═╝     ╚═╝"
    ]
  };

  const lines: string[] = ["", "", "", "", "", ""];
  
  for (const char of text.toUpperCase()) {
    if (letters[char]) {
      for (let i = 0; i < 6; i++) {
        lines[i] += letters[char][i] + " ";
      }
    }
  }
  
  return lines.join("\n");
};

export const getWelcomeMessage = (): JSX.Element => {
  return (
    <div className="space-y-4">
      <pre className="font-mono text-green-400">
        {generateAsciiArt("PREETAM")}
      </pre>
      <p className="text-lg">Welcome to my portfolio</p>
      <p className="text-sm opacity-80">Type 'help' to see available commands.</p>
    </div>
  );
};