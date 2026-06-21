import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://dicebear.com";

  if (gender === "FEMALE") {
    // Filters for typically feminine hairstyles
    return `${base}?seed=${username}&hair=long01,long02,long03,long04,long05,bob01,bob02`;
  }
  
  // Default to MALE: Filters for typically masculine hairstyles / short hair
  return `${base}?seed=${username}&hair=short01,short02,short03,short04,short05,crewCut,shaved`;
}


export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/\D/g, "").slice(0, 10);

  if (phoneNumber.length <= 5) return phoneNumber;

  return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5)}`;
};