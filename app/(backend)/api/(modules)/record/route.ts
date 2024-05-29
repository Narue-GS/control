import { NextRequest, NextResponse } from 'next/server'
import { READ, ReadPatrimonyOptions } from "./services"

export async function GET() {
  const res = await ReadPatrimonyOptions()
  return NextResponse.json(res)
}