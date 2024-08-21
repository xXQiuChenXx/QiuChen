"use client";
import { HTMLAttributes, useEffect, useState } from "react";

export function ClientDate({
  value,
  ...props
}: { value: Date } & HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(value.toLocaleDateString(undefined, { dateStyle: "full" }));
  }, [value]);

  return <span {...props}>{date}</span>;
}