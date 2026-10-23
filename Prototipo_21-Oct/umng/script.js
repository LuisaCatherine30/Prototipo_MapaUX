/* ===== Textos ES / EN ===== */
const T = {
  es: {
    ph: '| ¿A dónde vamos hoy?', h2: 'Ubícate en la UMNG', cats: { acad: 'Académicos', admin: 'Administrativos', aud: 'Auditorios', cafe: 'Cafetería', parq: 'Parqueaderos' },
    cd: { acad: 'Aulas, laboratorios y bibliotecas.', admin: 'Admisiones y oficinas de dirección general.', aud: 'Auditorios y zonas de conferencias y eventos.', cafe: 'Comida, bebidas y snacks.', parq: 'Estacionamiento para visitantes, estudiantes y administrativos.' }, go: 'Iniciar Recorrido', stop: 'Detener Recorrido',
    favs: 'Mis favoritos', empty: 'Aún no tienes favoritos. Toca el corazón en un lugar.', ft: 'Filtros', clear: 'Limpiar filtros',
    f: { parking: 'Con parqueadero', access: 'Accesible para sillas de ruedas', out: 'Zonas libres', lib: 'Biblioteca', events: 'Zonas de eventos' },
    route: 'Ruta accesible activada', entry: 'Acceso principal', rate: 'Toca una estrella para calificar'
  },
  en: {
    ph: '| Where are we going today?', h2: 'Find your way at UMNG', cats: { acad: 'Academic', admin: 'Administrative', aud: 'Auditoriums', cafe: 'Dining', parq: 'Parking' },
    cd: { acad: 'Classrooms, labs and libraries.', admin: 'Admissions and general management offices.', aud: 'Auditoriums and conference and event areas.', cafe: 'Food, drinks and snacks.', parq: 'Parking for visitors, students and staff.' }, go: 'Start Tour', stop: 'Stop Tour',
    favs: 'My favorites', empty: "You don't have favorites yet. Tap the heart on a place.", ft: 'Filters', clear: 'Clear filters',
    f: { parking: 'With parking', access: 'Wheelchair accessible', out: 'Open areas', lib: 'Library', events: 'Event areas' },
    route: 'Accessible route on', entry: 'Main entrance', rate: 'Tap a star to rate'
  }
};
const COL = ['#0C2C47', '#BF512C', '#DA9B2B', '#ABCBCA', '#2E5749', '#D6C9C5'], FG = ['#fff', '#fff', '#0C2C47', '#0C2C47', '#fff', '#0C2C47'], BX = ['#D6C9C5', '#D6C9C5', '#0C2C47', '#0C2C47', '#D6C9C5', '#0C2C47'], BI = ['#0C2C47', '#0C2C47', '#D6C9C5', '#D6C9C5', '#0C2C47', '#D6C9C5'], CI = { acad: 0, admin: 1, aud: 2, cafe: 3, parq: 4, free: 5 };
/* f: p=parqueadero a=accesible c=zona libre q=biblioteca e=zona de eventos · h=horario */
const P = [
  { c: 'cafe', x: 458, y: 252, es: ['Cafetería Edificio D', 'Comida, bebidas y snacks.'], en: ['Building D Café', 'Food, drinks and snacks.'], i: '2.5k - $50k', f: 'pa', h: [6, 21], r: 5 },
  { c: 'cafe', x: 720, y: 252, es: ['Cafetería Edificio A', 'Comida, bebidas y snacks.'], en: ['Building A Café', 'Food, drinks and snacks.'], i: '2k - $30k', f: 'a', h: [7, 18], r: 4 },
  { c: 'cafe', x: 586, y: 348, es: ['Cafetería Central', 'Comida, bebidas y snacks.'], en: ['Central Café', 'Food, drinks and snacks.'], i: '6k - $25k', f: 'p', h: [6, 20], r: 4 },
  { c: 'cafe', x: 204, y: 471, es: ['Cafetería Canchas', 'Comida, bebidas y snacks.'], en: ['Sports Fields Café', 'Food, drinks and snacks.'], i: '2k - $15k', f: '', h: [8, 17], r: 3 },
  { c: 'cafe', x: 128, y: 645, es: ['Cafetería Polideportivo', 'Comida, bebidas y snacks.'], en: ['Sports Center Café', 'Food, drinks and snacks.'], i: '2k - $20k', f: '', h: [8, 16], r: 3 },
  { c: 'cafe', x: 581, y: 208, es: ['Cafetería Edificio B', 'Comida, bebidas y snacks.'], en: ['Building B Café', 'Food, drinks and snacks.'], i: '2k - $20k', f: '', h: [7, 18], r: 4 },
  { c: 'cafe', x: 149, y: 475, es: ['Cafetería Edificio C', 'Comida, bebidas y snacks.'], en: ['Building C Café', 'Food, drinks and snacks.'], i: '2k - $20k', f: '', h: [7, 18], r: 4 },
  { c: 'acad', x: 498, y: 216, es: ['Edificio Académico A', 'Aulas, salas de estudio y auditorios.'], en: ['Academic Building A', 'Classrooms, study rooms and auditoriums.'], f: '', h: [6, 22], r: 4 },
  { c: 'acad', x: 541, y: 217, es: ['Edificio Académico B', 'Aulas, salas de estudio y auditorios.'], en: ['Academic Building B', 'Classrooms, study rooms and auditoriums.'], f: 'a', h: [6, 22], r: 4 },
  { c: 'acad', x: 723, y: 399, es: ['Edificio Académico C', 'Aulas, salas de estudio y auditorios.'], en: ['Academic Building C', 'Classrooms, study rooms and auditoriums.'], f: 'a', h: [6, 22], r: 4 },
  { c: 'acad', x: 500, y: 334, es: ['Facultad de Ingeniería', 'Cubículos de profesores para atención a estudiantes.'], en: ['Engineering Faculty', 'Faculty offices for student advising.'], f: 'p', h: [6, 22], r: 4 },
  { c: 'acad', x: 519, y: 277, es: ['Biblioteca Central', 'Libros y zonas de estudio.'], en: ['Central Library', 'Books and study areas.'], f: 'q', h: [7, 20], r: 5 },
  { c: 'acad', x: 663, y: 373, es: ['Biblioteca Lago', 'Salas de estudio con vista al lago.'], en: ['Lake Library', 'Study rooms with a lake view.'], f: 'q', h: [7, 20], r: 4 },
  { c: 'admin', x: 499, y: 218, es: ['Rectoría', 'Oficinas de dirección general.'], en: ['Rectorate', 'General management offices.'], f: 'p', h: [8, 17], r: 4 },
  { c: 'admin', x: 746, y: 602, es: ['Bienestar Universitario', 'Salud, deporte, cultura y apoyo estudiantil.'], en: ['Student Wellbeing', 'Health, sports, culture and student support.'], f: 'pa', h: [8, 18], r: 4 },
  { c: 'admin', x: 520, y: 277, es: ['Admisiones', 'Matrículas y trámites académicos.'], en: ['Admissions', 'Enrollment and academic procedures.'], f: 'a', h: [8, 17], r: 3 },
  { c: 'aud', x: 315, y: 416, es: ['Auditorio A', 'Conferencias y eventos.'], en: ['Auditorium A', 'Conferences and events.'], f: 'pae', h: [7, 21], r: 5 },
  { c: 'aud', x: 615, y: 361, es: ['Auditorio B', 'Conferencias y eventos.'], en: ['Auditorium B', 'Conferences and events.'], f: '', h: [8, 20], r: 4 },
  { c: 'aud', x: 670, y: 378, es: ['Auditorio C', 'Conferencias y eventos.'], en: ['Auditorium C', 'Conferences and events.'], f: 'a', h: [8, 19], r: 4 },
  { c: 'aud', x: 506, y: 294, es: ['Auditorio D', 'Conferencias y eventos.'], en: ['Auditorium D', 'Conferences and events.'], f: 'e', h: [6, 22], r: 4 },
  { c: 'aud', x: 616, y: 339, es: ['Auditorio E', 'Conferencias y eventos.'], en: ['Auditorium E', 'Conferences and events.'], f: 'e', h: [6, 22], r: 4 },
  { c: 'aud', x: 680, y: 353, es: ['Auditorio F', 'Conferencias y eventos.'], en: ['Auditorium F', 'Conferences and events.'], f: 'e', h: [7, 21], r: 4 },
  { c: 'aud', x: 636, y: 244, es: ['Auditorio G', 'Conferencias y eventos.'], en: ['Auditorium G', 'Conferences and events.'], f: '', h: [7, 21], r: 4 },
  { c: 'aud', x: 726, y: 248, es: ['Auditorio H', 'Conferencias y eventos.'], en: ['Auditorium H', 'Conferences and events.'], f: '', h: [7, 21], r: 4 },
  { c: 'parq', x: 70, y: 629, es: ['Parqueadero Occidental', 'Estacionamiento cercano a las canchas de fútbol.'], en: ['West Parking', 'Parking near the soccer fields.'], f: 'p', h: [5, 23], r: 3 },
  { c: 'parq', x: 898, y: 462, es: ['Parqueadero Carnetización', 'Estacionamiento para visitantes, estudiantes y administrativos.'], en: ['ID Card Parking', 'Parking for visitors, students and staff.'], f: 'p', h: [5, 23], r: 3 },
  { c: 'parq', x: 759, y: 688, es: ['Parqueadero Cuervo', 'Estacionamiento para visitantes, estudiantes y administrativos.'], en: ['Cuervo Parking', 'Parking for visitors, students and staff.'], f: 'p', h: [5, 23], r: 4 },
  { c: 'parq', x: 578, y: 282, es: ['Parqueadero Edificio D', 'Estacionamiento para administrativos.'], en: ['Building D Parking', 'Parking for staff.'], f: 'p', h: [5, 23], r: 3 },
  { c: 'parq', x: 326, y: 290, es: ['Parqueadero Laboratorios', 'Estacionamiento para administrativos.'], en: ['Laboratories Parking', 'Parking for staff.'], f: 'p', h: [5, 22], r: 3 },
  { c: 'free', x: 180, y: 533, es: ['Zona Libre Canchas', 'Zona abierta para descansar y practicar deporte entre las canchas.'], en: ['Courts Open Area', 'Open area to rest and play sports between the courts.'], f: 'c', h: [6, 20], r: 4 },
  { c: 'free', x: 174, y: 688, es: ['Zona Libre Cancha de Fútbol', 'Zona verde abierta alrededor de la cancha de fútbol.'], en: ['Soccer Field Open Area', 'Open green area around the soccer field.'], f: 'c', h: [6, 20], r: 4 }];
