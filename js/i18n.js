// Egyszerű, build nélküli többnyelvűség statikus oldalhoz.
// A fordítások itt, JS objektumban élnek, így file://-ról is működik (nincs CORS).
// Az értékekben HTML is lehet (pl. <span>, <li>), mert innerHTML-lel írjuk be.

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.eyebrow": "Frontend Developer",
    "hero.title": "Hi, I'm <span>Dániel Blaskó</span>",
    "hero.lead":
      "Computer engineer with 10+ years of experience building React, Next.js, React Native and Node.js applications in TypeScript. I'm a team player, motivated by learning new technologies and constantly improving.",
    "hero.location": "Kartal, Hungary",
    "hero.cta": "Get in touch",
    "hero.cv": "Download CV",

    // About
    "about.kicker": "Profile",
    "about.heading": "About me",
    "about.p1":
      "I'm a computer engineer with over 10 years of frontend experience, specializing in building React, Next.js and React Native applications in TypeScript. I'm confident with the key client-side libraries — Redux, Zustand, TanStack Query, Tailwind CSS, React Hook Form and i18next — and experienced in setting up CI/CD pipelines with GitHub Actions. I also build REST APIs with Node.js (Express) and Python, backed by MongoDB and JWT-based authentication. I actively use AI tools in my work, enjoy collaborating in a team and sharing knowledge, and I'm strongly motivated by continuous learning and adopting new technologies.",

    // Experience
    "experience.kicker": "Career",
    "experience.heading": "Experience",
    "experience.role.senior": "Senior Frontend Developer",
    "experience.role.frontend": "Frontend Developer",
    "experience.wecan.points": `
      <li>Expanded into full-stack work: implemented API endpoints and web scrapers in Python (FastAPI).</li>
      <li>Refactored and extended an existing cross-platform React Native app using TypeScript, Redux Toolkit and styled-components.</li>
      <li>Built responsive React web apps from Figma designs using TypeScript, Redux and TailwindCSS.</li>
      <li>Developed an LLM-based React Native app supporting students' career orientation, based on Figma designs, using TailwindCSS, Redux Toolkit and TanStack Query.</li>
      <li>Created and maintained GitHub Actions CI/CD pipelines.</li>
      <li>Set up pre-commit scripts with Husky and integrated NVM, linter and Prettier to standardize the workflow and code quality.</li>
      <li>Used AI-powered dev tools (Claude Code and Gemini agents in VS Code).</li>
      <li>Worked with Git-flow, handled code reviews, and mentored a new developer.</li>`,
    "experience.swapp.points": `
      <li>Fully refactored and rewrote a custom Node.js + React server-side rendered (SSR) web app in TypeScript.</li>
      <li>Designed and implemented a responsive Next.js web app with styled-components and Redux Toolkit, integrated into the Careem mobile app.</li>
      <li>Integrated the Careem Pay payment solution into the web app, building the frontend logic and components.</li>
      <li>Integrated OAuth login and JWT authentication into the frontend for secure access management.</li>
      <li>Managed feature flags (GrowthBook) for gradual rollouts and controlled evaluation.</li>
      <li>Gained AWS experience, mainly in frontend hosting and build/deploy workflows (CI/CD pipeline, build & deploy automation).</li>
      <li>Collaborated closely with backend developers on designing and integrating API endpoints.</li>`,
    "experience.sensenet.points": `
      <li>Developed and maintained the frontend of Sense/Net portal-based systems for the company's own .NET Core SaaS product.</li>
      <li>Built client-side web apps with Vanilla JavaScript, jQuery and CSS3, creating responsive user interfaces.</li>
      <li>Contributed to product development: created client-side demo and sample pages with React to support the portal developers. Wrote unit tests.</li>
      <li>Handled support: maintained, improved and fixed existing Sense/Net-based projects using Jira.</li>
      <li>Active participant in agile, Scrum-based teamwork, delivering tasks in sprint cycles.</li>`,
    "experience.tg3.points": `
      <li>Built multilingual, responsive websites from existing UI/UX designs, working closely with the designer.</li>
      <li>Monitored and optimized Core Web Vitals to improve site load speed and performance.</li>
      <li>Implemented frontend functionality with Angular.js, Bootstrap, HTML5 and CSS3 in an ASP.NET MVC (Razor) environment.</li>
      <li>Collaborated with backend developers on integrating API endpoints for client–server communication.</li>`,

    // Education
    "education.kicker": "Background",
    "education.heading": "Education",
    "education.obuda.school":
      "Óbuda University — John von Neumann Faculty of Informatics",
    "education.obuda.desc":
      "BSc in Computer Engineering, Software Technology specialization.",
    "education.lia.school": "LIA Education Center",
    "education.lia.desc":
      "Higher-level OKJ Web Developer qualification — theoretical and practical foundations of web development and programming.",
    "education.high.school":
      "Szent-Györgyi Albert Grammar and Vocational School",
    "education.high.desc":
      "Vocational secondary school leaving certificate (Balassagyarmat).",

    // Skills
    "skills.kicker": "Toolbox",
    "skills.heading": "Skills",
    "skills.frontend": "Frontend",
    "skills.state": "State & Data",
    "skills.backend": "Backend",
    "skills.tooling": "Tooling & Cloud",
    "skills.languages": "Languages",
    "lang.hungarian": "Hungarian",
    "lang.native": "Native",
    "lang.english": "English",
    "lang.intermediate": "Intermediate",

    // Contact
    "contact.kicker": "Contact",
    "contact.heading": "Get in touch",
    "contact.lead":
      "Open to frontend opportunities and interesting projects. Feel free to reach out.",
    "contact.email": "Email",
    "contact.phone": "Phone",
  },

  hu: {
    // Navigáció
    "nav.about": "Rólam",
    "nav.experience": "Tapasztalat",
    "nav.education": "Tanulmányok",
    "nav.skills": "Készségek",
    "nav.contact": "Kapcsolat",

    // Hero
    "hero.eyebrow": "Frontend fejlesztő",
    "hero.title": "Üdv, <span>Blaskó Dániel</span> vagyok",
    "hero.lead":
      "Mérnök informatikus, több mint 10 év tapasztalattal React, Next.js, React Native és Node.js alkalmazások fejlesztésében TypeScript környezetben. Csapatjátékos vagyok, akit motivál az új technológiák megismerése és a folyamatos fejlődés.",
    "hero.location": "Kartal, Magyarország",
    "hero.cta": "Kapcsolatfelvétel",
    "hero.cv": "Önéletrajz letöltése",

    // Rólam
    "about.kicker": "Bemutatkozás",
    "about.heading": "Rólam",
    "about.p1":
      "Mérnök informatikus vagyok, több mint 10 év frontend fejlesztői tapasztalattal, kiemelt szaktudással React, Next.js és React Native alapú alkalmazások fejlesztésében TypeScript környezetben. Magabiztosan használom a legfontosabb kliensoldali könyvtárakat, mint a Redux, Zustand, TanStack Query, Tailwind CSS, React Hook Form és i18next, valamint jártas vagyok CI/CD folyamatok kialakításában GitHub Actions segítségével. Tapasztalattal rendelkezem Node.js (Express) és Python alapú REST API-k fejlesztésében MongoDB adatbázissal és JWT-alapú autentikációval. Munkám során aktívan alkalmazok AI-eszközöket, szívesen dolgozom csapatban, tudásomat megosztom másokkal, és erősen motivál a folyamatos tanulás és az új technológiák elsajátítása.",

    // Tapasztalat
    "experience.kicker": "Karrier",
    "experience.heading": "Szakmai tapasztalat",
    "experience.role.senior": "Senior Frontend fejlesztő",
    "experience.role.frontend": "Frontend fejlesztő",
    "experience.wecan.points": `
      <li>Full-stack irányú kompetenciák fejlesztése: részvétel API-végpontok és webscraperek implementálásában Pythonban (FastAPI).</li>
      <li>Meglévő React Native cross-platform alkalmazás refaktorálása és továbbfejlesztése TypeScript, Redux Toolkit és styled-components eszközökkel.</li>
      <li>Reszponzív, React alapú webalkalmazások fejlesztése megadott Figma dizájnok alapján TypeScript, Redux és TailwindCSS felhasználásával.</li>
      <li>LLM-alapú, diákok pályaorientációját támogató React Native alkalmazás fejlesztése Figma dizájnok alapján, TailwindCSS, Redux Toolkit és TanStack Query felhasználásával.</li>
      <li>GitHub Actions alapú CI/CD folyamatok létrehozása és kezelése.</li>
      <li>Pre-commit scriptek készítése Husky-val, valamint NVM, Linter és Prettier integrálása a projektekbe a fejlesztési folyamat és a kódminőség egységesítésére.</li>
      <li>AI-alapú fejlesztőeszközök használata (Claude Code és Gemini agentek VS Code-ban).</li>
      <li>Git-flow használata, code review feladatok ellátása, új fejlesztő mentorálása és támogatása.</li>`,
    "experience.swapp.points": `
      <li>Egyedi fejlesztésű Node.js és React alapú, szerveroldali renderelésű (SSR) webalkalmazás teljes körű refaktorálása és TypeScript alapú újraírása.</li>
      <li>Reszponzív Next.js webalkalmazás tervezése és implementálása styled-components és Redux Toolkit használatával, majd integrálása a Careem mobilalkalmazásba.</li>
      <li>Careem Pay fizetési megoldás integrálása a webalkalmazásba, frontend logika és komponensek kialakításával.</li>
      <li>OAuth alapú bejelentkezés és JWT autentikáció integrálása a frontendbe, biztonságos hozzáférés-kezelés támogatására.</li>
      <li>Feature flagek kezelése (GrowthBook), funkciók fokozatos bevezetéséhez és kontrollált kiértékeléséhez.</li>
      <li>Tapasztalatszerzés AWS szolgáltatásokban, főként frontend üzemeltetés és build/deploy folyamatok terén (CI/CD pipeline, build és deploy automatizálása).</li>
      <li>Szoros együttműködés backend fejlesztőkkel API-végpontok tervezésében és integrálásában.</li>`,
    "experience.sensenet.points": `
      <li>Sense/Net portálalapú rendszerek frontend fejlesztése és folyamatos karbantartása a vállalat saját .NET Core alapú SaaS termékéhez.</li>
      <li>Kliensoldali webalkalmazások fejlesztése Vanilla JavaScript, jQuery és CSS3 technológiákkal, reszponzív felhasználói felületek kialakításával.</li>
      <li>Részvétel a termékfejlesztésben: kliensoldali demo- és mintaoldalak létrehozása React-tel a portálfejlesztők támogatása érdekében. Unit tesztek írása.</li>
      <li>Support tevékenységek: meglévő Sense/Net alapú projektek karbantartása, fejlesztése és hibák javítása Jira eszköz használatával.</li>
      <li>Aktív közreműködés agilis, Scrum módszertan szerinti csapatmunkában, fejlesztési feladatok végrehajtása sprint ciklusokban.</li>`,
    "experience.tg3.points": `
      <li>Többnyelvű, reszponzív weboldalak fejlesztése meglévő UI/UX tervek alapján, szoros együttműködésben a dizájnerrel.</li>
      <li>Core Web Vitals mutatók figyelése és optimalizálása a weboldalak betöltési sebességének és teljesítményének javítása érdekében.</li>
      <li>Frontend funkcionalitás megvalósítása Angular.js, Bootstrap, HTML5 és CSS3 technológiákkal ASP.NET MVC (Razor) környezetben.</li>
      <li>Együttműködés backend fejlesztőkkel API-végpontok integrálásában a kliens–szerver kommunikáció biztosítására.</li>`,

    // Tanulmányok
    "education.kicker": "Háttér",
    "education.heading": "Tanulmányok",
    "education.obuda.school":
      "Óbudai Egyetem — Neumann János Informatikai Kar",
    "education.obuda.desc":
      "Mérnök informatikus (BSc) diploma, Szoftvertechnológia szakirányon.",
    "education.lia.school": "LIA Oktatási Központ",
    "education.lia.desc":
      "Felsőfokú OKJ Webfejlesztő képesítés — a webfejlesztés és programozás elméleti és gyakorlati ismereteinek elsajátítása.",
    "education.high.school":
      "Szent-Györgyi Albert Gimnázium és Szakközépiskola",
    "education.high.desc":
      "Szakközépiskolai érettségi bizonyítvány megszerzése (Balassagyarmat).",

    // Készségek
    "skills.kicker": "Eszköztár",
    "skills.heading": "Készségek",
    "skills.frontend": "Frontend",
    "skills.state": "Állapot & adat",
    "skills.backend": "Backend",
    "skills.tooling": "Eszközök & felhő",
    "skills.languages": "Nyelvek",
    "lang.hungarian": "Magyar",
    "lang.native": "Anyanyelv",
    "lang.english": "Angol",
    "lang.intermediate": "Középhaladó",

    // Kapcsolat
    "contact.kicker": "Elérhetőség",
    "contact.heading": "Lépjünk kapcsolatba",
    "contact.lead":
      "Nyitott vagyok frontend lehetőségekre és érdekes projektekre. Keress bátran!",
    "contact.email": "E-mail",
    "contact.phone": "Telefon",
  },
};

const DEFAULT_LANG = "en";

function applyLanguage(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Language-specific CV download
  const cvFiles = {
    en: "Dániel_Blaskó_Frontend_Developer_EN.pdf",
    hu: "Dániel_Blaskó_Frontend_Developer_HU.pdf",
  };
  const cvLink = document.getElementById("cv-link");
  if (cvLink && cvFiles[lang]) {
    cvLink.href = cvFiles[lang];
  }

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "").slice(0, 2);
  const initial = saved || (translations[browser] ? browser : DEFAULT_LANG);

  applyLanguage(initial);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
});
