import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function POST(request: NextRequest) {
  return fetch('https://zj6ril0k-mygpt2.bjz.edr.lepton.ai/run', {
    method: 'POST', body: request.body, duplex: 'half', headers: {
      "Authorization": "Bearer 455bd051-97b7-470f-a8ac-54543ee8f2ec"
    }
  } as RequestInit)
}
