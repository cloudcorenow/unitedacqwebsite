export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  captchaToken: string;
}

export async function handleContactSubmission(formData: ContactFormData) {
  // Validate required fields
  if (!formData.name || !formData.email || !formData.message) {
    return {
      success: false,
      error: 'Name, email, and message are required fields.'
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.'
    };
  }

  // Validate CAPTCHA token
  if (!formData.captchaToken) {
    return {
      success: false,
      error: 'Please complete the CAPTCHA verification.'
    };
  }

  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Thank you for your message. We will contact you shortly.'
      };
    } else {
      console.error('Backend error:', result);
      const errorMessage = result.details && result.details.length > 0
        ? `CAPTCHA Error: ${result.details.join(', ')}`
        : result.error || 'Failed to send message. Please try again.';
      return {
        success: false,
        error: errorMessage
      };
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    };
  }
}