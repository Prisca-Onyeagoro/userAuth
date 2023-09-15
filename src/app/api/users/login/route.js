import baseconn from '@/utils/dbconfig';
import { NextResponse } from 'next/server';
import own from '../../../../../model/Usermodel';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  await baseconn();
  try {
    const { email, password } = await request.json();
    //   check for empty fields
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: 'Fill up the empty fields', status: 400 })
      );
    }

    const userexist = await own.findOne({ email });

    if (!userexist) {
      return new NextResponse(
        JSON.stringify({
          message: 'Account not found, Register below',
          status: false,
          error: 'Account not found, Register below',
        })
      );
    }

    const correct = await bcrypt.compare(password, userexist.password);
    if (!correct) {
      return new NextResponse(
        JSON.stringify({
          message: 'Invalid email or password',
          status: false,
          error: 'Invalid email or password',
        })
      );
    }

    return NextResponse.json({
      name: userexist.name,
      school: userexist.school,
      email: userexist.email,
      status: true,
    });
  } catch (error) {
    console.log({ message: error.message });
    // return new NextResponse(JSON.stringify({ message: error.message }));
  }
}
