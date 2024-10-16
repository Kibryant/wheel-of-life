"use client"

import { Introduction } from "@/components/introduction";
import { WheelOfLife } from "@/components/wheel-of-life";

export default function Page() {
  return (
<div className="container mx-auto p-4">
  <Introduction />
      <WheelOfLife />
    </div>
  );
}
