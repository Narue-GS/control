import { NextRequest, NextResponse } from 'next/server'
import { READ } from "./services"

export async function GET() {
  const res = await READ()
  return NextResponse.json(res)
}