'use client';

import { LoaderCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus?: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    subscribeStatus ?? false,
  );

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className=" flex h-10 w-[200px] items-center justify-center overflow-hidden rounded-md  outline outline-1 outline-black"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ color: buttonColor }}
        >
          <motion.span
            key="action"
            className=" flex h-full w-full gap-2 items-center justify-center font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          >
            <LoaderCircle className="animate-spin" />
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className=" flex h-10 w-[200px] cursor-pointer items-center justify-center rounded-md border-none"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className=" flex items-center justify-center font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
