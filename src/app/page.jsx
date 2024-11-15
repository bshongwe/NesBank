"use client";
import { useState } from 'react';
import Account from "@/components/Account";
import CallToAction from "@/components/CallToAction";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import TradingViewWidget from "@/components/TradingViewWidget/TradingViewWidget";
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [isTradingViewModalOpen, setTradingViewModalOpen] = useState(false);

  const handleOpenTradingViewModal = () => {
    setTradingViewModalOpen(true);
  };

  const handleCloseTradingViewModal = () => {
    setTradingViewModalOpen(false);
  };

  return (
    <main>
      <Hero />
      <Feature />
      <Account />
      <CallToAction />
      <Reviews />
      <button className={styles.tradingViewButton} onClick={handleOpenTradingViewModal}>
        Open TradingView Widget
      </button>
      {isTradingViewModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseTradingViewModal}>&times;</span>
            <TradingViewWidget />
          </div>
        </div>
      )}
    </main>
  );
}
