import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(
  num: number | string,
  options: Intl.NumberFormatOptions = {}
) {
  const formatedNumber = new Intl.NumberFormat("en-US", {
    notation: options?.notation ?? "compact",
    compactDisplay: options?.compactDisplay ?? "short",
    style: options?.style ?? "decimal",
    ...options,
  }).format(Number(num))

  return formatedNumber
}