import React from 'react';
import { Theme } from '../types/terminal';

interface TerminalPromptProps {
  theme: Theme;
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function TerminalPrompt({ 
  theme, 
  input, 
  onInputChange, 
  onKeyDown,
  inputRef 
}: TerminalPromptProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={theme.prompt}>➜</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        className={`flex-1 bg-transparent outline-none ${theme.text} caret-current`}
        autoFocus
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
}