export function getMachineryUrl(slug: string, lang: 'bg' | 'en'): string {
    const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
    return `/${lang}/machinery/${cleanSlug}`;
}

export function formatSpecValue(value: number | string, unit: string): string {
    if (!unit) return String(value);
    return `${value} ${unit}`;
}
