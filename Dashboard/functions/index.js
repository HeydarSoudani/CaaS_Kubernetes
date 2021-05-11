export const convertDigitsLocale = (str, locale) => {
    try {
        if (locale === 'fa') {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return str.replace(/[0-9.]/g, w => (w==='.')?'٫':persianDigits[+w]);
        }
        else if (locale === 'ar') {
            const arabicDigits = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹'];
            return str.replace(/[0-9.]/g, w => (w==='.')?'٫':arabicDigits[+w]);
        }
        return str;
    } catch (e) {
        return str;
    }
};
