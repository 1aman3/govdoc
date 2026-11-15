const documentTypeSelect = document.getElementById('document-type');
const actionSelect = document.getElementById('action-type');
const processToggle = document.getElementById('process-type');
const processLabel = document.getElementById('process-label');
const languageToggle = document.getElementById('language-toggle');
const guideDisplay = document.getElementById('guide-display');
const checklistProgress = new Map();

let currentLanguage = 'en';

const interfaceText = {
    en: {
        brand: 'Citizen Document Guide',
        introEyebrow: 'INDIA · PUBLIC SERVICES',
        introTitle: 'Find your document application steps',
        introDescription: 'Choose a document and service to see what to prepare and what to do next.',
        selectionHeading: 'Choose a service',
        document: 'Document',
        action: 'What do you need to do?',
        actions: ['New Application', 'Update/Correction', 'Surrender/Cancel'],
        modeLegend: 'Preferred process',
        guidanceNote: 'Always confirm the latest requirements on the official service portal.',
        guideEyebrow: 'APPLICATION GUIDE',
        requiredDocuments: 'Required Documents',
        officialPortal: 'Official Portal',
        offlineOffice: 'Offline Office',
        fees: 'Fees',
        estimatedTime: 'Estimated Time',
        steps: 'Steps',
        online: 'Online Process',
        offline: 'Offline Process',
        print: 'Print / Save PDF Guide',
        switchLanguage: 'Switch language to Hindi',
        notesTitle: 'Common Mistakes / Important Notes',
        tutorial: 'Watch Step-by-Step Video Tutorial (YouTube)',
        officialChannel: 'Official Gov Channel',
        navigation: 'Portal navigation',
        importantWarning: 'Important warning',
        rejectionHeading: 'Common rejection / query reasons and prevention',
        progress: (checked, total) => `${checked} of ${total} documents checked`,
        ready: 'Ready to Apply',
        notes: [
            'Upload rules vary by service. Where accepted, keep PDF files under 2 MB and JPEG images under 200 KB; confirm the current limits on the official portal.',
            'Use clear, complete scans and make sure the name and other details match your supporting records. Never share an OTP with anyone.'
        ]
    },
    hi: {
        brand: 'नागरिक दस्तावेज़ मार्गदर्शिका',
        introEyebrow: 'भारत · सार्वजनिक सेवाएँ',
        introTitle: 'अपने दस्तावेज़ आवेदन की प्रक्रिया जानें',
        introDescription: 'तैयारी और अगले चरण देखने के लिए दस्तावेज़ और सेवा चुनें।',
        selectionHeading: 'सेवा चुनें',
        document: 'दस्तावेज़',
        action: 'आपको क्या करना है?',
        actions: ['नया आवेदन', 'अपडेट/सुधार', 'सरेंडर/रद्द'],
        modeLegend: 'पसंदीदा प्रक्रिया',
        guidanceNote: 'आधिकारिक सेवा पोर्टल पर नवीनतम आवश्यकताओं की पुष्टि अवश्य करें।',
        guideEyebrow: 'आवेदन मार्गदर्शिका',
        requiredDocuments: 'आवश्यक दस्तावेज़',
        officialPortal: 'आधिकारिक पोर्टल',
        offlineOffice: 'ऑफलाइन कार्यालय',
        fees: 'शुल्क',
        estimatedTime: 'अनुमानित समय',
        steps: 'चरण',
        online: 'ऑनलाइन प्रक्रिया',
        offline: 'ऑफलाइन प्रक्रिया',
        print: 'गाइड प्रिंट / PDF में सहेजें',
        switchLanguage: 'भाषा अंग्रेज़ी में बदलें',
        notesTitle: 'सामान्य गलतियाँ / महत्वपूर्ण बातें',
        tutorial: 'चरण-दर-चरण वीडियो ट्यूटोरियल देखें (YouTube)',
        officialChannel: 'आधिकारिक सरकारी चैनल',
        navigation: 'पोर्टल नेविगेशन',
        importantWarning: 'महत्वपूर्ण चेतावनी',
        rejectionHeading: 'अस्वीकृति/आपत्ति के सामान्य कारण और बचाव',
        progress: (checked, total) => `${total} में से ${checked} दस्तावेज़ चिह्नित`,
        ready: 'आवेदन के लिए तैयार',
        notes: [
            'अपलोड नियम सेवा के अनुसार अलग होते हैं। जहाँ स्वीकार हों, PDF फ़ाइल 2 MB से कम और JPEG तस्वीर 200 KB से कम रखें; मौजूदा सीमा आधिकारिक पोर्टल पर जाँचें।',
            'साफ़ और पूरे स्कैन का उपयोग करें तथा नाम और अन्य विवरण सहायक दस्तावेज़ से मिलाएँ। किसी के साथ OTP साझा न करें।'
        ]
    }
};

