import React from 'react'
import { motion, useInView } from "motion/react"
import SplitText from '../SplitText/SplitText'
import { useRef } from 'react'

export default function AnimatedTextInView({ 
  children, 
  className, 
  delay = 0.35, 
  duration = 0.35,
  style = {},
  threshold = 0.5,
  component: Component = motion.div,
  globalDelay = 0,
  fadeOut = false
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: threshold,
    once: true
  });

  const letterAnimation = {
    initial: fadeOut ? {opacity:1} : { opacity: 0 },
    animate: i => ({
      opacity: fadeOut ? 0 : 1 ,
      transition: {
        delay: globalDelay + Math.random() * delay,
        duration: duration
      }
    })
  };

  const containerStyle = {
    ...style
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={containerStyle}
    >
      {!isInView ? (
        <motion.span
          key="text"
          initial={{ opacity: 0 }}
          transition={{ delay: globalDelay }}
        >
          {children}
        </motion.span>
      ) : (
        <motion.div
          key="split"
          initial={{ opacity: 1 }}
          transition={{ delay: globalDelay }}
        >
          <SplitText
            LetterWrapper={({ children }) => (
              <motion.span
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                style={{ display: 'inline-block' }}
              >
                {children}
              </motion.span>
            )}
          >
            {children}
          </SplitText>
        </motion.div>
      )}
    </Component>
  )
} 