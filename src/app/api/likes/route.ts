import { NextRequest, NextResponse } from "next/server";

let likes: number = 1;

export async function GET() {

    return NextResponse.json({ likes });

};

export async function POST(request: NextRequest) {

    const { amount } = await request.json();

    if (amount) {

        likes += Number(amount);

    }

    return NextResponse.json({ likes });
};