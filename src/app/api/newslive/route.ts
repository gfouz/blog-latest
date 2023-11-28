import { NextRequest, NextResponse } from 'next/server';
import { getJson } from 'lib/getJson';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await getJson();
    const result = data?.response?.results;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
