import React from 'react';
import {
    formatDate,
    getDerivComLink,
    isEmptyObject,
    isMobile,
    LocalStore,
    routes,
    State,
    website_name,
} from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import { getRiskAssessment, isAccountOfType, shouldAcceptTnc, shouldCompleteTax } from '_common/base/client_base';
import { BinaryLink } from 'App/Components/Routes';
import { WS } from 'Services';

// TODO: Update links to app_2 links when components are done.
/* eslint-disable react/jsx-no-target-blank */
export const clientNotifications = (ui = {}, client = {}) => {
    const notifications = {
        currency: {
            action: {
                text: localize('Set currency'),
                onClick: () => {
                    ui.toggleNotificationsModal();
                    ui.openRealAccountSignup('set_currency');
                },
            },
            key: 'currency',
            header: localize('Set account currency'),
            message: localize('Please set the currency of your account to enable trading.'),
            type: 'danger',
        },
        self_exclusion: excluded_until => ({
            key: 'self_exclusion',
            header: localize('Self-exclusion detected'),
            message: (
                <Localize
                    i18n_default_text='You have opted to be excluded from {{website_domain}} until {{exclusion_end}}. Please <0>contact us</0> for assistance.'
                    values={{
                        website_domain: website_name,
                        exclusion_end: formatDate(excluded_until, 'DD/MM/YYYY'),
                        interpolation: { escapeValue: false },
                    }}
                    components={[<a key={0} className='link' target='_blank' href={getDerivComLink('contact-us')} />]}
                />
            ),
            type: 'danger',
        }),
        authenticate: {
            action: {
                route: routes.proof_of_identity,
                text: localize('Authenticate'),
            },
            key: 'authenticate',
            header: localize('Account authentication'),
            message: localize('Authenticate your account now to take full advantage of all payment methods available.'),
            type: 'info',
        },
        cashier_locked: {
            key: 'cashier_locked',
            header: localize('Cashier disabled'),
            message: localize(
                'Deposits and withdrawals have been disabled on your account. Please check your email for more details.'
            ),
            type: 'warning',
        },
        withdrawal_locked_review: {
            key: 'withdrawal_locked_review',
            header: localize('Withdrawal disabled'),
            message: localize(
                'Withdrawals have been disabled on your account. Please wait until your uploaded documents are verified.'
            ),
            type: 'warning',
        },
        withdrawal_locked: {
            key: 'withdrawal_locked',
            header: localize('Withdrawal disabled'),
            message: localize(
                'Withdrawals have been disabled on your account. Please check your email for more details.'
            ),
            type: 'warning',
        },
        mt5_withdrawal_locked: {
            key: 'mt5_withdrawal_locked',
            header: localize('MT5 withdrawal disabled'),
            message: localize(
                'MT5 withdrawals have been disabled on your account. Please check your email for more details.'
            ),
            type: 'warning',
        },
        document_needs_action: {
            key: 'document_needs_action',
            header: localize('Authentication failed'),
            message: (
                <Localize
                    i18n_default_text='<0>Your Proof of Identity or Proof of Address</0> did not meet our requirements. Please check your email for further instructions.'
                    components={[<BinaryLink key={0} className='link' to={routes.proof_of_identity} />]}
                />
            ),
            type: 'warning',
        },
        unwelcome: {
            ...(isMobile() && {
                action: {
                    text: localize('Contact us'),
                    onClick: () => {
                        window.open(getDerivComLink('contact-us'));
                    },
                },
            }),
            key: 'unwelcome',
            header: localize('Trading and deposits disabled'),
            message: isMobile() ? (
                <Localize i18n_default_text='Trading and deposits have been disabled on your account. Kindly contact customer support for assistance.' />
            ) : (
                <Localize
                    i18n_default_text='Trading and deposits have been disabled on your account. Kindly contact <0>customer support</0> for assistance.'
                    components={[<a key={0} className='link' target='_blank' href={getDerivComLink('contact-us')} />]}
                />
            ),
            type: 'danger',
        },
        max_turnover_limit_not_set: {
            key: 'max_turnover_limit_not_set',
            header: localize('Remove deposit limits'),
            message: (
                <Localize
                    i18n_default_text='Please set your <0>30-day turnover limit</0> to remove deposit limits.'
                    components={[<BinaryLink key={0} className='link' to={routes.cashier_deposit} />]}
                />
            ),
            type: 'danger',
        },
        mf_retail: {
            ...(isMobile() && {
                action: {
                    text: localize('Contact us'),
                    onClick: () => {
                        window.open(getDerivComLink('contact-us'));
                    },
                },
            }),
            key: 'mf_retail',
            header: localize('Digital options trading disabled'),
            message: isMobile() ? (
                <Localize i18n_default_text='Digital Options Trading has been disabled on your account. Kindly contact customer support for assistance.' />
            ) : (
                <Localize
                    i18n_default_text='Digital Options Trading has been disabled on your account. Kindly contact <0>customer support</0> for assistance.'
                    components={[<a key={0} className='link' target='_blank' href={getDerivComLink('contact-us')} />]}
                />
            ),
            type: 'danger',
        },
        risk: {
            action: {
                text: localize('Complete form'),
                route: routes.financial_assessment,
            },
            key: 'risk',
            header: localize('Withdrawal and trading limits'),
            message: localize(
                'Please complete the Financial Assessment form to lift your withdrawal and trading limits.'
            ),
            type: 'warning',
        },
        tax: {
            action: {
                route: routes.personal_details,
                text: localize('Complete details'),
            },
            key: 'tax',
            header: localize('Complete your personal details'),
            message: localize('Please complete your Personal Details before you proceed.'),
            type: 'danger',
        },
        tnc: {
            action: {
                onClick: async () => {
                    await WS.tncApproval();
                    WS.getSettings();
                },
                text: localize('I accept'),
            },
            key: 'tnc',
            header: localize('Terms & conditions updated'),
            message: (
                <Localize
                    i18n_default_text='Please accept our <0>updated Terms and Conditions</0> to proceed.'
                    components={[
                        <a
                            key={0}
                            className='link'
                            rel='noopener'
                            target='_blank'
                            href={getDerivComLink('terms-and-conditions')}
                        />,
                    ]}
                />
            ),
            type: 'warning',
        },
        required_fields: {
            action: {
                route: routes.personal_details,
                text: localize('Complete details'),
            },
            key: 'required_fields',
            header: localize('Complete your personal details'),
            message: localize('Please complete your Personal Details before you proceed.'),
            type: 'danger',
        },
        you_are_offline: {
            key: 'you_are_offline',
            header: localize('You are offline'),
            message: <Localize i18n_default_text='Check your connection.' />,
            type: 'danger',
        },
        password_changed: {
            key: 'password_changed',
            header: localize('Password updated.'),
            message: <Localize i18n_default_text='Please log in with your updated password.' />,
            type: 'info',
        },
        needs_poi: {
            action: {
                route: routes.proof_of_identity,
                text: localize('Verify identity'),
            },
            key: 'needs_poi',
            header: localize('Please verify your proof of identity'),
            message: localize('To continue trading with us, please confirm who you are.'),
            type: 'danger',
        },
        needs_poa: {
            action: {
                route: routes.proof_of_address,
                text: localize('Verify address'),
            },
            key: 'needs_poa',
            header: localize('Please verify your proof of address'),
            message: localize('To continue trading with us, please confirm where you live.'),
            type: 'danger',
        },
        needs_poi_virtual: {
            action: {
                onClick: async () => {
                    const { switchAccount, first_switchable_real_loginid } = client;

                    await switchAccount(first_switchable_real_loginid);
                },
                text: localize('Verify identity'),
            },
            key: 'needs_poi_virtual',
            header: localize('Please Verify your identity'),
            message: localize(
                'We couldn’t verify your personal details with our records, to enable deposit, withdrawals and trading, you need to upload proof of your identity.'
            ),
            type: 'danger',
        },
        needs_poa_virtual: {
            action: {
                route: routes.proof_of_address,
                text: localize('Verify address'),
            },
            key: 'needs_poa_virtual',
            header: localize('Please Verify your address'),
            message: localize(
                'We couldn’t verify your personal details with our records, to enable deposit, withdrawals and trading, you need to upload proof of your address.'
            ),
            type: 'danger',
        },
        poa_expired: {
            action: {
                route: routes.proof_of_address,
                text: localize('Proof of address'),
            },
            key: 'poa_expired',
            header: localize('Document expired'),
            message: localize('Your documents for proof of address is expired. Please submit again.'),
            type: 'danger',
        },
        poa_rejected: {
            key: 'poa_rejected',
            header: localize('We could not verify your proof of address'),
            message: (
                <Localize i18n_default_text='We have disabled trading, deposits and withdrawals for this account.' />
            ),
            type: 'danger',
        },
        poi_expired: {
            action: {
                route: routes.proof_of_identity,
                text: localize('Proof of identity'),
            },
            key: 'poi_expired',
            header: localize('Proof of identity expired'),
            message: localize('Your proof of identity document has expired. Please submit a new one.'),
            type: 'danger',
        },
        new_version_available: {
            action: {
                onClick: () => window.location.reload(),
                text: localize('Refresh now'),
            },
            key: 'new_version_available',
            header: localize('A new version of Deriv is available'),
            message: localize('This page will automatically refresh in 5 minutes to load the latest version.'),
            type: 'warning',
            should_hide_close_btn: true,
            timeout: 300000,
            timeoutMessage: remaining => localize('Auto update in {{ remaining }} seconds', { remaining }),
        },
    };
    return notifications;
};

