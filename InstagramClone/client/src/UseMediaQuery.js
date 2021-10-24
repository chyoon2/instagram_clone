import { useState, useEffect } from "react";

export const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener(query, listener);
    return () => media.removeEventListener(listener);
  }, [matches, query]);

  return matches;
};
