/* ================= Shared data ================= */
const PROFILE = {
  nameAr:'أحمد عبدو', nameEn:'Ahmed Abdou',
  goalAr:'ضخامة', goalEn:'Bulk',
  weightKg:58, heightCm:178, age:19,
  photo:'photo_2026-08-31_00-43-55.png', initials:'Ab',
  challengeDays:30,
  challengeStart:'2026-09-02',
};

/* Local exercise illustrations — all copied into assets/exercises/*.svg
   from the open "workout-guide" library (CC BY-SA 4.0 assets, MIT code).
   Each day's exercises carry an `id` that maps to one of these files via EX_IMAGE. */
const EX_IMAGE = {
  'bench-press':'assets/exercises/bench-press.svg',
  'incline-dumbbell-press':'assets/exercises/incline-dumbbell-press.svg',
  'chest-fly':'assets/exercises/cable-fly.svg',
  'triceps-pushdown':'assets/exercises/tricep-pushdown.svg',
  'overhead-triceps-extension':'assets/exercises/overhead-tricep-extension.svg',
  'lat-pulldown':'assets/exercises/lat-pulldown.svg',
  'seated-row':'assets/exercises/seated-row.svg',
  'one-arm-dumbbell-row':'assets/exercises/one-arm-dumbbell-row.svg',
  'face-pull':'assets/exercises/face-pull.svg',
  'dumbbell-curl':'assets/exercises/bicep-curl.svg',
  'hammer-curl':'assets/exercises/hammer-curl.svg',
  'squat':'assets/exercises/squat.svg',
  'leg-press':'assets/exercises/leg-press.svg',
  'romanian-deadlift':'assets/exercises/romanian-deadlift.svg',
  'leg-curl':'assets/exercises/leg-curl.svg',
  'calf-raises':'assets/exercises/calf-raise.svg',
  'shoulder-press':'assets/exercises/overhead-press.svg',
  'lateral-raise':'assets/exercises/lateral-raise.svg',
  'rear-delt-fly':'assets/exercises/rear-delt-fly.svg',
  'biceps-curl':'assets/exercises/bicep-curl.svg',
  'cable-row':'assets/exercises/single-arm-cable-row.svg',
  'biceps-triceps':'assets/exercises/cable-curl.svg',
};