const hasMissingRequiredField = (account_settings, client) => {
    if (!account_settings) return false;

    const { is_svg, landing_company_shortcode } = client;

    // TODO: [deriv-eu] refactor into its own function once more exceptions are added.
    let required_fields;
    if (is_svg) {
        required_fields = getSVGRequiredFields();
    } else {
        required_fields = getRequiredFields();
    }

    return required_fields.some(field => !account_settings[field]);

    function getSVGRequiredFields() {
        const necessary_withdrawal_fields =
            State.getResponse('landing_company.financial_company.requirements.withdrawal') || [];
        const necessary_signup_fields = State.getResponse('landing_company.financial_company.requirements.signup');

        const necessary_signup_fields_mapped = necessary_signup_fields
            ? necessary_signup_fields.map(field => (field === 'residence' ? 'country' : field))
            : [];

        return [...necessary_withdrawal_fields, ...necessary_signup_fields_mapped];
    }

    function getRequiredFields() {
        if (!isAccountOfType('financial')) return [];
        const { residence } = client;

        const required_settings_fields = [
            'account_opening_reason',
            'address_line_1',
            'address_city',
            'phone',
            'tax_identification_number',
            'tax_residence',
        ];
        const address_postcode_is_required = residence === 'gb' || landing_company_shortcode === 'iom';
        if (address_postcode_is_required) required_settings_fields.push('address_postcode');

        return [...required_settings_fields];
    }
};

