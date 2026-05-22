import { SignUpButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import Image from "next/image";

export default function Home() {
  return (
    <SignUpButton>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </SignUpButton>
  );
}
