# TBC x USAID page written on pure html css and javascript

# project structure

1. assets folder სადაც შენახულია ის ფოტოების უმეტესობა, რომლებიც გამოყენებულია კოდში (ასევე რამდენიმე ფოტო image address ით მაქვს წამოღებული გუგლიდან)
   ,

2. scripts folder ,სადაც შენახულია ყველა js ფაილი რომელიც კოდშია გამოყენებული.

-   app.js - პასუხისმგებელია header-ის მოქმედებაზე , გახდეს ფერმკრთალი down სქროლზე (desktop version) ,და mobile ვერსიაზე გაქრეს down სქროლზე და up სქროლზე გამოჩნდეს header
-   questions.js , რომელიც პასუხისმგებელია ხშირად დასმულ შეკითხვებში გამოჩნდეს პასუხები click event ზე
-   sidebar.js - რომელიც ასრულებს mobile ვერსიაზე nav bar ის ღილაკზე დაკლიკებისას გამოჩნდეს/გაქრეს header ის მენიუ
-   slider.js - რომელიც პასუხისმგებელია "პარტნიორების" სექციაში ყოველ ხუთ წამში ავტომატურად გადავიდეს შემდეგ გვერდზე ,ასევე ღილაკზე დაკლიკებისას.

3.  -   style.css სადაც მიმდევრობით (ზემოდან ქვემოთ) არის გასტილული ყველა tag-ი desktop0ისთვის(გამოყენებულია display flex, display grid, transitions )
        -responsive.css სადაც უკვე დაწერილია mobile da tablet ისთვის

# ინსტრუქცია კოდის გაშვების შესახებ

1. clone github repository
2. გამოიყენეთ live server რომ დასტარტოთ ლოკალურად პროექტი
