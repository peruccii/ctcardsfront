export const handleScrollToSection = () => {
  const webComponent = document.querySelector('multi-step-form');

  const targetSection =
    webComponent?.shadowRoot?.getElementById('target-section') ||
    document.getElementById('target-section');

  targetSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
