interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  captchaToken: string;
}

interface ContactFormResponse {
  success: boolean;
  error?: string;
  data?: any;
}

export async function submitContactForm(formData: ContactFormData): Promise<ContactFormResponse> {
  if (!formData.name || !formData.email || !formData.message) {
    return {
      success: false,
      error: 'Name, email, and message are required.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  if (!formData.captchaToken) {
    return {
      success: false,
      error: 'Please complete the CAPTCHA verification.'
    };
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        data: result.data,
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to send message.',
      };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: 'Network error. Please try again later.',
    };
  }
}
