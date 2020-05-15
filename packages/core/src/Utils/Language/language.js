import { isProduction, urlForLanguage } from '@deriv/shared';
import { getLanguage, getAllLanguages } from '@deriv/translations';

export const currentLanguage = getLanguage();

export const getAllowedLanguages = () => {
    const exclude_languages = ['ACH'];
    // TODO Change language_list to const when languages are available in prod.
    let language_list = Object.keys(getAllLanguages())
        .filter(key => !exclude_languages.includes(key))
        .reduce((obj, key) => {
            obj[key] = getAllLanguages()[key];
            return obj;
        }, {});

    // TODO Remove this one line below when languages are available in prod.
    if (isProduction()) language_list = { EN: 'English', ID: 'Indonesia', PT: 'Português' };

    return language_list;
};

export const getURL = lang => urlForLanguage(lang);