P.forEach((p, k) => { p.id = k; p.fl = { parking: p.f.includes('p'), access: p.f.includes('a'), out: p.f.includes('c'), lib: p.f.includes('q'), events: p.f.includes('e') } });

/* ===== Estado ===== */
const $ = s => document.querySelector(s), stage = $('#stage'), inner = $('#inner');
let lang = 'es', scale = 1, px = 0, py = 0, cat = null, sel = null, route = false, qid = null;
const fav = new Set([0]), filters = new Set();
const info = p => p.i ? '$' + p.i : `${String(p.h[0]).padStart(2, '0')}:00 – ${String(p.h[1]).padStart(2, '0')}:00`;
const stars = (r, rate, id) => `<span class="st">${[1, 2, 3, 4, 5].map(i => `<span class="${i <= r ? 'o' : ''}" ${rate ? `data-r="${i}" data-id="${id}"` : ''}>★</span>`).join('')}</span>`;
const heart = (on, id, fixed) => `<svg class="hrt ${on ? 'on' : ''}" ${fixed ? '' : `data-h="${id}"`}><use href="#hp"/></svg>`;

/* ===== Escala del lienzo 1920x1080 ===== */
function fit() { const s = Math.min(innerWidth / 1920, innerHeight / 1080); stage.style.transform = `translate(${(innerWidth - 1920 * s) / 2}px,${(innerHeight - 1080 * s) / 2}px) scale(${s})`; stage._s = s }
addEventListener('resize', fit); fit();
function view() { inner.style.transform = `translate(${px}px,${py}px) scale(${scale})`; document.querySelectorAll('.pin').forEach(e => e.style.setProperty('--inv', 1 / scale)) }

/* ===== Pines y viñetas ===== */
function pinsHTML() {
  return P.map(p => {
    const k = CI[p.c], col = COL[k], t = p[lang]; return `<div class="pin" id="p${p.id}" style="left:${p.x}px;top:${p.y}px"><i style="background:${col}"></i><b><img src="assets/g${CI[p.c]}.png" alt=""></b>
<div class="tip" style="--k:${col}"><div class="th"><div><svg><use href="#imgI"/></svg></div><div><svg><use href="#imgI"/></svg></div></div>${heart(fav.has(p.id), p.id)}
<h4>${t[0]}</h4><p>${t[1]}</p><div class="pr">${info(p)}</div><span id="ts${p.id}">${stars(p.r)}</span>${ROUTES[p.es[0]] ? `<button class="go${tour && tourId === p.id ? ' on' : ''}">${T[lang][tour && tourId === p.id ? 'stop' : 'go']}</button>` : ''}</div></div>`
  }).join('')
}
function build() {
  $('#pins').innerHTML = pinsHTML();
  document.querySelectorAll('.pin').forEach(el => el.addEventListener('click', e => {
    e.stopPropagation(); const id = +el.id.slice(1);
    if (e.target.closest('.hrt')) { toggleFav(id); return }
    if (e.target.closest('.tip')) return;
    sel = sel === id ? null : id; mark()
  }));
  document.querySelectorAll('.go').forEach(b => b.onclick = e => { e.stopPropagation(); toggleTour() }); view(); paint()
}
function mark() { document.querySelectorAll('.pin').forEach(e => e.classList.toggle('sel', +e.id.slice(1) === sel)); updateRoute() }
function visible(p) {
  if (qid !== null) return p.id === qid; if (!cat && !filters.size) return false; if (cat && p.c !== cat) return false;
  for (const f of filters) {
    if (f === 'parking') { if (p.c !== 'parq') return false }
    else if (!p.fl[f]) return false
  }
  return true
}
function paint() { document.querySelectorAll('.pin').forEach(e => { const p = P[+e.id.slice(1)], v = visible(p); e.classList.toggle('show', v); if (!v && sel === p.id) sel = null }); mark() }

