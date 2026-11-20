"use client";

// Demo state lives in the browser (no backend). Keys keep the "cisto:" prefix.
export function load(key: string): string | null {
  try {
    return localStorage.getItem(`cisto:${key}`);
  } catch {
    return null;
  }
}

export function save(key: string, value: string) {
  try {
    localStorage.setItem(`cisto:${key}`, value);
  } catch {
    /* private mode: demo still works without persistence */
  }
}
