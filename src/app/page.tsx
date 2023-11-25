'use client';
import {useEffect, useState} from "react";
import useSWR from "swr";

export default function Home() {
  const [text, setText] = useState('')
  return (
    <div>
      <input className="w-full" defaultValue="I enjoy walking with my cute dog" onChange={e=>    fetch('/api/run',{
        method: "POST", body: JSON.stringify({
          "inputs": e.target.value,
          "max_new_tokens": 50,
          "do_sample": true,
          "top_k": 50,
          "top_p": 0.95
        })
      }).then(r=>r.json()).then(e=>setText(e))} />
      <p>{text}</p>
    </div>
  )
}