/* ===== Favoritos y calificación ===== */
function toggleFav(id) {
  fav.has(id) ? fav.delete(id) : fav.add(id);
  document.querySelectorAll(`#pins [data-h="${id}"]`).forEach(h => h.classList.toggle('on', fav.has(id))); renderFavs()
}
function renderFavs() {
  const l = [...fav].map(i => P[i]);
  $('#fl').innerHTML = l.length ? l.map(p => `<div class="fc"><div class="im"><svg><use href="#imgI"/></svg></div><div><h5>${p[lang][0]}</h5><p>${p[lang][1]}</p><p>$${p.i || info(p)}</p>${stars(p.r, true, p.id)}<small>${T[lang].rate}</small></div>${heart(true, p.id, true)}</div>`).join('') : `<div id="empty">${T[lang].empty}</div>`
}
$('#fl').addEventListener('click', e => { const s = e.target.closest('[data-r]'); if (!s) return; const p = P[+s.dataset.id]; p.r = +s.dataset.r; renderFavs(); $('#ts' + p.id).innerHTML = stars(p.r) });

/* ===== Idioma ===== */
function apply() {
  const t = T[lang]; document.documentElement.lang = lang; $('#lb').textContent = lang.toUpperCase();
  $('#q').placeholder = t.ph; $('#h2').textContent = t.h2; $('#ft').textContent = t.favs;
  document.querySelectorAll('.cat').forEach(b => { b.querySelector('.n').textContent = t.cats[b.dataset.c]; b.querySelector('.d').textContent = t.cd[b.dataset.c] });
  $('#chip').textContent = t.route;
  $('#fpanel').innerHTML = `<h4>${t.ft}</h4>` + Object.keys(t.f).map(k => `<label><input type="checkbox" value="${k}" ${filters.has(k) ? 'checked' : ''}>${t.f[k]}</label>`).join('') + `<button id="clr">${t.clear}</button>`;
  $('#fpanel').onchange = e => { qid = null; e.target.checked ? filters.add(e.target.value) : filters.delete(e.target.value); $('#flt').classList.toggle('act', filters.size > 0); paint() };
  $('#clr').onclick = () => { qid = null; filters.clear(); $('#flt').classList.remove('act'); apply(); paint() };
  drawRoute(); build(); renderFavs()
}
$('#lang').onclick = () => { lang = lang === 'es' ? 'en' : 'es'; apply() };

/* ===== Panel, categorías, filtros ===== */
function side(o) { ['#side', '#mapPos', '#acc', '#search', '#chip'].forEach(s => $(s).classList.toggle('open', o)); $('#accI').src = o ? 'assets/acc2.png' : 'assets/acc.png' }
$('#menu').onclick = () => side(!$('#side').classList.contains('open')); $('#tab').onclick = () => side(false);
document.querySelectorAll('.cat').forEach(b => b.onclick = () => {
  const c = b.dataset.c; qid = null; cat = cat === c ? null : c;
  document.querySelectorAll('.cat').forEach(x => x.classList.toggle('on', x === b && !!cat)); paint()
});
$('#flt').onclick = () => $('#fpanel').classList.toggle('show');
$('#fav').onclick = () => $('#favs').classList.toggle('show');
$('#comp').onclick = () => { scale = 1; px = py = 0; view() };
const norm = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
$('#q').addEventListener('input', e => {
  const v = norm(e.target.value.trim());
  if (v.length < 2) { if (!v) { cat = null; if (qid === sel) sel = null; qid = null; document.querySelectorAll('.cat').forEach(x => x.classList.remove('on')) } paint(); return }
  const m = Object.keys(T.es.cats).map(k => [k]).find(([k]) => norm(T.es.cats[k]).includes(v) || norm(T.en.cats[k]).includes(v));
  const pl = P.filter(p => norm(p.es[0]).includes(v) || norm(p.en[0]).includes(v));
  qid = !m && pl.length === 1 ? pl[0].id : null; sel = null;
  cat = m ? m[0] : null; document.querySelectorAll('.cat').forEach(x => x.classList.toggle('on', x.dataset.c === cat)); paint()
});

/* ===== Ruta accesible (movilidad reducida) ===== */
/* Ruta tomada de la imagen "Ruta movilidad reducida": solo por caminos café y blancos. Coordenadas en el mismo espacio que los pines (1000 x 900) */
const ACC = {
  main: [[476,781],[476,757],[483,664],[485,657],[490,645],[495,630],[502,618],[503,610],[501,595],[493,582],[484,560],[483,545],[482,518],[488,501],[493,482],[498,472],[499,456],[502,444],[512,427],[514,422],[513,419],[510,416],[469,412],[458,409],[446,405],[438,400],[433,395],[432,390],[432,385],[436,379],[442,373],[463,361],[465,352],[468,322],[470,318],[475,315],[485,314],[499,313],[530,316],[569,315],[578,315],[589,312],[591,310],[594,302],[594,273],[596,268],[641,267],[704,269],[712,268]],
  left: [[484,660],[482,658],[482,648],[480,642],[456,619],[447,612],[437,607],[428,604],[398,598],[348,582],[323,576],[311,570],[287,558],[266,544],[247,525],[236,511],[225,501],[216,497],[202,496]],
  up: [[602,266],[602,239]],
  stub: [[556,317],[560,329]]
};
const ACC_CON = [[[202, 496], [173, 525]], [[202, 496], [191, 632]]];   /* conectores punteados */
function drawRoute() {
  $('#rt').setAttribute('viewBox', '0 0 1000 900');
  const d = a => 'M' + a.map(p => p.join(',')).join('L'), parts = [ACC.main, ACC.left, ACC.up, ACC.stub], o = ACC.main[0];
  const con = ACC_CON.map(([p, q]) => `<line class="con" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>`).join('');
  $('#rt').innerHTML = con + parts.map(a => `<path class="case" d="${d(a)}"/>`).join('') + parts.map(a => `<path class="main r" d="${d(a)}"/>`).join('') + `
 <circle cx="${o[0]}" cy="${o[1]}" r="17" fill="#0C2C47" stroke="#fff" stroke-width="3"/><text x="${o[0]}" y="${o[1] + 6}" text-anchor="middle" style="fill:#fff;stroke:none;font-size:18px">♿</text>
 <text x="${o[0]}" y="${o[1] + 38}" text-anchor="middle">${T[lang].entry}</text>`
}
$('#acc').onclick = () => {
  route = !route; $('#acc').classList.toggle('on', route); $('#chip').classList.toggle('show', route); $('#rt').classList.toggle('show', route);
  if (route) document.querySelectorAll('#rt .r').forEach(p => { const L = p.getTotalLength(); p.style.transition = 'none'; p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.getBoundingClientRect(); p.style.transition = 'stroke-dashoffset 1.6s ease'; p.style.strokeDashoffset = 0 })
};
$('#acc').addEventListener('click', () => document.body.classList.toggle('accroute', route));


