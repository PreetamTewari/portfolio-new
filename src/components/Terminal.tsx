import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { commands } from '../data/commands';
import { themes } from '../data/themes';
import { TerminalHistory } from '../types/terminal';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';
import { getWelcomeMessage } from '../utils/asciiArt';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalHistory[]>([{
    command: 'welcome',
    output: getWelcomeMessage()
  }]);
  const [theme, setTheme] = useState(themes.ubuntu);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().toLowerCase().split(' ');
    const command = args[0];

    if (command === 'theme' && args[1]) {
      const newTheme = themes[args[1]];
      if (newTheme) {
        setTheme(newTheme);
        return `Theme changed to ${args[1]}`;
      }
      return 'Theme not found. Available themes: ubuntu, gruvbox, nord';
    }

    if (command === 'clear') {
      setHistory([]);
      return '';
    }

    const foundCommand = commands.find((c) => c.name === command);
    return foundCommand ? foundCommand.execute() : `Command not found: ${command}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = handleCommand(input);
    if (input.trim().toLowerCase() !== 'clear') {
      setHistory([...history, { command: input, output }]);
      setCommandHistory((prev) => [...prev, input]);
    }
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className={`w-full h-full ${theme.background}`}>
      <div className="flex items-center gap-2 p-2 bg-black/20">
        <TerminalIcon className="w-5 h-5 text-gray-400" />
        <span className={`${theme.text} font-mono`}>Terminal Portfolio</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="h-[calc(100%-40px)] overflow-y-auto p-4 font-mono"
      >
        <TerminalOutput history={history} theme={theme} />
        
        <form onSubmit={handleSubmit}>
          <TerminalPrompt
            theme={theme}
            input={input}
            onInputChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            inputRef={inputRef}
          />
        </form>
      </div>
    </div>
  );
}