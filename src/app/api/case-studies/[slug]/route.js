import { caseStudies } from '@/data/caseStudies';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const caseStudy = caseStudies.find(c => c.slug === params.slug);
  
  if (caseStudy) {
    return NextResponse.json(caseStudy);
  } else {
    return new NextResponse('Case study not found', { status: 404 });
  }
}