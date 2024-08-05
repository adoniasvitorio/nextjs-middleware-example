import { NextResponse } from 'next/server'

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/categories/:path*', '/products/:path*']
}

export function middleware(request) {
    // Change "checkLoggedIn" to true or false and test loading the pages in the browser.
    const checkLoggedIn = true;
    if (checkLoggedIn == false) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}