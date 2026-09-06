/* ================= Shared data ================= */
const PROFILE = {
  nameAr:'أحمد كريم', nameEn:'Ahmed Karim',
  goalAr:'تنشيف', goalEn:'Cut',
  weightKg:57, heightCm:175, age:19,
  photo:'11bb9469-2785-4720-9bc9-7e0a20236862.jpng', initials:'Ak',
  challengeDays:30,
  challengeStart:'2026-09-06',
};

/* Local exercise illustrations — all copied into assets/exercises/*.svg
   from the open "workout-guide" library (CC BY-SA 4.0 assets, MIT code).
   Each day's exercises carry an `id` that maps to one of these files via EX_IMAGE. */
const EX_IMAGE = {
  'bench-press':'assets/exercises/bench-press.svg',
  'incline-dumbbell-press':'assets/exercises/incline-dumbbell-press.svg',
  'incline-barbell-press':'assets/exercises/bench-press.svg',
  'dumbbell-bench-press':'assets/exercises/bench-press.svg',
  'machine-chest-press':'assets/exercises/bench-press.svg',
  'chest-fly':'assets/exercises/cable-fly.svg',
  'cable-fly':'assets/exercises/cable-fly.svg',
  'pec-deck':'assets/exercises/cable-fly.svg',
  'chest-dips':'assets/exercises/tricep-pushdown.svg',
  'close-grip-bench':'assets/exercises/bench-press.svg',
  'triceps-pushdown':'assets/exercises/tricep-pushdown.svg',
  'overhead-triceps-extension':'assets/exercises/overhead-tricep-extension.svg',
  'skull-crushers':'assets/exercises/overhead-tricep-extension.svg',
  'rope-pushdown':'assets/exercises/tricep-pushdown.svg',
  'lat-pulldown':'assets/exercises/lat-pulldown.svg',
  'single-arm-lat-pulldown':'assets/exercises/lat-pulldown.svg',
  'pull-up':'assets/exercises/lat-pulldown.svg',
  'pull-ups':'assets/exercises/lat-pulldown.svg',
  'chest-supported-row':'assets/exercises/seated-row.svg',
  'seated-cable-row':'assets/exercises/seated-row.svg',
  'barbell-row':'assets/exercises/seated-row.svg',
  'straight-arm-pulldown':'assets/exercises/lat-pulldown.svg',
  't-bar-row':'assets/exercises/seated-row.svg',
  'one-arm-cable-row':'assets/exercises/single-arm-cable-row.svg',
  'pullover-machine':'assets/exercises/lat-pulldown.svg',
  'face-pull':'assets/exercises/face-pull.svg',
  'shoulder-press':'assets/exercises/overhead-press.svg',
  'dumbbell-shoulder-press':'assets/exercises/overhead-press.svg',
  'machine-shoulder-press':'assets/exercises/overhead-press.svg',
  'dumbbell-lateral-raise':'assets/exercises/lateral-raise.svg',
  'cable-lateral-raise':'assets/exercises/lateral-raise.svg',
  'lateral-raise':'assets/exercises/lateral-raise.svg',
  'reverse-pec-deck':'assets/exercises/rear-delt-fly.svg',
  'rear-delt-fly':'assets/exercises/rear-delt-fly.svg',
  'incline-dumbbell-curl':'assets/exercises/bicep-curl.svg',
  'dumbbell-curl':'assets/exercises/bicep-curl.svg',
  'barbell-curl':'assets/exercises/bicep-curl.svg',
  'ez-bar-curl':'assets/exercises/bicep-curl.svg',
  'preacher-curl':'assets/exercises/bicep-curl.svg',
  'cable-curl':'assets/exercises/cable-curl.svg',
  'biceps-curl':'assets/exercises/bicep-curl.svg',
  'hammer-curl':'assets/exercises/hammer-curl.svg',
  'squat':'assets/exercises/squat.svg',
  'hack-squat':'assets/exercises/squat.svg',
  'machine-squat':'assets/exercises/squat.svg',
  'bulgarian-split-squat':'assets/exercises/squat.svg',
  'leg-press':'assets/exercises/leg-press.svg',
  'leg-extension':'assets/exercises/leg-curl.svg',
  'romanian-deadlift':'assets/exercises/romanian-deadlift.svg',
  'leg-curl':'assets/exercises/leg-curl.svg',
  'seated-leg-curl':'assets/exercises/leg-curl.svg',
  'standing-calf-raise':'assets/exercises/calf-raise.svg',
  'seated-calf-raise':'assets/exercises/calf-raise.svg',
  'calf-raise':'assets/exercises/calf-raise.svg',
  'calf-raises':'assets/exercises/calf-raise.svg',
};

