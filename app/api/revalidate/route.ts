import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');

    // Verify revalidation secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    const body = await request.json();
    const { path, tag } = body;

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path }, { status: 200 });
    }

    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({ revalidated: true, tag }, { status: 200 });
    }

    // Default: revalidate common paths
    revalidatePath('/');
    revalidatePath('/events');
    revalidatePath('/about');

    return NextResponse.json({ revalidated: true, message: 'Common paths revalidated' }, { status: 200 });
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
  }
}

