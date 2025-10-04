import { ContactFormData, sendContactEmail } from '../lib/email';

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
    const result = await sendContactEmail(formData);
    
    if (result.success) {
      return {
        success: true,
        message: 'Thank you for your message. We will contact you shortly.'
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to send message. Please try again.'
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