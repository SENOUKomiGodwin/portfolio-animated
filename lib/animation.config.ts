export const animationConfig = {
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
  },
  easings: {
    easeOut: 'easeOut',
    easeInOut: 'easeInOut',
    spring: { stiffness: 300, damping: 30 },
  },
  scroll: {
    offset: ['start end', 'end start'],
  },
} as const;
