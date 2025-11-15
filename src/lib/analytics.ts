// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, params?: Record<string, unknown>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, params)
  }
}

// Predefined event trackers
export const trackPhoneClick = (phoneNumber: string) => {
  event('phone_click', {
    event_category: 'engagement',
    event_label: phoneNumber,
    value: phoneNumber,
  })
}

export const trackFormSubmit = (formName: string) => {
  event('form_submit', {
    event_category: 'lead_generation',
    event_label: formName,
    form_name: formName,
  })
}

export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  event('cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    cta_location: ctaLocation,
  })
}

export const trackServiceView = (serviceName: string) => {
  event('service_view', {
    event_category: 'content',
    event_label: serviceName,
    service_name: serviceName,
  })
}

export const trackQuoteRequest = (serviceType?: string) => {
  event('quote_request', {
    event_category: 'lead_generation',
    event_label: 'quote_request',
    service_type: serviceType || 'general',
  })
}

export const trackDownload = (fileName: string) => {
  event('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    file_name: fileName,
  })
}

export const trackOutboundLink = (url: string) => {
  event('outbound_link', {
    event_category: 'engagement',
    event_label: url,
    link_url: url,
  })
}