const DAYS = [
  { key:'chest', ar:'اليوم ١', en:'Day 1', titleAr:'صدر وترايسبس', titleEn:'Chest & Triceps',
    ex:[
      {id:'bench-press', en:'Bench Press', ar:'بنش بريس', sets:'4×8–10'},
      {id:'incline-dumbbell-press', en:'Incline Dumbbell Press', ar:'انكلين دمبل بريس', sets:'3×8–12'},
      {id:'chest-fly', en:'Chest Fly', ar:'تشيست فلاي', sets:'3×10–15'},
      {id:'triceps-pushdown', en:'Triceps Pushdown', ar:'ترايسبس بوش داون', sets:'3×10–12'},
      {id:'overhead-triceps-extension', en:'Overhead Triceps Extension', ar:'اوفرهيد ترايسبس اكستنشن', sets:'2×10–12'},
    ]},
  { key:'back', ar:'اليوم ٢', en:'Day 2', titleAr:'ظهر وبايسبس', titleEn:'Back & Biceps',
    ex:[
      {id:'lat-pulldown', en:'Lat Pulldown', ar:'لات بولداون', sets:'4×8–12'},
      {id:'seated-row', en:'Seated Row', ar:'سيتد رو', sets:'3×8–12'},
      {id:'one-arm-dumbbell-row', en:'One Arm Dumbbell Row', ar:'وان آرم دمبل رو', sets:'3×10'},
      {id:'face-pull', en:'Face Pull', ar:'فيس بول', sets:'3×12–15'},
      {id:'dumbbell-curl', en:'Dumbbell Curl', ar:'دمبل كيرل', sets:'3×10–12'},
      {id:'hammer-curl', en:'Hammer Curl', ar:'هامر كيرل', sets:'2×10–12'},
    ]},
  { key:'legs', ar:'اليوم ٣', en:'Day 3', titleAr:'أرجل', titleEn:'Legs',
    ex:[
      {id:'squat', en:'Squat', ar:'سكوات', sets:'4×8–10'},
      {id:'leg-press', en:'Leg Press', ar:'ليج بريس', sets:'3×10–12'},
      {id:'romanian-deadlift', en:'Romanian Deadlift', ar:'رومانيان ديدليفت', sets:'3×8–10'},
      {id:'leg-curl', en:'Leg Curl', ar:'ليج كيرل', sets:'3×10–12'},
      {id:'calf-raises', en:'Calf Raises', ar:'كاف رايز', sets:'4×12–15'},
    ]},
  { key:'shoulders', ar:'اليوم ٤', en:'Day 4', titleAr:'كتف ودراع', titleEn:'Shoulders + Arms',
    ex:[
      {id:'shoulder-press', en:'Shoulder Press', ar:'شولدر بريس', sets:'4×8–10'},
      {id:'lateral-raise', en:'Lateral Raise', ar:'لاترال رايز', sets:'4×12–15'},
      {id:'rear-delt-fly', en:'Rear Delt Fly', ar:'ريير دلت فلاي', sets:'3×12–15'},
      {id:'biceps-curl', en:'Biceps Curl', ar:'بايسيبس كيرل', sets:'3×10–12'},
      {id:'triceps-pushdown', en:'Triceps Pushdown', ar:'ترايسبس بوش داون', sets:'3×10–12'},
    ]},
  { key:'upper', ar:'اليوم ٥', en:'Day 5', titleAr:'جزء علوي', titleEn:'Upper Body',
    ex:[
      {id:'bench-press', en:'Bench Press', ar:'بنش بريس', sets:'3×8–10'},
      {id:'lat-pulldown', en:'Lat Pulldown', ar:'لات بولداون', sets:'3×8–12'},
      {id:'incline-dumbbell-press', en:'Incline Dumbbell Press', ar:'انكلين دمبل بريس', sets:'3×10'},
      {id:'cable-row', en:'Cable Row', ar:'كيبل رو', sets:'3×10'},
      {id:'lateral-raise', en:'Lateral Raise', ar:'لاترال رايز', sets:'3×15'},
      {id:'biceps-triceps', en:'Biceps + Triceps', ar:'بايسيبس + ترايسبس', sets:'2×12'},
    ]},
];

// Day 6 rest / active recovery
const REST_DAY = {
  key:'restcardio', ar:'راحة', en:'Rest',
  titleAr:'راحة أو مشي خفيف', titleEn:'Rest or Light Walk',
  ex:[
    {id:'rest-walk', en:'Light Walk', ar:'مشي خفيف', sets:'20 دقيقة'},
    {id:'rest-fuel', en:'Eat & Sleep Well', ar:'اكل كويس ونام كويس', sets:'—'},
  ],
};

function getDayInfo(key){
  if(key === 'restcardio') return REST_DAY;
  return DAYS.find(d=>d.key === key) || DAYS[0];
}

/* Manually-selected "which split day is today" — the client sets this himself
   instead of it being computed from the calendar date. */
const CURRENT_DAY_KEY = 'ak_current_day';
function getCurrentDayKey(){
  return localStorage.getItem(CURRENT_DAY_KEY) || DAYS[0].key;
}
function setCurrentDayKey(key){
  localStorage.setItem(CURRENT_DAY_KEY, key);
}

function renderDayPicker(mountId, onChange){
  const mount = document.getElementById(mountId);
  if(!mount) return;
  const active = getCurrentDayKey();
  const all = [...DAYS, REST_DAY];
  mount.innerHTML = all.map((d,i)=>`
    <button type="button" class="day-pill ${d.key === active ? 'active' : ''}" data-key="${d.key}">
      <span>${d.key === 'restcardio' ? '+' : (i+1)}</span>
    </button>
  `).join('');
  mount.querySelectorAll('.day-pill').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setCurrentDayKey(btn.dataset.key);
      mount.querySelectorAll('.day-pill').forEach(b=>b.classList.toggle('active', b===btn));
      if(typeof onChange === 'function') onChange(btn.dataset.key);
    });
  });
}

