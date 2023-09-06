import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  const { name, password, school, nation } = await request.json();

  console.log(
    `The name of the user is: ${name}`,
    `The password of the user is: ${password}`,
    `The user school is: ${school}`,
    `The user nation is: ${nation}`
  );

  return NextResponse.json({ message: 'name saved' });
}
