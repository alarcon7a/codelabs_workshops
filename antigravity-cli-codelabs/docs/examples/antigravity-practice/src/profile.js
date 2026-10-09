export function normalizeProfile(input) {
  return {
    id: input.id,
    email: String(input.email).trim().toLowerCase(),
    displayName: input.displayName || input.email,
    role: input.role || "admin"
  };
}

export function canAccessBilling(profile) {
  return profile.role !== "guest";
}