const getStatusValidations = status_arr =>
    status_arr.reduce((validations, stats) => {
        validations[stats] = true;
        return validations;
    }, {});

const addVerificationNotifications = (identity, document, addNotificationMessage) => {
    if (identity.status === 'expired') addNotificationMessage(clientNotifications().poi_expired);

    if (document.status === 'expired') addNotificationMessage(clientNotifications().poa_expired);
};

const checkAccountStatus = (account_status, client, addNotificationMessage, loginid) => {
    if (isEmptyObject(account_status)) return {};
    if (loginid !== LocalStore.get('active_loginid')) return {};

    const {
        authentication: { document, identity, needs_verification },
        prompt_client_to_authenticate,
        risk_classification,
        status,
    } = account_status;

    const {
        authenticated,
        cashier_locked,
        withdrawal_locked,
        mt5_withdrawal_locked,
        document_needs_action,
        unwelcome,
        professional,
        max_turnover_limit_not_set,
        allow_document_upload,
    } = getStatusValidations(status);

    addVerificationNotifications(identity, document, addNotificationMessage);

    const is_mf_retail = client.landing_company_shortcode === 'maltainvest' && !professional;
    const should_show_max_turnover = client.landing_company_shortcode === 'iom' && max_turnover_limit_not_set;

    const needs_authentication = needs_verification.length || allow_document_upload;
    const has_risk_assessment = getRiskAssessment(account_status);
    const needs_poa = needs_authentication && needs_verification.includes('document');
    const needs_poi = needs_authentication && needs_verification.includes('identity');

    if (needs_poa) addNotificationMessage(clientNotifications().needs_poa);
    if (needs_poi) addNotificationMessage(clientNotifications().needs_poi);
    if (cashier_locked) addNotificationMessage(clientNotifications().cashier_locked);
    if (withdrawal_locked) {
        // if client is withdrawal locked but it's because they need to authenticate
        // and they have submitted verification documents,
        // we should wait for review of documents to be done and show a different message
        const is_high_risk = risk_classification === 'high';
        const should_authenticate = !authenticated || prompt_client_to_authenticate;
        const doc_is_under_review = document.status === 'pending';
        if (is_high_risk && should_authenticate && doc_is_under_review) {
            addNotificationMessage(clientNotifications().withdrawal_locked_review);
        } else {
            addNotificationMessage(clientNotifications().withdrawal_locked);
        }
    }
    if (mt5_withdrawal_locked) addNotificationMessage(clientNotifications().mt5_withdrawal_locked);
    if (document_needs_action) addNotificationMessage(clientNotifications().document_needs_action);
    if (unwelcome && !should_show_max_turnover) addNotificationMessage(clientNotifications().unwelcome);
    if (is_mf_retail) addNotificationMessage(clientNotifications().mf_retail);

    if (has_risk_assessment) addNotificationMessage(clientNotifications().risk);
    if (shouldCompleteTax(account_status)) addNotificationMessage(clientNotifications().tax);

    if (should_show_max_turnover) addNotificationMessage(clientNotifications().max_turnover_limit_not_set);
    return {
        has_risk_assessment,
    };
};

export const excluded_notifications = isMobile()
    ? ['contract_sold']
    : [
          'you_are_offline',
          'password_changed',
          'switch_to_tick_chart',
          'contract_sold',
          'maintenance',
          'bot_switch_account',
          'new_version_available',
      ];

export const handleClientNotifications = (
    client,
    account_settings,
    account_status,
    addNotificationMessage,
    loginid,
    ui
) => {
    const { currency, excluded_until } = client;
    if (loginid !== LocalStore.get('active_loginid')) return {};
    if (!currency) addNotificationMessage(clientNotifications(ui).currency);
    if (excluded_until) {
        addNotificationMessage(clientNotifications(ui).self_exclusion(excluded_until));
    }

    const { has_risk_assessment } = checkAccountStatus(account_status, client, addNotificationMessage, loginid);

    if (shouldAcceptTnc(account_settings)) addNotificationMessage(clientNotifications(ui).tnc);

    const has_missing_required_field = hasMissingRequiredField(account_settings, client);
    if (has_missing_required_field) {
        addNotificationMessage(clientNotifications(ui).required_fields);
    }

    return {
        has_missing_required_field,
        has_risk_assessment,
    };
};