const MEALS = [
  { key:'breakfast', ar:'الإفطار', en:'Breakfast',
    options:[
      {ar:'شوفان مكثف — كوب شوفان كامل + موز + عسل + زبدة فول سوداني', en:'Mass Oats — 1 full cup oats + banana + honey + peanut butter', dAr:'سعرات عالية تفتح اليوم للضخامة', dEn:'High calories to kickstart the bulk'},
      {ar:'شوفان مع ٤ بيضات ولبن كامل', en:'Oats + 4 eggs + full milk', dAr:'كارب وبروتين ودهون مع بعض', dEn:'Carbs, protein and fats together'},
      {ar:'أومليت بجبنة وجمبري + ٣ توست أسمر', en:'Cheese Omelette + 3 brown toasts', dAr:'كل شيء كل ساندوتش زيادة', dEn:'Eat big to grow big'},
      {ar:'زبادي كامل + جرانولا + موز + عسل', en:'Full Greek Yogurt + Granola + Banana + Honey', dAr:'مش واجب يبقى محلي', dEn:'Does not have to be sweet-free'},
      {ar:'فول مدمس + بيض + خبز بلدي + زيت زيتون', en:'Fava Beans + Eggs + Baladi + Olive Oil', dAr:'بروتين نباتي مع دهون صحية', dEn:'Plant protein with healthy fats'},
    ]},
  { key:'snack1', ar:'سناكس قبل التدريب', en:'Pre-Training Snack',
    options:[
      {ar:'ساندوتش عسل أو مربى + كوب لبن', en:'Honey/Jam Sandwich + Glass of Milk', dAr:'كارب بسيط للطاقة', dEn:'Simple carbs for energy'},
      {ar:'تمر بالزبدة الفول السوداني', en:'Dates with Peanut Butter', dAr:'سعرات مركزة', dEn:'Dense calories'},
      {ar:'شوفان بالحليب + تمر', en:'Oats with Milk + Dates', dAr:'كارب طويل المدى', dEn:'Slow-release carbs'},
      {ar:'توست بالشيكولاتة/النوتيلا + موز', en:'Toast with Nutella + Banana', dAr:'كل شيء سعرات', dEn:'Pure calories'},
      {ar:'بلح + لبن كامل', en:'Dates + Full Milk', dAr:'سناكس عربي كلاسيكي', dEn:'A classic Arabic snack'},
    ]},
  { key:'lunch', ar:'الغداء', en:'Lunch',
    options:[
      {ar:'فرخة مشوية كاملة + رز + خضار + رغيف عيش', en:'Whole Grilled Chicken + Rice + Veggies + Bread', dAr:'بروتين وكارب عالي', dEn:'Big protein and carbs'},
      {ar:'لحمة مفرومة + مكرونة + خبز', en:'Minced Beef + Pasta + Bread', dAr:'كرب وبروتين لبناء العضل', dEn:'Carbs and protein to build muscle'},
      {ar:'سمك مشوي + بطاطا + أرز', en:'Grilled Fish + Potatoes + Rice', dAr:'بروتين كامل وكارب', dEn:'Complete protein and carbs'},
      {ar:'كبدة اسكندراني + أرز + عيش', en:'Alexandria-style Liver + Rice + Bread', dAr:'حديد وبروتين عالي', dEn:'Iron-rich and high protein'},
      {ar:'مكرونة بصلصة اللحمة + جبنة رومي', en:'Meat Sauce Pasta + Shredded Cheese', dAr:'السعرات عندك مش وزنك', dEn:'Calories are your friend now, not your weight'},
    ]},
  { key:'snack2', ar:'سناكس بعد التدريب', en:'Post-Training Snack',
    options:[
      {ar:'شيك بروتين بالشوفان والموز وزبدة الفول السوداني', en:'Protein Shake with Oats, Banana & Peanut Butter', dAr:'أقوى شيك للضخامة', dEn:'The ultimate mass shake'},
      {ar:'روب/عيران مع تمر', en:'Milk/Yogurt Drink + Dates', dAr:'تعويض سريع للطاقة', dEn:'Quick energy replenishment'},
      {ar:'ساندوتش تونة + جبنة + عيش', en:'Tuna Sandwich + Cheese + Bread', dAr:'بروتين وإحماض دهنية', dEn:'Protein and oils'},
      {ar:'زبادي كامل + جوز هند + عسل', en:'Full Yogurt + Coconut + Honey', dAr:'دهون صحية وسعرات', dEn:'Healthy fats and calories'},
      {ar:'بيض مسلوق + جبنة + توست أسمر', en:'Boiled Eggs + Cheese + Brown Toast', dAr:'وجبة سريعة وعملية', dEn:'Quick and practical'},
    ]},
  { key:'dinner', ar:'العشاء', en:'Dinner',
    options:[
      {ar:'فرخة + أرز + عيش بالجبنة', en:'Chicken + Rice + Cheese Bread', dAr:'وجبة كاملة قبل النوم', dEn:'A full dinner before bed'},
      {ar:'بيض مقلية + بطاطا محمرة + خبز', en:'Fried Eggs + Roasted Potatoes + Bread', dAr:'شرح الدهون والكارب يزيد وزنك', dEn:'Fats and carbs put on weight'},
      {ar:'لحمة أو فرخة بالخضار + مكرونة', en:'Meat/Chicken + Veggies + Pasta', dAr:'بروتين مطهي جيداً', dEn:'Well-cooked protein'},
      {ar:'شوربة عدس + فرخة + خبز', en:'Lentil Soup + Chicken + Bread', dAr:'حمص وكرب ومشبع', dEn:'Cozy and filling'},
      {ar:'جبنة + زيتون + عسل + عيش بلدي + شاي باللبن', en:'Cheese + Olives + Honey + Baladi Bread + Milk Tea', dAr:'عشا عربي بس مكثف', dEn:'Arabic dinner, calorie-dense'},
      {ar:'بروتين شيك + شوفان قبل النوم', en:'Protein Shake + Oats Before Bed', dAr:'يفيد النمو أثناء النوم', dEn:'Fuels growth overnight'},
    ]},
];

