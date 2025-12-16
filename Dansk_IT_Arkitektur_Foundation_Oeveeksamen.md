# Dansk IT Arkitektur Foundation – Øveeksamen & Mini Web-Test Plan

## Del 1 – 20 Eksempel Eksamensspørgsmål (Multiple Choice)

### Spørgsmål 1
**Hvad er det primære formål med IT-arkitektur?**  
A. At dokumentere tekniske løsninger  
B. At fungere som bindeled mellem forretning og IT  
C. At optimere performance i infrastrukturen  
D. At standardisere programmeringssprog  

**Korrekt svar:** B  

---

### Spørgsmål 2
**Hvad kendetegner et arkitekturprincip?**  
A. En teknisk implementering  
B. En styrende retningslinje for beslutninger  
C. En detaljeret procesbeskrivelse  
D. En kontrakt  

**Korrekt svar:** B  

---

### Spørgsmål 3
**Hvad er en capability?**  
A. En applikationsservice  
B. En forretningsproces  
C. En organisations evne til at levere værdi  
D. En teknisk komponent  

**Korrekt svar:** C  

---

### Spørgsmål 4
**Hvilket er et ikke-funktionelt krav?**  
A. Opret kunde  
B. Udskriv faktura  
C. Systemet skal være tilgængeligt 99,9 %  
D. Registrer ordre  

**Korrekt svar:** C  

---

### Spørgsmål 5
**Hvad bruges ArchiMate primært til?**  
A. Kodning  
B. Databasedesign  
C. Modellering af enterprise-arkitektur  
D. Projektledelse  

**Korrekt svar:** C  

---

### Spørgsmål 6
**Hvilket lag adresserer forretningsprocesser?**  
A. Teknologilaget  
B. Applikationslaget  
C. Forretningslaget  
D. Infrastruktur  

**Korrekt svar:** C  

---

### Spørgsmål 7
**Hvad beskriver TOGAF ADM?**  
A. Et programmeringssprog  
B. En arkitekturudviklingsmetode  
C. En datamodel  
D. En governance-kontrakt  

**Korrekt svar:** B  

---

### Spørgsmål 8
**Hvad er FDA?**  
A. Et internationalt rammeværk  
B. Et teknologiprodukt  
C. Et fællesoffentligt dansk EA-rammeværk  
D. Et projektstyringsværktøj  

**Korrekt svar:** C  

---

### Spørgsmål 9
**Hvad er formålet med governance?**  
A. At kode løsninger  
B. At sikre styring og beslutninger  
C. At designe UI  
D. At udvikle databaser  

**Korrekt svar:** B  

---

### Spørgsmål 10
**Hvad er master data?**  
A. Midlertidige data  
B. Historiske data  
C. Autoritative kernedata  
D. Backup-data  

**Korrekt svar:** C  

---

### Spørgsmål 11
**Hvilken arkitekturstil er event-baseret?**  
A. Monolit  
B. SOA  
C. EDA  
D. Client/Server  

**Korrekt svar:** C  

---

### Spørgsmål 12
**Hvad bruges en data dictionary til?**  
A. Kodestandarder  
B. Fælles datadefinitioner  
C. Netværksopsætning  
D. UI-design  

**Korrekt svar:** B  

---

### Spørgsmål 13
**Hvad er forskellen på view og viewpoint?**  
A. Ingen forskel  
B. View er resultatet, viewpoint er perspektivet  
C. Viewpoint er diagrammet  
D. View er metoden  

**Korrekt svar:** B  

---

### Spørgsmål 14
**Hvad fokuserer applikationsarkitektur på?**  
A. Hardware  
B. Forretningsstrategi  
C. Applikationer og deres samspil  
D. Jura  

**Korrekt svar:** C  

---

### Spørgsmål 15
**Hvad er en enterprise-arkitektur?**  
A. Ét system  
B. Kun IT  
C. Helhedsbillede af organisationen  
D. Infrastrukturdesign  

**Korrekt svar:** C  

---

### Spørgsmål 16
**Hvad bruges FURPS+ til?**  
A. Arkitekturstyring  
B. Klassificering af krav  
C. Governance  
D. Datamodellering  

**Korrekt svar:** B  

---

### Spørgsmål 17
**Hvilket lag adresserer databaser og data?**  
A. Forretningsarkitektur  
B. Dataarkitektur  
C. Applikationsarkitektur  
D. Teknologiarkitektur  

**Korrekt svar:** B  

---

### Spørgsmål 18
**Hvad er systemarkitektur?**  
A. Fokus på ét system i helheden  
B. Kun forretning  
C. Kun teknologi  
D. Kun governance  

**Korrekt svar:** A  

---

### Spørgsmål 19
**Hvad er et value stream?**  
A. En teknisk proces  
B. En værdiskabende sekvens af aktiviteter  
C. Et IT-system  
D. En kontrakt  

**Korrekt svar:** B  

---

### Spørgsmål 20
**Hvad er arkitektens vigtigste rolle?**  
A. At kode  
B. At sikre overblik og sammenhæng  
C. At teste software  
D. At skrive kontrakter  

**Korrekt svar:** B  

---

## Del 2 – Mini-plan: Testeksamen som Website

### Mål
Et simpelt web-site hvor du kan:
- Tage en prøveeksamen
- Få score (fx 40 spørgsmål / 65 % bestået)
- Se korrekt/ukorrekt svar

---

### Struktur
```
/exam-app
 ├── index.html
 ├── styles.css
 ├── app.js
```

---

### HTML (index.html)
- Header med titel
- Container til spørgsmål
- Radio buttons (A–D)
- “Næste” / “Afslut test” knap
- Resultatvisning

---

### CSS (styles.css)
- Moderne font (fx Inter / system-ui)
- Centered card-layout
- Bløde kanter (border-radius)
- Neutral farvepalette
- Grøn/rød feedback på svar

---

### JavaScript (app.js)
- Array med spørgsmål/answers
- State: currentQuestion, score
- Render spørgsmål dynamisk
- Valider svar
- Beregn procent og bestået/ikke bestået

---

### Udvidelser (senere)
- Random rækkefølge
- Timer (60 min)
- Lokalt gemte resultater
- “Eksamen mode” uden feedback

---

Held og lykke med certificeringen 🚀