const documentNotes = {
    aadhaar: {
        en: {
            new: 'New enrolment requires an in-person visit for biometrics; do not look for an online enrolment form.',
            update: 'Online document upload is not the same as changing demographic details; biometric changes require an in-person visit.',
            surrender: 'Aadhaar biometrics can be locked for security; this does not cancel or deactivate the Aadhaar number.'
        },
        hi: {
            new: 'नए नामांकन में बायोमेट्रिक्स के लिए केंद्र जाना अनिवार्य है; ऑनलाइन नामांकन फॉर्म न खोजें।',
            update: 'ऑनलाइन दस्तावेज़ अपलोड करना जनसांख्यिकीय विवरण बदलने से अलग है; बायोमेट्रिक बदलाव के लिए केंद्र जाना होगा।',
            surrender: 'सुरक्षा के लिए आधार बायोमेट्रिक्स लॉक किए जा सकते हैं; इससे आधार संख्या रद्द या निष्क्रिय नहीं होती।'
        }
    },
    pan: {
        en: {
            new: 'An individual must not hold more than one PAN. Check Instant e-PAN eligibility before starting another application.',
            update: 'Correct your existing PAN instead of applying for a second one; holding duplicate PANs can attract a penalty.',
            surrender: 'Clearly identify the PAN to retain and the duplicate to cancel; do not surrender the PAN you use for tax records.'
        },
        hi: {
            new: 'एक व्यक्ति के पास एक से अधिक PAN नहीं होने चाहिए। नया आवेदन करने से पहले Instant e-PAN की पात्रता जाँचें।',
            update: 'दूसरा PAN आवेदन करने के बजाय मौजूदा PAN सुधारें; डुप्लिकेट PAN रखने पर जुर्माना लग सकता है।',
            surrender: 'जिस PAN को रखना है और जिस डुप्लिकेट को रद्द करना है, उन्हें स्पष्ट बताएँ; कर रिकॉर्ड वाला PAN सरेंडर न करें।'
        }
    },
    passport: {
        en: {
            new: 'Choose Normal or Tatkaal only after checking eligibility and appointment availability; carry originals for verification.',
            update: 'Select Re-issue, not Fresh Passport, when renewing or changing details on an existing passport.',
            surrender: 'Surrender the Indian passport after acquiring foreign citizenship; do not use it for travel after it is cancelled.'
        },
        hi: {
            new: 'पात्रता और अपॉइंटमेंट उपलब्धता जाँचकर ही Normal या Tatkaal चुनें; सत्यापन के लिए मूल दस्तावेज़ ले जाएँ।',
            update: 'मौजूदा पासपोर्ट के नवीनीकरण या विवरण बदलाव के लिए Fresh Passport नहीं, Re-issue चुनें।',
            surrender: 'विदेशी नागरिकता मिलने के बाद भारतीय पासपोर्ट सरेंडर करें; रद्द होने के बाद यात्रा के लिए उसका उपयोग न करें।'
        }
    },
    voter: {
        en: {
            new: 'Register at your ordinary residence and check the electoral roll before submitting a new registration to avoid duplicate entries.',
            update: 'Use Form 8 for a correction or address shift; do not submit multiple requests for the same change.',
            surrender: 'Submit a deletion request only with accurate details; the ERO may verify the reason before removing an entry.'
        },
        hi: {
            new: 'अपने सामान्य निवास पर पंजीकरण करें और डुप्लिकेट प्रविष्टि से बचने के लिए नया आवेदन देने से पहले मतदाता सूची जाँचें।',
            update: 'सुधार या पता बदलने के लिए Form 8 का उपयोग करें; एक ही बदलाव के लिए कई आवेदन न दें।',
            surrender: 'नाम हटाने का अनुरोध सही विवरण के साथ ही दें; प्रविष्टि हटाने से पहले ERO कारण की जाँच कर सकता है।'
        }
    },
    drivingLicence: {
        en: {
            new: 'Fees, test slots and vehicle-class requirements vary by state. Do not drive alone on a learner licence; follow its conditions.',
            update: 'Renew before expiry where possible and verify state-specific medical certificate and test requirements.',
            surrender: 'Do not drive after surrender/cancellation; ask the RTO for written confirmation of the licence status.'
        },
        hi: {
            new: 'शुल्क, टेस्ट स्लॉट और वाहन श्रेणी की शर्तें राज्य के अनुसार अलग होती हैं। लर्नर लाइसेंस की शर्तें मानें।',
            update: 'संभव हो तो समाप्ति से पहले नवीनीकरण करें और राज्य की चिकित्सा प्रमाणपत्र/टेस्ट आवश्यकताएँ जाँचें।',
            surrender: 'सरेंडर/रद्द होने के बाद वाहन न चलाएँ; RTO से लाइसेंस स्थिति की लिखित पुष्टि लें।'
        }
    }
};

