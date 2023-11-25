"use client";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Home() {
  const [text, setText] = useState("");
  const debounced = useDebouncedCallback((value) => {
    fetch("/api/run", {
      method: "POST",
      body: JSON.stringify({
        inputs: value,
        max_new_tokens: 50,
        do_sample: true,
        top_k: 50,
        top_p: 0.95,
      }),
    })
      .then((r) => r.json())
      .then((e) => setText(e));
  }, 500);
  return (
    <div>
      <input
        className="w-full"
        defaultValue="I enjoy walking with my cute dog"
        onChange={(e) => debounced(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}
