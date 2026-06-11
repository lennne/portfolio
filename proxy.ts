// proxy.ts (Alternative with Explicit Path Protection)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Target paths requiring full authentication
const isProtectedRoute = createRouteMatcher([
  '/api/chat(.*)',       // Protect backend AI endpoints
  '/studio(.*)'          // Extra layer protecting the Sanity Content Studio route
])

export default clerkMiddleware(async (auth, request) => {
  // If the matching incoming request hits a protected route, block and force authentication hook
  if (isProtectedRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/__clerk/(.*)',
  ],
}