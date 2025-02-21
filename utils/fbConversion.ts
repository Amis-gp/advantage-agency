'use client';

import { hashData } from '@/utils/hashData';

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
  locale?: string;
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
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ eventData })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await res.json();
      console.log("Facebook Conversion API success:", data);
      return data;
    } else {
      console.log("Response is not JSON");
      return null;
    }
    
  } catch (error) {
    console.error("Error sending conversion event:", error);
    return null;
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

export async function trackFaqClick(questionName: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'ViewContent',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: questionName,
      content_category: 'FAQ',
      value: 0,
      currency: 'UAH',
      content_type: 'faq_click'
    },
    event_source_url: window.location.href,
    event_id: `faq_${Date.now()}`,
    original_event_data: { 
      event_name: 'ViewContent',
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

export async function trackButtonClick(buttonName: string, buttonLocation: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'ClickButton',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: buttonName,
      content_category: buttonLocation,
      value: 0,
      currency: 'UAH',
      content_type: 'button_click'
    },
    event_source_url: window.location.href,
    event_id: `button_${Date.now()}`,
    original_event_data: { 
      event_name: 'ClickButton',
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}

export async function trackVideoPlay(videoType: string, videoLocale: string) {
  const eventTime = Math.floor(Date.now() / 1000);
  const event: ConversionEvent = {
    event_name: 'VideoPlay',
    event_time: eventTime,
    action_source: 'website',
    user_data: { em: [], ph: [""] },
    custom_data: { 
      content_name: `video_${videoType}`,
      content_category: 'Video',
      value: 0,
      currency: 'UAH',
      content_type: 'video_play',
      locale: videoLocale
    },
    event_source_url: window.location.href,
    event_id: `video_${Date.now()}`,
    original_event_data: { 
      event_name: 'VideoPlay',
      event_time: eventTime 
    }
  };
  return sendConversionEvent(event);
}


