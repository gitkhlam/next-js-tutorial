import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Этот файл utils.ts содержит утилитарную функцию cn, 
// которая помогает работать с классами CSS в Tailwind CSS.