import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import LiveStreamSection from "@/components/LiveStramMini";

const LiveStreamFloatingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);

  // Setup default state: Desktop → open, Mobile → pill
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    } else {
      setIsMinimized(true);
    }
  }, []);

  // Reset inactivity timer on any interaction
  const resetInactivityTimer = () => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }

    inactivityTimer.current = setTimeout(() => {
      setIsOpen(false);
      setIsMinimized(true);
    }, 15000);
  };

  useEffect(() => {
    if (isOpen) {
      resetInactivityTimer();

      // Listen for interactions to reset timer
      const events = ["mousemove", "keydown", "click", "touchstart"];
      events.forEach((event) =>
        window.addEventListener(event, resetInactivityTimer)
      );

      return () => {
        if (inactivityTimer.current) {
          clearTimeout(inactivityTimer.current);
        }
        events.forEach((event) =>
          window.removeEventListener(event, resetInactivityTimer)
        );
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Full Modal */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-4 right-4 w-full sm:w-[400px] z-50 shadow-2xl"
          >
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-church-navy text-white">
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5 text-church-gold animate-pulse" />
                  <h3 className="font-semibold">Live Service Stream</h3>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(true);
                  }}
                  className="hover:bg-white/20 rounded-full p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[70vh] overflow-y-auto">
                <LiveStreamSection />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Pill (default on mobile) */}
      <AnimatePresence>
        {isMinimized && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-church-gold to-yellow-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:shadow-xl transition"
          >
            <Play className="w-4 h-4 animate-pulse" />
            <span>LIVE</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveStreamFloatingModal;