const MOTIVATION = {
  serious: [
    {ar:'البلد ٥٨ كجم مش بيتنافس، بيتفضل يخلص يومه عادي. إنت مش عاوز كده.', en:'A 58kg guy is not competing, he just gets through his day. You do not want that.'},
    {ar:'الضخامة بتتبني في المطبخ — كل يوم بتاكل كتير، بتتخن، والجيم يحولها لعضل.', en:'Mass is built in the kitchen — eat a lot every day, gain weight, and the gym turns it into muscle.'},
    {ar:'٣٠ يوم بس. مش سنة. تلاتين يوم التزام وأنت ناقص فقرة واحدة.', en:'Just 30 days. Not a year. Thirty days of commitment and you are one section short.'},
    {ar:'كل أكلية زيادة نهار الده بتبني عضلة بكرة.', en:'Every extra meal today builds tomorrow\'s muscle.'},
    {ar:'الوزن مش عدو في مرحلة الضخامة — الوزن هو الهدف نفسه.', en:'Weight is not your enemy on a bulk — weight IS the goal.'},
    {ar:'مش عليك تأخّر عن نفسك، عليك تفوق على نفسك اللي امبارح.', en:'Do not lag behind yourself — beat your own yesterday.'},
    {ar:'الشوفان واللبن والعسل والموز — دول خامات البناء، استخدمهم كل يوم.', en:'Oats, milk, honey and banana — these are the building materials, use them daily.'},
    {ar:'اليوم اللي مفيش فيه حماس هو أهم يوم تتمرن فيه.', en:'The day you feel no motivation is the day that matters most.'},
    {ar:'بعد ٣٠ يوم هتبص في المرايا وتحس إنك واحد تاني.', en:'After 30 days you will look in the mirror and feel like another person.'},
    {ar:'النتيجة مش في أسبوع — النتيجة في الاستمرار شهر ورا شهر.', en:'Results are not in one week — results come from staying at it month after month.'},
    {ar:'إنت بتتمرن النهارده عشان الصورة اللي في دماغك بعد ٣٠ يوم.', en:'You train today for the version of you 30 days from now.'},
    {ar:'الانضباط هو اللي بيفرق لما الحماس يخف.', en:'Discipline is what carries you when motivation fades.'},
  ],
  fun: [
    {ar:'٥٨ كجم بشخبط، إنت مش بتتخن ده بتركن أفلام.', en:'Cavering around at 58kg — you are not gaining weight, you are just rearranging the furniture.'},
    {ar:'مرحلة الـ bulk، يعني كل ما الأكل ناقص تفتح الدرج وتاكله.', en:'Bulk phase means whenever food runs low, you check the fridge and finish it.'},
    {ar:'الرفوف لما بتلقط طبقك الأول، بتقول لك: "إنت لسه جوعان؟"', en:'When the waiters see you reach for plate number two they ask "still hungry?"'},
    {ar:'الشوفان بقى صاحبك الودود، مش عدوك من أيام التنشيف.', en:'Oats became your friendly companion, not your enemy from the cutting days.'},
    {ar:'إنت مش بتاكل زيادة، ده بتبني مخزون عضلي.', en:'You are not overeating, you are building a muscle reserve.'},
    {ar:'لو الناس بتشوفك بتلقط، الده مش عيب، الده اسمه تضخيم ناجح.', en:'If people watch you eat a lot, that is not a sin, that is a successful bulk.'},
    {ar:'المرآة في الجيم بتجهز لك مفاجأة كل أسبوع.', en:'The gym mirror prepares a surprise for you every week.'},
    {ar:'تمرين النهارده + أكل النهارده = عضل بكرة ببلاش.', en:'Today\'s workout + today\'s food = free muscle tomorrow.'},
    {ar:'مفيش حد بيشوف الأوتار ومرتاح، إنت بتديها فرصة تظهر.', en:'Nobody looks at the veins and feels satisfied, you are giving them a chance to show.'},
    {ar:'٥٨ كجم النهارده، ٦٥ بعد شهر. الرسالة وصلت؟', en:'58kg today, 65kg in a month. Got the message?'},
    {ar:'لو حد سألك ليه بتاكل كتير، قوله: "بتبني جسم جديد، سيبك مني".', en:'If someone asks why you eat so much, say "building a new body, leave me alone".'},
    {ar:'كل صدر فرخة مشوي هو خطوة لـ ٧٠ كجم من العضل الصافي.', en:'Every grilled chicken breast is a step toward 70kg of pure muscle.'},
  ]
};