const actionNotes = {
    en: {
        new: 'Check that you meet the eligibility criteria before paying or booking an appointment.',
        update: 'Enter details exactly as they appear on your supporting proof and review the form before submitting.',
        surrender: 'Keep a copy of your request and acknowledgement; complete the process only through the responsible official authority.'
    },
    hi: {
        new: 'शुल्क देने या अपॉइंटमेंट लेने से पहले अपनी पात्रता जाँचें।',
        update: 'सहायक प्रमाण के अनुसार बिल्कुल वही विवरण भरें और जमा करने से पहले फॉर्म जाँचें।',
        surrender: 'अनुरोध और पावती की प्रति रखें; प्रक्रिया केवल संबंधित आधिकारिक प्राधिकरण से पूरी करें।'
    }
};

function addDetail(container, label, value) {
    const paragraph = document.createElement('p');
    const heading = document.createElement('strong');
    heading.textContent = `${label}: `;
    paragraph.append(heading, document.createTextNode(value));
    container.replaceChildren(paragraph);
}

function makeList(items) {
    const list = document.createElement('ul');
    items.forEach(value => {
        const item = document.createElement('li');
        item.textContent = value;
        list.append(item);
    });
    return list;
}

function renderTutorial(guide, text) {
    const tutorial = document.getElementById('video-tutorial');
    const heading = document.createElement('h3');
    heading.id = 'video-heading';
    heading.textContent = currentLanguage === 'en'
        ? 'Learn the process before you apply'
        : 'आवेदन से पहले प्रक्रिया समझें';

    const description = document.createElement('p');
    description.textContent = currentLanguage === 'en'
        ? 'Video results are searched on YouTube. Check the publisher and use official government guidance where available.'
        : 'वीडियो परिणाम YouTube पर खोजे जाएँगे। प्रकाशक की जाँच करें और उपलब्ध होने पर आधिकारिक सरकारी जानकारी चुनें।';

    const actions = document.createElement('div');
    actions.className = 'video-actions';
    [
        [text.tutorial, guide.youtubeSearchUrl, 'button button-primary'],
        [text.officialChannel, guide.officialChannelUrl, 'button button-secondary']
    ].forEach(([label, url, className]) => {
        const link = document.createElement('a');
        link.className = className;
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = label;
        actions.append(link);
    });
    tutorial.replaceChildren(heading, description, actions);
}

function renderSpecifications(guide) {
    const container = document.getElementById('procedure-specifications');
    const specification = guide.uploadSpecifications || guide.officeWorkflow;
    const title = document.createElement('h3');
    title.textContent = specification.heading;
    const intro = document.createElement('p');
    intro.className = 'specification-intro';
    intro.textContent = specification.introduction;
    container.classList.toggle('upload-specifications', Boolean(guide.uploadSpecifications));
    container.classList.toggle('office-workflow', Boolean(guide.officeWorkflow));
    container.replaceChildren(title, intro, makeList(specification.items));
}

