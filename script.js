// ============ FIGHT DATA ============
const fights = {
  thesis: [
    {
      id: 'T1',
      score: 1,
      name: 'Yuji & Todo vs Hanami',
      category: 'Thesis',
      thumbnail: 'media/T1image.webp',
      video: 'media/T1.mp4,
      description: `Hanami is a powerful cursed spirit who attacks during the Kyoto Goodwill Event, one of the first moments where students face a real, life-threatening enemy. This fight matters because Todo's arrival completely transforms the battle from chaotic survival into something focused and deliberate, and his instant chemistry with Yuji gives the whole sequence a clear direction that never wavers. The audience always knows exactly what this fight is building toward, and it never loses that focus. That clarity is why it earns a 1 — like a strong thesis, it establishes one defensible idea and commits to it with confidence, making the entire fight feel purposeful and controlled from start to finish.`
    },
    {
      id: 'T0',
      score: 0,
      name: 'Yuji & Nobara vs Eso and Kechizu',
      category: 'Thesis',
      thumbnail: 'media/T0image.avif',
      video: 'media/T0.mp4',
      description: `Yuji and Nobara face off against two Death Painting cursed spirits, Eso and Kechizu, in a fight fueled by survival and raw emotion. The battle is intense and carries real emotional payoff, especially in how Nobara refuses to back down, but so much is happening at once — revenge, anger, teamwork, body horror — that no single idea takes the lead. A viewer would feel the energy but might struggle to name the one thing holding it all together. That split focus is why it sits at 0; it has strong moments, but it doesn't lock onto one guiding purpose the way a true thesis needs to.`
    }
  ],
  evidence: [
    {
      id: 'E4',
      score: 4,
      name: 'Yuji & Todo vs Mahito',
      category: 'Evidence & Commentary',
      thumbnail: 'media/E4image.jpg',
      video: 'media/E4.mp4',
      description: `Mahito is one of Yuji's most personal enemies, a cursed spirit who killed his closest friend and represents everything Yuji fears about himself. This fight is important because it forces Yuji to confront that trauma head-on while Todo enters as both a tactical partner and an emotional anchor, stabilizing the fight and pushing Yuji to evolve in real time. Every phase introduces something new — a shift in strategy, a character breakthrough, an escalation — and nothing feels wasted or disconnected. It earns a 4 because it operates like a top-scoring essay: the evidence is strong, the development is constant, and every moment is tied back to a bigger purpose with full, layered commentary.`
    },
    {
      id: 'E3',
      score: 3,
      name: 'Sukuna vs Mahoraga',
      category: 'Evidence & Commentary',
      thumbnail: 'media/E3image.webp',
      video: 'media/E3.mp4/webm',
      description: `Sukuna, the King of Curses, unleashes his full power against Mahoraga, an ancient shikigami known for adapting to any attack it survives. The fight is significant because it is the first time Sukuna is truly forced to think strategically rather than simply overpower an opponent, and the scale of destruction he causes in the process reshapes the entire battlefield. Even without context, the spectacle and creativity on display make it feel legendary and unmissable. It earns a 3 because while the evidence is overwhelming — strategy, escalation, visual impact — it leans more toward awe and domination than the emotional depth and layered commentary that would push it to a 4.`
    },
    {
      id: 'E2',
      score: 2,
      name: 'Yuji vs Choso',
      category: 'Evidence & Commentary',
      thumbnail: 'media/E2image.jpg',
      video: 'media/E2.mp4',
      description: `Choso, one of the Death Painting cursed spirits, hunts Yuji down to avenge his brothers in a brutal, enclosed fight with no room to breathe. The battle matters because Yuji is completely outmatched for most of it and has to survive through pure grit, making it one of the most physically intense and claustrophobic fights in the series. The setting and stakes are clear, and there are strong individual moments worth analyzing. It sits at a 2 because while the evidence is solid and respectable, it doesn't offer the variety or layered development of the higher-scoring examples — it's a competent, well-built fight with good support but limited depth.`
    },
    {
      id: 'E1',
      score: 1,
      name: 'Yuji vs Grasshopper Curse',
      category: 'Evidence & Commentary',
      thumbnail: 'media/E1image.jpg',
      video: 'media/E1.mp4',
      description: `Early in the series, Yuji encounters a low-level insect curse and dispatches it quickly to demonstrate his raw physical ability. The scene serves its purpose — showing that Yuji is capable and confident — but it doesn't go much deeper than that surface-level function. A viewer would understand the point almost immediately and have little to discuss afterward. It earns a 1 because, like an essay with some evidence but limited commentary, the material is present but never developed into anything substantial or memorable.`
    },
    {
      id: 'E0',
      score: 0,
      name: 'Todo vs Megumi',
      category: 'Evidence & Commentary',
      thumbnail: 'media/E0image.webp',
      video: 'media/E0.mp4',
      description: `During the Kyoto Goodwill Event, Todo clashes with Megumi in a brief, aggressive exchange driven more by personality tension than real narrative stakes. The scene is interesting as a character moment — it reveals Todo's philosophy and puts pressure on Megumi — but it never develops into a full, structured fight with buildup, progression, and payoff. A viewer would likely see it as a confrontation rather than a complete battle. It fits a 0 because the pieces of conflict are technically there, but they never come together into something fully developed or analytically rich enough to build real commentary from.`
    }
  ],
  sophistication: [
    {
      id: 'S1',
      score: 1,
      name: 'Sendai Colony',
      category: 'Sophistication',
      thumbnail: 'media/S1image.jpg',
      video: 'media/S1.mp4',
      description: `The Sendai Colony arc is part of the Culling Game, a deadly tournament that forces sorcerers into chaotic, multi-sided battles with shifting alliances. This section matters because it showcases Yuta Okkotsu operating at the highest level — juggling multiple opponents, adapting strategies on the fly, and demonstrating a calm, terrifying competence that makes complexity look effortless. The conflict has multiple layers and more than one valid interpretation, which is rare for action sequences. It earns the sophistication point because, like an essay that goes beyond the obvious, it demonstrates nuance, strategic depth, and a level of control that rewards deeper analysis rather than just surface-level reaction.`
    },
    {
      id: 'S0',
      score: 0,
      name: 'Gojo vs Jogo',
      category: 'Sophistication',
      thumbnail: 'media/S0image.jpg',
      video: 'media/S0.mp4',
      description: `Gojo, the strongest sorcerer alive, faces Jogo, a Special Grade cursed spirit, in a fight that is essentially a masterclass in dominance rather than a true struggle. The scene is visually spectacular and undeniably entertaining, but the power gap is so massive that there is very little tension, strategy, or ambiguity to dig into. A viewer would walk away impressed but not particularly challenged to think deeper about what happened. It sits at 0 for sophistication because, while it delivers strong surface-level impact, it doesn't push into the nuance, complexity, or interpretive richness that the sophistication point demands.`
    }
  ]
};

