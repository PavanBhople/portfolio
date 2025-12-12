import { useState, useEffect } from 'react';

export default function useTyping(words = [], speed = 120, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && reverse) {
      const t = setTimeout(() => {
        setReverse(false);
        setIndex((i) => (i + 1) % words.length);
      }, 300);
      return () => clearTimeout(t);
    }

    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  return `${words[index].slice(0, subIndex)}${blink ? '|' : ' '}`;
}
