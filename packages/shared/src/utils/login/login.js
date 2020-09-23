import { website_name } from '../config/app-config';
import { LocalStore } from '../storage/storage';
import { isMobileOs } from '../os/os_detect';
import { getAppId, domain_app_ids } from '../config/config';
import { urlForCurrentDomain } from '../url';

export const loginUrl = ({ language }) => {
    const server_url = LocalStore.get('config.server_url');
    const signup_device = LocalStore.get('signup_device') || (isMobileOs() ? 'mobile' : 'desktop');
    const date_first_contact = LocalStore.get('date_first_contact');
    const marketing_queries = `&signup_device=${signup_device}${
        date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
    }`;
    const getOAuthUrl = domain => {
        return `https://oauth.${domain}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}&brand=${website_name.toLowerCase()}`;
    };

    if (server_url && /qa/.test(server_url)) {
        return `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}&brand=${website_name.toLowerCase()}`;
    }

    // TODO: [app-link-refactor] - Remove backwards compatibility for `deriv.app`
    if (getAppId() === domain_app_ids['deriv.app'] && /^(www\.)?deriv\.app$/.test(window.location.hostname)) {
        return getOAuthUrl('deriv.app');
    }
    if (getAppId() === domain_app_ids['app.deriv.com'] && /^app\.deriv\.com$/.test(window.location.hostname)) {
        return getOAuthUrl('app.deriv.com');
    }
    if (
        getAppId() === domain_app_ids['derivcrypto.com'] &&
        /^(app\.)?derivcrypto\.com$/.test(window.location.hostname)
    ) {
        return getOAuthUrl('app.derivcrypto.com');
    }
    return urlForCurrentDomain(getOAuthUrl('deriv.com'));
};
