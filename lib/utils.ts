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

export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "general", name: "General Consultation", duration: "20 min", price: "₹500" },
  { id: "followup", name: "Follow-up Consultation", duration: "15 min", price: "₹300" },
  { id: "health-check", name: "Routine Health Checkup", duration: "30 min", price: "₹800" },
  { id: "emergency", name: "Urgent / Emergency Visit", duration: "30 min", price: "₹1000" },
];