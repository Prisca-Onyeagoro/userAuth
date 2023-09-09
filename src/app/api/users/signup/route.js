import { connect } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import owner from '../../../../../model/Usermodel';
import { hash } from 'bcryptjs';
import baseconn from '@/utils/dbconfig';
import own from '../../../../../model/Usermodel';

export async function POST(request) {
  await baseconn();

  try {
    const { name, email, school, password } = await request.json();

    //  check if fields are empty
    if (!name || !email || !school || !password) {
      return NextResponse(
        { error: 'Fields are empty fill them up' },
        { status: 200 }
      );
    }

    const SaveUser = await own.create({
      name,
      email,
      school,
      password: await hash(password, 10),
    });
    return NextResponse.json({ SaveUser }, { status: 201 });

    // check if the user registering has registered before
    // const userexist = await owner.findOne({ email });
    // if (userexist) {
    //   return NextResponse(
    //     { message: 'This email already exist' },
    //     { status: 200 }
    //   );
    // }

    // //  create the user
    // const SaveUser = await own.create({
    //   name,
    //   email,
    //   school,
    //   password: await hash(password, 10),
    // });
    // return NextResponse.json({ SaveUser }, { status: 201 });
  } catch (error) {
    console.log(error.message);
  }
}