/* ===== Arrastre y zoom ===== */
let d = null, moved = 0;
stage.addEventListener('pointerdown', e => { if (e.target.closest('#side,#search,#fpanel,.fb,#lb,#favs,.pin,#chip')) return; d = { x: e.clientX, y: e.clientY, px, py }; moved = 0; inner.style.cursor = 'grabbing' });
addEventListener('pointermove', e => { if (!d) return; const s = stage._s, dx = (e.clientX - d.x) / s, dy = (e.clientY - d.y) / s; moved = Math.max(moved, Math.abs(dx) + Math.abs(dy)); px = d.px + dx; py = d.py + dy; view() });
addEventListener('pointerup', () => { if (d && moved < 4) { sel = null; mark(); $('#favs').classList.remove('show'); $('#fpanel').classList.remove('show') } d = null; inner.style.cursor = 'grab' });
const zoom = f => { scale = Math.min(3, Math.max(.6, scale * f)); view() };
stage.addEventListener('wheel', e => { if (e.target.closest('#side,#favs,#fpanel')) return; e.preventDefault(); zoom(e.deltaY < 0 ? 1.1 : 1 / 1.1) }, { passive: false });
addEventListener('keydown', e => { if (e.target.id === 'q') return; if (e.key === '+' || e.key === '=') zoom(1.2); if (e.key === '-') zoom(1 / 1.2) });
const pt = new Map(); let pd = 0;
stage.addEventListener('pointerdown', e => pt.set(e.pointerId, e)); stage.addEventListener('pointerup', e => { pt.delete(e.pointerId); pd = 0 });
stage.addEventListener('pointermove', e => { if (!pt.has(e.pointerId)) return; pt.set(e.pointerId, e); if (pt.size === 2) { const [a, b] = [...pt.values()], n = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY); if (pd) zoom(n / pd); pd = n } });
/* ===== Recorridos: desde la entrada hasta cada lugar (solo por zonas café y blancas) ===== */
const ROUTES = {
  'Cafetería Edificio D': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[388,598],[328,578],[306,568],[290,559],[276,551],[261,538],[250,527],[244,519],[242,506],[241,470],[239,458],[231,430],[228,415],[228,404],[230,395],[238,386],[252,373],[262,366],[278,357],[315,342],[325,337],[328,323],[329,297],[331,277],[333,271],[337,264],[338,259],[339,241],[340,237],[342,233],[385,232],[434,233],[456,234],[458,237],[458,252]],
  'Cafetería Edificio A': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[522,315],[540,313],[556,307],[570,298],[583,285],[595,276],[607,270],[618,267],[709,269],[712,268],[720,252]],
  'Cafetería Central': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[438,376],[445,370],[454,366],[463,364],[494,365],[515,362],[530,361],[581,363],[583,361],[586,348]],
  'Cafetería Canchas': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[373,594],[325,577],[297,564],[271,546],[256,534],[247,524],[242,516],[240,510],[234,503],[227,499],[206,494],[204,488],[204,471]],
  'Cafetería Polideportivo': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[373,594],[333,580],[302,567],[282,554],[261,538],[247,524],[242,516],[240,510],[237,506],[234,503],[226,499],[210,497],[207,497],[204,498],[202,502],[201,515],[198,536],[195,544],[192,546],[185,547],[163,545],[145,541],[122,538],[119,538],[116,540],[106,615],[103,626],[103,634],[105,638],[108,641],[128,645]],
  'Cafetería Edificio B': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[435,378],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[537,315],[549,313],[557,310],[560,307],[563,301],[565,293],[566,282],[566,260],[564,249],[561,242],[562,229],[564,222],[569,217],[574,215],[581,214],[581,208]],
  'Cafetería Edificio C': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[373,594],[343,584],[309,570],[287,558],[261,538],[247,524],[242,516],[240,510],[231,501],[224,498],[202,493],[151,486],[146,483],[149,475]],
  'Edificio Académico A': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[435,378],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[537,315],[549,313],[557,310],[560,307],[563,301],[566,282],[566,270],[563,252],[561,246],[557,242],[550,236],[500,234],[498,232],[498,216]],
  'Edificio Académico B': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[435,397],[432,392],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[537,315],[549,313],[557,310],[560,307],[563,301],[565,293],[566,282],[566,270],[563,252],[561,246],[554,240],[542,234],[541,232],[541,217]],
  'Edificio Académico C': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[526,605],[555,604],[588,599],[627,591],[673,579],[695,576],[699,575],[718,561],[758,540],[777,528],[799,506],[809,493],[816,483],[820,470],[820,465],[818,460],[814,455],[800,442],[792,436],[783,433],[775,431],[752,430],[750,426],[750,417],[748,415]],
  'Facultad de Ingeniería': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[435,397],[432,392],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[482,314],[492,315],[498,317],[500,320],[500,334]],
  'Biblioteca Central': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[435,397],[432,392],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[537,315],[549,313],[557,310],[560,307],[563,301],[565,293],[566,282],[565,260],[563,252],[561,246],[551,237],[528,236],[520,238],[519,243],[519,277]],
  'Biblioteca Lago': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[526,605],[555,604],[588,599],[627,591],[673,579],[691,577],[699,575],[718,561],[761,538],[784,521],[795,511],[805,499],[817,480],[820,470],[820,465],[818,460],[808,448],[800,442],[788,436],[771,433],[750,431],[706,431],[686,428],[682,421],[676,403],[671,400],[660,397],[657,394]],
  'Rectoría': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[435,378],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[537,315],[549,313],[557,310],[560,307],[563,301],[566,282],[566,270],[563,252],[561,246],[557,242],[550,236],[501,234],[499,232],[499,218]],
  'Bienestar Universitario': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[520,606],[526,605],[565,602],[588,599],[626,591],[670,581],[680,580],[685,581],[695,588],[708,601],[711,602]],
  'Admisiones': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[435,397],[432,392],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[537,315],[549,313],[557,310],[560,307],[563,301],[565,293],[566,282],[565,260],[563,252],[561,246],[551,237],[528,236],[520,238],[519,241],[520,277]],
  'Auditorio A': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[379,596],[336,580],[301,566],[282,555],[265,542],[253,531],[244,519],[242,506],[241,470],[239,458],[231,430],[228,415],[228,404],[230,397],[235,389],[246,378],[253,372],[264,365],[279,357],[286,355],[291,356],[294,358]],
  'Auditorio B': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[526,605],[555,604],[588,599],[627,591],[673,579],[691,577],[699,575],[718,561],[761,538],[784,521],[795,511],[805,499],[814,486],[819,474],[820,465],[818,461],[810,450],[798,439],[793,429],[794,420],[797,416],[799,411],[799,403],[797,395],[794,392],[785,383],[770,374],[740,359],[713,348],[654,331],[651,331],[648,333],[637,355],[633,362],[629,364],[615,361]],
  'Auditorio C': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[526,605],[555,604],[588,599],[627,591],[673,579],[691,577],[699,575],[718,561],[761,538],[784,521],[795,511],[805,499],[817,480],[820,470],[820,465],[818,460],[808,448],[800,442],[788,436],[771,433],[750,431],[706,431],[686,428],[682,421],[676,403],[672,400],[666,398],[664,396]],
  'Auditorio D': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[435,397],[432,392],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[474,315],[497,314],[504,312],[506,309],[506,294]],
  'Auditorio E': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[435,378],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[549,315],[565,311],[585,312],[590,313],[602,321],[610,323],[614,325],[616,329],[616,339]],
  'Auditorio F': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[526,605],[555,604],[588,599],[627,591],[673,579],[691,577],[699,575],[718,561],[761,538],[784,521],[795,511],[805,499],[817,480],[820,470],[820,465],[818,461],[810,450],[798,439],[793,429],[794,420],[797,416],[799,411],[799,403],[797,395],[792,388],[777,378],[755,366],[711,346],[693,341],[686,340],[682,343],[680,353]],
  'Auditorio G': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[435,378],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[522,315],[540,313],[556,307],[570,298],[583,285],[594,276],[604,270],[613,267],[635,266],[636,265],[636,244]],
  'Auditorio H': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[431,387],[433,381],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[522,315],[540,313],[556,307],[570,298],[583,285],[595,276],[607,270],[618,267],[709,269],[712,268],[726,248]],
  'Parqueadero Occidental': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[373,594],[333,580],[302,567],[282,554],[261,538],[247,524],[242,516],[240,510],[237,506],[234,503],[226,499],[210,497],[207,497],[204,498],[202,502],[199,529],[196,540],[194,545],[178,546],[132,540],[116,541],[114,548],[112,558],[107,606],[102,623],[100,625],[92,628],[70,629]],
  'Parqueadero Carnetización': [[476,781],[481,676],[481,646],[480,636],[477,633],[477,630],[478,628],[492,626],[503,619],[514,609],[526,605],[555,604],[588,599],[627,591],[673,579],[695,576],[699,575],[718,561],[761,538],[784,521],[795,511],[808,497],[816,484],[825,466],[833,458],[840,456],[850,458],[886,458],[896,460],[898,462]],
  'Parqueadero Cuervo': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,628],[488,628],[492,626],[503,619],[514,609],[520,606],[526,605],[546,604],[576,601],[614,594],[670,581],[684,581],[690,584],[693,587],[695,594],[696,606],[696,659],[697,671],[700,678],[702,682],[708,684],[716,686],[759,688]],
  'Parqueadero Edificio D': [[476,781],[481,667],[480,640],[480,636],[477,633],[477,630],[480,627],[492,626],[499,622],[505,615],[507,608],[507,603],[505,599],[497,587],[491,581],[486,571],[483,558],[481,541],[482,505],[485,492],[488,483],[494,478],[500,466],[502,447],[503,442],[514,426],[515,419],[513,416],[509,415],[473,412],[454,408],[446,405],[438,400],[433,395],[432,390],[432,384],[435,378],[441,373],[460,364],[463,361],[465,352],[467,327],[469,318],[471,316],[487,315],[522,315],[538,314],[551,311],[561,306],[567,300],[576,290],[577,287],[578,282]],
  'Parqueadero Laboratorios': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[379,596],[336,580],[301,566],[282,555],[265,542],[253,531],[244,519],[242,506],[241,470],[239,458],[231,430],[228,415],[228,404],[230,397],[238,386],[256,370],[279,357],[315,342],[325,337],[327,326],[326,290]],
  'Zona Libre Canchas': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[373,594],[333,580],[302,567],[282,554],[261,538],[247,524],[238,508],[232,502],[224,498],[210,497],[204,498],[202,502],[198,531],[194,546],[191,548],[188,548],[185,547],[180,543]],
  'Zona Libre Cancha de Fútbol': [[476,781],[481,667],[480,640],[476,628],[467,626],[460,623],[445,610],[441,608],[427,604],[395,600],[373,594],[325,577],[297,564],[271,546],[256,534],[247,524],[239,508],[231,501],[221,498],[210,497],[204,498],[203,500],[197,537],[196,561],[189,602],[188,624],[186,627],[179,633]]
};
const RC_START = [476, 781];            /* punto de inicio: entrada sur del campus. Todas las rutas pasan primero por la primera rotonda */
/* todas las rutas pasan primero por la primera rotonda (477, 626) y desde ahi siguen por el mejor camino */
const M_PER_PX = .72, M_PER_MIN = 80;   /* escala estimada del mapa y velocidad al caminar (metros por minuto) */
let tour = false, tourId = null;
const SVGNS = 'http://www.w3.org/2000/svg';
const rc = document.createElementNS(SVGNS, 'svg');
rc.setAttribute('viewBox', '0 0 1000 900'); rc.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;display:none';
const routeOf = id => (id === null || id === undefined || !P[id]) ? null : ROUTES[P[id].es[0]];
const rcPaths = [['#fff', 13], ['#BF512C', 7]].map(([c, w]) => {
  const p = document.createElementNS(SVGNS, 'path');
  p.setAttribute('fill', 'none'); p.setAttribute('stroke', c); p.setAttribute('stroke-width', w);
  p.setAttribute('stroke-linecap', 'round'); p.setAttribute('stroke-linejoin', 'round'); rc.appendChild(p); return p
});
const rcBadge = document.createElementNS(SVGNS, 'g'); rcBadge.id = 'gps-badge'; rc.appendChild(rcBadge);
inner.insertBefore(rc, $('#pins'));
const CAT_ICON = { cafe: '☕', acad: '🎓', admin: '🏛️', aud: '🎤', parq: '🅿️', free: '🌳' };
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
function drawBadges(id) {
  const r = routeOf(id), p = P[id], es = lang === 'es'; let L = 0; const seg = [];
  for (let i = 1; i < r.length; i++) { const d = Math.hypot(r[i][0] - r[i - 1][0], r[i][1] - r[i - 1][1]); seg.push(d); L += d }
  const m = Math.round(L * M_PER_PX), min = Math.max(1, Math.round(m / M_PER_MIN));
  let h = L / 2, k = 0; while (k < seg.length - 1 && h > seg[k]) { h -= seg[k]; k++ }
  const f = seg[k] ? h / seg[k] : 0, mx = r[k][0] + (r[k + 1][0] - r[k][0]) * f, my = r[k][1] + (r[k + 1][1] - r[k][1]) * f;
  const a = r[0], b = r[r.length - 1], dst = esc((es ? 'DESTINO: ' : 'DESTINATION: ') + p[lang][0]), org = es ? 'ORIGEN: Entrada' : 'START: Entrance';
  const wD = Math.round(dst.length * 7.6 + 24), wO = Math.round(org.length * 7.6 + 24), right = b[0] < 1000 - wD - 60, dx = right ? b[0] + 24 : b[0] - 24 - wD;
  const tx = mx < 500 ? mx - 104 : mx + 104, F = 'font-family="Montserrat, sans-serif"';
  rcBadge.innerHTML = `
    <circle cx="${a[0]}" cy="${a[1]}" r="16" fill="#BF512C" stroke="#fff" stroke-width="3"/>
    <text x="${a[0]}" y="${a[1] + 5}" text-anchor="middle" fill="#fff" font-size="14">🚶</text>
    <rect x="${a[0] - wO / 2}" y="${a[1] + 24}" width="${wO}" height="26" rx="6" fill="#0C2C47" opacity="0.9"/>
    <text x="${a[0]}" y="${a[1] + 42}" text-anchor="middle" fill="#fff" ${F} font-size="12" font-weight="bold">${org}</text>
    <circle cx="${b[0]}" cy="${b[1]}" r="16" fill="#2E5749" stroke="#fff" stroke-width="3"/>
    <text x="${b[0]}" y="${b[1] + 5}" text-anchor="middle" fill="#fff" font-size="14">${CAT_ICON[p.c] || '📍'}</text>
    <rect x="${dx}" y="${b[1] + 2}" width="${wD}" height="30" rx="8" fill="#0C2C47" opacity="0.95"/>
    <text x="${dx + wD / 2}" y="${b[1] + 22}" text-anchor="middle" fill="#fff" ${F} font-size="13" font-weight="bold">${dst}</text>
    <line x1="${mx}" y1="${my}" x2="${tx}" y2="${my}" stroke="#BF512C" stroke-width="3"/>
    <rect x="${tx - 72}" y="${my - 19}" width="144" height="38" rx="10" fill="#BF512C" stroke="#fff" stroke-width="2"/>
    <text x="${tx}" y="${my + 6}" text-anchor="middle" fill="#fff" ${F} font-size="15" font-weight="700">${min} min (${m} m)</text>`
}
/* sonidos generados con Web Audio (no necesitan archivos) */
let actx = null;
function sfx(kind) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume();
    const seq = kind === 'start' ? [[523.25, 0, .25], [659.25, .13, .25], [783.99, .26, .45]] : [[783.99, 0, .28], [1046.5, .17, .8]], t = actx.currentTime;
    seq.forEach(([fr, d, l]) => {
      const o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine'; o.frequency.value = fr;
      g.gain.setValueAtTime(.0001, t + d); g.gain.exponentialRampToValueAtTime(.22, t + d + .015); g.gain.exponentialRampToValueAtTime(.0001, t + d + l);
      o.connect(g); g.connect(actx.destination); o.start(t + d); o.stop(t + d + l + .05)
    })
  } catch (e) { }
}
/* Mientras hay una ruta activa, la viñeta se compacta y se vuelve translúcida para que se vea todo el camino.
   Al pasar el cursor por encima recupera su aspecto completo. */
{ const st = document.createElement('style'); st.textContent = `
  body.touring .pin.sel .tip .th, body.touring .pin.sel .tip p, body.touring .pin.sel .tip .pr, body.touring .pin.sel .tip span[id^="ts"] { display: none }
  body.touring .pin.sel .tip .hrt { top: 14px }
  body.touring .pin.sel .tip, body.accroute .pin.sel .tip { opacity: .55; transition: opacity .2s }
  body.touring .pin.sel .tip:hover, body.accroute .pin.sel .tip:hover { opacity: 1 }`;
  document.head.appendChild(st) }
