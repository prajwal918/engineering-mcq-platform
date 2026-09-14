import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names intelligently, resolving conflicts
 * (e.g. cn("px-2", condition && "px-4") -> "px-4" wins) while keeping
 * unrelated classes intact.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
