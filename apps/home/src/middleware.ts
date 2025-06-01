import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const { device } = userAgent(request)
  const response = NextResponse.next()
  response.headers.set(
    'x-is-mobile',
    device.type === 'mobile' ? 'mobile' : 'desktop'
  )
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
