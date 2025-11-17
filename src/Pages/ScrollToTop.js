// src/Pages/ScrollToTop.js
import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * A bullet-proof ScrollToTop/Hash scroller for React Router v6.
 *
 * Props:
 * - targetSelector?: string      CSS selector for a scroll container (defaults to page)
 * - smooth?: boolean             smooth behavior (default true)
 * - offset?: number              pixels to offset top (e.g., fixed navbar height)
 * - respectHistory?: boolean     keep browser's POP (back/forward) position (default true)
 */
export default function ScrollToTop({
  targetSelector,
  smooth = true,
  offset = 0,
  respectHistory = true,
}) {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'

  // Resolve the element that actually scrolls.
  const getScrollEl = () => {
    if (targetSelector) return document.querySelector(targetSelector);
    return document.scrollingElement || document.documentElement || document.body;
  };

  // Scroll helpers
  const scrollToY = (el, y, behavior = 'auto') => {
    if (!el) return;
    // If it's the page
    if (el === document.body || el === document.documentElement || el === document.scrollingElement) {
      window.scrollTo({ top: y, left: 0, behavior });
    } else if (typeof el.scrollTo === 'function') {
      el.scrollTo({ top: y, left: 0, behavior });
    } else {
      el.scrollTop = y;
      el.scrollLeft = 0;
    }
  };

  const scrollToElement = (container, el, behavior = 'auto') => {
    if (!el) return;
    const containerTop = container === window || container === document || container === document.body
      ? 0
      : container.getBoundingClientRect().top;

    const targetTop = el.getBoundingClientRect().top - containerTop;
    const absoluteTop =
      (container === window || container === document || container === document.body
        ? window.pageYOffset || (document.scrollingElement && document.scrollingElement.scrollTop) || 0
        : container.scrollTop) + targetTop - offset;

    scrollToY(container === window ? document.scrollingElement : container, Math.max(absoluteTop, 0), behavior);
  };

  useLayoutEffect(() => {
    const el = getScrollEl();

    // Keep browser scroll restoration for back/forward if requested
    if (respectHistory && navType === 'POP') return;

    // If there's a hash, scroll to it (after layout)
    if (hash) {
      const tryHash = () => {
        const target = document.querySelector(hash);
        if (target) {
          scrollToElement(window, target, smooth ? 'smooth' : 'auto');
          return true;
        }
        return false;
      };

      // Try now, on next frame, and once more shortly after to survive late mounts
      if (tryHash()) return;
      const raf = requestAnimationFrame(() => {
        if (tryHash()) return;
        setTimeout(tryHash, 60);
      });

      return () => cancelAnimationFrame(raf);
    }

    // No hash → go to top (after layout to avoid layout shifts)
    const raf = requestAnimationFrame(() => {
      scrollToY(el, 0, smooth ? 'smooth' : 'auto');
      // extra nudge in case content pushes down after images/fonts load
      setTimeout(() => scrollToY(el, 0, 'auto'), 50);
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, navType, targetSelector, smooth, offset, respectHistory]);

  return null;
}
