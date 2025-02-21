'use client';

import { hashData } from './hashData';

interface UserData {
  em: string[];
  ph: string[];
  fn?: string[];
  external_id?: string[];
}

interface CustomData {
  content_name: string;
  content_category: string;
  value: number;
  currency: string;
  status?: string;
  content_type: string;
  message?: string;
}

interface OriginalEventData {
  event_name: string;
  event_time: number;
}

interface ConversionEvent {
  event_name: string;
  event_time: number;
  action_source: string;
  user_data: UserData;
  custom_data: CustomData;
  event_source_url: string;
  event_id: string;
  original_event_data: OriginalEventData;
}

interface LeadData {
  name: string;
  phone: string;
  message: string;
}

declare global {
  interface Window {
    fbq: (
      eventType: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export async function sendConversionEvent(eventData: ConversionEvent) {
  try {
    const res = await fetch('/api/fbConversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventData })
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Facebook Conversion API error:", data);
    } else {
      console.log("Facebook Conversion API success:", data);
    }
    return data;
  } catch (error) {
    console.error("Error sending conversion event:", error);
    throw error;
  }
}

export async function trackViewContent(contentName: string, contentCategory: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'ViewContent',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: contentName, 
      content_category: contentCategory,
      value: 0,
      currency: 'UAH',
      content_type: 'page_view'
    },
    event_source_url: window.location.href,
    event_id: `view_${Date.now()}`,
    original_event_data: { 
      event_name: 'ViewContent', 
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

export async function trackLead(email: string, leadData: LeadData) {
  const hashedEmail = await hashData(email.toLowerCase().trim());
  const hashedPhone = await hashData(leadData.phone.replace(/[^0-9]/g, ''));
  const hashedFirstName = await hashData(leadData.name.toLowerCase().trim());
  const eventTime = Math.floor(Date.now() / 1000);

  const event: ConversionEvent = {
    event_name: 'Lead',
    event_time: eventTime,
    action_source: 'website',
    user_data: { 
      em: [hashedEmail], 
      ph: [hashedPhone],
      fn: [hashedFirstName], 
      external_id: [`lead_${Date.now()}`]
    },
    custom_data: { 
      content_name: 'Contact Form', 
      content_category: 'Lead Form', 
      value: 0,
      currency: 'UAH', 
      status: 'submitted',
      content_type: 'form_submission',
      message: leadData.message
    },
    event_source_url: window.location.href,
    event_id: `lead_${Date.now()}`,
    original_event_data: {
      event_name: 'Lead',
      event_time: eventTime
    }
  };

  console.log('Sending lead event:', event);
  return sendConversionEvent(event);
}

export async function trackInitiateCheckout(contentName: string, contentCategory: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'InitiateCheckout',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: contentName, 
      content_category: contentCategory,
      value: 0,
      currency: 'UAH',
      content_type: 'article_click'
    },
    event_source_url: window.location.href,
    event_id: `checkout_${Date.now()}`,
    original_event_data: { 
      event_name: 'InitiateCheckout', 
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

export async function trackStartTrial(contentName: string, contentCategory: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'StartTrial',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: contentName, 
      content_category: contentCategory,
      value: 0,
      currency: 'UAH',
      content_type: 'form_view'
    },
    event_source_url: window.location.href,
    event_id: `trial_${Date.now()}`,
    original_event_data: { 
      event_name: 'StartTrial', 
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

export async function trackContact(contentName: string, contentCategory: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'Contact',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: contentName, 
      content_category: contentCategory,
      value: 0,
      currency: 'UAH',
      content_type: 'social_click'
    },
    event_source_url: window.location.href,
    event_id: `contact_${Date.now()}`,
    original_event_data: { 
      event_name: 'Contact', 
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

export async function fbCustomEvent(eventName: string, customData: {
  content_type: string;
  content_name: string;
}) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: eventName,
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: customData.content_name,
      content_category: customData.content_type,
      value: 0,
      currency: 'UAH',
      content_type: customData.content_type
    },
    event_source_url: window.location.href,
    event_id: `custom_${Date.now()}`,
    original_event_data: { 
      event_name: eventName,
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

