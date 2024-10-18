import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
    // Parse the date string from Notion (format: "MMMM D, YYYY h:mm A")
    const date = new Date(dateString);
    
    // Format the date as desired
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
