Todoish är en app jag byggt som ett privat projekt för att öva på React och HTML request methods. Appen använder sig av samtliga CRUD operations:

- Create (POST): två sätt att posta uppgifter (via modal som är tillgänglig från sidebar och via element i lista), dessa renderas i realtid i listan
- Read (GET): hämtar och renderar data från ett fejk-API (lokal JSON-fil)
- Update (jag har valt PATCH): möjligt att redigera uppgifters text direkt i listan, möjligt att markera och avmarkera uppgifter som färdiga
- Delete (DELETE): möjligt att radera uppgifter i listan

Jag har utgått från de två att göra-appar jag själv använder i min vardag: desktopversionen av Todoist har varit förlaga till merparten av stylingen, och en del features – visualiseringen av färdigmarkerade uppgifter, papperskorgsikonerna – har jag hämtat inspiration till från mobilversionen av Trello.

En del element i sidebar är medvetet icke-funktionella (ej klickbara).

Jag har byggt appen som en desktop-first design i och med att jag inte har för avsikt att publicera den live. Den kan köras lokalt med JSON Server installerad.
