const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

/*
  Pour ajouter un cheval, ouvre horses.json et ajoute un objet dans le tableau.
  Exemple :
  {
    "name": "Nom du cheval",
    "age": "5 ans",
    "sex": "Hongre",
    "height": "1,68 m",
    "breed": "KWPN",
    "pedigree": "Père × mère",
    "price": "Prix sur demande",
    "description": "Description et niveau de travail.",
    "image": "assets/mon-cheval.jpg"
  }
*/
fetch('horses.json')
  .then(response => response.ok ? response.json() : [])
  .then(horses => {
    if (!Array.isArray(horses) || horses.length === 0) return;
    const list = document.getElementById('horse-list');
    list.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'horse-grid';
    horses.forEach(horse => {
      const card = document.createElement('article');
      card.className = 'horse-card';
      const image = document.createElement('img');
      image.src = horse.image || 'assets/accueil-saut.jpeg';
      image.alt = horse.name ? `Photo de ${horse.name}` : 'Cheval proposé à la vente';
      image.loading = 'lazy';
      const body = document.createElement('div');
      body.className = 'horse-card-body';
      const title = document.createElement('h3');
      title.textContent = horse.name || 'Cheval de sport';
      body.appendChild(title);
      const details = [
        [horse.sex, horse.age, horse.height].filter(Boolean).join(' · '),
        [horse.breed, horse.pedigree].filter(Boolean).join(' — '),
        horse.description
      ].filter(Boolean);
      details.forEach(value => {
        const p = document.createElement('p');
        p.textContent = value;
        body.appendChild(p);
      });
      const price = document.createElement('div');
      price.className = 'horse-price';
      price.textContent = horse.price || 'Prix sur demande';
      body.appendChild(price);
      card.append(image, body);
      grid.appendChild(card);
    });
    list.appendChild(grid);
  })
  .catch(() => {});
