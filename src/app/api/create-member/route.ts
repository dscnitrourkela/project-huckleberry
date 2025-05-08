import { NextRequest, NextResponse } from 'next/server';
import { createMember } from '@/actions/members';
import { Member } from '@/types/admin/members';

export async function POST(request: NextRequest) {
  try {
    // step 1: comment /actions/members/index.ts line 23 and 24
    // step 2: comment line 28 and 31 on this page
    // step 3: hit a post request to /api/create-member with the following body line: 13-26
    // step 4: after creating the member uncomment line 28 and 31 on this page and uncomment line 23 and 24 on /actions/members/index.ts
    // step 5: login with the gmail account you used to create the member

    // {
    //     "user_name": "your name",
    //     "email": "youremail@gmail.com",
    //     "profile_photo": "https://res.cloudinary.com/dmvdbpyqk/image/upload/v1741951526/hl3pvugzc0srfbhn4r2i.jpg",
    //     "mobile_no": "1234567890",
    //     "role": "developer",
    //     "github": "https://github.com",
    //     "linkedin": "https://linkedin.com",
    //     "twitter": "https://x.com",
    //     "figma": "https://figma.com",
    //     "caption": "Building the future",
    //     "is_lead": true,
    //     "is_admin": true
    //   }

    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' },
      { status: 500 }
    );

    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required member information' },
        { status: 400 }
      );
    }

    const memberData: Member = {
      ...body,
    };

    const result = await createMember(memberData);

    if (result.status === 'success') {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create member' },
      { status: 500 }
    );
  }
}