/* ================= Language ================= */
function setLang(lang){
  const body = document.body;
  if(lang === 'en'){
    body.classList.remove('lang-ar'); body.classList.add('lang-en');
    body.setAttribute('dir','ltr'); document.documentElement.setAttribute('lang','en');
  } else {
    body.classList.remove('lang-en'); body.classList.add('lang-ar');
    body.setAttribute('dir','rtl'); document.documentElement.setAttribute('lang','ar');
  }
  localStorage.setItem('ak_lang', lang);
  document.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  if(typeof onLangChange === 'function') onLangChange(lang);
}

function currentLang(){
  return localStorage.getItem('ak_lang') || 'ar';
}

/* ================= Icons ================= */
const ICONS = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  workout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5l11 11"/><path d="M4 8l2.5-2.5"/><path d="M17.5 19.5L20 17"/><rect x="2.5" y="10.5" width="4" height="4" rx="1" transform="rotate(-45 4.5 12.5)"/><rect x="17.5" y="10.5" width="4" height="4" rx="1" transform="rotate(-45 19.5 12.5)"/></svg>',
  diet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7a2 2 0 0 0 2 2v9"/><path d="M7 3v7"/><path d="M10 3v7"/><path d="M17 3c-1.5 0-3 1.5-3 4v4h3v10"/></svg>',
  motivation:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h13l-3 4 3 4H5"/></svg>',
  log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>',
  weight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="3" height="6" rx="1"/><rect x="19" y="9" width="3" height="6" rx="1"/><rect x="6" y="7" width="3" height="10" rx="1"/><rect x="15" y="7" width="3" height="10" rx="1"/><path d="M9 12h6"/></svg>',
  ruler:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-35 12 12)"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/></svg>',
};

/* ================= Header / Nav ================= */
const NAV_ITEMS = [
  { key:'home', href:'index.html', icon:'home', ar:'الرئيسية', en:'Home' },
  { key:'workout', href:'workout.html', icon:'workout', ar:'التدريب', en:'Workout' },
  { key:'diet', href:'diet.html', icon:'diet', ar:'التغذية', en:'Diet' },
  { key:'log', href:'log.html', icon:'log', ar:'السجل', en:'Log' },
];

