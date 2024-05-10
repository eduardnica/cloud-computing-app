- **Introducere**
 
&emsp;Această aplicație este un grup de chat online care permite utilizatorilor să comunice între ei în timp real. Aceasta se bazează pe Firebase pentru a oferi servicii de autentificare, baza de date și hosting.

Link videoclip: https://youtu.be/mbOxnqyUOlk

- **Descriere problemǎ**

&emsp;În era digitală actuală, comunicarea și colaborarea online sunt vitale pentru o gamă largă de activități și domenii, de la munca în echipă la socializare. Cu toate acestea, dezvoltarea unei aplicații de chat în timp real poate fi dificilă și costisitoare. Prin urmare, acest proiect oferă o soluție simplă și eficientă pentru grupurile care doresc să comunice și să colaboreze într-un mediu virtual.
 
- ****Descriere****

&emsp;**Autentificare utilizator**

 &emsp; Aplicația utilizează serviciul Firebase Authentication pentru a gestiona autentificarea utilizatorilor. Aceasta oferă mai multe opțiuni de autentificare, inclusiv autentificare cu adresa de e-mail și parola, autentificare cu conturi de social media(Google Account) și autentificare anonimă.

&emsp;**Bază de date**

&emsp;Datele utilizatorilor și mesajele din chat sunt stocate în Firebase Realtime Database. Acesta este un serviciu NoSQL de bază de date, care permite stocarea și sincronizarea datelor.

&emsp;**Interacțiune client-server**

&emsp;Comunicarea dintre client și server se realizează folosind API-ul Firebase. Aplicația folosește cereri HTTP pentru a trimite și a primi date de la baza de date Firebase.

- **Flux de date**

&emsp;Datele de intrare folosite în cadrul aplicației sunt cele introduse în câmpurile Text pentru trimiterea mesajelor. Aceste câmpuri sunt completate de către utilizator cu scopul de a înregistra mesajele.

&emsp;Datele de iesire sunt lista cu mesajele trimise (care sunt primite de alti utilizatori).

- **Metode HTTP**

Metodele HTTP folosite în cadrul aplicației sunt următoarele:

&emsp;GET: Folosit pentru a obține mesajele din grup care se afla în baza de date. 
 
&emsp;POST: Folosit pentru a trimite un mesaj nou în grup  care va fi scris în baza de date.


