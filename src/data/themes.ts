import { Theme } from '../types/terminal';

export const themes: Record<string, Theme> = {
  ubuntu: {
    name: 'Ubuntu',
    background: 'bg-[#300A24]',
    text: 'text-[#FFFFFF]',
    prompt: 'text-[#4EE44E]',
    selection: 'bg-[#4EE44E] bg-opacity-20',
  },
  gruvbox: {
    name: 'Gruvbox',
    background: 'bg-[#282828]',
    text: 'text-[#EBDBB2]',
    prompt: 'text-[#B8BB26]',
    selection: 'bg-[#B8BB26] bg-opacity-20',
  },
  nord: {
    name: 'Nord',
    background: 'bg-[#2E3440]',
    text: 'text-[#D8DEE9]',
    prompt: 'text-[#88C0D0]',
    selection: 'bg-[#88C0D0] bg-opacity-20',
  },
  catppuccin: {
    name: 'Catppuccino',
    background: 'bg-[#2b2d3a]',
    text: 'text-[#c7c7c7]',
    prompt: 'text-[#f2a272]',
    selection: 'bg-[#f2a272] bg-opacity-20',
  },
  batman: {
    name: 'Batman',
    background: 'bg-[#1B1D1E]',
    text: 'text-[#F7F7F7]',
    prompt: 'text-[#E6DB74]',
    selection: 'bg-[#E6DB74] bg-opacity-20',
  }
};