function renderHeader(activeKey, opts){
  opts = opts || {};
  const mount = document.getElementById('appHeader');
  if(!mount) return;
  mount.innerHTML = `
    <div class="row">
      <div class="identity">
        <div class="avatar">
          <span class="avatar-fallback">Ab</span>
          <img src="photo_2026-08-31_00-43-55.png" alt="Ahmed Abdou" onerror="this.remove()">
        </div>
        <div class="greet">
          <span class="hello i18n-ar">أهلاً بيك تاني</span><span class="hello i18n-en">Welcome back</span>
          <span class="name i18n-ar">أحمد عبدو</span><span class="name i18n-en">Ahmed Abdou</span>
        </div>
      </div>
      <div class="lang-toggle">
        <button data-lang="ar">AR</button>
        <button data-lang="en">EN</button>
      </div>
    </div>
    ${opts.title ? `
    <div class="page-title">
      <div class="eyebrow">${opts.eyebrow || ''}</div>
      <h1>${opts.title}</h1>
      ${opts.desc ? `<p>${opts.desc}</p>` : ''}
    </div>` : ''}
  `;
  mount.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.addEventListener('click', ()=>setLang(b.dataset.lang));
  });
}

function renderNav(activeKey){
  const mount = document.getElementById('appNav');
  if(!mount) return;
  mount.innerHTML = `<div class="bar">
    ${NAV_ITEMS.map(item => `
      <a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">
        ${ICONS[item.icon]}
        <span class="i18n-ar">${item.ar}</span><span class="i18n-en">${item.en}</span>
      </a>
    `).join('')}
  </div>`;
}

/* ================= Storage helpers ================= */
const STORAGE_KEY = 'ak_daily_logs';
function getLogs(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch(e){ return []; }
}
function saveLogs(logs){ localStorage.setItem(STORAGE_KEY, JSON.stringify(logs)); }

/* ================= Workout records =================
   Dedicated store for "logged a training day". Each entry:
   { date:'YYYY-MM-DD', day:1, completed:true }
   One record per calendar date — duplicate clicks do NOT create duplicates. */
const WORKOUT_KEY = 'ak_workout_records';
function getWorkoutRecords(){
  try{ return JSON.parse(localStorage.getItem(WORKOUT_KEY)) || []; }
  catch(e){ return []; }
}
function saveWorkoutRecords(records){ localStorage.setItem(WORKOUT_KEY, JSON.stringify(records)); }

function isWorkoutRecorded(dateStr){
  return getWorkoutRecords().some(r => r.date === dateStr && r.completed);
}

/* Record today's workout for the given split day index (1-based).
   If a record already exists for that date, updates day instead of duplicating. */
function logWorkout(dateStr, dayNumber){
  if(!dayNumber) dayNumber = null;
  const records = getWorkoutRecords().filter(r => r.date !== dateStr);
  records.push({ date: dateStr, day: dayNumber, completed: true });
  saveWorkoutRecords(records);
  return records;
}

function uniqueDatesFrom(startDate, endDate){
  return getWorkoutRecords()
    .filter(r => r.completed && r.date >= startDate && r.date <= endDate)
    .map(r => r.date);
}

/* Unique workout dates within the current calendar week (Sun..Sat). */
function countWorkoutWeek(){
  const now = new Date();
  const dow = now.getDay();                      // 0 = Sunday
  const start = new Date(now); start.setDate(now.getDate() - dow); start.setHours(0,0,0,0);
  const end = new Date(start); end.setDate(start.getDate() + 6); end.setHours(23,59,59,999);
  const s = start.toISOString().slice(0,10);
  const e = end.toISOString().slice(0,10);
  return new Set(uniqueDatesFrom(s, e)).size;
}

/* Unique workout dates from 'challengeStart' through challengeDays. */
function countWorkoutChallenge(){
  const start = new Date(PROFILE.challengeStart).getTime();
  const end = start + PROFILE.challengeDays*24*60*60*1000 - 1;
  const s = new Date(start).toISOString().slice(0,10);
  const e = new Date(end).toISOString().slice(0,10);
  return new Set(uniqueDatesFrom(s, e)).size;
}

/* ================= Init (runs on every page) ================= */
document.addEventListener('DOMContentLoaded', ()=>{
  setLang(currentLang());
});