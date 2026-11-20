// Ci Sto Host Portal - Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const stepOnboarding = document.getElementById('step-onboarding');
  const stepSetup = document.getElementById('step-setup');
  const stepFilters = document.getElementById('step-filters');

  const dot1 = document.getElementById('dot-1');
  const dot2 = document.getElementById('dot-2');
  const dot3 = document.getElementById('dot-3');

  const navBadge = document.getElementById('nav-badge');

  function showStep(step) {
    stepOnboarding.classList.remove('active');
    stepSetup.classList.remove('active');
    stepFilters.classList.remove('active');

    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');

    if (step === 1) {
      stepOnboarding.classList.add('active');
      dot1.classList.add('active');
      navBadge.textContent = '1. Host Onboarding';
    } else if (step === 2) {
      stepSetup.classList.add('active');
      dot1.classList.add('active');
      dot2.classList.add('active');
      navBadge.textContent = '2. Business Setup';
    } else if (step === 3) {
      stepFilters.classList.add('active');
      dot1.classList.add('active');
      dot2.classList.add('active');
      dot3.classList.add('active');
      navBadge.textContent = '3. Filters & Dashboard';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Buttons
  document.getElementById('btn-to-step-2').addEventListener('click', () => {
    const venueName = document.getElementById('venue-name').value.trim();
    if (!venueName) {
      alert('Please enter your venue or business name');
      return;
    }
    showStep(2);
  });

  document.getElementById('btn-back-to-1').addEventListener('click', () => {
    showStep(1);
  });

  document.getElementById('btn-to-step-3').addEventListener('click', () => {
    showStep(3);
  });

  document.getElementById('btn-back-to-setup').addEventListener('click', () => {
    showStep(2);
  });

  document.getElementById('btn-save-filters').addEventListener('click', () => {
    alert('Filter preferences saved successfully for your venue!');
  });

  // Chip selection helper (single-select per group)
  function setupChipGroup(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;

      container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  }

  setupChipGroup('chips-category');
  setupChipGroup('chips-capacity');
  setupChipGroup('chips-time');
  setupChipGroup('filter-lang');
  setupChipGroup('filter-faculty');
  setupChipGroup('filter-budget');
});
