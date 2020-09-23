import React from 'react';
import PropTypes from 'prop-types';
import { localize } from 'Components/i18next';
import { chatCreate } from 'Utils/sendbird';
import OrderDetailsStatusBlock from './order-details-status-block.jsx';
import OrderInfoBlock from './order-info-block.jsx';
import OrderDetailsAmountBlock from './order-details-amount-block.jsx';
import OrderDetailsChatbox from './order-details-chatbox.jsx';
import OrderDetailsTimerBlock from './order-details-timer-block.jsx';
import OrderActionsBlock from './order-actions-block.jsx';
import OrderDetailsResultMessage from './order-details-result-message.jsx';
import Popup from '../popup.jsx';

import './order-details.scss';

const OrderDetails = ({ order_details, chat_info }) => {
    const {
        advertiser_name,
        advertiser_instructions,
        chat_channel_url,
        contact_info,
        display_offer_amount,
        display_price_rate,
        display_transaction_amount,
        is_buyer,
        is_incoming,
        is_expired,
        is_completed,
        is_buyer_cancelled,
        offer_currency,
        id,
        order_purchase_datetime,
        payment_info,
        transaction_currency,
    } = order_details;
    const is_mounted = React.useRef(false);
    const [channel_url, setChannelUrl] = React.useState(chat_channel_url);
    const [should_show_popup, setShouldShowPopup] = React.useState(false);
    const [popup_options, setPopupOptions] = React.useState({});
    const onCancelClick = () => setShouldShowPopup(false);
    const handleShowPopup = options => {
        setPopupOptions(options);
        setShouldShowPopup(true);
    };
    React.useEffect(() => {
        is_mounted.current = true;

        if (!channel_url && is_mounted.current) {
            chatCreate(id).then(response => {
                if (!response.error) {
                    setChannelUrl(response.channel_url);
                }
            });
        }

        return () => (is_mounted.current = false);
    }, []);

    return (
        <div className='order-details'>
            <div className='order-details__container'>
                <div className='order-details__wrapper'>
                    <div className='order-details__wrapper--inner'>
                        <div className='order-details__header'>
                            <span>
                                <OrderDetailsStatusBlock order_details={order_details} />
                                <OrderDetailsResultMessage order_details={order_details} />
                                {!is_expired && !is_completed && !is_buyer_cancelled && (
                                    <React.Fragment>
                                        <OrderDetailsAmountBlock order_details={order_details} />
                                        <h1 className='order-details__header-method'>
                                            {order_details.display_payment_method}
                                        </h1>
                                    </React.Fragment>
                                )}
                            </span>
                            <OrderDetailsTimerBlock order_details={order_details} />
                        </div>
                        <div className='order-details__separator' />
                        <div className='order-details__info'>
                            <div className='order-details__info-columns'>
                                <div className='order-details__info--left'>
                                    <OrderInfoBlock
                                        label={is_buyer ? localize('Seller') : localize('Buyer')}
                                        // TODO: Once we have access to other party's information we can update below.
                                        value={advertiser_name}
                                    />
                                </div>
                                <div className='order-details__info--right'>
                                    <OrderInfoBlock
                                        label={localize('Rate (1 {{offer_currency}})', { offer_currency })}
                                        value={`${display_price_rate} ${transaction_currency}`}
                                    />
                                </div>
                            </div>
                            {is_buyer && (
                                <React.Fragment>
                                    <OrderInfoBlock
                                        label={localize('Seller payment instructions')}
                                        value={payment_info || '-'}
                                    />
                                    <OrderInfoBlock
                                        label={localize('Seller contact details')}
                                        value={contact_info || '-'}
                                    />
                                </React.Fragment>
                            )}
                            {!is_incoming && (
                                <OrderInfoBlock
                                    label={is_buyer ? localize('Seller instructions') : localize('Buyer instructions')}
                                    value={advertiser_instructions || '-'}
                                />
                            )}
                            <div className='order-details__info-columns'>
                                <div className='order-details__info--left'>
                                    <OrderInfoBlock
                                        label={is_buyer ? localize('Send') : localize('Receive')}
                                        value={`${display_transaction_amount} ${transaction_currency}`}
                                    />
                                    <OrderInfoBlock label={localize('Order ID')} value={id} />
                                </div>
                                <div className='order-details__info--right'>
                                    <OrderInfoBlock
                                        label={is_buyer ? localize('Receive') : localize('Send')}
                                        value={`${display_offer_amount} ${offer_currency}`}
                                    />
                                    <OrderInfoBlock label={localize('Time')} value={order_purchase_datetime} />
                                </div>
                            </div>
                        </div>
                        <div className='order-details__footer'>
                            <OrderActionsBlock
                                cancelPopup={onCancelClick}
                                showPopup={handleShowPopup}
                                order_details={order_details}
                            />
                        </div>
                    </div>
                </div>
                {channel_url && (
                    <OrderDetailsChatbox {...chat_info} channel_url={channel_url} nickname={advertiser_name} />
                )}
                <Popup
                    {...popup_options}
                    onCancel={onCancelClick}
                    should_show_popup={should_show_popup}
                    setShouldShowPopup={setShouldShowPopup}
                />
            </div>
        </div>
    );
};

OrderDetails.propTypes = {
    order_details: PropTypes.object,
};

export default OrderDetails;
