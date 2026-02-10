export function IsMobileBrowser() {
    return window.innerWidth <= 1280;
}

export function RedirectToSlug(slug: string) {
    window.location.href = slug;
}

export function RandomMultipleOfTen(min: number, max: number) {
    const range = (max - min) / 10;
    const randomNumber = Math.floor(Math.random() * (range + 1));
    return randomNumber * 10 + min;
}

export function ValidateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function ValidatePhone(phone: string) {
    let clean = phone.slice(2);
    clean = clean.replace(/\D/g, '');
    return clean.length === 10;
}
