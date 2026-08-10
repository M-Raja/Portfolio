export const CONTACT_EMAIL = 'raja.madhavann@gmail.com';

// A mailto: link opens the visitor's own default mail app (Gmail app, Outlook,
// Apple Mail, etc.) with a new draft already addressed and started, so they
// can just type and hit send. Pre-filling subject/body removes friction.
export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Let's connect"
)}&body=${encodeURIComponent('Hi Raja,\n\n')}`;

// Opens a pre-filled compose window directly in Gmail's web app (new tab).
export const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL
)}&su=${encodeURIComponent("Let's connect")}&body=${encodeURIComponent('Hi Raja,\n\n')}`;