const DAYS = [
  { key:'push-a', ar:'اليوم ١', en:'Day 1', titleAr:'Push A — صدر + كتف + تراي', titleEn:'Push A — Chest + Shoulders + Triceps',
    ex:[
      {id:'bench-press', en:'Bench Press', ar:'بنش بريس', sets:'4×6–8'},
      {id:'incline-dumbbell-press', en:'Incline Dumbbell Press', ar:'انكلين دمبل بريس', sets:'3×8–10'},
      {id:'cable-fly', en:'Cable Fly', ar:'كيبل فلاي', sets:'3×12–15'},
      {id:'shoulder-press', en:'Shoulder Press', ar:'شولدر بريس', sets:'3×8–10'},
      {id:'lateral-raise', en:'Lateral Raise', ar:'لاترال رايز', sets:'4×12–15'},
      {id:'triceps-pushdown', en:'Triceps Pushdown', ar:'تراي بوش داون', sets:'3×10–12'},
      {id:'overhead-triceps-extension', en:'Overhead Triceps Extension', ar:'اوفرهيد تراي اكستنشن', sets:'2×12–15'},
      {id:'cardio-brisk', en:'Cardio — Brisk Walk', ar:'كارديو — مشي سريع', sets:'20 دقيقة'},
    ]},
  { key:'pull-a', ar:'اليوم ٢', en:'Day 2', titleAr:'Pull A — ظهر + باي', titleEn:'Pull A — Back + Biceps',
    ex:[
      {id:'lat-pulldown', en:'Lat Pulldown', ar:'لات بولداون', sets:'4×8–10'},
      {id:'barbell-row', en:'Barbell Row', ar:'باربل رو', sets:'4×6–8'},
      {id:'seated-cable-row', en:'Seated Cable Row', ar:'سيتد كيبل رو', sets:'3×10–12'},
      {id:'face-pull', en:'Face Pull', ar:'فيس بول', sets:'3×12–15'},
      {id:'dumbbell-curl', en:'Dumbbell Curl', ar:'دمبل كيرل', sets:'3×10–12'},
      {id:'hammer-curl', en:'Hammer Curl', ar:'هامر كيرل', sets:'3×10–12'},
      {id:'cardio-brisk', en:'Cardio — Brisk Walk', ar:'كارديو — مشي سريع', sets:'20–25 دقيقة'},
    ]},
  { key:'legs-a', ar:'اليوم ٣', en:'Day 3', titleAr:'Legs A — رجل', titleEn:'Legs A',
    ex:[
      {id:'squat', en:'Squat', ar:'سكوات', sets:'4×6–8'},
      {id:'romanian-deadlift', en:'Romanian Deadlift', ar:'رومانيان ديدليفت', sets:'3×8–10'},
      {id:'leg-press', en:'Leg Press', ar:'ليج بريس', sets:'3×10–12'},
      {id:'leg-curl', en:'Leg Curl', ar:'ليج كيرل', sets:'3×10–12'},
      {id:'leg-extension', en:'Leg Extension', ar:'ليج اكستنشن', sets:'3×12–15'},
      {id:'calf-raise', en:'Calf Raise', ar:'كاف رايز', sets:'4×12–15'},
      {id:'hanging-leg-raise', en:'Hanging Leg Raise', ar:'هانجينج ليج رايز', sets:'3×10–15'},
      {id:'cardio-light', en:'Cardio — Light', ar:'كارديو — خفيف', sets:'15–20 دقيقة'},
    ]},
  { key:'push-b', ar:'اليوم ٤', en:'Day 4', titleAr:'Push B — صدر + كتف + تراي', titleEn:'Push B — Chest + Shoulders + Triceps',
    ex:[
      {id:'incline-barbell-press', en:'Incline Barbell Press', ar:'انكلين باربل بريس', sets:'4×6–8'},
      {id:'dumbbell-bench-press', en:'Dumbbell Bench Press', ar:'دمبل بنش بريس', sets:'3×8–10'},
      {id:'pec-deck', en:'Pec Deck', ar:'بيك ديك', sets:'3×12–15'},
      {id:'dumbbell-shoulder-press', en:'Dumbbell Shoulder Press', ar:'دمبل شولدر بريس', sets:'3×8–10'},
      {id:'cable-lateral-raise', en:'Cable Lateral Raise', ar:'كيبل لاترال رايز', sets:'4×12–15'},
      {id:'skull-crushers', en:'Skull Crushers', ar:'سكال كرشرز', sets:'3×10–12'},
      {id:'rope-pushdown', en:'Rope Pushdown', ar:'روپ بوش داون', sets:'3×12–15'},
      {id:'cardio-brisk', en:'Cardio — Brisk Walk', ar:'كارديو — مشي سريع', sets:'20 دقيقة'},
    ]},
  { key:'pull-b', ar:'اليوم ٥', en:'Day 5', titleAr:'Pull B — ظهر + باي', titleEn:'Pull B — Back + Biceps',
    ex:[
      {id:'pull-ups', en:'Pull-Ups / Assisted', ar:'بول ابس / مساعد', sets:'4×6–10'},
      {id:'chest-supported-row', en:'Chest Supported Row', ar:'تشيست سبورتد رو', sets:'4×8–10'},
      {id:'single-arm-lat-pulldown', en:'Single Arm Lat Pulldown', ar:'وان آرم لات بولداون', sets:'3×10–12'},
      {id:'reverse-pec-deck', en:'Reverse Pec Deck', ar:'ريفيرس بيك ديك', sets:'3×12–15'},
      {id:'barbell-curl', en:'Barbell Curl', ar:'باربل كيرل', sets:'3×8–10'},
      {id:'incline-dumbbell-curl', en:'Incline Dumbbell Curl', ar:'انكلين دمبل كيرل', sets:'3×10–12'},
      {id:'cardio-brisk', en:'Cardio — Brisk Walk', ar:'كارديو — مشي سريع', sets:'20–25 دقيقة'},
    ]},
  { key:'legs-b', ar:'اليوم ٦', en:'Day 6', titleAr:'Legs B — رجل', titleEn:'Legs B',
    ex:[
      {id:'hack-squat', en:'Hack Squat', ar:'هاك سكوات', sets:'4×8–10'},
      {id:'romanian-deadlift', en:'Romanian Deadlift', ar:'رومانيان ديدليفت', sets:'3×8–10'},
      {id:'bulgarian-split-squat', en:'Bulgarian Split Squat', ar:'بلغاري سبليت سكوات', sets:'3×10 لكل رجل'},
      {id:'leg-press', en:'Leg Press', ar:'ليج بريس', sets:'3×10–12'},
      {id:'leg-curl', en:'Leg Curl', ar:'ليج كيرل', sets:'3×12'},
      {id:'calf-raise', en:'Calf Raise', ar:'كاف رايز', sets:'4×12–15'},
      {id:'cable-crunch', en:'Cable Crunch', ar:'كيبل كرانش', sets:'3×12–15'},
      {id:'cardio-light', en:'Cardio — Light', ar:'كارديو — خفيف', sets:'15–20 دقيقة'},
    ]},
];

