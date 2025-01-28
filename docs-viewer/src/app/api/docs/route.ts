import { getAllDocs } from '@/utils/docs';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Disable static optimization
export const revalidate = 0; // Disable cache

export async function GET() {
  const docs = getAllDocs();
  return NextResponse.json(docs);
}