const categoryMeta = {
  thesis: {
    label: 'Thesis',
    points: '0–1 Points',
    description: 'Your central claim that drives the entire essay. Fights are ranked by how clearly they establish one focused purpose and commit to it.'
  },
  evidence: {
    label: 'Evidence & Commentary',
    points: '0–4 Points',
    description: 'The support and analysis that backs up your argument. Fights are ranked by how much material they give you to work with and how deeply each moment connects to something bigger.'
  },
  sophistication: {
    label: 'Sophistication',
    points: '0–1 Points',
    description: 'The extra layer of nuance and complexity that elevates the whole piece. Fights are ranked by whether they go beyond the obvious and reward deeper interpretation.'
  }
};

// ============ PARTICLES ============
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.hue = Math.random() > 0.5 ? 270 : 220;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============ INTRO ============
function initIntro() {
  const intro = document.getElementById('intro-screen');
  const browse = document.getElementById('browse-screen');

  intro.addEventListener('click', () => {
    intro.classList.add('intro-hidden');
    setTimeout(() => {
      intro.style.display = 'none';
      browse.classList.add('active');
    }, 800);
  });
}

// ============ BUILD BROWSE ============
function buildBrowse() {
  const container = document.getElementById('category-container');

  Object.keys(fights).forEach(catKey => {
    const meta = categoryMeta[catKey];
    const fightList = fights[catKey];

    const row = document.createElement('div');
    row.className = 'category-row';

    row.innerHTML = `
      <div class="category-label">${meta.label} <span style="color: var(--purple-bright); font-weight: 400;">(${meta.points})</span></div>
      <div class="category-meta">${meta.description}</div>
      <div class="card-row" id="row-${catKey}"></div>
    `;

    container.appendChild(row);

    const cardRow = row.querySelector('.card-row');
    fightList.forEach(fight => {
      const card = document.createElement('div');
      card.className = 'fight-card';
      card.setAttribute('data-fight-id', fight.id);

      card.innerHTML = `
        <img src="${fight.thumbnail}" alt="${fight.name}" loading="lazy" />
        <div class="card-overlay">
          <div class="card-score">${fight.score}</div>
          <div class="card-title">${fight.name}</div>
        </div>
        ${fight.video ? '<div class="card-has-video"></div>' : ''}
      `;

      card.addEventListener('click', () => openDetail(fight));
      cardRow.appendChild(card);
    });
  });
}

// ============ DETAIL VIEW ============
function openDetail(fight) {
  const detail = document.getElementById('detail-view');
  const browse = document.getElementById('browse-screen');

  // Build detail content
  let mediaHTML = '';
  if (fight.video) {
    mediaHTML = `
      <div class="detail-video-wrap">
        <video id="detail-video" controls preload="metadata">
          <source src="${fight.video}" type="video/mp4">
        </video>
      </div>
    `;
  } else {
    mediaHTML = `
      <div class="detail-thumbnail-wrap">
        <img src="${fight.thumbnail}" alt="${fight.name}" />
      </div>
    `;
  }

  detail.innerHTML = `
    <button class="detail-back" id="back-btn">← Back</button>
    ${mediaHTML}
    <div class="detail-content" id="detail-content">
      <div class="detail-score-badge">
        <div class="detail-score-num">${fight.score}</div>
        <div class="detail-score-label">${fight.score === 1 && fight.category !== 'Evidence & Commentary' ? 'Point' : 'Points'}</div>
      </div>
      <div class="detail-fight-name">${fight.name}</div>
      <div class="detail-category">${fight.category}</div>
      <div class="detail-description">${fight.description}</div>
    </div>
  `;

  browse.classList.remove('active');
  detail.classList.add('active');

  // Scroll to top
  detail.scrollTop = 0;

  // Fade in content
  setTimeout(() => {
    const content = document.getElementById('detail-content');
    if (content) content.classList.add('visible');
  }, 100);

  // Play video if present
  if (fight.video) {
    const video = document.getElementById('detail-video');
    if (video) {
      video.play().catch(() => {});
    }
  }

  // Back button
  document.getElementById('back-btn').addEventListener('click', () => {
    // Pause video if playing
    const video = document.getElementById('detail-video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    detail.classList.remove('active');
    setTimeout(() => {
      detail.innerHTML = '';
      browse.classList.add('active');
    }, 500);
  });
}

// ============ KEYBOARD NAV ============
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.click();
  }
});

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initIntro();
  buildBrowse();
});
