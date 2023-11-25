import type { NextRequest } from "next/server";
export function POST(request: NextRequest) {
  return fetch("http://localhost:8080/run", {
    method: "POST",
    body: request.body,
    duplex: "half",
    headers: {
      Authorization: "Bearer 455bd051-97b7-470f-a8ac-54543ee8f2ec",
    },
  } as RequestInit);
}
