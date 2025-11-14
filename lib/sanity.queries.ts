import { client } from './sanity.client';

// Global Settings
export async function getGlobalSettings() {
  return client.fetch(`*[_type == "globalSettings"][0]`);
}

// Homepage
export async function getHomepageHero() {
  return client.fetch(`*[_type == "homepageHero"][0]`);
}

export async function getTiles() {
  return client.fetch(`*[_type == "tile"] | order(order asc)`);
}

// Events
export async function getAllEvents() {
  return client.fetch(`*[_type == "event"] | order(dateTime desc)`);
}

export async function getUpcomingEvents() {
  const now = new Date().toISOString();
  return client.fetch(`*[_type == "event" && dateTime >= $now] | order(dateTime asc)`, { now });
}

export async function getFeaturedEvents() {
  return client.fetch(`*[_type == "event" && featured == true] | order(dateTime desc)[0...3]`);
}

export async function getEventBySlug(slug: string) {
  return client.fetch(
    `*[_type == "event" && slug.current == $slug][0]`,
    { slug }
  );
}

// Programs
export async function getAllPrograms() {
  return client.fetch(`*[_type == "program"] | order(order asc)`);
}

// Initiatives
export async function getAllInitiatives() {
  return client.fetch(`*[_type == "initiative"] | order(order asc)`);
}

// Team Members
export async function getTeamMembers() {
  return client.fetch(`*[_type == "teamMember"] | order(order asc)`);
}

// Shop
export async function getShopItems() {
  return client.fetch(`*[_type == "shopItem"] | order(order asc)`);
}

export async function getActiveShopItems() {
  return client.fetch(`*[_type == "shopItem" && active == true] | order(order asc)`);
}

// Pages
export async function getPageBySlug(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getFooterPages() {
  return client.fetch(`*[_type == "page" && showInFooter == true]`);
}

// Create submission
export async function createContactSubmission(data: {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return client.create({
    _type: 'contactSubmission',
    ...data,
    submittedAt: new Date().toISOString(),
    status: 'new',
  });
}

export async function createVolunteerSubmission(data: {
  fullName: string;
  email: string;
  phone?: string;
  interestArea: string;
  message?: string;
}) {
  return client.create({
    _type: 'volunteerSubmission',
    ...data,
    submittedAt: new Date().toISOString(),
    status: 'new',
  });
}

