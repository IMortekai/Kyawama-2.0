/**
 * Inline script for <head>. Enables entry animations only when the visitor
 * has not requested reduced motion, and backs out if hydration never happens
 * so content is never left hidden.
 */
export const motionBootScript = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion-ready');setTimeout(function(){if(!d.hasAttribute('data-hydrated'))d.classList.remove('motion-ready')},3500)}catch(e){}})();`;
