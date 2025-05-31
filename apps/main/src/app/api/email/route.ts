import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
      }
    })

    await new Promise<void>((resolve, reject) => {
      transporter.sendMail(
        {
          from: `"${name} <${email}>" <${process.env.AUTH_USER}>`,
          to: process.env.AUTH_USER,
          subject: `New message from ${name}`,
          text: message,
          replyTo: email
        },
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { status: 500, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
