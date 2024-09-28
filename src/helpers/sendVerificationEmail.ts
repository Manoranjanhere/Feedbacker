import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    console.log('Sending verification email to:', email);
    console.log('Verification code:', verifyCode);
    console.log('Username:', username);

    // Ensure resend is properly configured
    if (!resend || !resend.emails || typeof resend.emails.send !== 'function') {
        throw new Error('Resend configuration is incorrect.');
    }

    // Ensure email, verifyCode, and username are valid
    if (!email || !verifyCode || !username) {
        throw new Error('Invalid email, verification code, or username.');
    }

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Feedback Message Verification Code',
        react: VerificationEmail({ username, otp: verifyCode }),
    });

    console.log('Verification email sent successfully.');
    return { success: true, message: 'Verification email sent successfully.' };
} catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
}
}
