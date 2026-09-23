/**
 * Inline <head> script for scroll reveals.
 *
 * It arms `html.reveal-on` (which lets CSS hide not-yet-seen [data-reveal]
 * elements) only after an IntersectionObserver exists to reveal them again.
 * It does not depend on the React bundle or any timeout:
 *  - JavaScript off, or this script throws → class never set → all visible.
 *  - Reduced motion → never armed (CSS also ignores it under that query).
 *  - Client-side route changes → a MutationObserver picks up new elements.
 */
export const revealScript = `(function(){var d=document.documentElement;try{if(!('IntersectionObserver' in window)||!('MutationObserver' in window))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){var e=es[i];if(e.isIntersecting){e.target.setAttribute('data-in','');io.unobserve(e.target)}}},{rootMargin:'0px 0px -8% 0px',threshold:0});var scan=function(n){if(n.nodeType!==1)return;if(n.hasAttribute('data-reveal')&&!n.hasAttribute('data-in'))io.observe(n);var l=n.querySelectorAll('[data-reveal]:not([data-in])');for(var i=0;i<l.length;i++)io.observe(l[i])};new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var a=ms[i].addedNodes;for(var j=0;j<a.length;j++)scan(a[j])}}).observe(d,{childList:true,subtree:true});scan(d);d.classList.add('reveal-on')}catch(e){d.classList.remove('reveal-on')}})();`;
