import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity.client';
import { rateLimit } from '@/lib/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    try {
      await limiter.check(5, ip); // 5 requests per minute
    } catch {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      size,
      quantity,
      paymentMethod,
      zelleConfirmation,
      notes,
      productId,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !size ||
      !quantity ||
      !paymentMethod
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate payment method
    if (!['delivery', 'zelle'].includes(paymentMethod)) {
      return NextResponse.json(
        { error: 'Invalid payment method' },
        { status: 400 }
      );
    }

    // Generate order number
    const orderNumber = `IA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Product details (hardcoded for now, can be fetched from Sanity if needed)
    const productTitle = 'Islamic Alliance Hoodie';
    const productSku = 'HOODIE-001';
    const price = 30.0;
    const totalAmount = price * quantity;

    // Determine initial status based on payment method
    const status = paymentMethod === 'zelle' && zelleConfirmation 
      ? 'payment_confirmed' 
      : paymentMethod === 'zelle'
      ? 'payment_pending'
      : 'new';

    // Create order in Sanity
    const order = await client.create({
      _type: 'orderSubmission',
      orderNumber,
      fullName,
      email,
      phone: phone || '',
      address,
      city,
      state,
      zipCode,
      productTitle,
      productSku,
      size,
      quantity: parseInt(quantity),
      price,
      totalAmount,
      paymentMethod,
      zelleConfirmation: zelleConfirmation || '',
      notes: notes || '',
      status,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Send confirmation email to customer
    // TODO: Send notification email to admin

    return NextResponse.json({
      success: true,
      orderNumber,
      orderId: order._id,
      message: 'Order submitted successfully',
    });
  } catch (error) {
    console.error('Order submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit order. Please try again.' },
      { status: 500 }
    );
  }
}

