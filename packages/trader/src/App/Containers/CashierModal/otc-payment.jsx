import PropTypes                   from 'prop-types';
import React                       from 'react';
import { Tabs }                    from 'deriv-components';
import { localize }                from 'App/i18n';
import { connect }                 from 'Stores/connect';
// import NoBalance                   from './no-balance.jsx';
import Error                       from './error.jsx';
import Virtual                     from './virtual.jsx';
import Loading                     from '../../../templates/_common/components/loading.jsx';

class OtcPayment extends React.Component {
    state = {
        active_index: 0,
    }

    componentDidMount() {
        this.props.setActiveTab(this.props.container);
        // this.props.onMount();
    }

    // componentWillUnmount() {
    //     console.log('unmounting');
    //     // this.props.onUnMount();
    // }

    render() {
        if (this.props.is_virtual) {
            return <Virtual />;
        }
        if (this.props.is_loading) {
            return <Loading className='cashier__loader' />;
        }
        if (this.props.error.is_show_full_page) {
            // for errors with CTA hide the form and show the error,
            // for others show them at the bottom of the form next to submit button
            return <Error error={this.props.error} />;
        }
        // if (!+this.props.balance) {
        //     return <NoBalance />;
        // }
        return (
            <React.Fragment>
                <Tabs active_index={this.state.active_index}>
                    <div label={localize('Buy/Sell')}>
                        Hi buy sell
                    </div>
                    <div label={localize('Orders')}>
                        Hi orders
                    </div>
                    <div label={localize('My ads')}>
                        Hi my ads
                    </div>
                    <div label={localize('My profile')}>
                        Hi my profile
                    </div>
                </Tabs>
            </React.Fragment>
        );
    }
}

OtcPayment.propTypes = {
    balance     : PropTypes.string,
    container   : PropTypes.string,
    error       : PropTypes.object,
    is_loading  : PropTypes.bool,
    is_virtual  : PropTypes.bool,
    // onMount     : PropTypes.func,
    // onUnMount   : PropTypes.func,
    setActiveTab: PropTypes.func,
};

export default connect(
    ({ client, modules }) => ({
        balance     : client.balance,
        container   : modules.cashier.config.payment_agent_transfer.container,
        error       : modules.cashier.config.payment_agent_transfer.error,
        is_virtual  : client.is_virtual,
        is_loading  : modules.cashier.is_loading,
        // onMount     : modules.cashier.onMountPaymentAgentTransfer,
        // onUnMount   : modules.cashier.resetPaymentAgentTransfer,
        setActiveTab: modules.cashier.setActiveTab,
    })
)(OtcPayment);
