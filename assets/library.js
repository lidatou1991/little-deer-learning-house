(() => {
  const cards = [...document.querySelectorAll('.resource-card')];
  const dates = [...document.querySelectorAll('[data-date]')];
  const subjects = [...document.querySelectorAll('[data-subject]')];
  const count = document.getElementById('resultCount');
  const empty = document.getElementById('emptyState');
  let date = 'all', subject = 'all';
  const activate = (buttons, value, key) => buttons.forEach(button => {
    const on = button.dataset[key] === value;
    button.classList.toggle('active', on); button.setAttribute('aria-pressed', String(on));
  });
  const render = () => {
    let visible = 0;
    cards.forEach(card => {
      const show = (date === 'all' || card.dataset.date === date) && (subject === 'all' || card.dataset.subjects.split(' ').includes(subject));
      card.hidden = !show; if (show) visible += 1;
    });
    count.textContent = visible; empty.hidden = visible !== 0;
  };
  dates.forEach(button => button.addEventListener('click', () => { date = button.dataset.date; activate(dates, date, 'date'); render(); }));
  subjects.forEach(button => button.addEventListener('click', () => { subject = button.dataset.subject; activate(subjects, subject, 'subject'); render(); }));
  document.getElementById('clearFilters').addEventListener('click', () => { date = subject = 'all'; activate(dates, date, 'date'); activate(subjects, subject, 'subject'); render(); });
})();