// Day 7 rest / recovery
const REST_DAY = {
  key:'restcardio', ar:'راحة', en:'Rest',
  titleAr:'راحة / استشفاء', titleEn:'Rest / Recovery',
  ex:[
    {id:'rest-walk', en:'Light Walk', ar:'مشي خفيف', sets:'20 دقيقة'},
    {id:'rest-fuel', en:'Eat Well & Sleep', ar:'اكل كويس ونام كويس', sets:'—'},
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
      {ar:'بياض ٤ بيضات أومليت + خضار + توست أسمر', en:'4-Egg-White Omelette + Veggies + Brown Toast', dAr:'بروتين عالي ودهون قليلة', dEn:'High protein, low fat'},
      {ar:'شوفان قليل مع لبن خالي الدسم + سكوب بروتين واي', en:'Small Oats with Skim Milk + Whey Scoop', dAr:'كارب متحكم فيه يفتح النهار', dEn:'Controlled carbs to start the day'},
      {ar:'زبادي يوناني قليل الدسم + توت + ملعقة شوفان', en:'Low-Fat Greek Yogurt + Berries + Spoon of Oats', dAr:'بروتين وسعرات معقولة', dEn:'Protein with reasonable calories'},
      {ar:'جبنة قريش + خيار وطماطم + رغيف أسمر صغير', en:'Cottage Cheese + Cucumber/Tomato + Small Brown Bread', dAr:'مشبع وبروتين عالي وسعرات قليلة', dEn:'Filling, high protein, low calories'},
      {ar:'فول بدون زيت + بيضة + سلطة خضرا', en:'Beans (no oil) + 1 Egg + Green Salad', dAr:'بروتين نباتي بدون سعرات زيادة', dEn:'Plant protein without extra calories'},
    ]},
  { key:'snack1', ar:'سناك قبل التمرين', en:'Pre-Training Snack',
    options:[
      {ar:'موزة واحدة + قهوة سودا بدون سكر', en:'One Banana + Black Coffee (no sugar)', dAr:'طاقة كافية بدون إفراط', dEn:'Enough energy, no excess'},
      {ar:'تمرتين + كوب مية', en:'Two Dates + Glass of Water', dAr:'سكر طبيعي سريع قبل التمرين', dEn:'Quick natural energy pre-workout'},
      {ar:'توست أسمر صغير بملعقة زبدة فول سوداني', en:'Small Brown Toast + 1 Spoon Peanut Butter', dAr:'طاقة ثابتة من غير زيادة', dEn:'Steady energy, no surplus'},
      {ar:'شوفان قليل بالحليب خالي الدسم', en:'Small Oats with Skim Milk', dAr:'كارب بطيء يفضل معاك طول التمرين', dEn:'Slow carbs that last the workout'},
    ]},
  { key:'lunch', ar:'الغداء', en:'Lunch',
    options:[
      {ar:'صدر فراخ مشوي + رز بني قليل + سلطة خضرا', en:'Grilled Chicken Breast + Small Brown Rice + Green Salad', dAr:'الوجبة الأساسية في التنشيف', dEn:'The cornerstone of a cut'},
      {ar:'سمك مشوي + خضار سوتيه + بطاطس مسلوقة قليلة', en:'Grilled Fish + Sautéed Veggies + Small Potatoes', dAr:'بروتين كامل بدون دهون', dEn:'Lean complete protein'},
      {ar:'لحمة بقري قليلة الدهن + نص كوب مكرونة قمح كامل + سلطة', en:'Lean Beef + Half Cup Whole-Wheat Pasta + Salad', dAr:'حديد وبروتين والكارب محسوب', dEn:'Iron, protein, measured carbs'},
      {ar:'تونة بالمايه + طبق خضار + توست أسمر', en:'Tuna (in water) + Veggie Bowl + Brown Toast', dAr:'سعرات منخفضة وبروتين عالي', dEn:'Low calories, high protein'},
      {ar:'شوربة عدس + صدر فراخ + سلطة', en:'Lentil Soup + Chicken Breast + Salad', dAr:'خفيف ومشبع وفيه ألياف', dEn:'Light, filling, fibrous'},
    ]},
  { key:'snack2', ar:'سناك بعد التمرين', en:'Post-Training Snack',
    options:[
      {ar:'شيك بروتين واي بالماء + موزة صغيرة', en:'Whey Shake with Water + Small Banana', dAr:'تعويض سريع بدون دهون', dEn:'Fast recovery without fat'},
      {ar:'زبادي يوناني قليل الدسم + تفاحة', en:'Low-Fat Greek Yogurt + Apple', dAr:'بروتين مع فاكهة قليلة السكر', dEn:'Protein with low-sugar fruit'},
      {ar:'بياض ٤ بيضات مسلوقة + خضار', en:'4 Boiled Egg Whites + Veggies', dAr:'بروتين خالي من الدهون', dEn:'Fat-free protein'},
      {ar:'صدر فراخ صغير مشوي + خيار', en:'Small Grilled Chicken Breast + Cucumber', dAr:'أفضل بديل بعد التمرين', dEn:'Best post-workout option'},
    ]},
  { key:'dinner', ar:'العشاء', en:'Dinner',
    options:[
      {ar:'صدر فراخ مشوي + سلطة خضرا كاملة', en:'Grilled Chicken Breast + Full Green Salad', dAr:'من غير كارب قبل النوم', dEn:'No carbs before bed'},
      {ar:'سمك مشوي + خضار سوتيه', en:'Grilled Fish + Sautéed Veggies', dAr:'عشا خفيف وسهل الهضم', dEn:'Light and easy to digest'},
      {ar:'بيض مقلي بدون زيت + خضار', en:'Eggs (no oil) + Veggies', dAr:'بروتين بدون دهون مضافة', dEn:'Protein with no added fat'},
      {ar:'جبنة قريش + خضار + رغيف أسمر صغير', en:'Cottage Cheese + Veggies + Small Brown Bread', dAr:'بروتين مشبع قبل النوم', dEn:'Filling protein before bed'},
      {ar:'زبادي يوناني + حفنة مكسرات صغيرة بدون سكر', en:'Greek Yogurt + Small Handful Nuts (no sugar)', dAr:'دهون صحية وكارب منخفض', dEn:'Healthy fats, low carbs'},
      {ar:'علبة تونة بالمايه + سلطة', en:'Tuna Can (in water) + Salad', dAr:'عشا سريع ومناسب للتنشيف', dEn:'Quick cutting dinner'},
    ]},
];

