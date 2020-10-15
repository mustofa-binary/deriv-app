export const help_content_types = {
    TEXT: 'text',
    VIDEO: 'video',
    IMAGE: 'image',
    BLOCK: 'block',
};

const { TEXT, IMAGE, BLOCK } = help_content_types;

export const help_content_config = public_path => {
    __webpack_public_path__ = public_path; // eslint-disable-line no-global-assign
    return {
        //= ================= Functions ==================
        procedures_ifreturn: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/if-return.png` },
        ],
        //= ================= Math ==================
        math_arithmetic: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        math_single: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        math_constrain: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '60%', url: `${__webpack_public_path__}media/constrain.png` },
        ],
        // math_number: [
        //     { type: VIDEO, url: 'https://www.youtube.com/embed/Bb0HnaYNUx4' },
        //     { type: TEXT },
        //     { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        //     { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        //     { type: BLOCK },
        //     { type: TEXT },
        //     { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        // ],
        //= ================= Text ==================
        text_print: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        text_prompt_ext: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        //= ================= Tick analysis ==================
        tick_analysis: [{ type: TEXT }, { type: BLOCK }],
        read_details: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        last_digit: [{ type: TEXT }, { type: BLOCK }],
        read_ohlc: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/in_candle_list_read.png` },
        ],
        read_ohlc_obj: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/read_candle_value.png` },
        ],
        check_direction: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }, { type: TEXT }, { type: TEXT }],
        get_ohlc: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/get_candle.png` },
            { type: TEXT },
        ],
        ohlc: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/candle_list_1.png` },
        ],
        ohlc_values: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, url: `${__webpack_public_path__}media/candle_list.png` },
        ],
        is_candle_black: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/is_candle_black.jpeg` },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/is_candle_black_1.jpeg` },
            { type: TEXT },
        ],
        ohlc_values_in_list: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/candle_list_1.png` },
        ],
        //= ================= Variables ==================
        variables_gets: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        variables_set: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/create_variable.png` },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/create_variable_popup.png` },
            { type: TEXT },
        ],
        // =============== Time blocks ============
        epoch: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/epoch.png` },
        ],
        todatetime: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/todatetime.png` },
            { type: TEXT },
        ],
        totimestamp: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/totimestamp.png` },
            { type: TEXT },
        ],
        // =============== Notifications blocks ============
        notify_telegram: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, url: `${__webpack_public_path__}media/notify_telegram.png` },
        ],
        // =============== Misc blocks ============
        console: [{ type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }],
        balance: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        // =============== Indicators blocks ============
        sma_statement: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '60%', url: `${__webpack_public_path__}media/sma_formula.png` },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/sma_chart_1.png` },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/sma_chart_2.png` },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/sma_block_example.png` },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/sma_block_example_1.png` },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/sma_array.png` },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${__webpack_public_path__}media/sma_array_explanation.jpeg` },
        ],
        // =============== Root blocks ============
        trade_definition: [
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: BLOCK },
        ],
        trade_definition_tradeoptions: [{ type: TEXT }, { type: BLOCK }],
        before_purchase: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        during_purchase: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/sell_available.png` },
        ],
        sell_at_market: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/sell_available.png` },
        ],
        after_purchase: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        trade_again: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/trade_again.png` },
        ],
        // =============== Contract ============
        contract_check_result: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/check_result.png` },
        ],
        sell_price: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/sell_pl.png` },
        ],
        // =============== Logic ============
        controls_if: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '70%', url: `${__webpack_public_path__}media/controls_if.png` },
            { type: TEXT },
            { type: IMAGE, width: '40%', url: `${__webpack_public_path__}media/compare_logic.png` },
        ],
        logic_operation: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '40%', url: `${__webpack_public_path__}media/logic.png` },
        ],
        // =============== Logic ============
        controls_whileUntil: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '80%', url: `${__webpack_public_path__}media/repeat_while.png` },
            { type: TEXT },
            { type: IMAGE, width: '80%', url: `${__webpack_public_path__}media/repeat_until.png` },
        ],
        controls_for: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '80%', url: `${__webpack_public_path__}media/controls_for.png` },
            { type: TEXT },
            { type: TEXT },
        ],
        controls_forEach: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '80%', url: `${__webpack_public_path__}media/controls_forEach.png` },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        controls_flow_statements: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '80%', url: `${__webpack_public_path__}media/break_out.png` },
            { type: TEXT },
            { type: IMAGE, width: '80%', url: `${__webpack_public_path__}media/continue.png` },
        ],
    };
};
