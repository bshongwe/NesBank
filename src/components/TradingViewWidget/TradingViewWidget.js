import React, { useState, useEffect, useRef } from 'react';
import Modal from '../Modal'; // Ensure correct path
import styles from './TradingViewWidget.module.css';
import './TradingViewWidget.css'; // Import custom CSS for widget

const TradingViewWidget = ({ isOpen, onClose }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            new TradingView.widget({
                autosize: true,
                symbol: 'BINANCE:BTCUSDT',
                interval: '240',
                timezone: 'Etc/Utc',
                theme: 'dark',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: true,
                withdateranges: true,
                hide_side_toolbar: true,
                allow_symbol_change: true,
                watchlist: [
                    'BINANCE:BTCUSDT',
                    'BINANCE:ETHUSDT',
                    'OANDA:EURUSD',
                    'OANDA:USDJPY',
                    'TVC:GOLD',
                    'TVC:SILVER'
                ],
                details: true,
                hotlist: true,
                calendar: true,
                studies: [
                    'STD;SMA'
                ],
                container_id: 'chart',
                show_popup_button: true,
                popup_width: '1000',
                popup_height: '2000'
            });
        };
        document.body.appendChild(script);
    }, []);

    if (!isOpen) return null; // Do not render if modal is not open

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.tradingviewWidgetContainer}>
                <div id="chart" className="tradingview-widget"></div>
                <div className="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                        <span className="blue-text">Track all markets on TradingView</span>
                    </a>
                </div>
            </div>
        </Modal>
    );
};

export default TradingViewWidget;
