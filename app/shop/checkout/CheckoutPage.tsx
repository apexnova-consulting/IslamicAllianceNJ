'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

interface CheckoutPageProps {
  productId?: string;
  selectedSize?: string;
}

export function CheckoutPage({ productId, selectedSize }: CheckoutPageProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showZelleInfo, setShowZelleInfo] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NJ',
    zipCode: '',
    size: selectedSize || '',
    quantity: 1,
    paymentMethod: '',
    zelleConfirmation: '',
    notes: '',
  });

  // Redirect if no product selected
  useEffect(() => {
    if (!productId) {
      router.push('/shop');
    }
  }, [productId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      const result = await response.json();
      setOrderSubmitted(true);

      // If Zelle payment, show payment instructions
      if (formData.paymentMethod === 'zelle') {
        setShowZelleInfo(true);
      }
    } catch (error) {
      console.error('Order submission error:', error);
      alert('Failed to submit order. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const totalAmount = 30.0 * formData.quantity;

  if (orderSubmitted && showZelleInfo) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 text-center"
          >
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4">Order Received!</h1>
            <p className="text-lg mb-6">
              Thank you for your order. Please complete your payment via Zelle to:
            </p>
            <div className="bg-primary/10 p-6 rounded-lg mb-6">
              <p className="text-2xl font-bold text-primary mb-2">islamicalliance.nj@gmail.com</p>
              <p className="text-lg font-semibold">Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Please include your order number in the Zelle payment notes. We&apos;ll process your
              order once payment is confirmed.
            </p>
            <div className="space-y-3">
              <Button onClick={() => router.push('/shop')} className="w-full">
                Return to Shop
              </Button>
              <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="w-full"
              >
                Go to Homepage
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (orderSubmitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 text-center"
          >
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg mb-6">
              Thank you for your order. We&apos;ll contact you shortly to arrange delivery and
              payment.
            </p>
            <div className="space-y-3">
              <Button onClick={() => router.push('/shop')} className="w-full">
                Return to Shop
              </Button>
              <Button
                onClick={() => router.push('/')}
                variant="outline"
                className="w-full"
              >
                Go to Homepage
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-primary mb-12">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
              Checkout
            </h1>
            <p className="text-xl text-white/90">Complete your order</p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Form */}
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Islamic Alliance Hoodie</p>
                  <p className="text-sm text-muted-foreground">White with Logo</p>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-semibold">{formData.size || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span className="font-semibold">{formData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per item:</span>
                  <span className="font-semibold">$30.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Delivery & Payment Information</CardTitle>
                <CardDescription>
                  Please provide your information to complete the order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Contact Information</h3>
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Delivery Address</h3>
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={2}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Product Details</h3>
                    <div>
                      <Label htmlFor="size">Size *</Label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select a size</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">X-Large</option>
                        <option value="2XL">2X-Large</option>
                        <option value="3XL">3X-Large</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity *</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Payment Method *</h3>
                    <div className="space-y-3">
                      <label className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="delivery"
                          checked={formData.paymentMethod === 'delivery'}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                        <div>
                          <p className="font-semibold">Pay on Delivery</p>
                          <p className="text-sm text-muted-foreground">
                            Available for New Jersey deliveries only. Pay cash when you receive
                            your order.
                          </p>
                        </div>
                      </label>
                      <label className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="zelle"
                          checked={formData.paymentMethod === 'zelle'}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                        <div>
                          <p className="font-semibold">Zelle</p>
                          <p className="text-sm text-muted-foreground">
                            Pay via Zelle to: <strong>islamicalliance.nj@gmail.com</strong>
                          </p>
                        </div>
                      </label>
                    </div>
                    {formData.paymentMethod === 'zelle' && (
                      <div>
                        <Label htmlFor="zelleConfirmation">
                          Zelle Confirmation Number (Optional)
                        </Label>
                        <Input
                          id="zelleConfirmation"
                          name="zelleConfirmation"
                          value={formData.zelleConfirmation}
                          onChange={handleChange}
                          placeholder="Enter confirmation number if already paid"
                        />
                      </div>
                    )}
                  </div>

                  {/* Order Notes */}
                  <div>
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special instructions or notes for your order"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Processing...' : 'Place Order'}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By placing this order, you agree to our terms and conditions.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

