// All exam questions - both simple and advanced
const questions = [
    // Simple questions (1-40)
    {
        question: "Hvad er IT-arkitekturens primære formål?",
        options: [
            "At beskrive tekniske løsninger i detaljer",
            "At sikre sammenhæng mellem forretning og IT",
            "At optimere serverdrift",
            "At standardisere kode"
        ],
        correct: 1,
        explanation: "IT-arkitektur fungerer som bindeled mellem forretningens mål og IT-løsninger."
    },
    {
        question: "Hvad beskriver bedst et arkitekturprincip?",
        options: [
            "En teknisk løsning",
            "En styrende regel for beslutninger",
            "En detaljeret proces",
            "En kontrakt"
        ],
        correct: 1,
        explanation: "Arkitekturprincipper guider og begrunder arkitektoniske valg."
    },
    {
        question: "Hvad er en capability?",
        options: [
            "En applikation",
            "En forretningsproces",
            "En organisations evne til at levere værdi",
            "En IT-service"
        ],
        correct: 2,
        explanation: "Capabilities beskriver hvad organisationen kan – stabilt over tid."
    },
    {
        question: "Hvilket er et ikke-funktionelt krav?",
        options: [
            "Opret kunde",
            "Generer faktura",
            "Systemet skal kunne skaleres",
            "Registrer ordre"
        ],
        correct: 2,
        explanation: "Skalerbarhed er et kvalitetskrav (Performance i FURPS+)."
    },
    {
        question: "Hvad bruges ArchiMate til?",
        options: [
            "Kodning",
            "Projektledelse",
            "Modellering af enterprise-arkitektur",
            "Testautomatisering"
        ],
        correct: 2,
        explanation: "ArchiMate er et standardiseret modelleringssprog til EA."
    },
    {
        question: "Hvilket arkitekturlag adresserer forretningsprocesser?",
        options: [
            "Teknologi",
            "Applikation",
            "Forretning",
            "Infrastruktur"
        ],
        correct: 2,
        explanation: "Forretningslaget beskriver processer, services og aktører."
    },
    {
        question: "Hvad er TOGAF ADM?",
        options: [
            "En datamodel",
            "En arkitekturudviklingsmetode",
            "En governance-model",
            "Et værktøj"
        ],
        correct: 1,
        explanation: "ADM beskriver den iterative proces til arkitekturudvikling."
    },
    {
        question: "Hvad er FDA?",
        options: [
            "Et globalt EA-rammeværk",
            "Et dansk fællesoffentligt EA-rammeværk",
            "En teknologistandard",
            "Et værktøj"
        ],
        correct: 1,
        explanation: "FDA er Danmarks fællesoffentlige arkitekturrammeværk."
    },
    {
        question: "Hvad er governance i arkitektursammenhæng?",
        options: [
            "Systemudvikling",
            "Drift",
            "Styring og beslutningsprocesser",
            "Kodestandarder"
        ],
        correct: 2,
        explanation: "Governance sikrer styring, prioritering og compliance."
    },
    {
        question: "Hvad er master data?",
        options: [
            "Midlertidige data",
            "Backup-data",
            "Autoritative kernedata",
            "Logdata"
        ],
        correct: 2,
        explanation: "Master data er centrale, fælles reference-data."
    },
    {
        question: "Hvilken arkitekturstil er baseret på events?",
        options: [
            "Monolit",
            "SOA",
            "EDA",
            "Client/Server"
        ],
        correct: 2,
        explanation: "Event-Driven Architecture reagerer på hændelser."
    },
    {
        question: "Hvad bruges en data dictionary til?",
        options: [
            "UI-design",
            "Koderegler",
            "Fælles definition af data",
            "Performance tuning"
        ],
        correct: 2,
        explanation: "Data dictionaries sikrer fælles begrebsforståelse."
    },
    {
        question: "Hvad er forskellen på viewpoint og view?",
        options: [
            "Ingen",
            "View er diagrammet, viewpoint er perspektivet",
            "Viewpoint er resultatet",
            "View er metoden"
        ],
        correct: 1,
        explanation: "Viewpoint definerer perspektivet, view er den konkrete repræsentation."
    },
    {
        question: "Hvad fokuserer applikationsarkitektur på?",
        options: [
            "Hardware",
            "Jura",
            "Applikationer og deres samspil",
            "Organisation"
        ],
        correct: 2,
        explanation: "Applikationsarkitektur beskriver systemlandskabet."
    },
    {
        question: "Hvad er enterprise-arkitektur?",
        options: [
            "Ét IT-system",
            "Infrastrukturdesign",
            "Helhedsarkitektur for organisationen",
            "Kun forretning"
        ],
        correct: 2,
        explanation: "EA dækker forretning, data, applikation og teknologi."
    },
    {
        question: "Hvad bruges FURPS+ til?",
        options: [
            "Governance",
            "Kravklassificering",
            "Datamodellering",
            "Test"
        ],
        correct: 1,
        explanation: "FURPS+ strukturerer funktionelle og ikke-funktionelle krav."
    },
    {
        question: "Hvilket lag håndterer databaser og informationsmodeller?",
        options: [
            "Forretning",
            "Data",
            "Applikation",
            "Teknologi"
        ],
        correct: 1,
        explanation: "Dataarkitektur adresserer data, ejerskab og kvalitet."
    },
    {
        question: "Hvad kendetegner systemarkitektur?",
        options: [
            "Fokus på ét system i helheden",
            "Kun strategi",
            "Kun drift",
            "Kun forretning"
        ],
        correct: 0,
        explanation: "Systemarkitektur zoomer ind på en enkelt løsning."
    },
    {
        question: "Hvad er et value stream?",
        options: [
            "En teknisk proces",
            "En værdiskabende kæde af aktiviteter",
            "En applikation",
            "Et system"
        ],
        correct: 1,
        explanation: "Value streams viser, hvordan værdi skabes for kunden."
    },
    {
        question: "Hvad er arkitektens vigtigste opgave?",
        options: [
            "At kode",
            "At sikre overblik og sammenhæng",
            "At teste",
            "At skrive kontrakter"
        ],
        correct: 1,
        explanation: "Arkitekten sikrer helhed og sammenhæng."
    },
    {
        question: "Hvad betyder 'concerns' i arkitektur?",
        options: [
            "Teknologier",
            "Interessenters bekymringer og behov",
            "Kravdokumenter",
            "Budgetter"
        ],
        correct: 1,
        explanation: "Concerns er det, interessenter er optaget af."
    },
    {
        question: "Hvad bruges referencearkitekturer til?",
        options: [
            "Kodning",
            "Inspiration og standardisering",
            "Test",
            "Drift"
        ],
        correct: 1,
        explanation: "Referencearkitekturer giver genbrug og fælles retning."
    },
    {
        question: "Hvad er forskellen på logisk og fysisk arkitektur?",
        options: [
            "Ingen",
            "Logisk er teknisk",
            "Fysisk beskriver konkret implementering",
            "Logisk beskriver hardware"
        ],
        correct: 2,
        explanation: "Fysisk niveau viser den faktiske realisering."
    },
    {
        question: "Hvad er formålet med arkitekturdokumentation?",
        options: [
            "At erstatte kode",
            "At sikre fælles forståelse",
            "At styre drift",
            "At teste software"
        ],
        correct: 1,
        explanation: "Dokumentation bruges til kommunikation og beslutninger."
    },
    {
        question: "Hvad er en IT-service?",
        options: [
            "Et system",
            "En funktion leveret til forretningen",
            "En database",
            "Et netværk"
        ],
        correct: 1,
        explanation: "IT-services leverer værdi til forretningen."
    },
    {
        question: "Hvad betyder løst koblede systemer?",
        options: [
            "De deler database",
            "De er stærkt afhængige",
            "De kan ændres uafhængigt",
            "De er langsomme"
        ],
        correct: 2,
        explanation: "Løs kobling øger fleksibilitet og robusthed."
    },
    {
        question: "Hvad er formålet med arkitekturstyring?",
        options: [
            "At designe UI",
            "At sikre konsistens over tid",
            "At kode hurtigere",
            "At reducere dokumentation"
        ],
        correct: 1,
        explanation: "Arkitekturstyring sikrer langsigtet sammenhæng."
    },
    {
        question: "Hvad er en interessent?",
        options: [
            "En udvikler",
            "En person med teknisk ansvar",
            "En person med interesse i løsningen",
            "En systemadministrator"
        ],
        correct: 2,
        explanation: "Interessenter påvirkes af – eller påvirker – arkitekturen."
    },
    {
        question: "Hvad er dataklassifikation?",
        options: [
            "Databasestruktur",
            "Kategorisering af data efter følsomhed",
            "Backup-strategi",
            "Kodestandard"
        ],
        correct: 1,
        explanation: "Dataklassifikation er central for sikkerhed og GDPR."
    },
    {
        question: "Hvad er formålet med integrationsarkitektur?",
        options: [
            "At fjerne systemer",
            "At sikre samspil mellem systemer",
            "At øge performance",
            "At designe UI"
        ],
        correct: 1,
        explanation: "Integration sikrer sammenhæng på tværs af systemer."
    },
    {
        question: "Hvad er teknologiartefakter?",
        options: [
            "Forretningsprocesser",
            "Konkrete tekniske komponenter",
            "Strategidokumenter",
            "Use cases"
        ],
        correct: 1,
        explanation: "Teknologiartefakter er fx servere, netværk og platforme."
    },
    {
        question: "Hvad betyder 'as-is' arkitektur?",
        options: [
            "Fremtidig arkitektur",
            "Ønsket arkitektur",
            "Nuværende arkitektur",
            "Testmiljø"
        ],
        correct: 2,
        explanation: "As-is beskriver den aktuelle situation."
    },
    {
        question: "Hvad er 'to-be' arkitektur?",
        options: [
            "Nuværende",
            "Historisk",
            "Fremtidig målarkitektur",
            "Testarkitektur"
        ],
        correct: 2,
        explanation: "To-be viser den ønskede fremtidige tilstand."
    },
    {
        question: "Hvad er et arkitekturmønster?",
        options: [
            "Et værktøj",
            "En gentagelig løsningsstruktur",
            "En standard",
            "Et krav"
        ],
        correct: 1,
        explanation: "Mønstre genbruges på tværs af løsninger."
    },
    {
        question: "Hvad er et use case?",
        options: [
            "En teknisk komponent",
            "En brugerinteraktion med systemet",
            "En database",
            "En server"
        ],
        correct: 1,
        explanation: "Use cases beskriver funktionel adfærd."
    },
    {
        question: "Hvad betyder interoperabilitet?",
        options: [
            "Hurtig performance",
            "Evne til at samarbejde med andre systemer",
            "Brugervenlighed",
            "Driftssikkerhed"
        ],
        correct: 1,
        explanation: "Interoperabilitet er centralt i integrationsarkitektur."
    },
    {
        question: "Hvad er arkitekturens tidshorisont?",
        options: [
            "Kort sigt",
            "Kun drift",
            "Langsigtet",
            "Kun projektniveau"
        ],
        correct: 2,
        explanation: "Arkitektur fokuserer på langsigtede beslutninger."
    },
    {
        question: "Hvad er arkitekturens rolle i projekter?",
        options: [
            "At kode",
            "At sikre retning og rammer",
            "At teste",
            "At drive projektet"
        ],
        correct: 1,
        explanation: "Arkitektur sætter rammer for løsninger."
    },
    {
        question: "Hvad er et arkitekturrammeværk?",
        options: [
            "Et værktøj",
            "Et strukturerende sæt metoder og begreber",
            "En database",
            "En kontrakt"
        ],
        correct: 1,
        explanation: "Rammeværker strukturerer arkitekturarbejdet."
    },
    {
        question: "Hvad kendetegner god IT-arkitektur?",
        options: [
            "Mange detaljer",
            "Kompleksitet",
            "Klarhed, sammenhæng og værdi",
            "Avanceret teknologi"
        ],
        correct: 2,
        explanation: "God arkitektur skaber forståelse og forretningsværdi."
    },
    // Advanced questions (41-55)
    {
        question: "Hvilke udsagn om IT-arkitektur er korrekte?\n\n1. IT-arkitektur fungerer som bindeled mellem forretning og IT\n2. IT-arkitektur har primært fokus på teknisk implementering\n3. IT-arkitektur understøtter beslutningstagning\n4. IT-arkitektur erstatter projektledelse",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Arkitektur binder forretning og IT sammen og bruges til beslutninger – ikke kun teknik og ikke som erstatning for projektledelse."
    },
    {
        question: "Hvilke udsagn om arkitekturprincipper er korrekte?\n\n1. De er styrende for arkitektoniske beslutninger\n2. De er altid tekniske\n3. De er relativt stabile over tid\n4. De beskriver konkrete implementeringer",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Ingen"
        ],
        correct: 0,
        explanation: "Arkitekturprincipper guider beslutninger og er relativt stabile – de er ikke altid tekniske og beskriver ikke konkrete implementeringer."
    },
    {
        question: "Hvilke udsagn om capabilities er korrekte?\n\n1. Capabilities beskriver hvad organisationen kan\n2. Capabilities afhænger direkte af IT-systemer\n3. Capabilities er relativt stabile over tid\n4. Capabilities er det samme som processer",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Capabilities beskriver organisationens evner og er stabile over tid – de afhænger ikke direkte af systemer og er ikke det samme som processer."
    },
    {
        question: "Hvilke af følgende er ikke-funktionelle krav?\n\n1. Systemet skal kunne håndtere 10.000 brugere\n2. Systemet skal kunne oprette en kunde\n3. Systemet skal have høj tilgængelighed\n4. Systemet skal kunne udskrive faktura",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Skalerbarhed og tilgængelighed er kvalitetskrav (ikke-funktionelle), mens opret kunde og udskriv faktura er funktionelle krav."
    },
    {
        question: "Hvilke udsagn er korrekte?\n\n1. Viewpoint definerer perspektivet\n2. View er den konkrete repræsentation\n3. View og viewpoint betyder det samme\n4. Viewpoints bruges til at adressere concerns",
        options: [
            "1, 2 og 4",
            "1 og 3",
            "2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Viewpoint definerer perspektivet, view er repræsentationen, og viewpoints adresserer interessenternes concerns."
    },
    {
        question: "Hvilke udsagn om dataarkitektur er korrekte?\n\n1. Dataarkitektur adresserer dataejerskab\n2. Dataarkitektur er kun teknisk\n3. Datamodeller kan være konceptuelle, logiske og fysiske\n4. Dataarkitektur er irrelevant for GDPR",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Ingen"
        ],
        correct: 0,
        explanation: "Dataarkitektur adresserer ejerskab og har forskellige abstraktionsniveauer – den er ikke kun teknisk og er meget relevant for GDPR."
    },
    {
        question: "Hvilke udsagn om applikationsarkitektur er korrekte?\n\n1. Den beskriver applikationer og deres samspil\n2. Den beskriver hardware i detaljer\n3. Den understøtter forretningsprocesser\n4. Den er uafhængig af forretningen",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Applikationsarkitektur beskriver applikationer og deres samspil for at understøtte forretningsprocesser – ikke hardware og ikke uafhængig af forretning."
    },
    {
        question: "Hvilke udsagn om EDA (Event-Driven Architecture) er korrekte?\n\n1. Kommunikation sker via events\n2. Systemer er løst koblede\n3. Alle kald er synkrone\n4. EDA øger fleksibilitet",
        options: [
            "1, 2 og 4",
            "1 og 3",
            "2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "EDA bruger events til kommunikation, giver løs kobling og øger fleksibilitet – kald er typisk asynkrone, ikke synkrone."
    },
    {
        question: "Hvilke udsagn om TOGAF ADM er korrekte?\n\n1. ADM er iterativ\n2. ADM er et programmeringssprog\n3. ADM bruges til arkitekturudvikling\n4. ADM er en datamodel",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "TOGAF ADM er en iterativ metode til arkitekturudvikling – det er hverken et programmeringssprog eller en datamodel."
    },
    {
        question: "Hvilke udsagn om governance er korrekte?\n\n1. Governance handler om styring og beslutninger\n2. Governance erstatter arkitektur\n3. Governance understøtter compliance\n4. Governance er kun teknisk",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Governance handler om styring, beslutninger og compliance – det erstatter ikke arkitektur og er ikke kun teknisk."
    },
    {
        question: "Hvilke udsagn er korrekte?\n\n1. As-is beskriver nuværende arkitektur\n2. To-be beskriver målarkitektur\n3. As-is er irrelevant\n4. To-be bruges til roadmap",
        options: [
            "1 og 2",
            "3 og 4",
            "1, 2 og 4",
            "Alle"
        ],
        correct: 2,
        explanation: "As-is beskriver nuværende situation, to-be beskriver mål, og to-be bruges til roadmap – as-is er ikke irrelevant."
    },
    {
        question: "Hvilke udsagn om arkitekturrammeværker er korrekte?\n\n1. FDA bygger delvist på TOGAF\n2. Rammeværker giver fælles sprog\n3. Rammeværker fjerner behovet for arkitekter\n4. Rammeværker understøtter governance",
        options: [
            "1, 2 og 4",
            "1 og 3",
            "2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "FDA bygger på TOGAF, rammeværker giver fælles sprog og understøtter governance – de fjerner ikke behovet for arkitekter."
    },
    {
        question: "Hvilke udsagn om interessenter er korrekte?\n\n1. Interessenter har concerns\n2. Interessenter er kun tekniske roller\n3. Interessenter påvirkes af arkitektur\n4. Interessenter påvirker arkitektur",
        options: [
            "1, 3 og 4",
            "2 og 3",
            "1 og 2",
            "Alle"
        ],
        correct: 0,
        explanation: "Interessenter har concerns, påvirkes af og påvirker arkitektur – de er ikke kun tekniske roller."
    },
    {
        question: "Hvilke udsagn om value streams er korrekte?\n\n1. Value streams viser værdiskabelse\n2. Value streams er tekniske flows\n3. Value streams er kundecentrerede\n4. Value streams erstatter processer",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Value streams viser værdiskabelse og er kundecentrerede – de er ikke tekniske flows og erstatter ikke processer."
    },
    {
        question: "Hvilke udsagn om systemarkitektur er korrekte?\n\n1. Systemarkitektur fokuserer på ét system\n2. Systemarkitektur ignorerer enterprise-kontekst\n3. Systemarkitektur dækker flere arkitekturlag\n4. Systemarkitektur er kun teknisk",
        options: [
            "1 og 3",
            "2 og 4",
            "1, 2 og 3",
            "Alle"
        ],
        correct: 0,
        explanation: "Systemarkitektur fokuserer på ét system og dækker flere lag – den ignorerer ikke enterprise-kontekst og er ikke kun teknisk."
    }
];

// State
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let userAnswers = new Array(questions.length).fill(null); // Track all answers

// DOM elements
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const answerBtn = document.getElementById('answer-btn');
const skipBtn = document.getElementById('skip-btn');
const feedback = document.getElementById('feedback');
const examContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scorePercentage = document.getElementById('score-percentage');
const scoreCircle = document.getElementById('score-circle');
const resultText = document.getElementById('result-text');
const scoreDetails = document.getElementById('score-details');
const restartBtn = document.getElementById('restart-btn');
const progress = document.getElementById('progress');
const breadcrumbsContainer = document.getElementById('breadcrumbs');

// Initialize
function init() {
    createBreadcrumbs();
    loadQuestion();
    updateProgress();
}

// Create breadcrumb navigation
function createBreadcrumbs() {
    breadcrumbsContainer.innerHTML = '';
    questions.forEach((_, index) => {
        const crumb = document.createElement('button');
        crumb.className = 'breadcrumb';
        crumb.textContent = index + 1;
        crumb.addEventListener('click', () => navigateToQuestion(index));
        breadcrumbsContainer.appendChild(crumb);
    });
    updateBreadcrumbs();
}

// Update breadcrumb states
function updateBreadcrumbs() {
    const crumbs = document.querySelectorAll('.breadcrumb');
    crumbs.forEach((crumb, index) => {
        crumb.classList.remove('active', 'correct', 'incorrect', 'unanswered');
        
        if (index === currentQuestion) {
            crumb.classList.add('active');
        } else if (userAnswers[index] !== null) {
            if (userAnswers[index] === questions[index].correct) {
                crumb.classList.add('correct');
            } else {
                crumb.classList.add('incorrect');
            }
        } else {
            crumb.classList.add('unanswered');
        }
    });
}

// Navigate to a specific question
function navigateToQuestion(index) {
    currentQuestion = index;
    answered = userAnswers[index] !== null;
    selectedAnswer = userAnswers[index];
    loadQuestion();
    updateProgress();
    updateBreadcrumbs();
}

// Load current question
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const q = questions[currentQuestion];
    
    questionNumber.textContent = `Spørgsmål ${currentQuestion + 1} af ${questions.length}`;
    questionText.textContent = q.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    feedback.classList.remove('show', 'correct', 'incorrect');
    
    // Create options
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.id = `option${index}`;
        radio.value = index;
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Restore previous answer if exists
    if (answered && selectedAnswer !== null) {
        document.getElementById(`option${selectedAnswer}`).checked = true;
        document.querySelectorAll('.option')[selectedAnswer].classList.add('selected');
        showFeedbackForAnswer();
        answerBtn.textContent = 'Næste';
        answerBtn.disabled = false;
        skipBtn.style.display = 'none';
    } else {
        answerBtn.textContent = 'Besvar';
        answerBtn.disabled = true;
        skipBtn.style.display = 'inline-block';
    }
}