function renderSteps(guide, text) {
    const stepsContainer = guideDisplay.querySelector('#steps');
    const stepsHeading = document.createElement('h3');
    stepsHeading.id = 'steps-heading';
    stepsHeading.textContent = text.steps;
    const stepsList = document.createElement('ol');

    guide.steps.forEach(step => {
        const item = document.createElement('li');
        item.className = 'procedure-step';
        const title = document.createElement('h4');
        title.textContent = step.title;
        const navigationLabel = document.createElement('strong');
        navigationLabel.textContent = `${text.navigation}: `;
        const navigation = document.createElement('p');
        navigation.className = 'navigation-path';
        navigation.append(navigationLabel, document.createTextNode(step.navigationPath));
        const details = document.createElement('p');
        details.textContent = step.details;
        item.append(title, navigation, details, makeList(step.substeps));

        if (step.warning) {
            const warning = document.createElement('aside');
            warning.className = 'step-warning';
            warning.setAttribute('role', 'note');
            const warningLabel = document.createElement('strong');
            warningLabel.textContent = `${text.importantWarning}: `;
            warning.append(warningLabel, document.createTextNode(step.warning));
            item.append(warning);
        }
        stepsList.append(item);
    });
    stepsContainer.replaceChildren(stepsHeading, stepsList);
}

function renderPostSubmission(guide, text) {
    const container = document.getElementById('post-submission');
    const trackingHeading = document.createElement('h3');
    trackingHeading.id = 'tracking-heading';
    trackingHeading.textContent = guide.trackingProcess.heading;
    const trackingList = document.createElement('ol');
    guide.trackingProcess.stages.forEach(([stage, details]) => {
        const item = document.createElement('li');
        const title = document.createElement('strong');
        title.textContent = `${stage}: `;
        item.append(title, document.createTextNode(details));
        trackingList.append(item);
    });

    const rejectionHeading = document.createElement('h3');
    rejectionHeading.className = 'rejection-heading';
    rejectionHeading.textContent = text.rejectionHeading;
    const rejectionList = document.createElement('ol');
    rejectionList.className = 'rejection-list';
    guide.rejectionReasons.forEach(([reason, prevention]) => {
        const item = document.createElement('li');
        const reasonText = document.createElement('strong');
        reasonText.textContent = reason;
        const preventionText = document.createElement('p');
        preventionText.textContent = prevention;
        item.append(reasonText, preventionText);
        rejectionList.append(item);
    });
    container.replaceChildren(trackingHeading, trackingList, rejectionHeading, rejectionList);
}

function updateChecklistStatus(statusElement, checklistKey, total, text) {
    const checked = checklistProgress.get(checklistKey) || new Set();
    const complete = total > 0 && checked.size === total;
    statusElement.textContent = complete ? text.ready : text.progress(checked.size, total);
    statusElement.classList.toggle('is-ready', complete);
}

function updateInterfaceLabels(text) {
    document.getElementById('brand-label').textContent = text.brand;
    document.getElementById('intro-eyebrow').textContent = text.introEyebrow;
    document.getElementById('intro-title').textContent = text.introTitle;
    document.getElementById('intro-description').textContent = text.introDescription;
    document.getElementById('selection-heading').textContent = text.selectionHeading;
    document.getElementById('document-label').textContent = text.document;
    document.getElementById('action-label').textContent = text.action;
    document.getElementById('mode-legend').textContent = text.modeLegend;
    document.getElementById('guidance-note').textContent = text.guidanceNote;
    document.getElementById('guide-eyebrow').textContent = text.guideEyebrow;
    document.getElementById('print-guide').textContent = text.print;
    languageToggle.textContent = currentLanguage === 'en' ? 'हिं' : 'EN';
    languageToggle.setAttribute('aria-label', text.switchLanguage);

    Array.from(documentTypeSelect.options).forEach((option, index) => {
        option.textContent = text.documents[index];
    });
    Array.from(actionSelect.options).forEach((option, index) => {
        option.textContent = text.actions[index];
    });
}

