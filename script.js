let isPersian = true;

function toggleLanguage() {
  if (isPersian) {
    document.getElementById("profile-title").textContent =
      "Hello! I’m MohammadMehdi Nejati.";
    document.getElementById("profile-desc").textContent =
      "I graduated in 2020 with a degree in Political Science from Mazandaran University. Since childhood, I’ve been passionate about gaming, movies, TV series, and novels, and they still play a big role in my life.";
    document.getElementById("profile-tech").innerHTML =
      "A few years ago, I developed an interest in programming and started learning <strong>Front-End</strong>. Now, I’m proficient in <strong>HTML</strong> and <strong>CSS</strong>, and to make styling easier, I’ve also learned <strong>Tailwind CSS</strong>. Currently, I’m learning <strong>JavaScript</strong>, and after that, I plan to dive into <strong>PHP</strong> to become a <strong>full-stack developer</strong>.";
    document.getElementById("profile-contact").innerHTML =
      "I speak <strong>Persian, Mazandarani, and English</strong>. If you'd like to connect with me, you can find me on <a href='https://t.me/MohammadMehdi1998' target='_blank' class='text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out'>Telegram</a>!";

    document.body.setAttribute("dir", "ltr");
    document.body.classList.remove("text-right");
    document.body.classList.add("text-left");
  } else {
    document.getElementById("profile-title").textContent =
      "سلام! من محمدمهدی نجاتی هستم.";
    document.getElementById("profile-desc").textContent =
      "سال ۱۳۹۹ از دانشگاه مازندران در رشته‌ی علوم سیاسی فارغ‌التحصیل شدم. از همون بچگی عاشق گیم، فیلم، سریال و رمان بودم و هنوز هم این چیزها بخش بزرگی از زندگی من رو تشکیل میدن.";
    document.getElementById("profile-tech").innerHTML =
      "چند سال پیش به برنامه‌نویسی علاقه پیدا کردم و شروع کردم به یادگیری <strong>Front-End</strong>. الان <strong>HTML</strong> و <strong>CSS</strong> رو کاملاً بلدم، و برای راحت‌تر شدن کار با استایل‌ها، <strong>Tailwind CSS</strong> رو هم یاد گرفتم. در حال حاضر دارم <strong>JavaScript</strong> رو یاد می‌گیرم، و بعد از اون هم قصد دارم برم سراغ <strong>PHP</strong> تا یه <strong>برنامه‌نویس فول‌استک</strong> بشم.";
    document.getElementById("profile-contact").innerHTML =
      "به سه زبان <strong>فارسی، مازندرانی و انگلیسی</strong> صحبت می‌کنم. اگه دوست داشتی بیشتر باهام در ارتباط باشی، می‌تونی توی <a href='https://t.me/MohammadMehdi1998' target='_blank' class='text-blue-500 font-bold hover:text-blue-700 transition duration-300 ease-in-out'>تلگرام</a> پیدام کنی!";

    document.body.setAttribute("dir", "rtl");
    document.body.classList.remove("text-left");
    document.body.classList.add("text-right");
  }

  isPersian = !isPersian;
}
