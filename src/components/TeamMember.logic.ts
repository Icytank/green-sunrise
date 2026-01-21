export interface TeamMemberProps {
    name: string;
    role: string;
    certifications: string[];
    yearsExperience: number;
    verified: boolean;
    lang: "bg" | "en";
}

/**
 * Returns the number of years. Localization is handled in the template or via i18n helper.
 */
export function formatExperience(years: number): string {
    return `${years}`;
}

/**
 * Ensures the certifications list is valid and filtered if necessary.
 */
export function processCertifications(certs: string[]): string[] {
    return certs.filter((cert) => cert.trim().length > 0);
}
