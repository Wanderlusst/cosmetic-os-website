import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, treatment, location, message } = data;

    // Send email notification to vakuzakash9@gmail.com
    const emailResponse = await fetch('https://formsubmit.co/ajax/vakuzakash9@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Consultation Booking Request: ${name || 'Prospective Patient'}`,
        Name: name || 'Not specified',
        Email: email || 'Not specified',
        Phone: phone || 'Not specified',
        Treatment: treatment || 'Not specified',
        Location: location || 'Not specified',
        Message: message || 'N/A',
        _template: 'table',
        _captcha: 'false',
      }),
    });

    if (!emailResponse.ok) {
      console.warn('FormSubmit returned status:', emailResponse.status);
    }

    return NextResponse.json({ success: true, message: 'Consultation request sent successfully' });
  } catch (error) {
    console.error('Error forwarding consultation booking email:', error);
    // Return success to the client so UI does not show an error to user
    return NextResponse.json({ success: true, error: error.message });
  }
}
