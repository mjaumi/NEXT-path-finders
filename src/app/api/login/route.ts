import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user-signin`, body);

        const { status, message, user }: UserRes = response.data;

        const nextResponse = new NextResponse(
            JSON.stringify({
                status,
                message,
                user,
            }),
            { status: response.status }
        );

        return nextResponse;
    } catch (error: any) {
        if (error.response) {
            return new NextResponse(JSON.stringify(error.response.data), {
                status: error.response.status,
            });
        }
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong' }),
            {
                status: 500,
            }
        );
    }
}