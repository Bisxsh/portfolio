export function EnterFromLeft({ delay }: any) {
  return {
    initial: { x: 20, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      default: {
        delay: delay ? delay : 0,
        duration: 0.7,
      },
    },
  };
}

export function EnterFromRight({ delay }: any) {
  return {
    initial: { x: -20, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      default: {
        delay: delay ? delay : 0,
        duration: 0.7,
      },
    },
  };
}

export function EnterWithFade({ delay }: any) {
  console.log(delay);
  return {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      default: {
        delay: delay ? delay : 0,
        duration: 0.7,
      },
    },
  };
}