function updateDisplay() {
    const selectedDocument = documentTypeSelect.value;
    const selectedAction = actionSelect.value;
    const mode = processToggle.checked ? 'online' : 'offline';
    const guide = documentData[selectedDocument][currentLanguage][selectedAction][mode];
    const text = interfaceText[currentLanguage];

    document.documentElement.lang = currentLanguage;
    updateInterfaceLabels(text);
    processLabel.textContent = text[mode];
    guideDisplay.querySelector('#guide-title').textContent = guide.title;
    renderTutorial(guide, text);
    renderSpecifications(guide);

    const checklistKey = `${selectedDocument}:${selectedAction}:${mode}`;
    const checked = checklistProgress.get(checklistKey) || new Set();
    const requiredDocuments = guideDisplay.querySelector('#required-documents');
    const checklist = document.createElement('fieldset');
    checklist.className = 'document-checklist';
    const documentsHeading = document.createElement('legend');
    documentsHeading.id = 'documents-heading';
    documentsHeading.textContent = text.requiredDocuments;
    checklist.append(documentsHeading);

    guide.requiredDocuments.forEach((documentName, index) => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        const description = document.createElement('span');
        checkbox.type = 'checkbox';
        checkbox.checked = checked.has(index);
        checkbox.addEventListener('change', () => {
            const currentChecked = checklistProgress.get(checklistKey) || new Set();
            if (checkbox.checked) {
                currentChecked.add(index);
            } else {
                currentChecked.delete(index);
            }
            checklistProgress.set(checklistKey, currentChecked);
            updateChecklistStatus(status, checklistKey, guide.requiredDocuments.length, text);
        });
        description.textContent = documentName;
        label.append(checkbox, description);
        checklist.append(label);
    });

    const status = document.createElement('p');
    status.className = 'checklist-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    updateChecklistStatus(status, checklistKey, guide.requiredDocuments.length, text);
    requiredDocuments.replaceChildren(checklist, status);

    const portal = document.createElement('p');
    const portalLabel = document.createElement('strong');
    portalLabel.textContent = `${text.officialPortal}: `;
    portal.append(portalLabel);
    const portalUrlPattern = /https?:\/\/[^\s)]+/g;
    let previousIndex = 0;
    let portalUrl;
    while ((portalUrl = portalUrlPattern.exec(guide.officialPortal)) !== null) {
        portal.append(document.createTextNode(guide.officialPortal.slice(previousIndex, portalUrl.index)));
        const portalLink = document.createElement('a');
        portalLink.href = portalUrl[0];
        portalLink.target = '_blank';
        portalLink.rel = 'noopener noreferrer';
        portalLink.textContent = portalUrl[0];
        portal.append(portalLink);
        previousIndex = portalUrlPattern.lastIndex;
    }
    portal.append(document.createTextNode(guide.officialPortal.slice(previousIndex)));
    guideDisplay.querySelector('#official-portal').replaceChildren(portal);

    addDetail(guideDisplay.querySelector('#offline-office'), text.offlineOffice, guide.offlineOffice);
    addDetail(guideDisplay.querySelector('#fees'), text.fees, guide.fees);
    addDetail(guideDisplay.querySelector('#estimated-time'), text.estimatedTime, guide.estimatedTime);

    const notesContainer = guideDisplay.querySelector('#important-notes');
    const notesHeading = document.createElement('h3');
    notesHeading.id = 'notes-heading';
    notesHeading.textContent = text.notesTitle;
    const notesList = document.createElement('ul');
    [
        ...text.notes,
        documentNotes[selectedDocument][currentLanguage][selectedAction],
        actionNotes[currentLanguage][selectedAction]
    ].forEach(note => {
        const item = document.createElement('li');
        item.textContent = note;
        notesList.append(item);
    });
    notesContainer.replaceChildren(notesHeading, notesList);

    renderSteps(guide, text);
    renderPostSubmission(guide, text);
}

interfaceText.en.documents = ['Aadhaar Card', 'PAN Card', 'Passport', 'Voter ID (EPIC)', 'Driving Licence'];
interfaceText.hi.documents = ['आधार कार्ड', 'PAN कार्ड', 'पासपोर्ट', 'मतदाता पहचान पत्र (EPIC)', 'ड्राइविंग लाइसेंस'];

documentTypeSelect.addEventListener('change', updateDisplay);
actionSelect.addEventListener('change', updateDisplay);
processToggle.addEventListener('change', updateDisplay);
languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    updateDisplay();
});
document.getElementById('print-guide').addEventListener('click', () => window.print());

updateDisplay();
