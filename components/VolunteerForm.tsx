'use client';

import { useState, FormEvent } from 'react';
import { Button } from './ui/button';
import { FormField } from './ui/form-field';

const interestAreas = [
  { value: 'education', label: 'Education & Mentorship' },
  { value: 'events', label: 'Event Planning & Coordination' },
  { value: 'outreach', label: 'Community Outreach' },
  { value: 'fundraising', label: 'Fundraising' },
  { value: 'marketing', label: 'Marketing & Social Media' },
  { value: 'technology', label: 'Technology & Web Development' },
  { value: 'other', label: 'Other' },
];

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestArea: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', interestArea: '', message: '' });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'An error occurred. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === 'success') {
    return (
      <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center">
        <h3 className="text-2xl font-heading font-bold text-primary mb-4">
          Thank you for volunteering!
        </h3>
        <p className="text-muted-foreground mb-4">
          We have received your application and will contact you shortly to discuss how you can get involved.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline">
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Full Name"
        name="fullName"
        type="text"
        required
        placeholder="John Doe"
        value={formData.fullName}
        onChange={handleChange}
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        required
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
      />

      <FormField
        label="Phone"
        name="phone"
        type="tel"
        placeholder="(555) 123-4567"
        value={formData.phone}
        onChange={handleChange}
        helperText="Optional"
      />

      <FormField
        label="Area of Interest"
        name="interestArea"
        type="select"
        required
        options={interestAreas}
        value={formData.interestArea}
        onChange={handleChange}
      />

      <FormField
        label="Tell us about yourself"
        name="message"
        type="textarea"
        placeholder="Why are you interested in volunteering? What skills or experience do you have?"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        helperText="Optional"
      />

      {errorMessage && (
        <div className="bg-destructive/10 border border-destructive rounded-lg p-4">
          <p className="text-destructive text-sm">{errorMessage}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}