// Show feedback for already answered question
function showFeedbackForAnswer() {
    const q = questions[currentQuestion];
    const isCorrect = selectedAnswer === q.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach((opt, index) => {
        opt.classList.add('disabled');
        if (index === q.correct) {
            opt.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    feedback.classList.add('show');
    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.innerHTML = `<strong>✓ Korrekt!</strong><br><span class="explanation">${q.explanation}</span>`;
    } else {
        feedback.classList.add('incorrect');
        feedback.innerHTML = `<strong>✗ Forkert.</strong> Det rigtige svar er: ${String.fromCharCode(65 + q.correct)}<br><span class="explanation">${q.explanation}</span>`;
    }
    
    answerBtn.textContent = currentQuestion === questions.length - 1 ? 'Se Resultat' : 'Næste';
    skipBtn.style.display = 'none';
}

// Select an option
function selectOption(index, optionDiv) {
    if (answered) return;
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark as selected
    optionDiv.classList.add('selected');
    selectedAnswer = index;
    
    // Check the radio button
    document.getElementById(`option${index}`).checked = true;
    
    // Enable answer button
    answerBtn.disabled = false;
}

// Answer button handler
answerBtn.addEventListener('click', () => {
    if (!answered && selectedAnswer !== null) {
        checkAnswer();
        answerBtn.textContent = 'Næste';
        skipBtn.style.display = 'none';
    } else if (answered) {
        // Move to next question
        currentQuestion++;
        selectedAnswer = null;
        answered = false;
        loadQuestion();
        updateProgress();
        updateBreadcrumbs();
    }
});

// Skip button handler
skipBtn.addEventListener('click', () => {
    // Move to next question without answering
    currentQuestion++;
    selectedAnswer = null;
    answered = false;
    loadQuestion();
    updateProgress();
    updateBreadcrumbs();
});

// Check answer
function checkAnswer() {
    if (selectedAnswer === null) return;
    
    answered = true;
    userAnswers[currentQuestion] = selectedAnswer;
    const q = questions[currentQuestion];
    const isCorrect = selectedAnswer === q.correct;
    
    if (isCorrect) {
        score++;
    }
    
    updateBreadcrumbs();
    
    // Show feedback
    const options = document.querySelectorAll('.option');
    options.forEach((opt, index) => {
        opt.classList.add('disabled');
        if (index === q.correct) {
            opt.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    feedback.classList.add('show');
    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.innerHTML = `<strong>✓ Korrekt!</strong><br><span class="explanation">${q.explanation}</span>`;
    } else {
        feedback.classList.add('incorrect');
        feedback.innerHTML = `<strong>✗ Forkert.</strong> Det rigtige svar er: ${String.fromCharCode(65 + q.correct)}<br><span class="explanation">${q.explanation}</span>`;
    }
    
    answerBtn.textContent = currentQuestion === questions.length - 1 ? 'Se Resultat' : 'Næste spørgsmål';
    skipBtn.style.display = 'none';
}

// Update progress bar
function updateProgress() {
    const percent = ((currentQuestion) / questions.length) * 100;
    progress.style.width = `${percent}%`;
}

// Show results
function showResults() {
    examContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 65;
    
    scorePercentage.textContent = `${percentage}%`;
    scoreCircle.classList.add(passed ? 'passed' : 'failed');
    
    resultText.textContent = passed ? '🎉 Tillykke! Du har bestået!' : 'Desværre ikke bestået';
    resultText.classList.add(passed ? 'passed' : 'failed');
    
    scoreDetails.textContent = `Du fik ${score} ud af ${questions.length} rigtige (${percentage}%). Du skal have mindst 65% for at bestå.`;
    
    progress.style.width = '100%';
}

// Restart exam
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    userAnswers = new Array(questions.length).fill(null);
    
    examContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    scoreCircle.classList.remove('passed', 'failed');
    resultText.classList.remove('passed', 'failed');
    
    createBreadcrumbs();
    loadQuestion();
    updateProgress();
});

// QR Code overlay functionality
const shareBtn = document.getElementById('share-btn');
const qrOverlay = document.getElementById('qr-overlay');
const qrClose = document.querySelector('.qr-close');

shareBtn.addEventListener('click', () => {
    qrOverlay.classList.remove('hidden');
});

qrClose.addEventListener('click', () => {
    qrOverlay.classList.add('hidden');
});

qrOverlay.addEventListener('click', (e) => {
    if (e.target === qrOverlay) {
        qrOverlay.classList.add('hidden');
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !qrOverlay.classList.contains('hidden')) {
        qrOverlay.classList.add('hidden');
    }
});

// Start the exam
init();
