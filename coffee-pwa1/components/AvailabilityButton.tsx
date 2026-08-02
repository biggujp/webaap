"use client";

import { useState } from "react";

export default function AvailabilityButton({ available }: { available: boolean }) {
  const [isAvailable, setIsAvailable] = useState(available);

  return (
    <button
      type="button"
      onClick={() => setIsAvailable(!isAvailable)}
      className="rounded-lg bg-black px-4 py-2 text-sm text-white"
    >
      {isAvailable
        ? "พร้อมจำหน่าย"
        : "ปิดการขาย"}
    </button>
  );
}