const MOTIVATION = {
  serious: [
    {ar:'التنشيف مش حرمان — التنشيف استثمار في نسخة أحمد كريم الأنحف والأوضح.', en:'Cutting is not deprivation — it is an investment in a leaner, sharper Ahmed Karim.'},
    {ar:'الدهون اللي بتتحرق النهارده هي اللي بتخلي عضلاتك واضحة بكرة.', en:'The fat you burn today is what makes your muscles visible tomorrow.'},
    {ar:'مفيش سر في التنشيف — عجز سعرات يوم بعد يوم، وبروتين عالي، وتمرين بجد.', en:'No secret to cutting — a daily calorie deficit, high protein, and real training.'},
    {ar:'صدر الفراخ مشوي مش مقلي — القرار الصغير ده هو الفرق كله.', en:'Grill the chicken, do not fry it — that small choice is the whole difference.'},
    {ar:'جعت؟ اشرب مية. المية بتسرّع الحرق وبتفضّي الجسم من السموم.', en:'Hungry? Drink water. Water speeds up the burn and cleans the body out.'},
    {ar:'كارديو بعد الحديد كل يوم هو خطوة ناحيت الدهون اللي هتختفي.', en:'Cardio after weights every day is a step toward the fat that disappears.'},
    {ar:'التنشيف بيبان على الوش الأول والبطن ثانيًا — اصبر.', en:'A cut shows on the face first and the belly second — be patient.'},
    {ar:'المرة دي مش ضخامة — المرة دي جسم نظيف ووزن حقيقي.', en:'This time it is not a bulk — it is a clean body and a real weight.'},
    {ar:'لو يوم اتأخر، بكرة اكمل. يوم واحد مش بيقلب القصة.', en:'If one day slips, resume tomorrow. One day does not change the story.'},
    {ar:'الحلوى مش عدو لو مرة في الأسبوع. بس النهارده... لأ.', en:'Sweets are not the enemy once a week. But today... no.'},
    {ar:'الانضباط في الأكل هو اللي بيبني جسم التنشيف.', en:'Diet discipline is what builds the cut physique.'},
    {ar:'بعد ٣٠ يوم هتقف على الميزان وتفرح بالرقم اللي ناقص.', en:'After 30 days you will step on the scale and smile at the lower number.'},
  ],
  fun: [
    {ar:'مرحلة التنشيف يعني تفتح الثلاجة تغمّها، وبعدين تفتحها تاني وتعيط.', en:'Cutting means opening the fridge, closing it, then reopening it to cry.'},
    {ar:'القهوة السودا من غير سكر مش مجرد مشروب — دي صاحبتك في التنشيف.', en:'Sugar-free black coffee is not just a drink — it is your cutting buddy.'},
    {ar:'عيلتك هتفضل تسأل ليه مش بياكل — قولهم "بفرم الدهون، سيبوني".', en:'Your family will keep asking why you are not eating — say "I am shredding fat, leave me".'},
    {ar:'صدر الفراخ بقى أحسن صاحب ليك في الـ ٣٠ يوم الجايين.', en:'Chicken breast becomes your best friend for the next 30 days.'},
    {ar:'التطبيق كان بيقول لك "اختار وجبة زيادة"، النهارده بيقول "كمّل ومتعدّيش".', en:'The app used to say "pick an extra meal"; today it says "stay under, champ".'},
    {ar:'الجيم بيت للحديد، بس المطبخ هو اللي بيحصّل التنشيف.', en:'The gym is for iron, but the kitchen is where the cut is won.'},
    {ar:'لو شفت كيك في عزومة، قول "الدكتور قال لأ" — كلمة السر.', en:'If you see cake at a gathering, say "the doctor said no" — the magic phrase.'},
    {ar:'أحمد كريم اتغير — ده بقى موسم التقطيع والتشفيف.', en:'Ahmed Karim changed — this is the shredding season now.'},
    {ar:'الميزان نازل كل أسبوع هو أحلى خبر عن أي خبر في التليفون.', en:'The scale going down each week beats any news on your phone.'},
    {ar:'كل رغيف أبيض بتتخطاه هو خط في جسمك.', en:'Every white bread you skip is a line on your physique.'},
    {ar:'مفيش حلويات النهارده... بكرة يمكن. يمكن.', en:'No sweets today... tomorrow maybe. Maybe.'},
    {ar:'٣٠ يوم تنشيف وكارديو — وهترجع نسخة أنحف من أحمد.', en:'30 days of cutting and cardio — you come back a leaner Ahmed.'},
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
          <span class="avatar-fallback">Ak</span>
          <img src="11bb9469-2785-4720-9bc9-7e0a20236862.png" alt="Ahmed Karim" onerror="this.remove()">
        </div>
        <div class="greet">
          <span class="hello i18n-ar">أهلاً بيك تاني</span><span class="hello i18n-en">Welcome back</span>
          <span class="name i18n-ar">أحمد كريم</span><span class="name i18n-en">Ahmed Karim</span>
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

/* Before-photos grid (homepage). The homepage markup carries the cards;
   these hooks keep JS safe if the section is absent. */
function renderBeforeGrid(){}
function wireBeforeGrid(){}

/* ================= Init (runs on every page) ================= */
document.addEventListener('DOMContentLoaded', ()=>{
  setLang(currentLang());
});