let rcOn = false, rcTok = 0;
function routeWanted() { return tour && tourId !== null && sel === tourId && !!routeOf(tourId) && visible(P[tourId]) }
function toggleTour() { if (tour) tour = false; else { tour = true; tourId = sel } updateRoute() }
function updateRoute() {
  if (tour && !routeWanted()) tour = false; const w = routeWanted();
  document.querySelectorAll('.go').forEach(b => { const on = tour && +b.closest('.pin').id.slice(1) === tourId; b.textContent = T[lang][on ? 'stop' : 'go']; b.classList.toggle('on', on) });
  document.body.classList.toggle('touring', w);
  if (w === rcOn) return; rcOn = w; const tok = ++rcTok;
  if (!w) { rc.style.display = 'none'; return }
  const r = routeOf(tourId), d = 'M' + r.map(q => q.join(',')).join('L');
  rcPaths.forEach(p => p.setAttribute('d', d)); drawBadges(tourId); rc.style.display = 'block';
  const ms = Math.min(6500, Math.max(2800, rcPaths[0].getTotalLength() * 5.5));
  rcPaths.forEach(p => {
    const L = p.getTotalLength(); p.style.transition = 'none'; p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.getBoundingClientRect();
    p.style.transition = `stroke-dashoffset ${ms}ms ease-in-out`; p.style.strokeDashoffset = 0
  });
  sfx('start'); setTimeout(() => { if (rcOn && rcTok === tok) sfx('end') }, ms)
}
{ const _build = build; build = function () { _build.apply(this, arguments); if (rcOn && routeOf(tourId)) drawBadges(tourId) } }
apply();



