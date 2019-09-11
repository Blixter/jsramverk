# Vecka 2

Vecka 2 och jag har nu arbetat med ett registreringsformulär samt en date-picker.
Jag valde att göra ungefär som Gmails date-picker för födelsedatum. Det blir det smidigaste sättet tycker jag. Eftersom man först kan välja månad i dropdown-menyn, sedan är det bara att tabba och skriva dag och år. Jag gjorde input-fältet för dagen lite mindre och året lite större, för att användaren skall förstå att året skall skrivas med fler siffror, alltså YYYY. Som input valde jag självklart 'number'. Det finns mer jobb att göra för att den skall stämma helt och hållet. Till exempel så går det att fylla i 1 - 31 dagar för varje månad. Jag har gjort så att det inte blir validerat om man fyller i utöver 1 - 31 i dagar, samt om man inte håller sig innanför 1900 - nuvarande år.

![Gmail birtdaypicker](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0fcc8342-0348-4e5d-ae39-7103035e9e0d/gmail-birthday-input-2-800w-opt.png "Gmails version") Gmails version

Mitt registreringsformulär gjorde jag med mycket hjälp från en Youtuber och fick då även inspiration från honom kring utseendet. 

[![React form Validation](http://img.youtube.com/vi/4CeTFW4agRw/0.jpg)](http://www.youtube.com/watch?v=4CeTFW4agRw "React Form Validation") 

Jag har valt att React/JavaScript skall styra över valideringen. Det går bara att klicka på submit-knappen om alla fält är ifyllda och valideras. När man sedan skickat iväg formuläret så händer det inte så mycket än. Däremot kan man se all data som skickas iväg i console-loggen. Jag tänker att den datan får jag ta hand om i nästa kursmoment, när vi börjar med backend.

## Github repo
Här är GitHub-repot: [https://github.com/Blixter/jsramverk](https://github.com/Blixter/jsramverk).


