const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.skills": "Skills",

    "home.greeting": "Hi, I'm <span>Daniel Blasko</span>",
    "home.role": "Frontend Developer",

    "about.heading": "About me",
    "about.p1":
      "I am a Software Engineer with over 10 years of frontend development experience, specializing in building React, Next.js, and React Native applications within TypeScript environments. I confidently use key client-side libraries, including Redux, Zustand, TanStack Query, Tailwind CSS, React Hook Form, and i18next, and I am skilled in setting up CI/CD pipelines using GitHub Actions. I also have experience developing Node.js (Express) and Python-based REST APIs with MongoDB and JWT authentication. I actively use AI tools in my work, enjoy working in a team, share my knowledge with others, and am highly motivated by continuous learning and mastering new technologies.",

    "experience.heading": "Experience",
    "experience.role": "Front-End Developer",
    "experience.wecan":
      "Development of React Native applications in TypeScript using Redux. Development of React web applications based on existing Figma designs, utilizing Redux for state management and TailwindCSS for styling. Experience with Microsoft Azure, MySQL, and PostgreSQL. Developed data scrapers using Python. Leveraging modern AI tools, including Antigravity and Claude Code.",
    "experience.swapp":
      "Application development using the Next.js framework based on React and TypeScript. Hands-on experience with AWS, version control using Git, and integrating REST APIs.",
    "experience.sensenet":
      "Development of Sense/Net portal-based systems within the ASP.NET framework, using jQuery and Vanilla JavaScript. Hands-on experience working with MSSQL databases.",
    "experience.tg3":
      "Front-end development activities, primarily focused on creating and maintaining web applications and websites. Developed solutions in an ASP.NET MVC environment utilizing HTML5, CSS, Bootstrap, jQuery, AngularJS, and Vanilla JavaScript.",

    "education.heading": "Education",
    "education.obuda":
      "John von Neumann Faculty of Informatics (Budapest) Bachelor of Science in Computer Engineering",
    "education.okjTitle": "OKJ Vocational Training",
    "education.okj":
      "LIA Education Center (Budapest) Advanced OKJ Vocational Training - Web Programmer",
    "education.highSchoolTitle": "High School",
    "education.highSchool":
      "I graduated from Szent-Györgyi Albert Secondary School and Vocational School in Balassagyarmat with a vocational secondary school diploma",

    "skills.heading": "Skills",
  },

  hu: {
    "nav.home": "Főoldal",
    "nav.about": "Rólam",
    "nav.education": "Tanulmányok",
    "nav.experience": "Tapasztalat",
    "nav.skills": "Készségek",

    "home.greeting": "Szia, <span>Blaskó Dániel</span> vagyok",
    "home.role": "Frontend fejlesztő",

    "about.heading": "Rólam",
    "about.p1": `Mérnök informatikus vagyok, több mint 10 év frontend fejlesztői tapasztalattal, kiemelt szaktudással React, Next.js és React Native alapú alkalmazások fejlesztésében TypeScript környezetben. Magabiztosan használom a legfontosabb kliensoldali könyvtárakat, mint a Redux, Zustand, TanStack Query, Tailwind CSS, React Hook Form és i18next, valamint jártas vagyok CI/CD folyamatok kialakításában GitHub Actions segítségével. Tapasztalattal rendelkezem Node.js (Express) és Python alapú REST API-k fejlesztésében MongoDB adatbázissal és JWT-alapú autentikációval. Munkám során aktívan alkalmazok AI-eszközöket, szívesen dolgozom csapatban, tudásomat megosztom másokkal, és erősen motivál a folyamatos tanulás és az új technológiák elsajátítása.`,
    "experience.heading": "Szakmai Tapasztalataim",
    "experience.role": "Frontend fejlesztő",
    "experience.wecan":
      "React Native alkalmazások fejlesztése TypeScriptben, Redux használatával. React webalkalmazások fejlesztése meglévő Figma tervek alapján, Redux állapotkezeléssel és TailwindCSS stílusozással. Tapasztalat Microsoft Azure, MySQL és PostgreSQL terén. Adatgyűjtő szkriptek (scraper) fejlesztése Pythonban. Modern AI-eszközök használata, többek között Antigravity és Claude Code.",
    "experience.swapp":
      "Alkalmazásfejlesztés a Reactre és TypeScriptre épülő Next.js keretrendszerrel. Gyakorlati tapasztalat AWS-szel, verziókezelés Git segítségével és REST API-k integrálása.",
    "experience.sensenet":
      "Sense/Net portál-alapú rendszerek fejlesztése ASP.NET keretrendszerben, jQuery és Vanilla JavaScript használatával. Gyakorlati tapasztalat MSSQL adatbázisokkal.",
    "experience.tg3":
      "Frontend fejlesztési feladatok, elsősorban webalkalmazások és weboldalak létrehozása és karbantartása. Megoldások fejlesztése ASP.NET MVC környezetben, HTML5, CSS, Bootstrap, jQuery, AngularJS és Vanilla JavaScript használatával.",

    "education.heading": "Tanulmányok",
    "education.obuda":
      "Óbudai Egyetem, Neumann János Informatikai Kar (Budapest) – mérnök informatikus (BSc)",
    "education.okjTitle": "OKJ-s szakképzés",
    "education.okj":
      "LIA Oktatási Központ (Budapest) – emelt szintű OKJ szakképzés, webprogramozó",
    "education.highSchoolTitle": "Középiskola",
    "education.highSchool":
      "A balassagyarmati Szent-Györgyi Albert Gimnázium és Szakközépiskolában érettségiztem, szakközépiskolai bizonyítvánnyal.",

    "skills.heading": "Készségek",
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
