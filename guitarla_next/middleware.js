import { NextResponse } from 'next/server'

export function middleware(request) {
  
      console.log(request.nextUrl)

      
      return NextResponse.next()

}

export default middleware