//Filtros conceptos cortos
if (typeof T !== 'undefined') {
  if (T.es) {
    T.es.f = {
      acad: 'Aulas',
      lib: 'Bibliotecas',
      aud: 'Auditorios',
      events: 'Eventos',
      admin: 'Oficinas',
      cafe: 'Cafeterías',
      parq: 'Parqueaderos',
      out: 'Zonas Verdes'
    };
  }
  if (T.en) {
    T.en.f = {
      acad: 'Classrooms',
      lib: 'Libraries',
      aud: 'Auditoriums',
      events: 'Events',
      admin: 'Offices',
      cafe: 'Dining',
      parq: 'Parking',
      out: 'Green Areas'
    };
  }
  if (typeof apply === 'function') apply();
}

//Función visible para las categorías de filtros
if (typeof visible !== 'undefined') {
  window.visible = function(p) {
    // qid puede ser un solo lugar (número) o una lista de lugares (resultados de la búsqueda)
    if (qid !== null) return Array.isArray(qid) ? qid.includes(p.id) : p.id === qid;
    if (!cat && !filters.size) return false;
    if (cat && p.c !== cat) return false;
    
    if (filters.size > 0) {
      for (const f of filters) {
        if (f === p.c) return true;
        if (f === 'parq' || f === 'parking') { if (p.c === 'parq') return true; }
        if (p.fl && p.fl[f]) return true;
      }
      return false;
    }
    return true;
  };
}

