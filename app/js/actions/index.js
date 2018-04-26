export const SENT = 'SENT';

export function sendEmail(name, email, phone, city, state) {
  console.log(name, email, phone, city, state);
  return {
    type: SENT,
    success: true,
    error: ''
  };
}
