"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { Popover } from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { navData } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import GetAdviceModal from "./GetAdviceModal/GetAdviceModal";
import GetStartedModal from "./GetStartedModal/GetStartedModal";
import TradingViewWidget from "./dashboard/TradingViewWidget"; // Import TradingViewWidget component
import authService from "@/services/authService";  // Import authService for authentication handling

const MobileNavLink = ({ children, ...props }) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);  // State for Get Started Modal
  const [isGetAdviceOpen, setIsGetAdviceOpen] = useState(false);    // State for Get Advice Modal
  const [isTradingViewModalOpen, setIsTradingViewModalOpen] = useState(false); // State for TradingView Modal
  const [isAuthenticated, setIsAuthenticated] = useState(false);    // State for authentication

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    setIsAuthenticated(authService.isAuthenticated());

    // Handle the scroll event for header shadow effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle sign-out logic
  const handleSignOut = () => {
    authService.logout();  // Clear user data from localStorage
    setIsAuthenticated(false);  // Update state to reflect sign-out
  };

  const handleOpenTradingViewModal = () => {
    setIsTradingViewModalOpen(true);
  };

  const handleCloseTradingViewModal = () => {
    setIsTradingViewModalOpen(false);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white ${
        isScrolled && "shadow-xl shadow-blue-100"
      }`}
    >
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10 flex items-center gap-16">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <Button
                  onClick={handleSignOut}  // Trigger sign-out
                  variant="outline"
                  className="hidden lg:block"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setIsGetAdviceOpen(true)}   // Open Get Advice Modal
                  variant="outline"
                  className="hidden lg:block"
                >
                  Get Advice
                </Button>
                <Button
                  onClick={() => setIsGetStartedOpen(true)}  // Open Get Started Modal
                  className="hidden lg:block"
                >
                  Get Started
                </Button>
                <Button
                  onClick={handleOpenTradingViewModal}  // Open TradingView Widget
                  className="hidden lg:block"
                >
                  Open TradingView Widget
                </Button>
              </>
            )}
            {/* Mobile NavLinks */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <IoIosArrowUp className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLink href={href} key={_id}>
                                {title}
                              </MobileNavLink>
                            ))}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            {isAuthenticated ? (
                              <Button
                                onClick={handleSignOut}
                                variant="outline"
                              >
                                Sign Out
                              </Button>
                            ) : (
                              <>
                                <Button
                                  onClick={() => setIsGetAdviceOpen(true)}
                                  variant="outline"
                                >
                                  Get Advice
                                </Button>
                                <Button onClick={() => setIsGetStartedOpen(true)}>
                                  Get Started
                                </Button>
                                <Button onClick={handleOpenTradingViewModal}>
                                  Open TradingView Widget
                                </Button>
                              </>
                            )}
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>

      {/* Get Advice Modal */}
      <GetAdviceModal
        isOpen={isGetAdviceOpen}
        onClose={() => setIsGetAdviceOpen(false)}
      />

      {/* Get Started Modal */}
      <GetStartedModal
        isOpen={isGetStartedOpen}  // Opened via "Get Started" button
        onClose={() => setIsGetStartedOpen(false)}
      />

      {/* TradingView Modal */}
      {isTradingViewModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseTradingViewModal}>&times;</span>
            <TradingViewWidget />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