//Búsqueda inteligente: conceptos relacionados, sugerencias desplegables, botón "X" y mensaje sin resultados
Object.assign(T.es, { nores: 'No se encuentran resultados relacionados', dir: 'Resultados', rel: 'Relacionados' });
Object.assign(T.en, { nores: 'No related results found', dir: 'Results', rel: 'Related' });

const nrm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
const BUILDING = ['acad', 'admin', 'aud', 'cafe']; // lugares que son edificios (aquí se asume que tienen baños)

/* CONCEPTOS RELACIONADOS
   w = palabras que puede escribir la persona (ES y EN, sin tildes)
   t = a qué lugares se relaciona esa palabra
   Para agregar una palabra nueva, solo añádela a la lista w del concepto. */
const REL = [
  { // parqueadero: los parqueaderos y los lugares que tienen parqueadero cerca
    w: ['parqueadero', 'parquear', 'parqueo', 'estacionamiento', 'estacionar', 'carro', 'auto', 'automovil', 'vehiculo', 'moto', 'bicicleta', 'bici', 'parking', 'park', 'car', 'vehicle', 'motorcycle', 'bike'],
    t: p => p.c === 'parq' || p.fl.parking
  },
  { // baños: todos los edificios (cambia aquí cuáles lugares tienen baños)
    w: ['bano', 'sanitario', 'wc', 'lavamanos', 'lavabo', 'restroom', 'bathroom', 'toilet', 'washroom'],
    t: p => BUILDING.includes(p.c)
  },
  { // comida
    w: ['comida', 'comer', 'almuerzo', 'desayuno', 'cafe', 'cafeteria', 'restaurante', 'bebida', 'snack', 'hambre', 'tinto', 'jugo', 'refrigerio', 'food', 'eat', 'lunch', 'coffee', 'drink', 'hungry', 'dining'],
    t: p => p.c === 'cafe'
  },
  { // estudiar / clases
    w: ['estudiar', 'estudio', 'clase', 'salon', 'aula', 'laboratorio', 'facultad', 'tarea', 'profesor', 'docente', 'study', 'class', 'classroom', 'lab', 'teacher'],
    t: p => p.c === 'acad'
  },
  { // biblioteca / silencio
    w: ['biblioteca', 'libro', 'leer', 'lectura', 'silencio', 'silenciosa', 'investigar', 'library', 'book', 'read', 'reading', 'quiet'],
    t: p => p.fl.lib
  },
  { // trámites / oficinas
    w: ['tramite', 'matricula', 'inscripcion', 'certificado', 'oficina', 'admision', 'registro', 'carnet', 'carne', 'carnetizacion', 'rectoria', 'office', 'enrollment', 'certificate', 'admissions', 'paperwork'],
    t: p => p.c === 'admin'
  },
  { // eventos
    w: ['evento', 'conferencia', 'charla', 'grado', 'congreso', 'auditorio', 'event', 'conference', 'talk', 'graduation', 'auditorium'],
    t: p => p.c === 'aud' || p.fl.events
  },
  { // accesibilidad
    w: ['accesible', 'accesibilidad', 'silla de ruedas', 'sillas de ruedas', 'rampa', 'movilidad', 'discapacidad', 'ascensor', 'wheelchair', 'ramp', 'accessible', 'elevator', 'disability'],
    t: p => p.fl.access
  },
  { // zonas verdes / descanso / deporte
    w: ['zona verde', 'zonas verdes', 'verde', 'descanso', 'descansar', 'aire libre', 'deporte', 'cancha', 'futbol', 'recreacion', 'green', 'outdoor', 'sports', 'soccer', 'field'],
    t: p => p.fl.out || p.c === 'free'
  },
  { // salud y bienestar
    w: ['salud', 'enfermeria', 'medico', 'psicologia', 'cultura', 'bienestar', 'health', 'nurse', 'doctor', 'wellbeing'],
    t: p => p.es[0] === 'Bienestar Universitario'
  }
];

// Palabras comunes que se ignoran en frases como "dónde está el baño"
const STOP = ['el', 'la', 'los', 'las', 'un', 'una', 'de', 'del', 'en', 'por', 'para', 'que', 'hay', 'como', 'donde', 'esta', 'estan', 'queda', 'quiero', 'busco', 'the', 'is', 'are', 'where', 'an', 'to', 'of', 'in', 'there', 'find', 'my', 'me'];

// ¿Lo que escribió la persona se relaciona con este concepto? (acepta plurales y frases)
const conceptHit = (q, c) => {
  const toks = q.split(/\s+/).filter(t => t.length >= 2 && !STOP.includes(t));
  return c.w.some(w => q === w || (w.includes(' ') && q.includes(w)) ||
    toks.some(t => t === w || (t.length >= 3 && w.startsWith(t)) || (w.length >= 4 && t.startsWith(w))));
};

// Devuelve los lugares encontrados: s=3 nombre, s=2 descripción, s=1 relacionado por concepto
const searchPlaces = raw => {
  const q = nrm(raw);
  if (q.length < 2) return [];
  const rels = REL.filter(c => conceptHit(q, c));
  const out = [];
  P.forEach(p => {
    const name = nrm(p.es[0]) + ' ' + nrm(p.en[0]);
    const desc = nrm(p.es[1]) + ' ' + nrm(p.en[1]);
    let s = 0;
    if (name.includes(q)) s = 3;
    else if (desc.includes(q)) s = 2;
    else if (rels.some(c => c.t(p))) s = 1;
    if (s) out.push({ p, s });
  });
  return out.sort((a, b) => b.s - a.s || a.p.id - b.p.id);
};

/* Mensaje sobre el mapa cuando la búsqueda, categoría o filtros no dejan ningún lugar */
const noRes = document.createElement('div');
noRes.id = 'nores-banner';
noRes.style.cssText = 'position:absolute;left:960px;top:40px;transform:translateX(-50%);display:none;z-index:14;background:#0C2C47;color:#fff;padding:12px 24px;border-radius:12px;font:600 15px Montserrat,sans-serif;box-shadow:0 6px 18px rgba(12,44,71,.3);pointer-events:none;white-space:nowrap';
stage.appendChild(noRes);
function updateNoRes() {
  const active = qid !== null || !!cat || filters.size > 0;
  const lista = document.getElementById('search-results-list');
  // Si la lista de la barra ya muestra el mensaje, el aviso del mapa se oculta (solo se ve uno)
  const mensajeEnLista = !!lista && lista.style.display === 'block' && !!lista.querySelector('.nores-row');
  noRes.textContent = T[lang].nores;
  noRes.style.display = (active && !mensajeEnLista && !document.querySelector('#pins .pin.show')) ? 'block' : 'none';
}
const paintOriginal = paint;
window.paint = function() { paintOriginal(); updateNoRes(); };

