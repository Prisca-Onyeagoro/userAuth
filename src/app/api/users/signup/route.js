import { connect } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import owner from '../../../../../model/Usermodel';
import { hash } from 'bcryptjs';
import baseconn from '@/utils/dbconfig';
import own from '../../../../../model/Usermodel';

export async function POST(request, response) {
  await baseconn();

  try {
    const { name, email, school, password } = await request.json();

    //  check if fields are empty
    if (!name || !email || !school || !password) {
      return new NextResponse(
        JSON.stringify({
          message: 'Fill up the empty fields',
          status: 400,
          error: 'fill up the empty fields',
        })
      );
    }

    //  check if the user has already be registered

    const userexist = await own.findOne({ email });
    if (userexist) {
      return new NextResponse(
        JSON.stringify({
          message: 'Already have an account, kindly login',
          status: 400,
          error: 'Already have an account, kindly login',
        })
      );
    }

    const SaveUser = await own.create({
      name,
      email,
      school,
      password: await hash(password, 10),
    });
    return NextResponse.json({ SaveUser }, { status: 201 });
  } catch (error) {
    console.log(error.message);
  }
}
