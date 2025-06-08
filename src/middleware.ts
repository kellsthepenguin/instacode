import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/api') || pathname.startsWith('/code')) {
    if (
      !req.cookies.has('pw') ||
      atob(req.cookies.get('pw').value) !== process.env.IC_PASS
    )
      return NextResponse.redirect(new URL('/', req.url))
    return NextResponse.next()
  }
}