const searchContainer = document.getElementById('search');
let searchResultsList = document.getElementById('search-results-list');

if (searchContainer) {
  // Crear lista de resultados si no existe
  if (!searchResultsList) {
    searchResultsList = document.createElement('div');
    searchResultsList.id = 'search-results-list';
    searchContainer.appendChild(searchResultsList);
  }

  // Crear botón "X" de limpieza si no existe
  let clearSearchBtn = document.getElementById('clear-search-btn');
  if (!clearSearchBtn) {
    clearSearchBtn = document.createElement('button');
    clearSearchBtn.id = 'clear-search-btn';
    clearSearchBtn.innerHTML = '✕';
    clearSearchBtn.type = 'button';
    searchContainer.appendChild(clearSearchBtn);
  }

  const qInput = document.getElementById('q');
  if (qInput) {

    const toggleClearBtn = () => {
      clearSearchBtn.style.display = qInput.value.trim().length > 0 ? 'block' : 'none';
    };

    const hideList = () => { searchResultsList.style.display = 'none'; updateNoRes(); };

    // Dibuja la lista desplegable con los resultados y los relacionados
    const renderList = (res) => {
      const t = T[lang];
      const head = txt => `<div style="padding:8px 14px 4px;font:700 10px Montserrat,sans-serif;letter-spacing:.6px;text-transform:uppercase;color:#BF512C;background:#faf7f6">${txt}</div>`;
      const row = r => `
        <div class="search-item" data-id="${r.p.id}">
          <strong>${r.p[lang][0]}</strong>
          <small>${r.p[lang][1]}</small>
        </div>`;
      if (!res.length) {
        searchResultsList.innerHTML = `<div class="search-item nores-row" style="cursor:default"><strong style="color:#BF512C">${t.nores}</strong></div>`;
      } else {
        const direct = res.filter(r => r.s > 1), related = res.filter(r => r.s === 1);
        searchResultsList.innerHTML =
          (direct.length && related.length ? head(t.dir) : '') + direct.map(row).join('') +
          (related.length ? head(t.rel) : '') + related.map(row).join('');
      }
      searchResultsList.style.display = 'block';
      updateNoRes();

      searchResultsList.querySelectorAll('.search-item[data-id]').forEach(item => {
        item.onclick = (evt) => {
          evt.stopPropagation();
          const id = +item.dataset.id;
          qid = id;
          sel = id;
          qInput.value = P[id][lang][0];
          toggleClearBtn();
          hideList();
          paint();
          mark();
        };
      });
    };

    qInput.addEventListener('input', () => {
      toggleClearBtn();
      const q = nrm(qInput.value);

      if (q.length < 2) {
        hideList();
        searchResultsList.innerHTML = '';
        qid = null;
        paint();
        return;
      }

      const res = searchPlaces(qInput.value);
      // El mapa muestra todos los lugares encontrados (o ninguno, y sale el mensaje)
      qid = res.map(r => r.p.id);
      sel = null;
      cat = null;
      document.querySelectorAll('.cat').forEach(x => x.classList.remove('on'));
      renderList(res);
      paint();
    });

    // Al volver a la barra, se muestran de nuevo las sugerencias
    qInput.addEventListener('focus', () => {
      if (nrm(qInput.value).length >= 2) renderList(searchPlaces(qInput.value));
    });
    qInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') hideList(); });

    // Acción al hacer clic en la "X"
    clearSearchBtn.onclick = (e) => {
      e.stopPropagation();
      qInput.value = '';
      qid = null;
      sel = null;
      toggleClearBtn();
      hideList();
      searchResultsList.innerHTML = '';
      paint();
      mark();
    };

    // Ocultar desplegable al hacer clic fuera
    document.addEventListener('pointerdown', (e) => {
      if (!e.target.closest('#search')) hideList();
    });
  }
}

//Eliminar favoritos directamente al presionar el corazón
if (typeof renderFavs !== 'undefined') {
  window.renderFavs = function() {
    const l = [...fav].map(i => P[i]);
    const fl = $('#fl');
    if (!fl) return;
    
    fl.innerHTML = l.length 
      ? l.map(p => `
        <div class="fc">
          <div class="im"><svg><use href="#imgI"/></svg></div>
          <div>
            <h5>${p[lang][0]}</h5>
            <p>${p[lang][1]}</p>
            <p>$${p.i || info(p)}</p>
            ${stars(p.r, true, p.id)}
            <small>${T[lang].rate}</small>
          </div>
          <svg class="hrt on" data-fav-id="${p.id}" style="cursor:pointer;position:absolute;right:0;top:0;width:22px;height:22px;fill:#BF512C"><use href="#hp"/></svg>
        </div>
      `).join('') 
      : `<div id="empty">${T[lang].empty}</div>`;

    fl.querySelectorAll('.hrt').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = +btn.dataset.favId;
        toggleFav(id);
      };
    });
  };
  renderFavs();
}

//Botones "X" para Filtros y Favoritos
function setupCloseButtons() {
  const fpanel = document.getElementById('fpanel');
  if (fpanel && !document.getElementById('close-flt')) {
    const btnFlt = document.createElement('button');
    btnFlt.className = 'close-btn';
    btnFlt.id = 'close-flt';
    btnFlt.innerHTML = '✕';
    btnFlt.onclick = (e) => {
      e.stopPropagation();
      fpanel.classList.remove('show');
    };
    fpanel.appendChild(btnFlt);
  }

  const btnFavs = document.getElementById('close-favs');
  if (btnFavs) {
    btnFavs.onclick = (e) => {
      e.stopPropagation();
      const favs = document.getElementById('favs');
      if (favs) favs.classList.remove('show');
    };
  }

  const clrBtn = document.getElementById('clr');
  if (clrBtn) {
    const originalClrClick = clrBtn.onclick;
    clrBtn.onclick = function(e) {
      if (typeof originalClrClick === 'function') originalClrClick.call(this, e);
      setTimeout(setupCloseButtons, 50);
    };
  }
}
setupCloseButtons();

//Cerrar panel de filtros al dar clic afuera
addEventListener('pointerdown', (e) => {
  const fpanel = document.getElementById('fpanel');
  if (fpanel && fpanel.classList.contains('show')) {
    if (!e.target.closest('#fpanel') && !e.target.closest('#flt')) {
      fpanel.classList.remove('show');
    }
  }
});