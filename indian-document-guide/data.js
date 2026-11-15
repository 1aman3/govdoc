const documentData = {
    aadhaar: {
        en: {
            new: {
                online: {
                    title: "New Aadhaar Enrolment",
                    requiredDocuments: ["Proof of Identity", "Proof of Address", "Proof of Date of Birth (as applicable)"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "Aadhaar Seva Kendra (ASK)",
                    fees: "Free. Online enrolment is not available; biometrics must be captured in person.",
                    estimatedTime: "One centre visit; Aadhaar generation and delivery take additional time.",
                    steps: [
                        "New enrolment cannot be completed online because fingerprints, iris scans and a photograph must be captured in person.",
                        "Use the myAadhaar portal to locate an Aadhaar Seva Kendra and check whether an appointment is available.",
                        "Carry original supporting documents for verification and visit the ASK at the booked time.",
                        "Complete the enrolment form; the operator will verify your documents and capture your demographic details and biometrics.",
                        "Check the details on screen before confirming, then collect the acknowledgement slip with your Enrolment ID to track status."
                    ]
                },
                offline: {
                    title: "New Aadhaar Enrolment",
                    requiredDocuments: ["Proof of Identity", "Proof of Address", "Proof of Date of Birth (as applicable)"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "Aadhaar Seva Kendra (ASK)",
                    fees: "Free.",
                    estimatedTime: "One centre visit; Aadhaar generation and delivery take additional time.",
                    steps: [
                        "Locate an Aadhaar Seva Kendra (ASK) using the myAadhaar portal and book an appointment if the centre offers one.",
                        "Take your original supporting documents to the ASK for verification.",
                        "Fill in the enrolment form with your name, date of birth, address and contact details.",
                        "Have your photograph, fingerprints and iris scans captured; biometrics make new enrolment an in-person process.",
                        "Review the entered details, submit the enrolment and collect the acknowledgement slip with your Enrolment ID."
                    ]
                }
            },
            update: {
                online: {
                    title: "Update Aadhaar Details",
                    requiredDocuments: ["Aadhaar number and registered mobile for OTP", "Valid supporting document for the demographic detail being updated"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "Aadhaar Seva Kendra (ASK) for biometric changes or updates not available online",
                    fees: "Demographic update at a centre: ₹75. Biometric update at a centre: ₹125. Online document upload for document update is free till June 2027.",
                    estimatedTime: "Online submission takes a few minutes; review and processing take additional time.",
                    steps: [
                        "Sign in to myAadhaar with your Aadhaar number and the OTP sent to your registered mobile.",
                        "Choose the demographic detail or document-update service currently available online; biometric changes cannot be completed online.",
                        "Enter the corrected information exactly as it appears on your supporting document, or upload the requested proof for document update.",
                        "Review the entry, submit the request and save the Service Request Number (SRN) for tracking.",
                        "Online document upload is free till June 2027. For an actual demographic change or any biometric update, book or visit an ASK; centre fees are ₹75 for demographic and ₹125 for biometric updates."
                    ]
                },
                offline: {
                    title: "Update Aadhaar Details",
                    requiredDocuments: ["Aadhaar number or Aadhaar card", "Original supporting document for demographic changes"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "Aadhaar Seva Kendra (ASK)",
                    fees: "₹75 for a demographic update; ₹125 for a biometric update. Online document upload is free till June 2027.",
                    estimatedTime: "One centre visit; processing time varies by request.",
                    steps: [
                        "Locate an Aadhaar Seva Kendra on myAadhaar and make an appointment where available.",
                        "Carry your Aadhaar details and original proof for any demographic change; visit the ASK for biometric changes.",
                        "Ask the operator to select the required demographic or biometric update and verify the information entered.",
                        "Pay the applicable centre fee: ₹75 for a demographic update or ₹125 for a biometric update.",
                        "Collect the acknowledgement slip with the update request number and use it to check status."
                    ]
                }
            },
            surrender: {
                online: {
                    title: "Lock or Deactivate Aadhaar Biometrics",
                    requiredDocuments: ["Aadhaar number", "Registered mobile number for OTP"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "Aadhaar Seva Kendra (ASK) for help if online access is unavailable",
                    fees: "Free.",
                    estimatedTime: "A few minutes online.",
                    steps: [
                        "Open the myAadhaar portal and sign in using your Aadhaar number and registered mobile OTP.",
                        "Choose the biometric lock/unlock service and read the on-screen information about the effect of locking biometrics.",
                        "Confirm the request using the required OTP or authentication.",
                        "Save or note the confirmation and check the service status on the portal.",
                        "To use fingerprint or iris authentication later, return to the same service and unlock biometrics as instructed."
                    ]
                },
                offline: {
                    title: "Lock or Deactivate Aadhaar Biometrics",
                    requiredDocuments: ["Aadhaar number or Aadhaar card", "Registered mobile number, if available"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "Aadhaar Seva Kendra (ASK) for assistance; the lock/deactivate service itself is free on myAadhaar",
                    fees: "Free.",
                    estimatedTime: "Usually a few minutes with portal access; assistance time varies.",
                    steps: [
                        "Biometric locking is a digital UIDAI service; an ASK can help you access the service but does not replace the online request.",
                        "At an ASK, request guidance to open the official myAadhaar biometric lock service.",
                        "Authenticate with your Aadhaar number and registered mobile OTP as prompted.",
                        "Confirm the biometric lock and keep the on-screen confirmation for your records.",
                        "Use the portal to unlock biometrics whenever you need fingerprint or iris authentication again."
                    ]
                }
            }
        },
        hi: {
            new: {
                online: {
                    title: "नया आधार नामांकन",
                    requiredDocuments: ["पहचान का प्रमाण", "पते का प्रमाण", "जन्म तिथि का प्रमाण (जहाँ लागू हो)"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "आधार सेवा केंद्र (ASK)",
                    fees: "निःशुल्क। ऑनलाइन नामांकन उपलब्ध नहीं है; बायोमेट्रिक्स केंद्र पर दर्ज करना अनिवार्य है।",
                    estimatedTime: "केंद्र पर एक बार जाना होगा; आधार बनने और मिलने में अतिरिक्त समय लगेगा।",
                    steps: [
                        "नया नामांकन ऑनलाइन पूरा नहीं हो सकता, क्योंकि उंगलियों के निशान, आइरिस स्कैन और फोटो केंद्र पर ही लिए जाते हैं।",
                        "आधार सेवा केंद्र खोजने और उपलब्ध होने पर अपॉइंटमेंट लेने के लिए myAadhaar पोर्टल खोलें।",
                        "मूल सहायक दस्तावेज लेकर निर्धारित समय पर ASK जाएँ।",
                        "नामांकन फॉर्म भरें; ऑपरेटर दस्तावेज सत्यापित करके जनसांख्यिकीय विवरण और बायोमेट्रिक्स दर्ज करेगा।",
                        "पुष्टि से पहले स्क्रीन पर विवरण जाँचें और ट्रैकिंग के लिए Enrolment ID वाली पावती लें।"
                    ]
                },
                offline: {
                    title: "नया आधार नामांकन",
                    requiredDocuments: ["पहचान का प्रमाण", "पते का प्रमाण", "जन्म तिथि का प्रमाण (जहाँ लागू हो)"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "आधार सेवा केंद्र (ASK)",
                    fees: "निःशुल्क।",
                    estimatedTime: "केंद्र पर एक बार जाना होगा; आधार बनने और मिलने में अतिरिक्त समय लगेगा।",
                    steps: [
                        "myAadhaar पोर्टल से आधार सेवा केंद्र खोजें और उपलब्ध हो तो अपॉइंटमेंट लें।",
                        "सत्यापन के लिए मूल सहायक दस्तावेज ASK पर ले जाएँ।",
                        "नाम, जन्म तिथि, पता और संपर्क विवरण वाला नामांकन फॉर्म भरें।",
                        "फोटो, उंगलियों के निशान और आइरिस स्कैन दर्ज कराएँ; इसलिए नया नामांकन व्यक्तिगत रूप से करना अनिवार्य है।",
                        "दर्ज विवरण जाँचकर नामांकन जमा करें और Enrolment ID वाली पावती प्राप्त करें।"
                    ]
                }
            },
            update: {
                online: {
                    title: "आधार विवरण अपडेट",
                    requiredDocuments: ["आधार संख्या और OTP के लिए पंजीकृत मोबाइल", "अपडेट किए जाने वाले जनसांख्यिकीय विवरण का वैध सहायक दस्तावेज"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "बायोमेट्रिक बदलाव या ऑनलाइन उपलब्ध न होने वाले अपडेट के लिए आधार सेवा केंद्र (ASK)",
                    fees: "केंद्र पर जनसांख्यिकीय अपडेट: ₹75। बायोमेट्रिक अपडेट: ₹125। दस्तावेज अपडेट के लिए ऑनलाइन अपलोड जून 2027 तक निःशुल्क है।",
                    estimatedTime: "ऑनलाइन आवेदन में कुछ मिनट; जाँच और प्रक्रिया में अतिरिक्त समय।",
                    steps: [
                        "आधार संख्या और पंजीकृत मोबाइल पर आए OTP से myAadhaar में साइन इन करें।",
                        "वर्तमान में ऑनलाइन उपलब्ध जनसांख्यिकीय या दस्तावेज अपडेट सेवा चुनें; बायोमेट्रिक बदलाव ऑनलाइन नहीं किए जा सकते।",
                        "सहायक दस्तावेज के अनुसार सही विवरण दर्ज करें या दस्तावेज अपडेट के लिए माँगा गया प्रमाण अपलोड करें।",
                        "जानकारी जाँचकर अनुरोध जमा करें और ट्रैकिंग के लिए Service Request Number (SRN) सुरक्षित रखें।",
                        "दस्तावेज अपलोड जून 2027 तक निःशुल्क है। वास्तविक जनसांख्यिकीय बदलाव या बायोमेट्रिक अपडेट के लिए ASK जाएँ; केंद्र शुल्क क्रमशः ₹75 और ₹125 है।"
                    ]
                },
                offline: {
                    title: "आधार विवरण अपडेट",
                    requiredDocuments: ["आधार संख्या या आधार कार्ड", "जनसांख्यिकीय बदलाव के लिए मूल सहायक दस्तावेज"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "आधार सेवा केंद्र (ASK)",
                    fees: "जनसांख्यिकीय अपडेट ₹75; बायोमेट्रिक अपडेट ₹125। ऑनलाइन दस्तावेज अपलोड जून 2027 तक निःशुल्क है।",
                    estimatedTime: "केंद्र पर एक बार जाना होगा; प्रक्रिया का समय अनुरोध के अनुसार अलग हो सकता है।",
                    steps: [
                        "myAadhaar पर आधार सेवा केंद्र खोजें और उपलब्ध होने पर अपॉइंटमेंट लें।",
                        "आधार विवरण और जनसांख्यिकीय बदलाव का मूल प्रमाण साथ ले जाएँ; बायोमेट्रिक बदलाव के लिए ASK जाएँ।",
                        "ऑपरेटर से आवश्यक जनसांख्यिकीय या बायोमेट्रिक अपडेट चुनवाएँ और दर्ज जानकारी जाँचें।",
                        "केंद्र पर लागू शुल्क दें: जनसांख्यिकीय अपडेट के लिए ₹75 या बायोमेट्रिक अपडेट के लिए ₹125।",
                        "अनुरोध संख्या वाली पावती लें और उससे स्थिति जाँचें।"
                    ]
                }
            },
            surrender: {
                online: {
                    title: "आधार बायोमेट्रिक्स लॉक या निष्क्रिय करें",
                    requiredDocuments: ["आधार संख्या", "OTP के लिए पंजीकृत मोबाइल नंबर"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "ऑनलाइन उपयोग में सहायता के लिए आधार सेवा केंद्र (ASK)",
                    fees: "निःशुल्क।",
                    estimatedTime: "ऑनलाइन कुछ मिनट।",
                    steps: [
                        "myAadhaar पोर्टल खोलें और आधार संख्या तथा पंजीकृत मोबाइल OTP से साइन इन करें।",
                        "बायोमेट्रिक लॉक/अनलॉक सेवा चुनें और लॉक करने का प्रभाव पढ़ें।",
                        "माँगा गया OTP या प्रमाणीकरण देकर अनुरोध की पुष्टि करें।",
                        "पुष्टि सुरक्षित रखें और पोर्टल पर सेवा की स्थिति जाँचें।",
                        "बाद में फिंगरप्रिंट या आइरिस प्रमाणीकरण चाहिए तो इसी सेवा से निर्देशानुसार बायोमेट्रिक्स अनलॉक करें।"
                    ]
                },
                offline: {
                    title: "आधार बायोमेट्रिक्स लॉक या निष्क्रिय करें",
                    requiredDocuments: ["आधार संख्या या आधार कार्ड", "यदि उपलब्ध हो तो पंजीकृत मोबाइल नंबर"],
                    officialPortal: "https://myaadhaar.uidai.gov.in",
                    offlineOffice: "सहायता के लिए आधार सेवा केंद्र (ASK); लॉक/निष्क्रिय सेवा myAadhaar पर निःशुल्क है",
                    fees: "निःशुल्क।",
                    estimatedTime: "पोर्टल उपलब्ध होने पर आम तौर पर कुछ मिनट; सहायता का समय अलग हो सकता है।",
                    steps: [
                        "बायोमेट्रिक लॉक UIDAI की डिजिटल सेवा है; ASK पोर्टल उपयोग में मदद कर सकता है, लेकिन अनुरोध ऑनलाइन ही करना होगा।",
                        "ASK पर आधिकारिक myAadhaar बायोमेट्रिक लॉक सेवा खोलने में सहायता माँगें।",
                        "निर्देशानुसार आधार संख्या और पंजीकृत मोबाइल OTP से प्रमाणीकरण करें।",
                        "बायोमेट्रिक लॉक की पुष्टि करें और स्क्रीन पर मिली पुष्टि सुरक्षित रखें।",
                        "फिंगरप्रिंट या आइरिस प्रमाणीकरण के लिए आवश्यकता पड़ने पर पोर्टल से बायोमेट्रिक्स अनलॉक करें।"
                    ]
                }
            }
        }
    },
    pan: {
        en: {
            new: {
                online: {
                    title: "New PAN Application",
                    requiredDocuments: ["Aadhaar and Aadhaar-linked mobile for Instant e-PAN, or identity/address/date-of-birth proofs for Form 49A"],
                    officialPortal: "https://onlineservices.nsdl.com (Form 49A) or https://www.incometax.gov.in (Instant e-PAN)",
                    offlineOffice: "Authorised PAN Centre",
                    fees: "₹107 for a physical PAN card plus e-PAN through Form 49A. Instant e-PAN through Aadhaar is free.",
                    estimatedTime: "Instant e-PAN is generally faster; Form 49A processing and dispatch take additional time.",
                    steps: [
                        "Choose one route: apply through Form 49A at the PAN service portal for a physical card plus e-PAN, or use the Income Tax e-Filing portal for free Instant e-PAN if eligible.",
                        "For Form 49A, select the Indian-citizen application, enter your personal details and provide the requested identity, address and date-of-birth proof.",
                        "Pay ₹107 for the physical card plus e-PAN application, complete e-KYC/e-sign or print and submit documents as the portal instructs.",
                        "For Instant e-PAN, sign in to the Income Tax portal, choose Instant e-PAN, validate Aadhaar OTP and submit the request without a fee.",
                        "Save the acknowledgement/request number and use the relevant portal to track processing or download the e-PAN."
                    ]
                },
                offline: {
                    title: "New PAN Application",
                    requiredDocuments: ["Identity proof", "Address proof", "Date-of-birth proof", "Recent photograph if required by the form"],
                    officialPortal: "https://onlineservices.nsdl.com",
                    offlineOffice: "Authorised PAN Centre",
                    fees: "₹107 for a physical PAN card plus e-PAN through Form 49A. Free Instant e-PAN via Aadhaar is an online-only option.",
                    estimatedTime: "One PAN Centre visit plus processing and card dispatch.",
                    steps: [
                        "Visit an authorised PAN Centre and ask for the Form 49A application for an Indian citizen.",
                        "Complete Form 49A with your name, date of birth, contact details and the correct communication address.",
                        "Attach the required identity, address and date-of-birth proofs and photograph as directed by the centre.",
                        "Pay ₹107 for the physical PAN card plus e-PAN application and submit the form.",
                        "Collect the acknowledgement number and use it to track the application; the free Aadhaar-based Instant e-PAN route is available online through the Income Tax portal."
                    ]
                }
            },
            update: {
                online: {
                    title: "PAN Correction or Update",
                    requiredDocuments: ["Existing PAN number", "Proof supporting the correction", "Aadhaar-linked mobile for online authentication where applicable"],
                    officialPortal: "https://onlineservices.nsdl.com",
                    offlineOffice: "Authorised PAN Centre",
                    fees: "₹107 for a physical PAN card plus e-PAN correction application.",
                    estimatedTime: "Processing time varies; track using the acknowledgement number.",
                    steps: [
                        "Open the PAN services portal and select the correction/change request (CSF Form).",
                        "Enter your existing PAN and select only the fields that need correction; do not apply for a second PAN.",
                        "Upload or submit supporting proof for the requested change and authenticate using the available e-KYC/e-sign option.",
                        "Pay the applicable ₹107 fee for the physical card plus e-PAN correction application.",
                        "Save the acknowledgement number, track the request and download the updated e-PAN when it is issued."
                    ]
                },
                offline: {
                    title: "PAN Correction or Update",
                    requiredDocuments: ["Existing PAN number or card", "Proof supporting the correction", "Completed CSF correction form"],
                    officialPortal: "https://onlineservices.nsdl.com",
                    offlineOffice: "Authorised PAN Centre",
                    fees: "₹107 for a physical PAN card plus e-PAN correction application.",
                    estimatedTime: "One PAN Centre visit plus processing and dispatch.",
                    steps: [
                        "Visit an authorised PAN Centre and request the CSF Form for PAN correction/update.",
                        "Fill in your existing PAN and mark the fields to be corrected; submit supporting proof for each change.",
                        "Review the form carefully so the corrected name, date of birth or other details match the proof.",
                        "Pay ₹107 for the physical card plus e-PAN correction application and submit the form.",
                        "Keep the acknowledgement number to track the request and obtain the corrected PAN."
                    ]
                }
            },
            surrender: {
                online: {
                    title: "Surrender a Duplicate PAN",
                    requiredDocuments: ["PAN details for all cards held", "Identity proof", "Written request identifying the PAN to retain and the duplicate PAN to cancel"],
                    officialPortal: "https://www.incometax.gov.in",
                    offlineOffice: "Local Assessing Officer (AO)",
                    fees: "No standard online self-service surrender fee is specified; confirm any applicable charge with the local AO.",
                    estimatedTime: "Varies by Assessing Officer.",
                    steps: [
                        "Do not use or apply for another PAN. Identify the PAN to retain and the duplicate PAN to surrender.",
                        "PAN cancellation for a duplicate is handled through a PAN Cancellation request to your local Assessing Officer; it is not a routine online PAN correction.",
                        "Use the Income Tax portal to locate AO/contact information or check whether your jurisdiction accepts an electronic submission.",
                        "Prepare a signed request stating both PAN numbers, which PAN should remain active, and why the other is duplicate.",
                        "Submit the request and supporting identity/PAN copies to the local AO using the channel the office confirms; retain the acknowledgement."
                    ]
                },
                offline: {
                    title: "Surrender a Duplicate PAN",
                    requiredDocuments: ["PAN cards/details for all PANs held", "Identity proof", "Signed request for PAN cancellation"],
                    officialPortal: "https://www.incometax.gov.in",
                    offlineOffice: "Local Assessing Officer (AO)",
                    fees: "Confirm any applicable charge with the local AO.",
                    estimatedTime: "One AO submission plus processing time, which varies by jurisdiction.",
                    steps: [
                        "Identify the PAN to retain and the duplicate PAN to cancel; never keep using two PANs.",
                        "Find the jurisdictional local Assessing Officer using the Income Tax portal or the department's contact information.",
                        "Write and sign a PAN Cancellation request that clearly names both PANs and asks that the duplicate be surrendered.",
                        "Attach copies of the PAN cards and identity proof and submit the request to the local AO.",
                        "Obtain an acknowledgement and follow up with the AO until cancellation of the duplicate PAN is confirmed."
                    ]
                }
            }
        },
        hi: {
            new: {
                online: {
                    title: "नया PAN आवेदन",
                    requiredDocuments: ["Instant e-PAN के लिए आधार और आधार से जुड़ा मोबाइल, या Form 49A के लिए पहचान/पता/जन्मतिथि प्रमाण"],
                    officialPortal: "https://onlineservices.nsdl.com (Form 49A) या https://www.incometax.gov.in (Instant e-PAN)",
                    offlineOffice: "अधिकृत PAN केंद्र",
                    fees: "Form 49A से फिजिकल कार्ड और e-PAN के लिए ₹107। आधार के माध्यम से Instant e-PAN निःशुल्क है।",
                    estimatedTime: "Instant e-PAN आम तौर पर जल्दी मिलता है; Form 49A की प्रक्रिया और डाक में अतिरिक्त समय लगता है।",
                    steps: [
                        "एक तरीका चुनें: फिजिकल कार्ड और e-PAN के लिए PAN सेवा पोर्टल पर Form 49A, या पात्र होने पर निःशुल्क Instant e-PAN के लिए आयकर ई-फाइलिंग पोर्टल।",
                        "Form 49A के लिए भारतीय नागरिक का आवेदन चुनें, व्यक्तिगत विवरण भरें और माँगे गए पहचान, पता तथा जन्मतिथि प्रमाण दें।",
                        "फिजिकल कार्ड और e-PAN आवेदन के ₹107 दें और पोर्टल के निर्देशानुसार e-KYC/e-sign करें या दस्तावेज जमा करें।",
                        "Instant e-PAN के लिए आयकर पोर्टल में साइन इन करें, Instant e-PAN चुनें, आधार OTP सत्यापित कर निःशुल्क अनुरोध जमा करें।",
                        "पावती/अनुरोध संख्या सुरक्षित रखें और संबंधित पोर्टल पर स्थिति देखें या e-PAN डाउनलोड करें।"
                    ]
                },
                offline: {
                    title: "नया PAN आवेदन",
                    requiredDocuments: ["पहचान प्रमाण", "पता प्रमाण", "जन्मतिथि प्रमाण", "फॉर्म के अनुसार हाल की फोटो"],
                    officialPortal: "https://onlineservices.nsdl.com",
                    offlineOffice: "अधिकृत PAN केंद्र",
                    fees: "Form 49A से फिजिकल कार्ड और e-PAN के लिए ₹107। आधार वाला निःशुल्क Instant e-PAN केवल ऑनलाइन उपलब्ध है।",
                    estimatedTime: "PAN केंद्र पर एक बार जाना और उसके बाद प्रक्रिया तथा कार्ड की डिलीवरी।",
                    steps: [
                        "अधिकृत PAN केंद्र पर जाकर भारतीय नागरिक के आवेदन के लिए Form 49A माँगें।",
                        "नाम, जन्मतिथि, संपर्क और सही पत्राचार पते सहित Form 49A भरें।",
                        "केंद्र के निर्देशानुसार पहचान, पता और जन्मतिथि प्रमाण तथा फोटो संलग्न करें।",
                        "फिजिकल कार्ड और e-PAN आवेदन के ₹107 देकर फॉर्म जमा करें।",
                        "पावती संख्या लेकर आवेदन ट्रैक करें; आधार वाला निःशुल्क Instant e-PAN आयकर पोर्टल पर ऑनलाइन उपलब्ध है।"
                    ]
                }
            },
            update: {
                online: {
                    title: "PAN सुधार या अपडेट",
                    requiredDocuments: ["मौजूदा PAN संख्या", "सुधार का समर्थन करने वाला प्रमाण", "जहाँ लागू हो ऑनलाइन प्रमाणीकरण के लिए आधार से जुड़ा मोबाइल"],
                    officialPortal: "https://onlineservices.nsdl.com",
                    offlineOffice: "अधिकृत PAN केंद्र",
                    fees: "फिजिकल कार्ड और e-PAN सुधार आवेदन के लिए ₹107।",
                    estimatedTime: "प्रक्रिया का समय अलग-अलग हो सकता है; पावती संख्या से ट्रैक करें।",
                    steps: [
                        "PAN सेवा पोर्टल खोलें और सुधार/बदलाव अनुरोध (CSF Form) चुनें।",
                        "मौजूदा PAN दर्ज करें और केवल सुधार वाले फ़ील्ड चुनें; दूसरा PAN आवेदन न करें।",
                        "माँगे गए बदलाव का प्रमाण अपलोड/जमा करें और उपलब्ध e-KYC/e-sign से प्रमाणीकरण करें।",
                        "फिजिकल कार्ड और e-PAN सुधार आवेदन का लागू ₹107 शुल्क दें।",
                        "पावती संख्या सुरक्षित रखें, अनुरोध ट्रैक करें और जारी होने पर अपडेटेड e-PAN डाउनलोड करें।"
                    ]
                },
                offline: {
                    title: "PAN सुधार या अपडेट",
                    requiredDocuments: ["मौजूदा PAN संख्या या कार्ड", "सुधार का समर्थन करने वाला प्रमाण", "भरा हुआ CSF सुधार फॉर्म"],
                    officialPortal: "https://onlineservices.nsdl.com",
                    offlineOffice: "अधिकृत PAN केंद्र",
                    fees: "फिजिकल कार्ड और e-PAN सुधार आवेदन के लिए ₹107।",
                    estimatedTime: "PAN केंद्र पर एक बार जाना और उसके बाद प्रक्रिया तथा डाक।",
                    steps: [
                        "अधिकृत PAN केंद्र पर जाकर सुधार/अपडेट के लिए CSF Form माँगें।",
                        "मौजूदा PAN भरें, सुधार वाले फ़ील्ड चिह्नित करें और हर बदलाव का प्रमाण दें।",
                        "फॉर्म जाँचें ताकि सुधारा हुआ नाम, जन्मतिथि या अन्य विवरण प्रमाण से मेल खाए।",
                        "फिजिकल कार्ड और e-PAN सुधार आवेदन के ₹107 देकर फॉर्म जमा करें।",
                        "अनुरोध ट्रैक करने और संशोधित PAN पाने के लिए पावती संख्या सुरक्षित रखें।"
                    ]
                }
            },
            surrender: {
                online: {
                    title: "डुप्लिकेट PAN सरेंडर",
                    requiredDocuments: ["धारित सभी PAN के विवरण", "पहचान प्रमाण", "रखने वाले और रद्द करने वाले PAN का उल्लेख करता लिखित अनुरोध"],
                    officialPortal: "https://www.incometax.gov.in",
                    offlineOffice: "स्थानीय Assessing Officer (AO)",
                    fees: "ऑनलाइन स्व-सेवा सरेंडर का कोई मानक शुल्क निर्दिष्ट नहीं है; स्थानीय AO से लागू शुल्क पूछें।",
                    estimatedTime: "Assessing Officer के अनुसार अलग-अलग।",
                    steps: [
                        "उसी PAN का उपयोग जारी रखें जिसे रखना है और डुप्लिकेट PAN की पहचान करें; नया PAN आवेदन न करें।",
                        "डुप्लिकेट PAN रद्द करने के लिए स्थानीय Assessing Officer को PAN Cancellation अनुरोध देना होता है; यह सामान्य ऑनलाइन सुधार नहीं है।",
                        "AO/संपर्क विवरण के लिए आयकर पोर्टल देखें और पूछें कि क्या आपके क्षेत्र में इलेक्ट्रॉनिक आवेदन स्वीकार होता है।",
                        "हस्ताक्षरित अनुरोध में दोनों PAN, सक्रिय रखने वाला PAN और दूसरे के डुप्लिकेट होने का कारण लिखें।",
                        "स्थानीय AO द्वारा बताए माध्यम से पहचान/PAN प्रतियों सहित आवेदन जमा करें और पावती रखें।"
                    ]
                },
                offline: {
                    title: "डुप्लिकेट PAN सरेंडर",
                    requiredDocuments: ["धारित सभी PAN कार्ड/विवरण", "पहचान प्रमाण", "PAN रद्द करने का हस्ताक्षरित अनुरोध"],
                    officialPortal: "https://www.incometax.gov.in",
                    offlineOffice: "स्थानीय Assessing Officer (AO)",
                    fees: "लागू शुल्क स्थानीय AO से पूछें।",
                    estimatedTime: "AO में एक बार आवेदन जमा करना और क्षेत्र के अनुसार प्रक्रिया का समय।",
                    steps: [
                        "रखने वाला PAN और रद्द किया जाने वाला डुप्लिकेट PAN पहचानें; दो PAN का उपयोग न करें।",
                        "आयकर पोर्टल या विभागीय संपर्क से अपने क्षेत्र के स्थानीय Assessing Officer का पता लगाएँ।",
                        "PAN Cancellation अनुरोध लिखकर हस्ताक्षर करें और दोनों PAN स्पष्ट रूप से बताते हुए डुप्लिकेट सरेंडर करने को कहें।",
                        "PAN कार्ड और पहचान प्रमाण की प्रतियाँ लगाकर स्थानीय AO को आवेदन दें।",
                        "पावती लें और डुप्लिकेट PAN रद्द होने की पुष्टि तक AO से संपर्क रखें।"
                    ]
                }
            }
        }
    },
    passport: {
        en: {
            new: {
                online: {
                    title: "Fresh Passport",
                    requiredDocuments: ["Proof of present address", "Proof of date of birth", "Identity/citizenship documents requested by the portal"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK)",
                    fees: "Passport Seva lists revised fees effective 1 July 2026: adult 36 pages ₹2,500 Normal / ₹5,000 Tatkaal; adult 60 pages ₹3,500 / ₹6,000; minor 36 pages ₹1,750 / ₹4,250. A 10% basic-fee rebate is stated for children under 8 and applicants over 60 on fresh applications. Lost/damaged 36-page replacement: ₹5,000 (police report/FIR required). Surrender Certificate, renunciation or PCC: ₹750. Verify the live fee calculator and case eligibility before payment.",
                                        fees: "Passport Seva lists revised fees effective 1 July 2026: adult 36 pages ₹2,500 Normal / ₹5,000 Tatkaal; adult 60 pages ₹3,500 / ₹6,000; minor 36 pages ₹1,750 / ₹4,250. A 10% basic-fee rebate is stated for children under 8 and applicants over 60 on fresh applications. Lost/damaged 36-page replacement: ₹5,000 (police report/FIR required). Surrender Certificate, renunciation or PCC: ₹750. Verify the live fee calculator and case eligibility before payment.",
                    estimatedTime: "Appointment plus police verification and dispatch; Tatkaal processing is subject to eligibility and verification.",
                    steps: [
                        "Register or sign in on Passport Seva and choose Apply for Fresh Passport/Re-issue of Passport, then select Fresh Passport.",
                        "Complete the application with accurate personal, family, address and contact details; choose a 36-page booklet and Normal or Tatkaal scheme.",
                        "Pay and schedule an appointment at a PSK or POPSK; the 36-page fee is ₹2,500 Normal or ₹5,000 Tatkaal as per revised rules.",
                        "Attend the appointment with originals and self-attested copies of the documents listed for your case; complete photo, biometrics and document verification.",
                        "Track the file number online, respond to any police verification and follow the portal status until dispatch."
                    ]
                },
                offline: {
                    title: "Fresh Passport",
                    requiredDocuments: ["Proof of present address", "Proof of date of birth", "Identity/citizenship documents requested for your case"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK)",
                    fees: "36-page booklet: ₹2,500 Normal or ₹5,000 Tatkaal, as per revised rules.",
                    estimatedTime: "One PSK/POPSK appointment plus police verification and dispatch.",
                    steps: [
                        "Use Passport Seva to register, complete the Fresh Passport application and book a visit; a centre visit is required even when a facilitation desk helps you apply.",
                        "Select a 36-page booklet and Normal or Tatkaal service and pay the applicable ₹2,500 Normal or ₹5,000 Tatkaal fee as per revised rules.",
                        "Take the appointment confirmation, originals and self-attested copies of the proofs required for your circumstances to the PSK/POPSK.",
                        "Submit the application for document verification and complete photograph and biometrics at the centre.",
                        "Keep the file number, complete any police verification and track the passport until it is dispatched."
                    ]
                }
            },
            update: {
                online: {
                    title: "Passport Re-issue or Update",
                    requiredDocuments: ["Existing passport", "Proof supporting the requested change", "Address proof if the address is changing"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK)",
                    fees: "₹2,500 Normal for a 36-page booklet; additional fees may apply for other booklet/service selections.",
                                        fees: "Re-issue fee depends on booklet and service: adult 36 pages ₹2,500 Normal / ₹5,000 Tatkaal; adult 60 pages ₹3,500 / ₹6,000; minor 36 pages ₹1,750 / ₹4,250. Lost/damaged 36-page replacement: ₹5,000 and police report/FIR required. Confirm the current amount in Passport Seva's fee calculator before paying.",
                                        fees: "Re-issue fee depends on booklet and service: adult 36 pages ₹2,500 Normal / ₹5,000 Tatkaal; adult 60 pages ₹3,500 / ₹6,000; minor 36 pages ₹1,750 / ₹4,250. Lost/damaged 36-page replacement: ₹5,000 and police report/FIR required. Confirm the current amount in Passport Seva's fee calculator before paying.",
                    estimatedTime: "Appointment plus verification and dispatch; varies by case.",
                    steps: [
                        "Sign in to Passport Seva and choose Apply for Fresh Passport/Re-issue, then select Re-issue for renewal, expiry, exhausted pages or a personal-detail change.",
                        "Enter the existing passport details and select the reason for re-issue; provide new details and supporting proof for any requested update.",
                        "Pay the ₹2,500 Normal fee for a 36-page booklet and schedule a PSK/POPSK appointment.",
                        "Attend with the original passport and required supporting documents; complete document verification and biometrics as requested.",
                        "Save the application/file number, complete any required police verification and track dispatch online."
                    ]
                },
                offline: {
                    title: "Passport Re-issue or Update",
                    requiredDocuments: ["Existing passport", "Proof supporting the requested change", "Address proof if the address is changing"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK)",
                    fees: "₹2,500 Normal for a 36-page booklet; additional fees may apply for other booklet/service selections.",
                    estimatedTime: "One PSK/POPSK appointment plus verification and dispatch.",
                    steps: [
                        "Complete the re-issue application and appointment booking on Passport Seva; visit a PSK/POPSK for in-person verification.",
                        "Choose the re-issue reason, such as renewal, expiry, exhausted pages or update of personal details.",
                        "Pay ₹2,500 Normal for a 36-page booklet; confirm any additional fee for a different service or booklet.",
                        "Take your existing passport and original proof for the requested change/address to the appointment.",
                        "Complete verification, retain the file number and track any police verification and dispatch."
                    ]
                }
            },
            surrender: {
                online: {
                    title: "Passport Surrender Certificate",
                    requiredDocuments: ["Existing Indian passport", "Proof of foreign citizenship/naturalisation", "Identity and address proof as requested"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK)",
                    fees: "₹750 for a Surrender Certificate.",
                                        fees: "₹750 for a Surrender Certificate, renunciation or PCC as listed in the revised fee structure. Confirm the exact service and amount in the live Passport Seva fee calculator.",
                                        fees: "₹750 for a Surrender Certificate, renunciation or PCC as listed in the revised fee structure. Confirm the exact service and amount in the live Passport Seva fee calculator.",
                    estimatedTime: "Appointment plus document verification; varies by case.",
                    steps: [
                        "Register/sign in on Passport Seva and select the Surrender Certificate service for an Indian passport surrendered after acquiring foreign citizenship.",
                        "Complete the form with passport and foreign-citizenship details and upload the documents requested for your case.",
                        "Pay the ₹750 fee and book an appointment at a PSK/POPSK.",
                        "Attend with the original Indian passport, proof of foreign citizenship and the required supporting documents.",
                        "Submit the passport for cancellation, retain the acknowledgement and track the request until the Surrender Certificate is issued."
                    ]
                },
                offline: {
                    title: "Passport Surrender Certificate",
                    requiredDocuments: ["Existing Indian passport", "Proof of foreign citizenship/naturalisation", "Identity and address proof as requested"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK)",
                    fees: "₹750 for a Surrender Certificate.",
                    estimatedTime: "One PSK/POPSK appointment plus document verification.",
                    steps: [
                        "Complete the Surrender Certificate application through Passport Seva or get application assistance before your appointment.",
                        "Prepare the original Indian passport and proof showing acquisition of foreign citizenship, along with requested identity/address proof.",
                        "Pay the ₹750 fee and book/confirm an appointment at a PSK or POPSK.",
                        "Visit the centre, submit the documents and passport, and complete verification.",
                        "Keep the acknowledgement and track the application until the Surrender Certificate is ready."
                    ]
                }
            }
        },
        hi: {
            new: {
                online: {
                    title: "नया पासपोर्ट",
                    requiredDocuments: ["वर्तमान पते का प्रमाण", "जन्मतिथि का प्रमाण", "पोर्टल द्वारा माँगे गए पहचान/नागरिकता दस्तावेज"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK)",
                    fees: "36-पृष्ठ पुस्तिका: संशोधित नियमों के अनुसार Normal ₹2,500 या Tatkaal ₹5,000।",
                                        fees: "Passport Seva की 1 जुलाई 2026 से संशोधित फीस: वयस्क 36 पृष्ठ ₹2,500 Normal / ₹5,000 Tatkaal; वयस्क 60 पृष्ठ ₹3,500 / ₹6,000; नाबालिग 36 पृष्ठ ₹1,750 / ₹4,250। नए आवेदन में 8 वर्ष से कम बच्चों और 60 वर्ष से अधिक आयु वालों की मूल फीस पर 10% छूट बताई गई है। खोए/क्षतिग्रस्त 36-पृष्ठ पासपोर्ट का प्रतिस्थापन ₹5,000 (पुलिस रिपोर्ट/FIR आवश्यक)। Surrender Certificate, renunciation या PCC ₹750। भुगतान से पहले लाइव fee calculator और पात्रता जाँचें।",
                                        fees: "Passport Seva की 1 जुलाई 2026 से संशोधित फीस: वयस्क 36 पृष्ठ ₹2,500 Normal / ₹5,000 Tatkaal; वयस्क 60 पृष्ठ ₹3,500 / ₹6,000; नाबालिग 36 पृष्ठ ₹1,750 / ₹4,250। नए आवेदन में 8 वर्ष से कम बच्चों और 60 वर्ष से अधिक आयु वालों की मूल फीस पर 10% छूट बताई गई है। खोए/क्षतिग्रस्त 36-पृष्ठ पासपोर्ट का प्रतिस्थापन ₹5,000 (पुलिस रिपोर्ट/FIR आवश्यक)। भुगतान से पहले लाइव fee calculator और पात्रता जाँचें।",
                                        fees: "पुनः जारी शुल्क पुस्तिका और सेवा पर निर्भर है: वयस्क 36 पृष्ठ ₹2,500 Normal / ₹5,000 Tatkaal; वयस्क 60 पृष्ठ ₹3,500 / ₹6,000; नाबालिग 36 पृष्ठ ₹1,750 / ₹4,250। खोए/क्षतिग्रस्त 36-पृष्ठ पासपोर्ट का प्रतिस्थापन ₹5,000 और पुलिस रिपोर्ट/FIR आवश्यक। भुगतान से पहले Passport Seva के fee calculator में वर्तमान राशि जाँचें।",
                                        fees: "पुनः जारी शुल्क पुस्तिका और सेवा पर निर्भर है: वयस्क 36 पृष्ठ ₹2,500 Normal / ₹5,000 Tatkaal; वयस्क 60 पृष्ठ ₹3,500 / ₹6,000; नाबालिग 36 पृष्ठ ₹1,750 / ₹4,250। खोए/क्षतिग्रस्त 36-पृष्ठ पासपोर्ट का प्रतिस्थापन ₹5,000 और पुलिस रिपोर्ट/FIR आवश्यक। भुगतान से पहले Passport Seva के fee calculator में वर्तमान राशि जाँचें।",
                                        fees: "Surrender Certificate, renunciation या PCC के लिए संशोधित सूची में ₹750। सही सेवा और राशि की पुष्टि लाइव Passport Seva fee calculator से करें।",
                                        fees: "Surrender Certificate, renunciation या PCC के लिए संशोधित सूची में ₹750। सही सेवा और राशि की पुष्टि लाइव Passport Seva fee calculator से करें।",
                    estimatedTime: "अपॉइंटमेंट के बाद पुलिस सत्यापन और डाक; Tatkaal पात्रता और सत्यापन के अधीन है।",
                    steps: [
                        "Passport Seva पर पंजीकरण/साइन इन करें और Fresh Passport/Re-issue आवेदन में Fresh Passport चुनें।",
                        "सही व्यक्तिगत, पारिवारिक, पता और संपर्क विवरण भरें; 36-पृष्ठ पुस्तिका तथा Normal या Tatkaal योजना चुनें।",
                        "भुगतान करके PSK/POPSK अपॉइंटमेंट लें; संशोधित नियमों के अनुसार 36-पृष्ठ पुस्तिका का शुल्क Normal ₹2,500 या Tatkaal ₹5,000 है।",
                        "अपने मामले के लिए माँगे गए मूल दस्तावेज और स्वयं-सत्यापित प्रतियाँ लेकर जाएँ; केंद्र पर फोटो, बायोमेट्रिक्स और दस्तावेज सत्यापन कराएँ।",
                        "फाइल नंबर से ऑनलाइन स्थिति देखें, पुलिस सत्यापन पूरा करें और डाक से भेजे जाने तक पोर्टल पर ट्रैक करें।"
                    ]
                },
                offline: {
                    title: "नया पासपोर्ट",
                    requiredDocuments: ["वर्तमान पते का प्रमाण", "जन्मतिथि का प्रमाण", "आपके मामले में माँगे गए पहचान/नागरिकता दस्तावेज"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK)",
                    fees: "36-पृष्ठ पुस्तिका: संशोधित नियमों के अनुसार Normal ₹2,500 या Tatkaal ₹5,000।",
                    estimatedTime: "PSK/POPSK पर एक अपॉइंटमेंट और उसके बाद पुलिस सत्यापन तथा डाक।",
                    steps: [
                        "Passport Seva से पंजीकरण करके Fresh Passport आवेदन पूरा करें और अपॉइंटमेंट लें; सहायता काउंटर से फॉर्म भरने पर भी केंद्र जाना आवश्यक है।",
                        "36-पृष्ठ पुस्तिका और Normal या Tatkaal सेवा चुनें तथा संशोधित नियमों के अनुसार ₹2,500 Normal या ₹5,000 Tatkaal शुल्क दें।",
                        "अपॉइंटमेंट पुष्टि, मूल दस्तावेज और परिस्थिति के अनुसार आवश्यक स्वयं-सत्यापित प्रतियाँ PSK/POPSK ले जाएँ।",
                        "दस्तावेज सत्यापन के लिए आवेदन जमा करें और केंद्र पर फोटो तथा बायोमेट्रिक्स दर्ज कराएँ।",
                        "फाइल नंबर सुरक्षित रखें, पुलिस सत्यापन पूरा करें और पासपोर्ट भेजे जाने तक ट्रैक करें।"
                    ]
                }
            },
            update: {
                online: {
                    title: "पासपोर्ट पुनः जारी या अपडेट",
                    requiredDocuments: ["मौजूदा पासपोर्ट", "माँगे गए बदलाव का प्रमाण", "पता बदलने पर नए पते का प्रमाण"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK)",
                    fees: "36-पृष्ठ पुस्तिका के लिए Normal ₹2,500; अन्य पुस्तिका/सेवा चुनने पर अतिरिक्त शुल्क लागू हो सकता है।",
                    estimatedTime: "अपॉइंटमेंट, सत्यापन और डाक; मामले के अनुसार समय बदलता है।",
                    steps: [
                        "Passport Seva में साइन इन करें और Fresh Passport/Re-issue आवेदन में नवीनीकरण, समाप्ति, पृष्ठ पूरे होने या व्यक्तिगत विवरण बदलने के लिए Re-issue चुनें।",
                        "मौजूदा पासपोर्ट विवरण और पुनः जारी करने का कारण भरें; अपडेट के लिए नया विवरण तथा सहायक प्रमाण दें।",
                        "36-पृष्ठ पुस्तिका के Normal आवेदन का ₹2,500 शुल्क देकर PSK/POPSK अपॉइंटमेंट लें।",
                        "मौजूदा पासपोर्ट और माँगे गए बदलाव के मूल सहायक दस्तावेज लेकर जाएँ; दस्तावेज सत्यापन और आवश्यक बायोमेट्रिक्स पूरा करें।",
                        "आवेदन/फाइल नंबर सुरक्षित रखें, आवश्यक पुलिस सत्यापन पूरा करें और डाक की स्थिति ऑनलाइन देखें।"
                    ]
                },
                offline: {
                    title: "पासपोर्ट पुनः जारी या अपडेट",
                    requiredDocuments: ["मौजूदा पासपोर्ट", "माँगे गए बदलाव का प्रमाण", "पता बदलने पर नए पते का प्रमाण"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK)",
                    fees: "36-पृष्ठ पुस्तिका के लिए Normal ₹2,500; अन्य पुस्तिका/सेवा चुनने पर अतिरिक्त शुल्क लागू हो सकता है।",
                    estimatedTime: "PSK/POPSK पर एक अपॉइंटमेंट और उसके बाद सत्यापन तथा डाक।",
                    steps: [
                        "Passport Seva पर पुनः जारी आवेदन और अपॉइंटमेंट पूरा करें; व्यक्तिगत सत्यापन के लिए PSK/POPSK जाएँ।",
                        "नवीनीकरण, समाप्ति, पृष्ठ पूरे होने या व्यक्तिगत विवरण अपडेट जैसे पुनः जारी करने का कारण चुनें।",
                        "36-पृष्ठ पुस्तिका के Normal आवेदन के ₹2,500 दें; अलग सेवा या पुस्तिका का अतिरिक्त शुल्क पहले जाँचें।",
                        "मौजूदा पासपोर्ट और माँगे गए बदलाव/पते का मूल प्रमाण अपॉइंटमेंट पर ले जाएँ।",
                        "सत्यापन पूरा करें, फाइल नंबर रखें और पुलिस सत्यापन तथा डाक की स्थिति ट्रैक करें।"
                    ]
                }
            },
            surrender: {
                online: {
                    title: "पासपोर्ट सरेंडर प्रमाणपत्र",
                    requiredDocuments: ["मौजूदा भारतीय पासपोर्ट", "विदेशी नागरिकता/नैचुरलाइजेशन का प्रमाण", "माँगे गए पहचान और पते के प्रमाण"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK)",
                    fees: "सरेंडर प्रमाणपत्र के लिए ₹750।",
                    estimatedTime: "अपॉइंटमेंट और दस्तावेज सत्यापन; मामले के अनुसार समय बदलता है।",
                    steps: [
                        "विदेशी नागरिकता प्राप्त करने के बाद भारतीय पासपोर्ट सरेंडर करने के लिए Passport Seva पर पंजीकरण/साइन इन करें और Surrender Certificate सेवा चुनें।",
                        "पासपोर्ट तथा विदेशी नागरिकता का विवरण भरें और अपने मामले में माँगे गए दस्तावेज अपलोड करें।",
                        "₹750 शुल्क देकर PSK/POPSK अपॉइंटमेंट लें।",
                        "मूल भारतीय पासपोर्ट, विदेशी नागरिकता का प्रमाण और आवश्यक सहायक दस्तावेज लेकर जाएँ।",
                        "रद्दीकरण के लिए पासपोर्ट जमा करें, पावती रखें और प्रमाणपत्र जारी होने तक अनुरोध ट्रैक करें।"
                    ]
                },
                offline: {
                    title: "पासपोर्ट सरेंडर प्रमाणपत्र",
                    requiredDocuments: ["मौजूदा भारतीय पासपोर्ट", "विदेशी नागरिकता/नैचुरलाइजेशन का प्रमाण", "माँगे गए पहचान और पते के प्रमाण"],
                    officialPortal: "https://www.passportindia.gov.in",
                    offlineOffice: "पासपोर्ट सेवा केंद्र (PSK) या डाकघर पासपोर्ट सेवा केंद्र (POPSK)",
                    fees: "सरेंडर प्रमाणपत्र के लिए ₹750।",
                    estimatedTime: "PSK/POPSK पर एक अपॉइंटमेंट और दस्तावेज सत्यापन।",
                    steps: [
                        "Passport Seva से सरेंडर प्रमाणपत्र आवेदन पूरा करें या अपॉइंटमेंट से पहले आवेदन भरने में सहायता लें।",
                        "मूल भारतीय पासपोर्ट, विदेशी नागरिकता प्राप्त करने का प्रमाण और माँगे गए पहचान/पता प्रमाण तैयार रखें।",
                        "₹750 शुल्क दें और PSK या POPSK अपॉइंटमेंट लें/पुष्टि करें।",
                        "केंद्र जाकर दस्तावेज और पासपोर्ट जमा करें तथा सत्यापन पूरा करें।",
                        "पावती सुरक्षित रखें और सरेंडर प्रमाणपत्र तैयार होने तक आवेदन ट्रैक करें।"
                    ]
                }
            }
        }
    },
    voter: {
        en: {
            new: {
                online: {
                    title: "New Voter Registration",
                    requiredDocuments: ["Recent photograph", "Proof of age", "Proof of ordinary residence"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "Booth Level Officer (BLO) or Tehsil Office",
                    fees: "Free (Form 6).",
                    estimatedTime: "Online submission takes a few minutes; verification and electoral-roll update take additional time.",
                    steps: [
                        "Open the Voters' Services Portal and register/sign in to start a new voter registration.",
                        "Complete Form 6 with your constituency, personal details, age and ordinary-residence address.",
                        "Upload a recent photograph and the requested age and residence proofs, then submit the form free of charge.",
                        "Save the reference number and respond if the Electoral Registration Officer (ERO) requests clarification.",
                        "Track the application online; a BLO may verify your residence before the electoral roll is updated."
                    ]
                },
                offline: {
                    title: "New Voter Registration",
                    requiredDocuments: ["Recent photograph", "Proof of age", "Proof of ordinary residence"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "Booth Level Officer (BLO) or Tehsil Office",
                    fees: "Free (Form 6).",
                    estimatedTime: "One submission/verification visit; electoral-roll processing takes additional time.",
                    steps: [
                        "Get Form 6 from your BLO/Tehsil Office or download it from the Voters' Services Portal.",
                        "Fill in your constituency and personal details and attach a recent photograph, age proof and ordinary-residence proof.",
                        "Submit Form 6 free of charge to the BLO or designated election office and obtain an acknowledgement.",
                        "Keep your reference/acknowledgement number and be available for residence verification by the BLO.",
                        "Check with the election office or portal to confirm that your name has been added to the electoral roll."
                    ]
                }
            },
            update: {
                online: {
                    title: "Voter Details Correction or Address Shift",
                    requiredDocuments: ["EPIC number (if available)", "Proof supporting the correction or new ordinary-residence address"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "Booth Level Officer (BLO) or Tehsil Office",
                    fees: "Free (Form 8).",
                    estimatedTime: "Online submission takes a few minutes; verification and roll update take additional time.",
                    steps: [
                        "Sign in to the Voters' Services Portal and select Form 8 for correction of entries or shifting residence.",
                        "Enter your EPIC and select the exact request: correct personal details, replace an EPIC, or shift residence within/away from the constituency.",
                        "Enter the corrected details or new address and upload proof supporting the change.",
                        "Review and submit Form 8 free of charge; save the reference number.",
                        "Track the request and respond to any BLO/ERO verification so the electoral roll can be updated."
                    ]
                },
                offline: {
                    title: "Voter Details Correction or Address Shift",
                    requiredDocuments: ["EPIC card/number", "Proof supporting the correction or new ordinary-residence address"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "Booth Level Officer (BLO) or Tehsil Office",
                    fees: "Free (Form 8).",
                    estimatedTime: "One submission/verification visit; roll update time varies.",
                    steps: [
                        "Collect Form 8 from your BLO/Tehsil Office or download and print it from the official portal.",
                        "Enter your EPIC details and mark whether you are correcting an entry or shifting your ordinary residence.",
                        "Write the corrected information/new address and attach supporting proof.",
                        "Submit Form 8 free of charge to the BLO or designated election office and keep the acknowledgement.",
                        "Cooperate with verification and check the electoral roll or application status for completion."
                    ]
                }
            },
            surrender: {
                online: {
                    title: "Delete a Voter-Roll Entry",
                    requiredDocuments: ["EPIC number or voter details", "Reason and supporting document, if requested"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "Booth Level Officer (BLO) or Tehsil Office",
                    fees: "Free (Form 7).",
                    estimatedTime: "Online submission takes a few minutes; ERO review and roll update take additional time.",
                    steps: [
                        "Sign in to the Voters' Services Portal and select Form 7 for objection/deletion of an entry.",
                        "Enter the voter/EPIC details and choose the appropriate reason, such as death, permanent shifting or duplicate entry.",
                        "Provide the requested particulars and supporting proof where applicable; submit Form 7 free of charge.",
                        "Save the reference number and respond to any verification request from the BLO/ERO.",
                        "Track the application; the entry is removed only after the Electoral Registration Officer verifies and decides the request."
                    ]
                },
                offline: {
                    title: "Delete a Voter-Roll Entry",
                    requiredDocuments: ["EPIC number or voter details", "Reason and supporting document, if requested"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "Booth Level Officer (BLO) or Tehsil Office",
                    fees: "Free (Form 7).",
                    estimatedTime: "One submission/verification visit; ERO review time varies.",
                    steps: [
                        "Obtain Form 7 from your BLO/Tehsil Office or download it from the official portal.",
                        "Provide the relevant voter/EPIC details and state the reason, such as death, permanent shifting or duplicate entry.",
                        "Attach supporting proof if required and submit Form 7 free of charge to the designated election office/BLO.",
                        "Collect an acknowledgement and cooperate with any field verification.",
                        "Follow up with the BLO/ERO; the name is deleted only after the ERO approves the request."
                    ]
                }
            }
        },
        hi: {
            new: {
                online: {
                    title: "नया मतदाता पंजीकरण",
                    requiredDocuments: ["हाल की फोटो", "आयु का प्रमाण", "सामान्य निवास का प्रमाण"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "बूथ लेवल अधिकारी (BLO) या तहसील कार्यालय",
                    fees: "निःशुल्क (Form 6)।",
                    estimatedTime: "ऑनलाइन आवेदन में कुछ मिनट; सत्यापन और मतदाता सूची अपडेट में अतिरिक्त समय।",
                    steps: [
                        "Voters' Services Portal खोलें, पंजीकरण/साइन इन करें और नए मतदाता पंजीकरण की प्रक्रिया शुरू करें।",
                        "निर्वाचन क्षेत्र, व्यक्तिगत विवरण, आयु और सामान्य निवास का पता देकर Form 6 भरें।",
                        "हाल की फोटो तथा माँगे गए आयु और निवास प्रमाण अपलोड कर निःशुल्क फॉर्म जमा करें।",
                        "संदर्भ संख्या सुरक्षित रखें और निर्वाचन पंजीकरण अधिकारी (ERO) द्वारा स्पष्टीकरण माँगे जाने पर जवाब दें।",
                        "आवेदन ऑनलाइन ट्रैक करें; मतदाता सूची अपडेट से पहले BLO निवास का सत्यापन कर सकता है।"
                    ]
                },
                offline: {
                    title: "नया मतदाता पंजीकरण",
                    requiredDocuments: ["हाल की फोटो", "आयु का प्रमाण", "सामान्य निवास का प्रमाण"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "बूथ लेवल अधिकारी (BLO) या तहसील कार्यालय",
                    fees: "निःशुल्क (Form 6)।",
                    estimatedTime: "एक बार आवेदन/सत्यापन के लिए जाना; मतदाता सूची प्रक्रिया में अतिरिक्त समय।",
                    steps: [
                        "BLO/तहसील कार्यालय से Form 6 लें या Voters' Services Portal से डाउनलोड करें।",
                        "निर्वाचन क्षेत्र और व्यक्तिगत विवरण भरें तथा हाल की फोटो, आयु और सामान्य निवास का प्रमाण लगाएँ।",
                        "Form 6 BLO या निर्धारित चुनाव कार्यालय में निःशुल्क जमा करके पावती लें।",
                        "संदर्भ/पावती संख्या रखें और BLO के निवास सत्यापन के लिए उपलब्ध रहें।",
                        "चुनाव कार्यालय या पोर्टल से पुष्टि करें कि आपका नाम मतदाता सूची में जुड़ गया है।"
                    ]
                }
            },
            update: {
                online: {
                    title: "मतदाता विवरण सुधार या पता बदलें",
                    requiredDocuments: ["EPIC संख्या (यदि उपलब्ध हो)", "सुधार या नए सामान्य निवास पते का प्रमाण"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "बूथ लेवल अधिकारी (BLO) या तहसील कार्यालय",
                    fees: "निःशुल्क (Form 8)।",
                    estimatedTime: "ऑनलाइन आवेदन में कुछ मिनट; सत्यापन और सूची अपडेट में अतिरिक्त समय।",
                    steps: [
                        "Voters' Services Portal में साइन इन करें और प्रविष्टि सुधार या निवास स्थानांतरण के लिए Form 8 चुनें।",
                        "EPIC विवरण भरकर सही अनुरोध चुनें: व्यक्तिगत विवरण सुधारना, EPIC बदलना, या निर्वाचन क्षेत्र के भीतर/बाहर पता बदलना।",
                        "सुधारा हुआ विवरण या नया पता भरें और बदलाव का प्रमाण अपलोड करें।",
                        "जानकारी जाँचकर Form 8 निःशुल्क जमा करें और संदर्भ संख्या सुरक्षित रखें।",
                        "अनुरोध ट्रैक करें और मतदाता सूची अपडेट के लिए BLO/ERO के सत्यापन अनुरोध का जवाब दें।"
                    ]
                },
                offline: {
                    title: "मतदाता विवरण सुधार या पता बदलें",
                    requiredDocuments: ["EPIC कार्ड/संख्या", "सुधार या नए सामान्य निवास पते का प्रमाण"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "बूथ लेवल अधिकारी (BLO) या तहसील कार्यालय",
                    fees: "निःशुल्क (Form 8)।",
                    estimatedTime: "एक बार आवेदन/सत्यापन के लिए जाना; सूची अपडेट में समय अलग हो सकता है।",
                    steps: [
                        "BLO/तहसील कार्यालय से Form 8 लें या आधिकारिक पोर्टल से डाउनलोड करके प्रिंट करें।",
                        "EPIC विवरण भरें और बताएं कि प्रविष्टि सुधारनी है या सामान्य निवास का पता बदलना है।",
                        "सुधारी जानकारी/नया पता लिखें और सहायक प्रमाण संलग्न करें।",
                        "Form 8 BLO या निर्धारित चुनाव कार्यालय में निःशुल्क जमा करके पावती लें।",
                        "सत्यापन में सहयोग करें और स्थिति/मतदाता सूची देखकर प्रक्रिया पूरी होने की पुष्टि करें।"
                    ]
                }
            },
            surrender: {
                online: {
                    title: "मतदाता सूची से नाम हटाएँ",
                    requiredDocuments: ["EPIC संख्या या मतदाता विवरण", "कारण और माँगे जाने पर सहायक दस्तावेज"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "बूथ लेवल अधिकारी (BLO) या तहसील कार्यालय",
                    fees: "निःशुल्क (Form 7)।",
                    estimatedTime: "ऑनलाइन आवेदन में कुछ मिनट; ERO जाँच और सूची अपडेट में अतिरिक्त समय।",
                    steps: [
                        "Voters' Services Portal में साइन इन करें और प्रविष्टि पर आपत्ति/नाम हटाने के लिए Form 7 चुनें।",
                        "मतदाता/EPIC विवरण भरें और उपयुक्त कारण चुनें, जैसे मृत्यु, स्थायी स्थानांतरण या डुप्लिकेट प्रविष्टि।",
                        "माँगी गई जानकारी और जहाँ लागू हो सहायक प्रमाण दें; Form 7 निःशुल्क जमा करें।",
                        "संदर्भ संख्या सुरक्षित रखें और BLO/ERO के सत्यापन अनुरोध का जवाब दें।",
                        "आवेदन ट्रैक करें; निर्वाचन पंजीकरण अधिकारी के सत्यापन और निर्णय के बाद ही नाम हटाया जाता है।"
                    ]
                },
                offline: {
                    title: "मतदाता सूची से नाम हटाएँ",
                    requiredDocuments: ["EPIC संख्या या मतदाता विवरण", "कारण और माँगे जाने पर सहायक दस्तावेज"],
                    officialPortal: "https://voters.eci.gov.in",
                    offlineOffice: "बूथ लेवल अधिकारी (BLO) या तहसील कार्यालय",
                    fees: "निःशुल्क (Form 7)।",
                    estimatedTime: "एक बार आवेदन/सत्यापन के लिए जाना; ERO जाँच में समय अलग हो सकता है।",
                    steps: [
                        "BLO/तहसील कार्यालय से Form 7 लें या आधिकारिक पोर्टल से डाउनलोड करें।",
                        "संबंधित मतदाता/EPIC विवरण और मृत्यु, स्थायी स्थानांतरण या डुप्लिकेट प्रविष्टि जैसा कारण लिखें।",
                        "आवश्यक होने पर प्रमाण लगाकर Form 7 निर्धारित चुनाव कार्यालय/BLO में निःशुल्क जमा करें।",
                        "पावती लें और क्षेत्रीय सत्यापन में सहयोग करें।",
                        "BLO/ERO से स्थिति पूछें; ERO की मंजूरी के बाद ही नाम हटाया जाएगा।"
                    ]
                }
            }
        }
    },
    drivingLicence: {
        en: {
            new: {
                online: {
                    title: "Learner's Licence and Permanent Driving Licence",
                    requiredDocuments: ["Proof of age", "Proof of address", "Required application/medical forms for your category"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "Regional Transport Office (RTO)",
                    fees: "Approximately ₹500–₹1,000 for Learner's Licence and permanent DL; exact fee depends on state, vehicle class and tests.",
                    estimatedTime: "Learner's test, mandatory waiting period and permanent driving test; timelines vary by state.",
                    steps: [
                        "Open Parivahan's Sarathi services, select your state and apply for a Learner's Licence (LL) using Form 2 for the correct vehicle class.",
                        "Fill in the application, upload age/address proof and any category-specific medical form, then pay the state-calculated fee (approximately ₹500–₹1,000 for LL plus permanent DL).",
                        "Book/complete the learner's test as directed and download or print the LL after approval.",
                        "After the mandatory learner period (generally at least 30 days, within LL validity), apply for the permanent DL on Sarathi and book the RTO driving test.",
                        "Attend the test with required originals and vehicle; after passing, track the application and download/receive the driving licence."
                    ]
                },
                offline: {
                    title: "Learner's Licence and Permanent Driving Licence",
                    requiredDocuments: ["Proof of age", "Proof of address", "Required application/medical forms for your category"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "Regional Transport Office (RTO)",
                    fees: "Approximately ₹500–₹1,000 for Learner's Licence and permanent DL; exact fee depends on state, vehicle class and tests.",
                    estimatedTime: "RTO visits for learner processing and driving test, with the mandatory learner period in between.",
                    steps: [
                        "Contact your RTO or use Parivahan to confirm the state process, forms, appointment and vehicle-class requirements.",
                        "Submit Form 2 for the learner application with age/address proof and any required medical form; pay the state-calculated fee (approximately ₹500–₹1,000 for LL plus permanent DL).",
                        "Complete the learner's test and collect/download the approved LL.",
                        "After the mandatory learner period (generally at least 30 days, within LL validity), apply for the permanent DL and book the RTO driving test.",
                        "Attend the test with original documents and a suitable vehicle; after passing, retain the receipt and follow up for the licence."
                    ]
                }
            },
            update: {
                online: {
                    title: "Driving Licence Address/Name Change or Renewal",
                    requiredDocuments: ["Existing driving licence", "Proof supporting the name/address change or renewal", "Medical certificate where required"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "Regional Transport Office (RTO)",
                    fees: "Approximately ₹200–₹400; exact fee depends on state, service and any required tests.",
                    estimatedTime: "Online application plus RTO verification/appointment if requested.",
                    steps: [
                        "Open Parivahan's Sarathi portal, select your state and choose Form 2 for the relevant DL service: change of address/name or renewal.",
                        "Enter your driving-licence details and select the exact correction/renewal request.",
                        "Upload the existing licence and supporting proof; include a medical certificate if required for your age or licence class.",
                        "Pay the state-calculated fee (approximately ₹200–₹400) and book an RTO appointment if the portal requires one.",
                        "Attend document/biometric verification if requested, then track the application and download/receive the updated or renewed licence."
                    ]
                },
                offline: {
                    title: "Driving Licence Address/Name Change or Renewal",
                    requiredDocuments: ["Existing driving licence", "Proof supporting the name/address change or renewal", "Medical certificate where required"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "Regional Transport Office (RTO)",
                    fees: "Approximately ₹200–₹400; exact fee depends on state, service and any required tests.",
                    estimatedTime: "One RTO submission/verification visit plus processing time.",
                    steps: [
                        "Contact your RTO or check Parivahan for the applicable local form and appointment requirements.",
                        "Complete Form 2 for the applicable licence change/renewal request and attach your existing licence.",
                        "Provide proof for the new name/address or renewal and a medical certificate where required.",
                        "Submit the documents at the RTO and pay the applicable state fee, approximately ₹200–₹400.",
                        "Keep the receipt, complete any requested verification and follow up for the updated/renewed licence."
                    ]
                }
            },
            surrender: {
                online: {
                    title: "Surrender or Cancel a Driving Licence",
                    requiredDocuments: ["Original driving licence or licence number", "Identity proof", "Written reason/request for surrender or cancellation"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "Regional Transport Office (RTO)",
                    fees: "Confirm any applicable charge with the RTO; surrender/cancellation handling varies by state and case.",
                    estimatedTime: "RTO review time varies.",
                    steps: [
                        "Check Parivahan or contact your licensing RTO to confirm the process; surrender/cancellation generally requires an RTO submission and is not fully online.",
                        "Prepare your licence number/card, identity proof and a signed request explaining why the licence is being surrendered or cancellation is requested.",
                        "Use the portal only to check whether your state provides an online application, appointment or status service for this request.",
                        "Submit the signed request and documents to the RTO through the channel it confirms; attend in person if required.",
                        "Obtain an acknowledgement and written confirmation once the RTO records the surrender/cancellation."
                    ]
                },
                offline: {
                    title: "Surrender or Cancel a Driving Licence",
                    requiredDocuments: ["Original driving licence or licence number", "Identity proof", "Written reason/request for surrender or cancellation"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "Regional Transport Office (RTO)",
                    fees: "Confirm any applicable charge with the RTO; surrender/cancellation handling varies by state and case.",
                    estimatedTime: "One RTO submission plus review time, which varies by case.",
                    steps: [
                        "Contact the RTO that issued/maintains your licence and confirm the documents and local procedure for surrender or cancellation.",
                        "Write and sign a request explaining the reason and include your licence number/card and identity proof.",
                        "Submit the request and documents to the RTO; surrender the original licence if the office asks for it.",
                        "Pay any applicable state/RTO charge and obtain a dated acknowledgement.",
                        "Follow up with the RTO and retain written confirmation that the licence surrender/cancellation has been recorded."
                    ]
                }
            }
        },
        hi: {
            new: {
                online: {
                    title: "लर्नर लाइसेंस और स्थायी ड्राइविंग लाइसेंस",
                    requiredDocuments: ["आयु का प्रमाण", "पते का प्रमाण", "आपकी श्रेणी के आवश्यक आवेदन/चिकित्सा फॉर्म"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "क्षेत्रीय परिवहन कार्यालय (RTO)",
                    fees: "लर्नर लाइसेंस और स्थायी DL के लिए लगभग ₹500–₹1,000; सही शुल्क राज्य, वाहन श्रेणी और टेस्ट पर निर्भर है।",
                    estimatedTime: "लर्नर टेस्ट, अनिवार्य प्रतीक्षा अवधि और स्थायी ड्राइविंग टेस्ट; समय राज्य के अनुसार बदलता है।",
                    steps: [
                        "Parivahan की Sarathi सेवा खोलें, अपना राज्य चुनें और सही वाहन श्रेणी के लिए Form 2 से Learner's Licence (LL) आवेदन करें।",
                        "आवेदन भरें, आयु/पता प्रमाण और श्रेणी के अनुसार चिकित्सा फॉर्म अपलोड करें तथा राज्य द्वारा गणना किया शुल्क दें (LL और स्थायी DL के लिए लगभग ₹500–₹1,000)।",
                        "निर्देशानुसार लर्नर टेस्ट दें और मंजूरी के बाद LL डाउनलोड/प्रिंट करें।",
                        "अनिवार्य लर्नर अवधि के बाद (आम तौर पर कम से कम 30 दिन और LL की वैधता के भीतर) Sarathi पर स्थायी DL आवेदन करके RTO ड्राइविंग टेस्ट बुक करें।",
                        "मूल दस्तावेज और वाहन के साथ टेस्ट दें; पास होने पर आवेदन ट्रैक करें और DL डाउनलोड/प्राप्त करें।"
                    ]
                },
                offline: {
                    title: "लर्नर लाइसेंस और स्थायी ड्राइविंग लाइसेंस",
                    requiredDocuments: ["आयु का प्रमाण", "पते का प्रमाण", "आपकी श्रेणी के आवश्यक आवेदन/चिकित्सा फॉर्म"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "क्षेत्रीय परिवहन कार्यालय (RTO)",
                    fees: "लर्नर लाइसेंस और स्थायी DL के लिए लगभग ₹500–₹1,000; सही शुल्क राज्य, वाहन श्रेणी और टेस्ट पर निर्भर है।",
                    estimatedTime: "लर्नर प्रक्रिया और ड्राइविंग टेस्ट के लिए RTO जाना होगा; बीच में अनिवार्य प्रतीक्षा अवधि है।",
                    steps: [
                        "राज्य की प्रक्रिया, फॉर्म, अपॉइंटमेंट और वाहन श्रेणी की शर्तें जानने के लिए RTO से संपर्क करें या Parivahan देखें।",
                        "आयु/पता प्रमाण और आवश्यक चिकित्सा फॉर्म के साथ Form 2 का लर्नर आवेदन जमा करें; LL और स्थायी DL के लिए लगभग ₹500–₹1,000 राज्य शुल्क दें।",
                        "लर्नर टेस्ट पूरा करें और मंजूर LL प्राप्त/डाउनलोड करें।",
                        "अनिवार्य लर्नर अवधि के बाद (आम तौर पर कम से कम 30 दिन और LL की वैधता के भीतर) स्थायी DL आवेदन देकर RTO टेस्ट बुक करें।",
                        "मूल दस्तावेज और उपयुक्त वाहन के साथ टेस्ट दें; पास होने पर रसीद रखें और लाइसेंस के लिए आगे की स्थिति पूछें।"
                    ]
                }
            },
            update: {
                online: {
                    title: "ड्राइविंग लाइसेंस पता/नाम बदलें या नवीनीकरण",
                    requiredDocuments: ["मौजूदा ड्राइविंग लाइसेंस", "नाम/पता बदलाव या नवीनीकरण का प्रमाण", "जहाँ आवश्यक हो चिकित्सा प्रमाणपत्र"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "क्षेत्रीय परिवहन कार्यालय (RTO)",
                    fees: "लगभग ₹200–₹400; सही शुल्क राज्य, सेवा और आवश्यक टेस्ट पर निर्भर है।",
                    estimatedTime: "ऑनलाइन आवेदन और जरूरत पड़ने पर RTO सत्यापन/अपॉइंटमेंट।",
                    steps: [
                        "Parivahan की Sarathi सेवा खोलें, राज्य चुनें और DL सेवा में पता/नाम बदलाव या नवीनीकरण के लिए Form 2 चुनें।",
                        "ड्राइविंग लाइसेंस विवरण भरकर सही सुधार/नवीनीकरण अनुरोध चुनें।",
                        "मौजूदा लाइसेंस और सहायक प्रमाण अपलोड करें; आयु या लाइसेंस श्रेणी के अनुसार आवश्यक हो तो चिकित्सा प्रमाणपत्र दें।",
                        "राज्य द्वारा गणना किया लगभग ₹200–₹400 शुल्क दें और पोर्टल माँगे तो RTO अपॉइंटमेंट लें।",
                        "माँगे जाने पर दस्तावेज/बायोमेट्रिक सत्यापन कराएँ, फिर आवेदन ट्रैक करके अपडेटेड/नवीनीकृत लाइसेंस प्राप्त करें।"
                    ]
                },
                offline: {
                    title: "ड्राइविंग लाइसेंस पता/नाम बदलें या नवीनीकरण",
                    requiredDocuments: ["मौजूदा ड्राइविंग लाइसेंस", "नाम/पता बदलाव या नवीनीकरण का प्रमाण", "जहाँ आवश्यक हो चिकित्सा प्रमाणपत्र"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "क्षेत्रीय परिवहन कार्यालय (RTO)",
                    fees: "लगभग ₹200–₹400; सही शुल्क राज्य, सेवा और आवश्यक टेस्ट पर निर्भर है।",
                    estimatedTime: "RTO में एक बार आवेदन/सत्यापन और उसके बाद प्रक्रिया।",
                    steps: [
                        "स्थानीय फॉर्म और अपॉइंटमेंट की आवश्यकता जानने के लिए RTO से संपर्क करें या Parivahan देखें।",
                        "लाइसेंस बदलाव/नवीनीकरण के लिए Form 2 पूरा करें और मौजूदा लाइसेंस संलग्न करें।",
                        "नए नाम/पते या नवीनीकरण का प्रमाण और जहाँ आवश्यक हो चिकित्सा प्रमाणपत्र दें।",
                        "दस्तावेज RTO में जमा करें और लगभग ₹200–₹400 लागू राज्य शुल्क दें।",
                        "रसीद रखें, माँगा गया सत्यापन पूरा करें और अपडेटेड/नवीनीकृत लाइसेंस के लिए संपर्क करें।"
                    ]
                }
            },
            surrender: {
                online: {
                    title: "ड्राइविंग लाइसेंस सरेंडर या रद्द करें",
                    requiredDocuments: ["मूल ड्राइविंग लाइसेंस या लाइसेंस संख्या", "पहचान प्रमाण", "सरेंडर/रद्द करने का कारण बताने वाला लिखित अनुरोध"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "क्षेत्रीय परिवहन कार्यालय (RTO)",
                    fees: "लागू शुल्क RTO से पूछें; सरेंडर/रद्द करने की प्रक्रिया राज्य और मामले के अनुसार बदलती है।",
                    estimatedTime: "RTO समीक्षा में समय अलग-अलग।",
                    steps: [
                        "Parivahan देखें या अपने लाइसेंसिंग RTO से प्रक्रिया पूछें; सरेंडर/रद्द करने के लिए आम तौर पर RTO में आवेदन देना होता है और प्रक्रिया पूरी तरह ऑनलाइन नहीं है।",
                        "लाइसेंस संख्या/कार्ड, पहचान प्रमाण और सरेंडर या रद्द करने का कारण बताने वाला हस्ताक्षरित अनुरोध तैयार करें।",
                        "पोर्टल का उपयोग केवल यह जाँचने के लिए करें कि आपके राज्य में इस अनुरोध के लिए ऑनलाइन आवेदन, अपॉइंटमेंट या स्थिति सेवा उपलब्ध है या नहीं।",
                        "RTO द्वारा बताए तरीके से अनुरोध और दस्तावेज जमा करें; आवश्यक हो तो व्यक्तिगत रूप से जाएँ।",
                        "पावती लें और RTO द्वारा सरेंडर/रद्दीकरण दर्ज होने पर लिखित पुष्टि प्राप्त करें।"
                    ]
                },
                offline: {
                    title: "ड्राइविंग लाइसेंस सरेंडर या रद्द करें",
                    requiredDocuments: ["मूल ड्राइविंग लाइसेंस या लाइसेंस संख्या", "पहचान प्रमाण", "सरेंडर/रद्द करने का कारण बताने वाला लिखित अनुरोध"],
                    officialPortal: "https://parivahan.gov.in",
                    offlineOffice: "क्षेत्रीय परिवहन कार्यालय (RTO)",
                    fees: "लागू शुल्क RTO से पूछें; सरेंडर/रद्द करने की प्रक्रिया राज्य और मामले के अनुसार बदलती है।",
                    estimatedTime: "RTO में एक बार आवेदन जमा करना और मामले के अनुसार समीक्षा।",
                    steps: [
                        "लाइसेंस जारी/संचालित करने वाले RTO से संपर्क करके सरेंडर/रद्द करने की स्थानीय प्रक्रिया और दस्तावेज पूछें।",
                        "कारण बताते हुए हस्ताक्षरित अनुरोध लिखें और लाइसेंस संख्या/कार्ड तथा पहचान प्रमाण संलग्न करें।",
                        "अनुरोध और दस्तावेज RTO में जमा करें; कार्यालय माँगे तो मूल लाइसेंस भी सौंपें।",
                        "लागू राज्य/RTO शुल्क दें और तारीख वाली पावती प्राप्त करें।",
                        "RTO से आगे संपर्क रखें और लाइसेंस सरेंडर/रद्द होने की लिखित पुष्टि सुरक्षित रखें।"
                    ]
                }
            }
        }
    }
};

const procedureResources = {
    en: {
        stages: ['Prepare and confirm eligibility', 'Open the correct service', 'Enter application details', 'Review and submit', 'Save acknowledgement and track'],
        details: [
            'First confirm that this route is available for your request and that the applicant meets the service eligibility rules.',
            'Use only the official portal or the named government office. Confirm the service name and jurisdiction before entering personal information.',
            'Complete every field from the applicant’s source records. Use the requested identifier and select the precise service reason.',
            'Compare the entered values with the proofs, check the fee and declarations, then submit once. Keep the reference displayed after submission.',
            'Save the acknowledgement and reference number before closing the page. Check the status through the same official service.'
        ],
        substeps: [
            ['Check the eligibility and service notes for the selected request.', 'Keep the identity, address and date-of-birth proofs listed above within reach.', 'Use the applicant’s own mobile/email and ensure it can receive service messages.'],
            ['Open the official portal shown in this guide and check its domain spelling.', 'Choose the correct state, office, service and request type where prompted.', 'Sign in or create an account only through the official portal; never share an OTP with an agent.'],
            ['Enter the applicant name and date of birth exactly as shown in the supporting proof.', 'Enter the address, contact details and existing document/identifier carefully.', 'Select the right category, reason and proof type; attach only documents requested for that field.'],
            ['Review every field and the generated preview before confirming.', 'Read declarations and correct any mismatch before submission.', 'Pay only through the portal payment gateway when a fee applies; do not refresh or retry while payment is processing.'],
            ['Download or photograph the acknowledgement, reference number and payment receipt.', 'Track the request using the same official portal and the reference number.', 'Respond to an official verification or deficiency notice by its stated deadline.']
        ],
        warnings: [
            'Eligibility, required proofs and portal availability vary. Confirm the current rules before submitting or paying.',
            'Avoid links received in unsolicited messages. Check the government domain before entering Aadhaar, PAN or OTP details.',
            'A spelling, date-of-birth or address mismatch can cause a query or rejection; do not guess or abbreviate names.',
            'Do not refresh, close the tab or make a second payment while a transaction is pending. Use the portal receipt/status to confirm payment.',
            'An acknowledgement is not approval or proof that the record is already updated. Wait for the official status and preserve the reference.'
        ],
        uploadHeading: 'Online upload specifications',
        uploadIntro: 'Preparation targets only — the official portal’s current on-screen limits and accepted formats always take priority.',
        uploadItems: [
            'Photo: JPEG/JPG, 200 DPI target, 20–50 KB where the portal requests a photo upload.',
            'Supporting proof: PDF, under 2 MB where the portal accepts a single PDF upload.',
            'Keep scans legible, upright, complete, unaltered and within the exact size shown beside the upload control.',
            'Use the portal’s preview to confirm that all edges, text, stamps and signatures are readable before submission.'
        ],
        officeHeading: 'Typical office-counter workflow',
        officeIntro: 'Confirm the appointment, originals and copy count with your named office; requirements differ by service and jurisdiction.',
        officeItems: [
            'Carry originals for in-person verification plus two self-attested photocopies of each requested proof as a preparation set; the counter may ask for a different number.',
            'Typical flow: Entry/security check → Token or appointment counter → Form/document scrutiny → Biometric/photo counter (if required) → Verification officer → Fee/receipt or acknowledgement counter.',
            'Keep originals accessible and submit copies only when requested. Do not leave originals behind unless the authority issues a receipt.',
            'Check every printed detail on the acknowledgement before leaving and ask how to check the next stage.'
        ],
        trackingHeading: 'After submission: tracking and expected stages',
        rejectionHeading: 'Common rejection / query reasons and prevention',
        rejectionReasons: [
            ['Information does not match source records', 'Match spelling, date of birth and address to acceptable proofs; correct errors before final submission.'],
            ['Wrong, expired, incomplete or unreadable proof', 'Check the specific service checklist, validity and file preview; provide all pages requested.'],
            ['Duplicate, ineligible or unverified request', 'Check eligibility and existing records first; answer official verification requests and submit only one correct request.']
        ],
        trackingStages: {
            aadhaar: [['Update URN (14 digits) / Enrolment ID (EID)', 'Acknowledgement is issued at submission (Day 0). For an update, enter the 14-digit URN on UIDAI status check; for new enrolment, use the EID printed on the slip. Generation or update processing can take up to 90 days, depending on verification.'], ['Quality checks and delivery', 'Quality checks follow processing; allow additional days for e-Aadhaar/card availability after approval. UIDAI processing may take up to 90 days overall; contact UIDAI if the portal requests action or the published service period has passed.']],
            pan: [['15-digit acknowledgement number', 'The acknowledgement is issued after successful submission/payment (normally Day 0). Use it to check receipt and processing; routine processing is often about 15–20 working days, subject to document checks.'], ['PAN allotment and dispatch', 'After allotment, e-PAN availability or physical-card dispatch may take several additional working days (often about 3–7); track separately where shown and respond to discrepancies.']],
            passport: [['Application/file number', 'Use the file number and date of birth in Passport Seva status tracking. Appointment review is usually recorded on the visit day; routine issue is often within about 30 days excluding police-verification time, while Tatkaal timelines are shorter only for eligible, clear cases.'], ['Police verification and dispatch', 'Police verification commonly takes about 1–3 weeks but depends on the local police station; dispatch follows approval. Check the portal/SMS and do not assume a Tatkaal appointment guarantees approval.']],
            voter: [['Form 6/7/8 reference number (or ARN, when issued)', 'The reference is available after submission (normally Day 0). Use it on Voters’ Services Portal to check BLO/ERO processing. As a planning estimate, scrutiny/field verification may take around 2–4 weeks; election schedules and local workload can change this.'], ['ERO decision and roll publication', 'ERO decision and roll publication can take 1–4 additional weeks and follow the constituency revision schedule. Confirm the entry in the published roll; a receipt alone does not add or remove a name.']],
            drivingLicence: [['Sarathi application number / ARN', 'The application number is available after submission. Use the state-selected Sarathi portal to check fee and scrutiny; allow roughly 1–3 weeks for routine review where no test is pending. Test slots and RTO processing times vary by state and availability.'], ['Test result, approval and dispatch', 'A test date may be days or weeks away. After passing and verification, approval/dispatch often takes about 3–10 working days; confirm the estimate with the licensing RTO.']]
        }
    },
    hi: {
        stages: ['तैयारी और पात्रता जाँचें', 'सही सेवा खोलें', 'आवेदन विवरण भरें', 'जाँचें और जमा करें', 'पावती रखें और स्थिति ट्रैक करें'],
        details: [
            'पहले पुष्टि करें कि यह तरीका आपके अनुरोध के लिए उपलब्ध है और आवेदक सेवा की पात्रता शर्तें पूरी करता है।',
            'केवल इस गाइड में दिए आधिकारिक पोर्टल या सरकारी कार्यालय का उपयोग करें। व्यक्तिगत जानकारी भरने से पहले सेवा और अधिकार-क्षेत्र जाँचें।',
            'आवेदक के मूल रिकॉर्ड के अनुसार सभी फ़ील्ड भरें। माँगी गई पहचान संख्या और सही सेवा-कारण चुनें।',
            'प्रमाणों से दर्ज जानकारी मिलाएँ, शुल्क और घोषणाएँ जाँचें, फिर एक बार जमा करें। जमा करने के बाद दिखा संदर्भ सुरक्षित रखें।',
            'पृष्ठ बंद करने से पहले पावती और संदर्भ संख्या सहेजें। उसी आधिकारिक सेवा से स्थिति जाँचें।'
        ],
        substeps: [
            ['चुने गए अनुरोध की पात्रता और सेवा निर्देश पढ़ें।', 'ऊपर दी पहचान, पता और जन्मतिथि के प्रमाण तैयार रखें।', 'आवेदक का अपना मोबाइल/ईमेल दें और सुनिश्चित करें कि उस पर सेवा संदेश मिल सकें।'],
            ['इस गाइड में दिए आधिकारिक पोर्टल को खोलें और डोमेन की वर्तनी जाँचें।', 'जहाँ पूछा जाए, सही राज्य, कार्यालय, सेवा और अनुरोध प्रकार चुनें।', 'खाता केवल आधिकारिक पोर्टल पर बनाएँ/लॉगिन करें; OTP किसी एजेंट से साझा न करें।'],
            ['आवेदक का नाम और जन्मतिथि सहायक प्रमाण के बिल्कुल अनुसार भरें।', 'पता, संपर्क और मौजूदा दस्तावेज़/पहचान संख्या ध्यान से दर्ज करें।', 'सही श्रेणी, कारण और प्रमाण प्रकार चुनें; केवल माँगे गए फ़ील्ड के लिए दस्तावेज़ लगाएँ।'],
            ['पुष्टि से पहले हर फ़ील्ड और तैयार पूर्वावलोकन जाँचें।', 'जमा करने से पहले घोषणाएँ पढ़ें और कोई अंतर हो तो सुधारें।', 'शुल्क लागू हो तो केवल पोर्टल भुगतान गेटवे से दें; भुगतान के दौरान पृष्ठ रीफ़्रेश या दोबारा भुगतान न करें।'],
            ['पावती, संदर्भ संख्या और भुगतान रसीद डाउनलोड/सहेजें।', 'उसी आधिकारिक पोर्टल और संदर्भ संख्या से अनुरोध ट्रैक करें।', 'आधिकारिक सत्यापन या कमी संबंधी सूचना का निर्धारित समय में जवाब दें।']
        ],
        warnings: [
            'पात्रता, प्रमाण और पोर्टल उपलब्धता बदल सकती है। आवेदन या भुगतान से पहले वर्तमान नियम जाँचें।',
            'अनजान संदेश के लिंक न खोलें। आधार, PAN या OTP देने से पहले सरकारी डोमेन जाँचें।',
            'नाम, जन्मतिथि या पते में अंतर से प्रश्न या आवेदन अस्वीकृत हो सकता है; नाम का अनुमान या संक्षिप्त रूप न लिखें।',
            'लेन-देन लंबित होने पर पृष्ठ रीफ़्रेश/बंद न करें और दोबारा भुगतान न करें। भुगतान पुष्टि के लिए पोर्टल की रसीद/स्थिति देखें।',
            'पावती मंजूरी नहीं है और न ही रिकॉर्ड अपडेट होने का प्रमाण। आधिकारिक स्थिति आने तक संदर्भ सुरक्षित रखें।'
        ],
        uploadHeading: 'ऑनलाइन अपलोड के विनिर्देश',
        uploadIntro: 'ये तैयारी के लक्ष्य हैं — पोर्टल पर दिखी वर्तमान सीमा और स्वीकृत फ़ॉर्मेट ही मान्य होंगे।',
        uploadItems: [
            'फोटो: JPEG/JPG, 200 DPI लक्ष्य, 20–50 KB — केवल जहाँ पोर्टल फोटो अपलोड माँगे।',
            'सहायक प्रमाण: PDF, 2 MB से कम — जहाँ पोर्टल एक PDF अपलोड स्वीकार करे।',
            'स्कैन पढ़ने योग्य, सीधा, पूरा और बिना बदलाव का रखें; अपलोड नियंत्रण के पास दिखाई गई सटीक सीमा मानें।',
            'जमा करने से पहले पोर्टल पूर्वावलोकन में सभी किनारे, पाठ, मुहर और हस्ताक्षर स्पष्ट दिखना जाँचें।'
        ],
        officeHeading: 'कार्यालय काउंटर की सामान्य प्रक्रिया',
        officeIntro: 'अपॉइंटमेंट, मूल दस्तावेज़ और प्रतियों की संख्या संबंधित कार्यालय से पक्का करें; आवश्यकताएँ सेवा और क्षेत्र के अनुसार बदलती हैं।',
        officeItems: [
            'व्यक्तिगत सत्यापन के लिए मूल दस्तावेज़ तथा तैयारी हेतु प्रत्येक माँगे गए प्रमाण की दो स्वयं-सत्यापित प्रतियाँ रखें; काउंटर अलग संख्या माँग सकता है।',
            'सामान्य क्रम: प्रवेश/सुरक्षा जाँच → टोकन या अपॉइंटमेंट काउंटर → फॉर्म/दस्तावेज़ जाँच → बायोमेट्रिक/फोटो काउंटर (यदि आवश्यक) → सत्यापन अधिकारी → शुल्क/रसीद या पावती काउंटर।',
            'मूल दस्तावेज़ पास रखें और प्रतियाँ केवल माँगे जाने पर दें। रसीद के बिना मूल दस्तावेज़ कार्यालय में न छोड़ें।',
            'जाने से पहले पावती पर छपे सभी विवरण जाँचें और अगला चरण पूछें।'
        ],
        trackingHeading: 'जमा करने के बाद: ट्रैकिंग और अपेक्षित चरण',
        rejectionHeading: 'अस्वीकृति/आपत्ति के सामान्य कारण और बचाव',
        rejectionReasons: [
            ['जानकारी मूल रिकॉर्ड से मेल नहीं खाती', 'नाम की वर्तनी, जन्मतिथि और पता स्वीकार्य प्रमाण से मिलाएँ; अंतिम जमा से पहले गलती सुधारें।'],
            ['गलत, समाप्त, अधूरा या अस्पष्ट प्रमाण', 'सेवा की विशेष सूची, वैधता और फ़ाइल पूर्वावलोकन जाँचें; माँगे गए सभी पृष्ठ दें।'],
            ['डुप्लिकेट, अपात्र या सत्यापन न हुआ अनुरोध', 'पहले पात्रता और मौजूदा रिकॉर्ड जाँचें; आधिकारिक सत्यापन का जवाब दें और केवल एक सही अनुरोध जमा करें।']
        ],
        trackingStages: {
            aadhaar: [['अपडेट URN (14 अंक) / नामांकन ID (EID)', 'आवेदन के बाद पावती मिलती है (आमतौर पर उसी दिन)। अपडेट के लिए UIDAI स्थिति जाँच में 14-अंकीय URN डालें; नए नामांकन के लिए पर्ची पर छपा EID उपयोग करें। सत्यापन के अनुसार प्रक्रिया में 90 दिन तक लग सकते हैं।'], ['गुणवत्ता जाँच और डिलीवरी', 'प्रक्रिया के बाद गुणवत्ता जाँच होती है; मंजूरी के बाद e-Aadhaar/कार्ड उपलब्ध होने में अतिरिक्त दिन लग सकते हैं। कुल UIDAI प्रक्रिया में 90 दिन तक लग सकते हैं।']],
            pan: [['15-अंकीय पावती संख्या', 'सफल जमा/भुगतान के बाद पावती मिलती है (आमतौर पर उसी दिन)। इससे प्राप्ति और प्रक्रिया जाँचें; दस्तावेज़ जाँच के अधीन सामान्य प्रक्रिया में लगभग 15–20 कार्यदिवस लग सकते हैं।'], ['PAN आवंटन और डाक', 'आवंटन के बाद e-PAN उपलब्ध होने या फिजिकल कार्ड भेजे जाने में कई अतिरिक्त कार्यदिवस (अक्सर लगभग 3–7) लग सकते हैं; जहाँ दिखे अलग ट्रैक करें।']],
            passport: [['आवेदन/फाइल संख्या', 'Passport Seva स्थिति में फाइल संख्या और जन्मतिथि उपयोग करें। अपॉइंटमेंट की जाँच आम तौर पर उसी दिन दर्ज होती है; पुलिस सत्यापन का समय छोड़कर सामान्य पासपोर्ट अक्सर लगभग 30 दिनों में जारी होता है। पात्र और स्पष्ट मामलों में ही Tatkaal तेज़ होता है।'], ['पुलिस सत्यापन और डाक', 'स्थानीय पुलिस स्टेशन के अनुसार सत्यापन में लगभग 1–3 सप्ताह लग सकते हैं; मंजूरी के बाद डाक होती है। पोर्टल/SMS देखें; Tatkaal अपॉइंटमेंट मंजूरी की गारंटी नहीं है।']],
            voter: [['Form 6/7/8 संदर्भ संख्या (या जारी होने पर ARN)', 'जमा करने के बाद संदर्भ संख्या मिलती है (आमतौर पर उसी दिन)। इससे BLO/ERO प्रक्रिया जाँचें। योजना के लिए जाँच/क्षेत्र सत्यापन में लगभग 2–4 सप्ताह लग सकते हैं; चुनाव कार्यक्रम और स्थानीय काम से समय बदलता है।'], ['ERO निर्णय और सूची प्रकाशन', 'ERO निर्णय और सूची प्रकाशन में 1–4 अतिरिक्त सप्ताह लग सकते हैं और यह निर्वाचन क्षेत्र के संशोधन कार्यक्रम पर निर्भर है। प्रकाशित सूची में पुष्टि करें; पावती से नाम जुड़ना/हटना सुनिश्चित नहीं होता।']],
            drivingLicence: [['Sarathi आवेदन संख्या / ARN', 'आवेदन के बाद संख्या मिलती है। राज्य चुने हुए Sarathi पोर्टल पर शुल्क और जाँच देखें; टेस्ट लंबित न हो तो सामान्य समीक्षा में लगभग 1–3 सप्ताह लग सकते हैं। टेस्ट स्लॉट और RTO समय राज्य के अनुसार बदलते हैं।'], ['टेस्ट परिणाम, मंजूरी और डाक', 'टेस्ट की तारीख में दिन या सप्ताह लग सकते हैं। टेस्ट और सत्यापन के बाद मंजूरी/डाक में लगभग 3–10 कार्यदिवस लग सकते हैं; RTO से पुष्टि करें।']]
        }
    }
};

const documentFieldChecks = {
    aadhaar: {
        en: ['Demographic entry: full name, date of birth/age, gender, address and relationship details where the form asks.', 'Verify the mobile/email and transliteration; at a centre, check the operator’s screen and biometrics before final confirmation.'],
        hi: ['जनसांख्यिकीय विवरण: पूरा नाम, जन्मतिथि/आयु, लिंग, पता और फॉर्म पूछे तो संबंध विवरण भरें।', 'मोबाइल/ईमेल और लिप्यंतरण जाँचें; केंद्र पर अंतिम पुष्टि से पहले ऑपरेटर की स्क्रीन और बायोमेट्रिक्स जाँचें।']
    },
    pan: {
        en: ['Form 49A/CSF: legal name, date of birth/incorporation, parent details where requested, communication address and contact details.', 'Use the existing PAN for a correction; enter Aadhaar/e-KYC details only in the applicable authenticated service.'],
        hi: ['Form 49A/CSF: कानूनी नाम, जन्मतिथि/स्थापना तिथि, माँगे जाने पर माता-पिता का विवरण, पत्राचार पता और संपर्क विवरण।', 'सुधार के लिए मौजूदा PAN उपयोग करें; आधार/e-KYC विवरण केवल लागू प्रमाणित सेवा में भरें।']
    },
    passport: {
        en: ['Application: applicant name, date/place of birth, address history, family details, emergency contact and previous passport details where applicable.', 'Select the correct booklet, Normal/Tatkaal option and re-issue reason; answer every eligibility/declaration question accurately.'],
        hi: ['आवेदन: आवेदक का नाम, जन्मतिथि/जन्मस्थान, पता इतिहास, पारिवारिक विवरण, आपातकालीन संपर्क और जहाँ लागू हो पुराने पासपोर्ट का विवरण।', 'सही पुस्तिका, Normal/Tatkaal विकल्प और पुनः जारी कारण चुनें; पात्रता/घोषणा के सभी प्रश्न सही भरें।']
    },
    voter: {
        en: ['Form 6/7/8: elector name, relative name, date of birth, gender, ordinary residence and EPIC number where available.', 'Select the correct constituency and one action only: new inclusion, correction/address shift, or deletion; give a usable contact number.'],
        hi: ['Form 6/7/8: मतदाता का नाम, संबंधी का नाम, जन्मतिथि, लिंग, सामान्य निवास और उपलब्ध हो तो EPIC संख्या।', 'सही निर्वाचन क्षेत्र और केवल एक कार्रवाई चुनें: नया नाम, सुधार/पता बदलाव या विलोपन; चालू संपर्क नंबर दें।']
    },
    drivingLicence: {
        en: ['Sarathi/Form 2: state, applicant details, licence number if existing, requested service and vehicle class/category.', 'Confirm age eligibility and category-specific medical declaration; book the correct test class and use a vehicle permitted for that class.'],
        hi: ['Sarathi/Form 2: राज्य, आवेदक विवरण, मौजूदा लाइसेंस संख्या, माँगी सेवा और वाहन श्रेणी भरें।', 'आयु पात्रता और श्रेणी-विशिष्ट चिकित्सा घोषणा जाँचें; सही टेस्ट श्रेणी बुक करें और उसी श्रेणी के अनुमत वाहन का उपयोग करें।']
    }
};

const procedureRoutes = {
    aadhaar: {portal: 'myAadhaar Portal', office: 'Aadhaar Seva Kendra (ASK)', service: {new: 'Enrolment', update: 'Update Aadhaar', surrender: 'Biometric Lock'}},
    pan: {portal: 'PAN Services Home', office: 'Authorised PAN Centre / Assessing Officer', service: {new: 'Form 49A', update: 'Correction Form', surrender: 'PAN Cancellation'}},
    passport: {portal: 'Passport Seva Home', office: 'PSK / POPSK', service: {new: 'Fresh Passport', update: 'Re-issue Passport', surrender: 'Surrender Certificate'}},
    voter: {portal: 'Voters’ Services Portal Home', office: 'BLO / Tehsil Office', service: {new: 'Form 6', update: 'Form 8', surrender: 'Form 7'}},
    drivingLicence: {portal: 'Sarathi Parivahan Home', office: 'Regional Transport Office (RTO)', service: {new: 'Learner Licence / Driving Licence', update: 'DL Update / Renewal', surrender: 'DL Surrender / Cancellation'}}
};

const procedureStageTitlesHi = {
    preparation: 'तैयारी और पात्रता जाँचें',
    access: 'सही सेवा खोलें',
    details: 'आवेदन विवरण भरें',
    review: 'जाँचें और जमा करें',
    tracking: 'पावती रखें और स्थिति ट्रैक करें'
};

const deepStageRows = {
    en: {
        aadhaar: {
            new: [
                ['Stage 1: Confirm new-enrolment eligibility', 'Eligibility check', 'New enrolment is free and biometric capture requires the applicant in person. Online steps are preparation only.', 'Check whether an Aadhaar/EID already exists|Keep applicant present; arrange parent/guardian for a child where required|Prepare original proofs and working contact number', 'Do not pay an agent for a free enrolment; online enrolment is not available.'],
                ['Stage 2: Find an enrolment centre on Bhuvan', 'Bhuvan Aadhaar locator', 'Find an Aadhaar Seva Kendra (ASK) that provides new enrolment, not merely updates.', 'Open https://bhuvan.nrsc.gov.in/aadhaar|Search by PIN code/city or allow location access|Confirm centre address, opening hours and enrolment service before travelling', 'Map listings and services can change; confirm availability with the centre.'],
                ['Stage 3: Book a slot and complete the Enrolment Form', 'Appointment booking → Enrolment', 'Book a slot through the UIDAI appointment link when offered. Fill the Enrolment Form online/at the centre and attend in person.', 'Select enrolment, centre and date/time; save confirmation|Enter full name, date of birth/age, gender, address, PIN and mobile|Arrive early with applicant and originals', 'Appointment booking does not complete enrolment; applicant must attend.'],
                ['Stage 4: Verify POI, POA and HoF/POR proofs', 'Document scrutiny → POI / POA / HoF', 'The operator checks Proof of Identity (POI) and Proof of Address (POA). Head of Family (HoF) enrolment also needs Proof of Relationship (POR) and HoF authentication.', 'Use UIDAI’s current accepted-document list|Bring HoF Aadhaar and accepted POR linking the resident to HoF, if using family address|Ask about the Introducer route if the applicant has no documents', 'A relationship claim without accepted POR/HoF authentication may stop enrolment.'],
                ['Stage 5: Get token and verify entered details', 'Reception → Token counter → Enrolment desk', 'Check in at the ASK, obtain the queue token and review the operator-entered details before biometrics.', 'Show appointment confirmation and identify standard/HoF route|Verify name, DOB, gender, full address and PIN on screen|Check English and local-language transliteration', 'Correct spelling before submission; later demographic correction may be chargeable.'],
                ['Stage 6: Capture photo and biometrics', 'Biometric counter → Photograph → Fingerprints → Iris', 'The operator captures a live webcam photo against a white background, 10 fingerprints and both iris scans, subject to UIDAI age/medical exceptions.', 'Face the camera against the white background; follow operator instructions|Place each of 10 fingers as prompted and repeat poor-quality captures|Look at the iris camera for both eyes and report injury/inability', 'Do not let an agent retain biometrics or ask you to send biometrics by message.'],
                ['Stage 7: Verifier sign-off and 28-digit EID slip', 'Verifier sign-off → Final submit → Acknowledgement', 'After proof verification and sign-off, collect the 28-digit Enrolment ID (EID): 14-digit enrolment number plus 14-digit date/time stamp.', 'Read final preview and request corrections before confirmation|Wait for verifier sign-off and submission|Check all 28 EID digits and timestamp are legible on the receipt', 'Keep the EID acknowledgement private; ask for a clear receipt before leaving.'],
                ['Stage 8: Track, wait and download e-Aadhaar', 'UIDAI status → Download Aadhaar', 'Use the EID for status; generation commonly takes 15–30 days but may take longer. Download e-Aadhaar only after UIDAI shows it is generated.', 'Enter the 14-digit enrolment number and 14-digit timestamp when requested|Check status and verify data after download|PDF password: first four letters of name in CAPS + birth year (YYYY); follow UIDAI instructions for shorter names', '15–30 days is an estimate. Use UIDAI status for delays and protect the downloaded PDF.']
            ],
            update: [
                ['Stage 1: Identify the exact update and service route', 'myAadhaar / ASK service selection', 'Online services cover eligible address/document updates. Mobile number, biometrics and photograph cannot be updated online; those require an ASK visit.', 'Address/document change: check current myAadhaar availability|Mobile, photo, fingerprint or iris: plan an in-person ASK visit|Keep Aadhaar number and supporting proof ready', 'A document upload is not the same as changing demographics. Verify free online document-upload offer through June 2027 on UIDAI.'],
                ['Stage 2: Sign in with 12-digit Aadhaar and OTP', 'Home → Login → Aadhaar and OTP', 'Use the 12-digit Aadhaar and OTP delivered to the registered mobile. For the offline route, check in at the ASK with your Aadhaar details.', 'Open https://myaadhaar.uidai.gov.in and verify the domain|Enter 12-digit Aadhaar, security code and registered-mobile OTP|If the mobile is inaccessible, visit ASK instead of using an agent', 'Never disclose OTP to an agent or caller.'],
                ['Stage 3: Open Address Update and enter address', 'Login → Address Update → Address fields', 'Enter each component separately, including C/O (Care Of) where relevant, house/building, landmark and PIN code.', 'Fill C/O only when needed, then House/Building, street/area and landmark|Enter complete locality, village/town/city and PIN|Check auto-fetched State/District against the actual address', 'Auto-fetch does not replace the house, street or locality fields.'],
                ['Stage 4: Review auto-translated local-language text', 'Address Update → Local-language preview', 'Review the auto-translated Hindi or regional-language spelling field by field and correct it with the portal keyboard if inaccurate.', 'Check name, C/O, house, street, locality and landmark in both scripts|Correct transliteration with on-screen keyboard/input method|Recheck house number, PIN and numerals', 'Local-language errors can appear on the printed letter; fix them before proceeding.'],
                ['Stage 5: Upload own proof or use HoF workflow', 'Address Update → Proof category → Upload / HoF', 'Upload an original colour scan as PDF/JPEG under the on-screen 2 MB limit. If no proof is in the resident’s name, use Head of Family (HoF) address validation where eligible.', 'Choose the correct proof category and upload complete, legible colour scan|HoF route: enter HoF Aadhaar and accepted Proof of Relationship (POR)|HoF must approve/authenticate consent by OTP within the portal deadline', 'Without accepted POR and HoF consent, the request may be rejected; portal limits override general file targets.'],
                ['Stage 6: Preview, declare and pay by UPI', 'Preview → Declaration → Payment → UPI', 'Compare both language previews with the proof, submit the declaration and pay the fee shown using UPI or another offered method.', 'Review C/O, house/building, landmark, locality, PIN, State and District|Confirm declaration only when correct|Complete UPI approval and wait for UIDAI confirmation', 'Do not refresh or pay again while the transaction is pending; check payment/request status first.'],
                ['Stage 7: Download 14-digit URN and track', 'Confirmation → Download URN slip → Status', 'Download the acknowledgement and save the 14-digit Update Request Number (URN) for status tracking.', 'Check the URN digits and selected update type on the slip|Use UIDAI update-status service with the URN|Keep payment receipt and acknowledgement until completion', 'URN is a tracking number, not the Aadhaar number; do not share it publicly.'],
                ['Stage 8: Complete mobile/photo/biometric changes at ASK', 'ASK appointment → Token → Update counter → Biometrics → Receipt', 'Mobile number, photograph and biometric updates require an in-person ASK visit; demographic update fee is ₹75 and biometric update fee is ₹125.', 'Carry Aadhaar details and original demographic proof|Tell operator whether mobile, photo, fingerprint or iris is changing|Review screen, complete capture/verification and collect receipt|Confirm current fee at UIDAI/ASK before payment', 'These updates cannot be completed online; online address update does not change mobile, photo or biometrics.']
            ],
            surrender: [
                ['Stage 1: Understand biometric locking', 'UIDAI security services → Biometric lock', 'Locking restricts fingerprint/iris/face Aadhaar authentication while active, including biometric-based AePS transactions, helping reduce fingerprint misuse. It does not deactivate Aadhaar and is reversible.', 'Decide whether you can pause biometric authentication|Keep registered mobile available for OTP|For bank protection also use bank alerts and account/device controls', 'Biometric lock does not block OTP, UPI, card or every form of bank fraud.'],
                ['Stage 2: Generate a 16-digit VID first', 'UIDAI → Generate / Retrieve VID → OTP', 'Generate a Virtual ID (VID) before using it as an alternative identifier. VID does not replace Aadhaar and does not itself lock biometrics.', 'Use official UIDAI/myAadhaar VID service|Enter Aadhaar/security code and registered-mobile OTP as prompted|Save the generated 16-digit VID securely', 'Use VID only with services that accept it; never share VID or OTP with callers.'],
                ['Stage 3: Sign in to myAadhaar', 'myAadhaar Home → Login → Aadhaar/VID → OTP', 'Open the official myAadhaar security service and authenticate using the method currently offered.', 'Verify https://myaadhaar.uidai.gov.in|Complete CAPTCHA and request OTP|Open Aadhaar Services → Lock/Unlock Biometrics', 'Do not install remote-access software at a caller’s request.'],
                ['Stage 4: Review lock effects and recovery access', 'Aadhaar Services → Lock/Unlock Biometrics → Instructions', 'Read which biometric modes are blocked and how to unlock them. Ensure you can access OTP before locking.', 'Check effect on fingerprint, iris and face authentication|Check if your service accepts VID|Keep registered mobile and recovery route available', 'Legitimate biometric services will also fail while the lock is active.'],
                ['Stage 5: Submit biometric lock request', 'Lock/Unlock Biometrics → Lock → OTP → Confirm', 'Select Lock Biometrics and confirm with OTP. Locking through myAadhaar is free.', 'Choose Lock, not Aadhaar cancellation/deactivation|Read consent and masked identifier|Submit OTP once and wait for confirmation', 'Never tell anyone the OTP, including anyone claiming to be UIDAI support.'],
                ['Stage 6: Verify lock status', 'Lock/Unlock Biometrics → Current status', 'Confirm that the service reports biometrics as locked and retain the confirmation securely.', 'Record status and date/time|Keep registered mobile/VID access details|If result timed out, check status rather than repeatedly submitting', 'A click or timeout alone is not proof that the lock succeeded.'],
                ['Stage 7: Order PVC card separately', 'myAadhaar → Order Aadhaar PVC Card → Verify → Pay', 'PVC ordering is a separate service. Confirm delivery address and the current amount displayed before payment.', 'Select Order Aadhaar PVC Card|Authenticate with permitted Aadhaar/VID and OTP|Review masked preview/address, pay displayed charge and save receipt', 'PVC order does not lock biometrics; lock does not place a PVC order.'],
                ['Stage 8: Track delivery and unlock only when needed', 'PVC order status → Unlock Biometrics → OTP', 'Track PVC delivery using its service reference. For legitimate biometric use, unlock through UIDAI first and relock later if desired.', 'Save PVC Service Request Number and track on myAadhaar|Choose Unlock and complete current authentication/OTP|Verify unlocked status before the other service, then optionally relock', 'Unlock only on the official portal and only when required; Aadhaar biometric locking is not a bank-fraud guarantee.']
            ]
        },
        pan: {
            new: [
                ['Stage 1: Check existing PAN and identify issuer', 'PAN status / Back of card → issuer service', 'Ensure the applicant does not already have PAN. For correction/reprint, read the reverse of the card to see whether Protean (NSDL) or UTIITSL issued it.', 'Check PAN status through Income Tax e-Filing if uncertain|Protean: https://onlineservices.nsdl.com; UTIITSL: https://pan.utiitsl.com|Instant e-PAN eligibility: https://incometax.gov.in', 'Never apply for a second PAN; duplicate PAN may attract a penalty.'],
                ['Stage 2: Generate 15-digit temporary token', 'Protean PAN Home → Form 49A → Temporary Token', 'For a new individual application, generate the temporary token before the full form. Protean token is valid for 30 days.', 'Choose New PAN / Form 49A and Individual category|Enter email, mobile and DOB exactly|Record the 15-digit token and any OTP confirmation', 'Token is not the PAN acknowledgement and does not submit the form.'],
                ['Stage 3: Continue with PAN Application Form', 'Temporary Token → Continue with PAN Application Form', 'Resume the saved application with the token and complete the remaining sections before token expiry.', 'Enter token and requested CAPTCHA/security code|Continue the saved draft|Check the selected Indian-citizen Form 49A route', 'Do not share token/OTP; expire or lost token may require restarting.'],
                ['Stage 4: Choose submission mode carefully', 'Application type → Submission mode', 'Compare: (A) e-KYC & e-Sign paperless uses Aadhaar photo and sends no physical courier; (B) scanned images + e-Sign accepts custom photo/signature; (C) physical documents requires printed acknowledgement and postal packet.', 'A: confirm Aadhaar name/mobile match and e-KYC eligibility|B: prepare compliant images and complete Aadhaar OTP e-Sign|C: ensure printer, two photos, signature and trackable Speed Post are available', 'Paperless means no physical courier, not necessarily no application fee.'],
                ['Stage 5: Fill applicant, contact and dispatch details', 'Form 49A → Applicant details → Address / Contact', 'Enter legal personal details and select a correct communication address for physical-card delivery.', 'Enter full name, DOB, gender and parent details where asked|Enter mobile/email and Aadhaar only in applicable authenticated step|Choose correspondence address and category carefully', 'Details must match proof exactly; check name and date before leaving each form section.'],
                ['Stage 6: Prepare photo/signature and proof files', 'Document upload → Photo / Signature / Proof', 'For scanned image mode use: photo 3.5 × 2.5 cm, colour JPEG, 200 DPI, under 50 KB; black-ink signature on white paper 2 × 4.5 cm, 200 DPI JPEG under 50 KB; supporting PDF maximum 300 KB per document where required.', 'Crop photo to 3.5 × 2.5 cm and keep face clear|Scan signature at 2 × 4.5 cm; avoid shadows and photo-like background|Upload each requested proof PDF separately; check uploader preview|Paperless e-KYC may use Aadhaar photo automatically', 'Treat these as portal-dependent limits; the current upload screen overrides them.'],
                ['Stage 7: Review, declaration, e-Sign and payment', 'Preview → Declaration → Aadhaar e-Sign → Payment', 'Review the completed application and pay the amount shown for chosen delivery/address; finish e-Sign or print route as selected.', 'Verify name, DOB, category, proofs, address and card option|Read declaration and confirm only if accurate|Pay using official gateway and save receipt|Wait for portal submission confirmation', 'Do not refresh or retry payment while status is pending.'],
                ['Stage 8: Complete physical packet if selected', 'Acknowledgement → Print → Paste photos → Sign → Speed Post', 'For physical submission, print the acknowledgement, attach two photos as directed, sign without touching the photo face and post the proof packet.', 'Print acknowledgement at actual size|Paste one photo across its marked box and one inside its box where the instructions specify|Sign designated area without touching/crossing photo face|Speed Post to the current PAN Services Unit address printed on acknowledgement (Protean Pune destination may change)', 'A commonly cited address is “Income Tax PAN Services Unit, Protean eGov Technologies Limited, Pune - 411004”; verify it against the current acknowledgement before posting because the address may change.'],
                ['Stage 9: Track with 15-digit acknowledgement', 'Provider status → PAN application tracking', 'Use the 15-digit acknowledgement to track Protean/UTIITSL. Instant e-PAN has a separate Income Tax e-Filing request status.', 'Save acknowledgement and payment receipt|Track with the issuing provider’s official status service|For free Aadhaar Instant e-PAN use Income Tax e-Filing status/download|Check allotted PAN data and report mismatch through issuer', 'A token or payment receipt is not allotment; wait for official status.']
            ],
            update: [
                ['Stage 1: Identify issuer and existing PAN', 'Back of PAN card → Protean / UTIITSL', 'For correction/reprint, use issuer indicated on the card reverse. Keep existing PAN and field-specific proof ready.', 'Protean: https://onlineservices.nsdl.com; UTIITSL: https://pan.utiitsl.com|Confirm PAN using Income Tax service if needed|Select correction of existing PAN, not new allotment', 'Do not submit duplicate corrections through both providers.'],
                ['Stage 2: Generate temporary token', 'Provider → PAN correction → Temporary Token', 'Generate token before entering the correction form; the provider displays validity (Protean token generally 30 days).', 'Enter existing PAN and Individual category|Provide email, mobile and DOB|Record token and use Continue with PAN Application Form', 'Token saves/resumes the draft; it is not acknowledgement or submission.'],
                ['Stage 3: Verify the current correction form', 'Correction service → Current form and instructions', 'The claimed April 2026 PAN CR-01 change could not be independently confirmed here. Use the form actually displayed by the official Protean/UTIITSL portal; do not assume CSF remains accepted.', 'Check form title, effective date and portal notice|Use PAN CR-01 only if the live provider explicitly offers it|Read the current field/proof table before proceeding', 'April 2026 PAN CR-01 replacement claim is unverified here; do not use an unofficial form.'],
                ['Stage 4: Tick only the fields that change', 'Correction form → Left-margin field checkboxes', 'Tick only the left-margin checkbox for each specific field to be corrected. Leave already-correct fields unticked to avoid extra proof/re-verification.', 'Select only name, DOB, parent name, photo, signature, address/contact fields that actually change|Keep correct fields unticked|Enter the replacement exactly as proof spells it', 'Do not tick fields “just in case”; every selected field may be re-verified.'],
                ['Stage 5: Prepare DOB proof and field evidence', 'Proof category → DOB proof → Upload', 'For the stated revised rule, do not rely on Aadhaar alone for DOB: use Birth Certificate, Matriculation/10th Marksheet or Passport if accepted on the current checklist.', 'Select accepted proof for every checked field|Prepare photo 3.5 × 2.5 cm, colour JPEG, 200 DPI, under 50 KB for scanned mode|Signature black ink/white paper, 2 × 4.5 cm, 200 DPI JPEG under 50 KB|Keep each supporting PDF within 300 KB if the live uploader requires it', 'Aadhaar-as-DOB and CR-01 rules need confirmation from the live official form.'],
                ['Stage 6: Choose paperless, scanned e-Sign or physical route', 'Submission mode → e-KYC / scanned e-Sign / physical', 'Paperless Aadhaar e-KYC/e-Sign avoids courier and may use Aadhaar photo; scanned e-Sign allows custom images; physical route needs printed packet.', 'Confirm selected fields are eligible for the selected route|Aadhaar e-KYC uses applicant authentication|Scanned route: inspect image previews and OTP e-Sign|Physical route: use acknowledgement instructions and current mail destination', 'Paperless is not necessarily fee-free; check the mode/fee before continuing.'],
                ['Stage 7: Preview, declare and pay', 'Preview → Declaration → e-Sign / Payment', 'Compare every selected field and proof, then submit once and pay the fee shown by the official provider.', 'Ensure checked fields are the only changes and proof matches each|Verify delivery address/contact|Complete OTP/e-Sign and official payment|Save receipt and print acknowledgement only after confirmed submission', 'Do not refresh during payment or start another correction while pending.'],
                ['Stage 8: Post physical documents when required', 'Acknowledgement → Print → Photo / Signature → Speed Post', 'If physical forwarding was selected, print the acknowledgement, attach photographs and sign exactly in marked areas; send to the address and deadline on the current acknowledgement.', 'Use print size and two-photo instructions on acknowledgement|Place photos in their assigned boxes and keep signature clear of photo face|Include only listed proofs|Use trackable Speed Post to current address on acknowledgement', 'Address may change; do not rely on old address copied from a previous application.'],
                ['Stage 9: Track correction and verify corrected PAN', 'Provider status → Acknowledgement tracking → e-PAN', 'Save the 15-digit acknowledgement and follow status with the provider that received it. e-PAN allotment and card delivery may be separate stages.', 'Keep acknowledgement/payment receipt|Track with Protean or UTIITSL official status|Answer deficiency notice by its deadline|Check corrected PAN after approval', 'Never apply for a new PAN because a correction is delayed.']
            ],
            surrender: [
                ['Stage 1: Verify duplicate and PAN to retain', 'Income Tax portal → PAN record check', 'Surrender is for an actual duplicate, not routine correction. Decide which PAN remains active before writing to the local Assessing Officer (AO).', 'Check all PAN records and compare names|Write down retained PAN and duplicate PAN to cancel|Report suspected identity misuse through official channels', 'Never surrender your sole valid PAN or apply for another while cancellation is pending.'],
                ['Stage 2: Locate jurisdictional AO', 'Income Tax portal → Jurisdiction / AO contact', 'A duplicate PAN cancellation request is generally handled by the local jurisdictional AO. Online portal may identify the AO but may not complete cancellation end-to-end.', 'Find jurisdiction/AO contact through Income Tax portal|Confirm office, fee, appointment and allowed submission channel|Ask if physical visit/post or official grievance is required', 'Do not send PAN scans to unverified email or agent.'],
                ['Stage 3: Draft signed PAN Cancellation request', 'Letter → Assessing Officer → Cancellation request', 'Clearly state both PANs, which should remain active and why the other is duplicate.', 'Address letter to jurisdictional AO|Include name, DOB, address, contact, both PANs and requested cancellation|Explain duplicate allotment cause|Sign and date letter', 'Ambiguous retained/cancelled PANs can delay or misdirect cancellation.'],
                ['Stage 4: Attach PAN and identity evidence', 'Request packet → PAN copies → Identity/address proof', 'Prepare PAN copies and requested identity/address evidence. Keep originals available for inspection.', 'Attach self-attested copy of PAN to retain and duplicate card/allotment details|Add relevant identity/address proof and duplicate acknowledgement if available|Keep a full copy of signed packet', 'Do not obscure identifiers needed by the AO to match records.'],
                ['Stage 5: Submit to AO and get receipt', 'AO office → Token / receiving counter → Acknowledgement', 'Submit by the channel confirmed by AO. For counter filing, obtain an acknowledgement; for post, retain trackable delivery proof.', 'Carry originals for inspection and copies for submission|Tell receiving officer which PAN to retain and cancel|For post use only AO-confirmed address and trackable delivery', 'Online grievance receipt alone does not confirm PAN cancellation.'],
                ['Stage 6: Respond to AO verification', 'AO notice → Clarification / appointment → Reply', 'AO may compare records or ask for identity clarification. Reply through a verified channel within the notice deadline.', 'Quote acknowledgement and both PANs in reply|Provide only requested additional proof|Attend in-person verification if instructed', 'Never give OTP, password or original documents to an unverified caller.'],
                ['Stage 7: Track case and keep records active', 'AO acknowledgement → Follow-up / official grievance', 'There is no single guaranteed AO processing period. Ask for expected review time and track with the AO receipt/reference.', 'Record filing date, office and reference number|Follow up through published AO contact after stated period|Continue tax/financial records under PAN being retained', 'Do not stop filing tax returns merely because cancellation was requested.'],
                ['Stage 8: Confirm cancellation and update institutions', 'AO decision → Income Tax status → Record updates', 'Get written confirmation identifying the cancelled PAN and ensure the retained PAN remains active before changing institutional records.', 'Request written AO confirmation or verify official status|Keep confirmation with retained PAN documents|Notify bank/employer only if their records contain the duplicate', 'Acknowledgement is not the cancellation decision; escalate unresolved cases officially.']
            ]
        }
    },
    hi: {
        aadhaar: {
            new: [
                ['चरण 1: नए नामांकन की पात्रता जाँचें', 'पात्रता जाँच', 'नया नामांकन निःशुल्क है और बायोमेट्रिक्स के लिए आवेदक का केंद्र पर होना अनिवार्य है। ऑनलाइन तैयारी/केंद्र खोज संभव है, नामांकन नहीं।', 'पहले जाँचें कि Aadhaar/EID पहले से मौजूद तो नहीं|आवेदक स्वयं आए; बच्चे के लिए आवश्यक अभिभावक साथ हो|मूल प्रमाण और चालू संपर्क मोबाइल रखें', 'ऑनलाइन नया नामांकन नहीं होता; निःशुल्क सेवा के लिए एजेंट को भुगतान न करें।'],
                ['चरण 2: Bhuvan पर केंद्र खोजें', 'Bhuvan Aadhaar locator', 'नए नामांकन की सुविधा वाला Aadhaar Seva Kendra (ASK) खोजें, केवल अपडेट केंद्र नहीं।', 'https://bhuvan.nrsc.gov.in/aadhaar खोलें|PIN कोड/शहर खोजें या लोकेशन अनुमति दें|पता, समय और नामांकन सुविधा की पुष्टि करें', 'मानचित्र सूची बदल सकती है; जाने से पहले केंद्र से पुष्टि करें।'],
                ['चरण 3: स्लॉट बुक करें और नामांकन फॉर्म भरें', 'Appointment booking → Enrolment', 'UIDAI लिंक पर उपलब्ध हो तो स्लॉट बुक करें। Enrolment Form पहले या केंद्र पर भरें; आवेदक को केंद्र जाना ही होगा।', 'Enrolment, केंद्र और तारीख/समय चुनकर पुष्टि सहेजें|पूरा नाम, जन्मतिथि/आयु, लिंग, पता, PIN और मोबाइल भरें|मूल प्रमाण और आवेदक के साथ समय से पहले पहुँचें', 'अपॉइंटमेंट नामांकन पूरा नहीं करता; आवेदक की उपस्थिति जरूरी है।'],
                ['चरण 4: POI, POA और HoF/POR प्रमाण जाँचें', 'दस्तावेज़ जाँच → POI / POA / HoF', 'ऑपरेटर पहचान प्रमाण (POI) और पता प्रमाण (POA) जाँचेगा। HoF मार्ग में संबंध प्रमाण (POR) और HoF प्रमाणीकरण भी चाहिए।', 'UIDAI की वर्तमान स्वीकृत प्रमाण सूची देखें|HoF आधार और निवासी से संबंध दिखाने वाला स्वीकार्य POR लाएँ|प्रमाण न हों तो Introducer विकल्प पूछें', 'स्वीकृत POR/HoF प्रमाणीकरण न हो तो नामांकन रुक सकता है।'],
                ['चरण 5: टोकन लें और विवरण जाँचें', 'रिसेप्शन → टोकन काउंटर → नामांकन डेस्क', 'ASK पर चेक-इन कर कतार टोकन लें और बायोमेट्रिक्स से पहले ऑपरेटर विवरण जाँचें।', 'अपॉइंटमेंट और सामान्य/HoF मार्ग बताएँ|नाम, जन्मतिथि, लिंग, पूरा पता और PIN स्क्रीन पर जाँचें|अंग्रेज़ी तथा स्थानीय भाषा वर्तनी पढ़ें', 'गलती जमा होने से पहले सुधारें; बाद का जनसांख्यिकीय बदलाव शुल्क वाला हो सकता है।'],
                ['चरण 6: लाइव फोटो और बायोमेट्रिक्स दर्ज कराएँ', 'बायोमेट्रिक काउंटर → फोटो → फिंगरप्रिंट → आइरिस', 'ऑपरेटर सफेद बैकग्राउंड पर लाइव webcam फोटो, दसों उंगलियों के निशान और दोनों आँखों के आइरिस लेगा; UIDAI आयु/चिकित्सा अपवाद लागू हो सकते हैं।', 'सफेद बैकग्राउंड के सामने कैमरे की ओर देखें|निर्देशानुसार सभी 10 उंगलियों के निशान दें और खराब कैप्चर दोहराएँ|दोनों आँखों का आइरिस स्कैन कराएँ और चोट/असमर्थता बताएँ', 'एजेंट को बायोमेट्रिक्स रखने न दें और संदेश से फिंगरप्रिंट न भेजें।'],
                ['चरण 7: सत्यापन अधिकारी की मंजूरी और 28-अंकीय EID', 'Verifier sign-off → Final submit → पावती', 'सत्यापन के बाद 28-अंकीय Enrolment ID (EID) लें: 14-अंकीय नामांकन संख्या + 14-अंकीय तारीख/समय।', 'अंतिम नाम, पता, जन्मतिथि और स्थानीय वर्तनी जाँचें|सत्यापन अधिकारी की मंजूरी और ऑपरेटर जमा की प्रतीक्षा करें|सभी 28 अंक और timestamp पर्ची पर जाँचें', 'पर्ची अस्पष्ट हो या विवरण गलत हो तो केंद्र छोड़ने से पहले ठीक कराएँ।'],
                ['चरण 8: स्थिति ट्रैक करें और e-Aadhaar डाउनलोड करें', 'UIDAI status → Download Aadhaar', 'EID से स्थिति देखें; आम तौर पर 15–30 दिन लगते हैं, पर सत्यापन में अधिक समय संभव है। बनने के बाद UIDAI से e-Aadhaar लें।', 'माँगे जाने पर 14-अंकीय नामांकन संख्या और 14-अंकीय timestamp भरें|PDF में विवरण जाँचें|पासवर्ड: नाम के पहले 4 अक्षर CAPITALS में + जन्म वर्ष (YYYY); छोटे नाम के लिए UIDAI निर्देश देखें', '15–30 दिन अनुमान है। PDF और EID सुरक्षित रखें।']
            ],
            update: [
                ['चरण 1: सही अपडेट और माध्यम चुनें', 'myAadhaar / ASK सेवा चयन', 'पता/दस्तावेज़ के चुनिंदा अपडेट ऑनलाइन हैं। मोबाइल, बायोमेट्रिक्स और फोटो ऑनलाइन नहीं बदलते; इनके लिए ASK जाएँ।', 'बदलाव पहचानें: पता, दस्तावेज़, मोबाइल, फिंगरप्रिंट, आइरिस या फोटो|ऑनलाइन सेवा की उपलब्धता जाँचें|केंद्र सेवा के लिए ASK और अपॉइंटमेंट खोजें', 'दस्तावेज़ अपलोड और जनसांख्यिकीय बदलाव अलग हैं; जून 2027 तक मुफ्त दस्तावेज़ अपलोड ऑफर पोर्टल पर जाँचें।'],
                ['चरण 2: 12-अंकीय आधार और OTP से लॉगिन', 'Home → Login → Aadhaar and OTP', 'ऑनलाइन मार्ग में 12-अंकीय आधार और पंजीकृत मोबाइल OTP दें। ऑफलाइन मार्ग के लिए ASK पर चेक-इन करें।', 'https://myaadhaar.uidai.gov.in डोमेन जाँचें|आधार, सुरक्षा कोड और OTP भरें|मोबाइल उपलब्ध न हो तो ASK जाएँ, एजेंट का उपयोग न करें', 'OTP किसी एजेंट/कॉलर को न बताएँ।'],
                ['चरण 3: Address Update और पूरा पता भरें', 'Login → Address Update → Address fields', 'C/O, मकान/भवन, Landmark और PIN सहित अलग-अलग पता फ़ील्ड भरें।', 'जरूरत हो तभी C/O विवरण दें|House/Building, सड़क/क्षेत्र और Landmark भरें|पूरा क्षेत्र/गाँव/शहर और PIN दें|ऑटो State/District को वास्तविक पते से मिलाएँ', 'ऑटो-भरे State/District के बावजूद मकान और स्थानीय क्षेत्र भरें।'],
                ['चरण 4: स्वतः अनूदित स्थानीय वर्तनी जाँचें', 'Address Update → Local-language preview', 'पोर्टल हिन्दी/क्षेत्रीय भाषा में स्वतः लिप्यंतरण कर सकता है। हर शब्द देखें और गलती हो तो कीबोर्ड से सुधारें।', 'नाम, C/O, मकान, सड़क, क्षेत्र और Landmark दोनों लिपियों में जाँचें|गलत वर्तनी ऑन-स्क्रीन इनपुट से सुधारें|PIN, मकान नंबर और अंक दोबारा देखें', 'गलत स्थानीय वर्तनी आधार पत्र पर छप सकती है; पहले सुधारें।'],
                ['चरण 5: अपना प्रमाण अपलोड करें या HoF मार्ग लें', 'Address Update → Proof category → Upload / HoF', 'मूल रंगीन PDF/JPEG स्कैन पोर्टल की सीमा (तैयारी लक्ष्य 2 MB से कम) में अपलोड करें। अपने नाम का पता प्रमाण न हो तो पात्र होने पर HoF सत्यापन चुनें।', 'पूरा और पढ़ने योग्य मूल प्रमाण सही श्रेणी में अपलोड करें|HoF मार्ग: HoF आधार व स्वीकार्य संबंध प्रमाण (POR) दें|HoF समय-सीमा में OTP से सहमति/मंजूरी दे', 'HoF सहमति और POR न हों तो आवेदन अस्वीकृत हो सकता है; पोर्टल सीमा सर्वोपरि है।'],
                ['चरण 6: पूर्वावलोकन, घोषणा और UPI भुगतान', 'Preview → Declaration → Payment → UPI', 'पते का दोनों भाषाओं में पूर्वावलोकन प्रमाण से मिलाएँ, घोषणा दें और पोर्टल भुगतान से UPI/दिखाया तरीका पूरा करें।', 'C/O, भवन, Landmark, PIN, State और District जाँचें|सही होने पर ही घोषणा स्वीकारें|UPI पुष्टि करके UIDAI परिणाम की प्रतीक्षा करें|रसीद सहेजें', 'लंबित भुगतान में रीफ़्रेश/दोबारा भुगतान न करें; पहले स्थिति जाँचें।'],
                ['चरण 7: 14-अंकीय URN पर्ची डाउनलोड करें', 'Confirmation → Download URN → Status', 'सफल अनुरोध पर 14-अंकीय Update Request Number (URN) डाउनलोड करें और स्थिति के लिए उपयोग करें।', 'URN अंक और अपडेट प्रकार पर्ची से जाँचें|UIDAI status में URN डालें|पूरा होने तक रसीद और पावती रखें', 'URN ट्रैकिंग नंबर है, आधार नंबर नहीं; सार्वजनिक रूप से साझा न करें।'],
                ['चरण 8: मोबाइल/फोटो/बायोमेट्रिक्स के लिए ASK जाएँ', 'ASK appointment → Token → Update → Biometrics', 'मोबाइल, फोटो, फिंगरप्रिंट या आइरिस बदलाव के लिए केंद्र पर व्यक्तिगत रूप से जाना होगा। जनसांख्यिकीय शुल्क ₹75 और बायोमेट्रिक शुल्क ₹125 है।', 'आधार विवरण और मूल प्रमाण ले जाएँ|ऑपरेटर को मोबाइल/फोटो/फिंगरप्रिंट/आइरिस बदलाव बताएँ|स्क्रीन जाँचें, कैप्चर/सत्यापन पूरा करें और रसीद लें|वर्तमान शुल्क UIDAI से पुष्टि करें', 'ये बदलाव ऑनलाइन नहीं होते; पता अपडेट से मोबाइल/फोटो/बायोमेट्रिक्स नहीं बदलेंगे।']
            ],
            surrender: [
                ['चरण 1: बायोमेट्रिक लॉक समझें', 'UIDAI सुरक्षा सेवा → Biometric lock', 'लॉक चालू होने पर फिंगरप्रिंट/आइरिस/फेस आधार प्रमाणीकरण, AePS बायोमेट्रिक लेन-देन सहित, रुकता है। आधार रद्द नहीं होता और लॉक वापस खोला जा सकता है।', 'कुछ समय बायोमेट्रिक्स न चाहिए तो लॉक पर विचार करें|OTP के लिए पंजीकृत मोबाइल चालू रखें|बैंक अलर्ट और खाते/डिवाइस सुरक्षा भी चालू करें', 'लॉक OTP, UPI, कार्ड या हर तरह की बैंक धोखाधड़ी नहीं रोकता।'],
                ['चरण 2: पहले 16-अंकीय VID बनाएँ', 'UIDAI → Generate / Retrieve VID → OTP', 'VID वैकल्पिक पहचान है; यह आधार का स्थान नहीं लेता और खुद बायोमेट्रिक्स लॉक नहीं करता।', 'आधिकारिक UIDAI/myAadhaar VID सेवा खोलें|आधार/सुरक्षा कोड और पंजीकृत मोबाइल OTP भरें|बना 16-अंकीय VID सुरक्षित रखें', 'केवल VID स्वीकार करने वाली सेवा में उपयोग करें; VID/OTP साझा न करें।'],
                ['चरण 3: myAadhaar सुरक्षा सेवा में लॉगिन करें', 'myAadhaar Home → Login → Aadhaar/VID → OTP', 'वर्तमान अनुमति के अनुसार आधार/VID और OTP से आधिकारिक myAadhaar सेवा खोलें।', 'https://myaadhaar.uidai.gov.in जाँचें|CAPTCHA पूरा कर OTP लें|Aadhaar Services → Lock/Unlock Biometrics खोलें', 'कॉलर कहे तो remote-access ऐप इंस्टॉल न करें।'],
                ['चरण 4: लॉक प्रभाव और वापस खोलने का तरीका पढ़ें', 'Aadhaar Services → Lock/Unlock → Instructions', 'देखें कि कौन से बायोमेट्रिक तरीके बंद होंगे और OTP पहुँच लॉक से पहले सुनिश्चित करें।', 'फिंगरप्रिंट, आइरिस और फेस सेवा पर प्रभाव पढ़ें|VID विकल्प स्वीकार है जाँचें|पंजीकृत मोबाइल और रिकवरी पहुँच रखें', 'लॉक रहते वैध बायोमेट्रिक प्रमाणीकरण भी विफल होगा।'],
                ['चरण 5: बायोमेट्रिक लॉक अनुरोध जमा करें', 'Lock/Unlock → Lock → OTP → Confirm', 'Lock Biometrics चुनें और OTP से पुष्टि करें; myAadhaar पर लॉक निःशुल्क है।', 'Lock चुनें, Aadhaar cancellation नहीं|सहमति और मास्क किए पहचान विवरण पढ़ें|OTP एक बार जमा कर पुष्टि की प्रतीक्षा करें', 'UIDAI सहायता बताने वाले सहित किसी को OTP न दें।'],
                ['चरण 6: लॉक स्थिति की पुष्टि करें', 'Lock/Unlock Biometrics → Current status', 'पोर्टल पर locked/active स्थिति देखें और पुष्टि सुरक्षित रखें।', 'स्थिति और तारीख/समय लिखें|पंजीकृत मोबाइल तथा VID पहुँच रखें|समय समाप्त हो तो बार-बार जमा करने के बजाय स्थिति जाँचें', 'केवल क्लिक/टाइमआउट लॉक सफल होने का प्रमाण नहीं।'],
                ['चरण 7: PVC कार्ड अलग सेवा से मँगाएँ', 'myAadhaar → Order Aadhaar PVC Card → Verify → Pay', 'PVC ऑर्डर बायोमेट्रिक लॉक से अलग है। पता जाँचें और पोर्टल पर दिखाई वर्तमान शुल्क दें।', 'Order Aadhaar PVC Card चुनें|अनुमत Aadhaar/VID और OTP से पुष्टि करें|पता/पूर्वावलोकन जाँचें, राशि दें और रसीद रखें', 'PVC ऑर्डर बायोमेट्रिक्स लॉक नहीं करता और लॉक से कार्ड ऑर्डर नहीं होता।'],
                ['चरण 8: PVC ट्रैक करें और जरूरत पर अनलॉक करें', 'PVC status → Unlock Biometrics → OTP', 'PVC संदर्भ से डिलीवरी ट्रैक करें। वैध सेवा को बायोमेट्रिक्स चाहिए तो UIDAI से पहले अनलॉक करें।', 'Service Request Number रखें और myAadhaar पर ट्रैक करें|Unlock चुनकर वर्तमान OTP पूरा करें|दूसरी सेवा से पहले unlocked स्थिति देखें; बाद में चाहें तो फिर लॉक करें', 'केवल आधिकारिक UIDAI पर और जरूरत पड़ने पर अनलॉक करें; लॉक बैंक धोखाधड़ी की गारंटीशुदा रोक नहीं।']
            ]
        },
        pan: {
            new: [
                ['चरण 1: मौजूदा PAN जाँचें और जारीकर्ता पहचानें', 'PAN status / Back of card → issuer', 'आवेदक के पास PAN न हो इसकी पुष्टि करें। सुधार/रीप्रिंट में कार्ड के पीछे Protean (NSDL) या UTIITSL सेवा देखें।', 'संदेह हो तो Income Tax e-Filing पर PAN status देखें|Protean: https://onlineservices.nsdl.com; UTIITSL: https://pan.utiitsl.com|Instant e-PAN पात्रता: https://incometax.gov.in', 'दूसरा PAN न लें; डुप्लिकेट पर जुर्माना लग सकता है।'],
                ['चरण 2: 15-अंकीय अस्थायी टोकन बनाएँ', 'Protean PAN Home → Form 49A → Temporary Token', 'भारतीय व्यक्तिगत आवेदन में पूरा फॉर्म भरने से पहले टोकन बनता है; Protean टोकन 30 दिन मान्य है।', 'New PAN / Form 49A और Individual चुनें|ईमेल, मोबाइल और जन्मतिथि सही भरें|15-अंकीय टोकन और OTP पुष्टि सुरक्षित रखें', 'टोकन PAN पावती नहीं और आवेदन जमा नहीं करता।'],
                ['चरण 3: PAN Application Form जारी रखें', 'Temporary Token → Continue with PAN Application Form', 'टोकन से ड्राफ्ट खोलकर समाप्ति से पहले शेष फॉर्म भरें।', 'टोकन और माँगा CAPTCHA/security code भरें|सहेजा आवेदन खोलें|भारतीय नागरिक वाला Form 49A मार्ग जाँचें', 'टोकन/OTP साझा न करें; खोने या समाप्त होने पर फिर शुरू करना पड़ सकता है।'],
                ['चरण 4: जमा करने का तरीका सोचकर चुनें', 'Application type → Submission mode', 'तुलना करें: (A) e-KYC & e-Sign paperless में आधार फोटो और भौतिक कूरियर नहीं; (B) scanned images + e-Sign में स्वयं फोटो/हस्ताक्षर; (C) physical documents में acknowledgement प्रिंट कर डाक।', 'A: आधार नाम/मोबाइल और पात्रता मिलाएँ|B: सही आकार की images बनाकर OTP e-Sign करें|C: प्रिंटर, दो फोटो, हस्ताक्षर और Speed Post तैयार रखें', 'Paperless में कूरियर नहीं, लेकिन आवेदन शुल्क शून्य होना जरूरी नहीं।'],
                ['चरण 5: आवेदक, संपर्क और डाक पता भरें', 'Form 49A → Applicant details → Address / Contact', 'कानूनी रिकॉर्ड के अनुसार जानकारी और फिजिकल कार्ड का सही पत्राचार पता दें।', 'पूरा नाम, DOB, लिंग और माँगे माता-पिता का विवरण भरें|मोबाइल/ईमेल दें; आधार केवल प्रमाणित चरण में|पत्राचार पता और श्रेणी जाँचें', 'फॉर्म का नाम/जन्मतिथि प्रमाण से अक्षरशः मिलाएँ।'],
                ['चरण 6: फोटो, हस्ताक्षर और प्रमाण फ़ाइलें तैयार करें', 'Document upload → Photo / Signature / Proof', 'Scanned mode लक्ष्य: फोटो 3.5 × 2.5 cm, रंगीन JPEG, 200 DPI, 50 KB से कम; काली स्याही/सफेद कागज़ पर हस्ताक्षर 2 × 4.5 cm, 200 DPI JPEG 50 KB से कम; लागू हो तो हर PDF अधिकतम 300 KB।', 'चेहरा स्पष्ट रखकर फोटो सही आकार में क्रॉप करें|हस्ताक्षर का क्षेत्र स्कैन करें; छाया न हो|हर माँगा प्रमाण अलग PDF में डालें और पूर्वावलोकन देखें|Paperless e-KYC आधार फोटो ले सकता है', 'लाइव अपलोडर की सीमा सर्वोपरि है; गलत आकार/फ़ॉर्मेट आवेदन रोक सकता है।'],
                ['चरण 7: जाँच, घोषणा, e-Sign और भुगतान करें', 'Preview → Declaration → Aadhaar e-Sign → Payment', 'सारांश जाँचें, चुने पते/डिलीवरी का दिखा शुल्क दें और चुना e-Sign या प्रिंट मार्ग पूरा करें।', 'नाम, DOB, श्रेणी, प्रमाण, पता और कार्ड विकल्प जाँचें|सही होने पर घोषणा स्वीकारें|आधिकारिक भुगतान कर रसीद रखें|जमा पुष्टि की प्रतीक्षा करें', 'भुगतान लंबित हो तो रीफ़्रेश/दोबारा भुगतान न करें।'],
                ['चरण 8: चुना हो तो कागज़ी पैकेट भेजें', 'Acknowledgement → Print → Photo → Sign → Speed Post', 'Physical route में acknowledgement प्रिंट कर दो फोटो निर्देशानुसार लगाएँ, फोटो के चेहरे को छुए बिना हस्ताक्षर करें और पैकेट भेजें।', 'Acknowledgement वास्तविक आकार में प्रिंट करें|निर्देशानुसार एक फोटो बॉक्स पर और दूसरी बॉक्स के भीतर लगाएँ|फोटो के चेहरे से दूर हस्ताक्षर करें|वर्तमान पावती में दिए PAN Services Unit पते पर ट्रैक होने वाली Speed Post भेजें', 'आम तौर पर उद्धृत पता “Income Tax PAN Services Unit, Protean eGov Technologies Limited, Pune - 411004” है; डाक से पहले वर्तमान acknowledgement से पुष्टि करें।'],
                ['चरण 9: 15-अंकीय पावती से PAN ट्रैक करें', 'Provider status → PAN application tracking', 'Protean/UTIITSL को 15-अंकीय पावती से ट्रैक करें। Instant e-PAN की Income Tax e-Filing पर अलग स्थिति है।', 'पावती और भुगतान रसीद रखें|जारीकर्ता की आधिकारिक स्थिति सेवा उपयोग करें|निःशुल्क Instant e-PAN का अनुरोध आयकर पोर्टल पर ट्रैक करें|आवंटित विवरण जाँचें', 'टोकन/भुगतान रसीद आवंटन प्रमाण नहीं; आधिकारिक स्थिति देखें।']
            ],
            update: [
                ['चरण 1: जारीकर्ता और मौजूदा PAN पहचानें', 'Back of PAN card → Protean / UTIITSL', 'कार्ड के पीछे देखकर जारीकर्ता का सुधार/रीप्रिंट पोर्टल चुनें और मौजूदा PAN रखें।', 'Protean: https://onlineservices.nsdl.com; UTIITSL: https://pan.utiitsl.com|जरूरत हो तो आयकर पोर्टल से PAN जाँचें|नया आवंटन नहीं, correction चुनें', 'दोनों प्रदाताओं पर डुप्लिकेट सुधार न भेजें।'],
                ['चरण 2: अस्थायी टोकन बनाएँ', 'Provider → PAN correction → Temporary Token', 'Correction form से पहले टोकन लें; Protean की वैधता सामान्यतः 30 दिन (लाइव स्क्रीन जाँचें)।', 'मौजूदा PAN और Individual श्रेणी भरें|ईमेल, मोबाइल और जन्मतिथि दें|टोकन लिखकर Continue with PAN Application Form चुनें', 'टोकन ड्राफ्ट खोलता है, आवेदन जमा या पावती नहीं।'],
                ['चरण 3: मौजूदा correction form और नियम जाँचें', 'Correction service → Current form and instructions', 'अप्रैल 2026 का PAN CR-01 बदलाव यहाँ आधिकारिक स्रोत से स्वतंत्र रूप से पुष्ट नहीं हुआ। Protean/UTIITSL पर जो फॉर्म दिखे वही उपयोग करें; पुराने CSF को स्वतः स्वीकार न मानें।', 'फॉर्म शीर्षक, प्रभावी तारीख और पोर्टल निर्देश जाँचें|PAN CR-01 तभी लें जब लाइव पोर्टल स्पष्ट दिखाए|फ़ील्ड-विशिष्ट प्रमाण तालिका पढ़ें', 'PAN CR-01 का दावा यहाँ अपुष्ट है; अनौपचारिक फॉर्म जमा न करें।'],
                ['चरण 4: केवल बदलने वाले फ़ील्ड टिक करें', 'Correction form → Left-margin checkboxes', 'केवल बदले जाने वाले फ़ील्ड के बाएँ checkbox पर टिक करें। सही फ़ील्ड खाली रखें ताकि अनावश्यक प्रमाण/पुनः सत्यापन न हो।', 'नाम, DOB, माता-पिता, फोटो, हस्ताक्षर या पता/संपर्क में केवल वास्तविक बदलाव चुनें|सही फ़ील्ड unticked रखें|प्रमाण के अनुसार संशोधित मान भरें', '“सावधानी के लिए” सभी बॉक्स न टिक करें; हर चयन पुनः जाँच ला सकता है।'],
                ['चरण 5: DOB और अन्य प्रमाण तैयार करें', 'Proof category → DOB proof → Upload', 'बताए गए नए नियम में DOB के लिए केवल आधार पर निर्भर न हों; वर्तमान सूची में स्वीकार हो तो Birth Certificate, 10वीं Marksheet या Passport चुनें।', 'हर टिक किए फ़ील्ड का स्वीकार्य प्रमाण चुनें|Scanned photo 3.5 × 2.5 cm, रंगीन JPEG, 200 DPI, 50 KB से कम|काला हस्ताक्षर/सफेद कागज़ 2 × 4.5 cm, 200 DPI JPEG 50 KB से कम|Uploader माँगे तो हर PDF 300 KB तक रखें', 'आधार-DOB और CR-01 नियम लाइव आधिकारिक फॉर्म से पुष्टि करें।'],
                ['चरण 6: Paperless, scanned e-Sign या physical चुनें', 'Submission mode → e-KYC / scanned e-Sign / physical', 'Paperless Aadhaar e-KYC/e-Sign में कूरियर नहीं और जहाँ स्वीकार हो आधार फोटो; scanned mode में अपनी image; physical route में प्रिंट पैकेट चाहिए।', 'चुने फ़ील्ड का चयनित तरीके से आवेदन संभव है जाँचें|आधार e-KYC प्रमाणीकरण पूरा करें|Scanned preview जाँचकर OTP e-Sign करें|Physical route में पावती के निर्देश मानें', 'Paperless शुल्क-मुक्त होना जरूरी नहीं; शुल्क और पात्रता जाँचें।'],
                ['चरण 7: पूर्वावलोकन, घोषणा और भुगतान', 'Preview → Declaration → e-Sign / Payment', 'चुने फ़ील्ड और प्रमाण मिलाकर एक बार जमा करें और आधिकारिक प्रदाता को शुल्क दें।', 'जाँचें कि सही बॉक्स ही टिक हैं और प्रमाण मेल खाता है|डिलीवरी पता/संपर्क देखें|OTP/e-Sign और भुगतान पूरा करें|रसीद सहेजें', 'भुगतान के समय रीफ़्रेश या दूसरा correction न करें।'],
                ['चरण 8: जरूरी हो तो कागज़ी दस्तावेज़ डाक करें', 'Acknowledgement → Print → Photo / Signature → Speed Post', 'Physical route में acknowledgement प्रिंट, फोटो और हस्ताक्षर निर्देशानुसार करें; वर्तमान पावती का पता/अंतिम तारीख मानें।', 'दो फोटो और वास्तविक प्रिंट आकार के निर्देश पढ़ें|फोटो अपने बॉक्स में लगाएँ और चेहरे से दूर हस्ताक्षर करें|केवल माँगे प्रमाण लगाएँ|ट्रैक होने वाली Speed Post भेजें', 'पुरानी गाइड का पता उपयोग न करें; वर्तमान acknowledgement देखें।'],
                ['चरण 9: सुधार ट्रैक और नया PAN जाँचें', 'Provider status → Acknowledgement tracking → e-PAN', '15-अंकीय पावती से उसी प्रदाता पर ट्रैक करें; e-PAN और फिजिकल डिलीवरी अलग चरण हो सकते हैं।', 'पावती/भुगतान प्रमाण रखें|Protean या UTIITSL की आधिकारिक स्थिति देखें|कमी का नोटिस समय पर पूरा करें|मंजूरी पर सुधारित विवरण जाँचें', 'देरी के कारण दूसरा PAN आवेदन न करें।']
            ],
            surrender: [
                ['चरण 1: डुप्लिकेट और रखने वाला PAN तय करें', 'Income Tax portal → PAN record check', 'सरेंडर केवल डुप्लिकेट PAN के लिए है। स्थानीय Assessing Officer (AO) को लिखने से पहले सक्रिय रखने वाला PAN तय करें।', 'सभी PAN रिकॉर्ड और नाम मिलाएँ|रखने और रद्द करने वाला PAN लिखें|पहचान दुरुपयोग हो तो आधिकारिक रिपोर्ट करें', 'एकमात्र वैध PAN सरेंडर या लंबित रद्दीकरण में नया आवेदन न करें।'],
                ['चरण 2: क्षेत्राधिकार AO खोजें', 'Income Tax portal → Jurisdiction / AO contact', 'डुप्लिकेट PAN रद्दीकरण सामान्यतः स्थानीय AO संभालता है; पोर्टल AO बताए, पूरी प्रक्रिया ऑनलाइन हो यह जरूरी नहीं।', 'आयकर पोर्टल से AO संपर्क खोजें|कार्यालय, शुल्क, अपॉइंटमेंट और जमा माध्यम पूछें|व्यक्तिगत/डाक/आधिकारिक शिकायत तरीका पुष्टि करें', 'असत्यापित ईमेल/एजेंट को PAN प्रतियाँ न भेजें।'],
                ['चरण 3: PAN Cancellation पत्र लिखें', 'Letter → Assessing Officer → Cancellation request', 'हस्ताक्षरित अनुरोध में दोनों PAN और कौन-सा सक्रिय रखना है स्पष्ट लिखें।', 'पत्र क्षेत्राधिकार AO को दें|नाम, DOB, पता, संपर्क, दोनों PAN और अनुरोध लिखें|डुप्लिकेट बनने का कारण बताएँ|तारीख व हस्ताक्षर करें', 'कौन-सा रद्द और कौन-सा रखना है अस्पष्ट न छोड़ें।'],
                ['चरण 4: PAN और पहचान प्रमाण संलग्न करें', 'Request packet → PAN copies → Identity/address proof', 'दोनों PAN की प्रतियाँ और AO द्वारा माँगे पहचान/पता प्रमाण रखें; मूल निरीक्षण हेतु ले जाएँ।', 'रखने और डुप्लिकेट PAN की स्वयं-सत्यापित प्रतियाँ लगाएँ|पहचान/पता और उपलब्ध आवंटन पावती जोड़ें|पूरे आवेदन की प्रति रखें', 'मिलान के लिए जरूरी PAN/नाम न छिपाएँ।'],
                ['चरण 5: AO माध्यम से जमा और पावती लें', 'AO office → Token / receiving counter → Acknowledgement', 'AO द्वारा बताए माध्यम से जमा करें। काउंटर पर पावती लें या डाक के लिए ट्रैकिंग प्रमाण रखें।', 'मूल निरीक्षण हेतु और प्रतियाँ जमा करने हेतु साथ ले जाएँ|काउंटर पर सक्रिय और डुप्लिकेट PAN स्पष्ट बताएँ|डाक हो तो पुष्टि पते पर trackable service लें', 'ऑनलाइन शिकायत पावती PAN रद्द होने की पुष्टि नहीं।'],
                ['चरण 6: AO सत्यापन का जवाब दें', 'AO notice → Clarification / appointment → Reply', 'AO रिकॉर्ड/पहचान की पुष्टि माँग सकता है। नोटिस की समय-सीमा में सत्यापित माध्यम से जवाब दें।', 'हर जवाब में संदर्भ और दोनों PAN लिखें|केवल माँगा अतिरिक्त प्रमाण दें|आवश्यक हो तो व्यक्तिगत जाँच में जाएँ', 'असत्यापित कॉलर को OTP, पासवर्ड या मूल दस्तावेज़ न दें।'],
                ['चरण 7: मामला ट्रैक करें और रिकॉर्ड चालू रखें', 'AO acknowledgement → Follow-up / official grievance', 'AO प्रक्रिया की कोई एक निश्चित सार्वभौमिक अवधि नहीं; रसीद से स्थिति और अपेक्षित तारीख पूछें।', 'जमा तारीख, कार्यालय और संदर्भ लिखें|बताए समय के बाद प्रकाशित AO संपर्क से पूछें|रखने वाले PAN से कर/वित्तीय रिकॉर्ड जारी रखें', 'सिर्फ अनुरोध देने से कर रिटर्न रोकना नहीं चाहिए।'],
                ['चरण 8: रद्दीकरण पुष्टि और संस्थागत रिकॉर्ड अपडेट', 'AO decision → Income Tax status → Record updates', 'लिखित पुष्टि लें जिसमें रद्द PAN स्पष्ट हो; रिकॉर्ड बदलने से पहले सक्रिय PAN स्थिति जाँचें।', 'AO पुष्टि या आधिकारिक स्थिति प्राप्त करें|पुष्टि सक्रिय PAN दस्तावेज़ के साथ रखें|डुप्लिकेट दर्ज संस्थान को ही सूचना दें', 'पावती रद्दीकरण निर्णय नहीं है; लंबित मामले को आधिकारिक रूप से आगे बढ़ाएँ।']
            ]
        }
    }
};

const offlineAadhaarUpdateRows = {
    en: [
        ['Stage 1: Identify the change and confirm ASK service', 'ASK services → Update request', 'Mobile, photo and biometrics require an in-person update. Demographic/address changes can also be submitted at an ASK when you choose the offline route.', 'Confirm whether the request is address, demographic, mobile, photo, fingerprint or iris|Locate an ASK on UIDAI and book/confirm appointment|Carry Aadhaar details and original supporting proof', 'Online document upload is not an offline demographic update.'],
        ['Stage 2: Check in and obtain a token', 'ASK reception → Appointment check → Token counter', 'Arrive at the selected centre, check in and obtain the queue token for Aadhaar update.', 'Show appointment confirmation and Aadhaar number/card|Tell the operator each field/service to update|Ask which original proofs and copies are needed before submission', 'Use an ASK listed by UIDAI; avoid unofficial shops claiming to be a UIDAI centre.'],
        ['Stage 3: Complete update form and address details', 'Update counter → Update form → Address fields', 'For address changes, fill the paper/assisted update form with full address details including C/O, house/building, landmark and PIN.', 'Write name and requested field exactly as in supporting proof|Enter C/O only when applicable, plus house, street/locality, landmark and PIN|Confirm State/District and contact details with operator', 'Do not leave locality/house details blank or rely on only the auto-filled district.'],
        ['Stage 4: Review local-language spelling with operator', 'Data-entry screen → Local-language preview → Applicant confirmation', 'The operator may transliterate details to Hindi or a regional language. Ask to see the screen/preview and correct spelling before confirming.', 'Review English and local-language name/address|Correct transliteration and house/PIN numerals|Check every requested field before biometric or final confirmation', 'Errors confirmed at the centre may require another update request.'],
        ['Stage 5: Submit original proof or HoF request', 'Document scrutiny → Proof category / HoF validation', 'Submit original address proof for verification. If no proof is in the resident’s name, ask whether the HoF route is accepted at this ASK.', 'Show original acceptable proof; provide copies only if requested|For HoF route, carry HoF Aadhaar and accepted POR linking resident to HoF|Ensure HoF can authenticate consent as required', 'HoF request needs accepted relationship evidence and HoF consent; confirm local handling before token.'],
        ['Stage 6: Complete mobile, photo or biometric capture and fee', 'Biometric counter → Mobile/photo/biometrics → Fee counter', 'The ASK can record mobile/photo and biometrics that cannot be updated online. Centre fee is ₹75 for demographic and ₹125 for biometric update.', 'State which update is requested; old mobile access is not a substitute for centre verification|Provide live photo, fingerprint/iris capture or mobile update as instructed|Confirm the fee displayed and pay against an official receipt', 'Confirm the current fee with UIDAI; do not pay an unreceipted charge.'],
        ['Stage 7: Verify the screen and collect acknowledgement', 'Applicant preview → Verifier sign-off → Receipt / URN', 'Before final submission, check the operator screen and collect the acknowledgement containing the update reference/URN.', 'Check name, DOB, gender, address/local-language text and mobile|Ask the operator to correct any mistake before sign-off|Keep the dated receipt and URN', 'The receipt is a tracking reference, not proof the update has been approved.'],
        ['Stage 8: Track update result', 'UIDAI update status → Enter URN → Result', 'Use the update reference on UIDAI status tracking. Processing may take up to 90 days depending on verification.', 'Enter the URN/reference exactly as printed|Check for approved, pending or rejected status|If rejected, read the reason and submit the corrected proof/request', 'Do not repeat the request while it is still pending; follow UIDAI status instructions.']
    ],
    hi: [
        ['चरण 1: बदलाव पहचानें और ASK सेवा की पुष्टि करें', 'ASK सेवाएँ → अपडेट अनुरोध', 'मोबाइल, फोटो और बायोमेट्रिक्स के लिए व्यक्तिगत अपडेट जरूरी है। ऑफलाइन मार्ग में पता/जनसांख्यिकीय बदलाव भी ASK पर जमा किए जा सकते हैं।', 'पता, जनसांख्यिकीय विवरण, मोबाइल, फोटो, फिंगरप्रिंट या आइरिस में बदलाव तय करें|UIDAI पर ASK खोजें और अपॉइंटमेंट लें/पुष्टि करें|आधार विवरण और मूल सहायक प्रमाण ले जाएँ', 'ऑनलाइन दस्तावेज़ अपलोड ऑफलाइन जनसांख्यिकीय अपडेट नहीं है।'],
        ['चरण 2: चेक-इन करें और टोकन लें', 'ASK रिसेप्शन → अपॉइंटमेंट जाँच → टोकन काउंटर', 'चुने केंद्र पर पहुँचकर चेक-इन करें और आधार अपडेट के लिए कतार टोकन लें।', 'अपॉइंटमेंट पुष्टि और आधार संख्या/कार्ड दिखाएँ|ऑपरेटर को हर अपडेट होने वाला फ़ील्ड/सेवा बताएँ|जमा करने से पहले आवश्यक मूल प्रमाण/प्रतियों की जानकारी पूछें', 'UIDAI पर सूचीबद्ध ASK ही उपयोग करें; अनधिकृत दुकान से बचें।'],
        ['चरण 3: अपडेट फॉर्म और पता भरें', 'अपडेट काउंटर → फॉर्म → पता फ़ील्ड', 'पता बदलाव में C/O, मकान/भवन, Landmark और PIN सहित पूरा पता कागज़ी/सहायता प्राप्त फॉर्म में भरें।', 'नाम और बदला जाने वाला फ़ील्ड प्रमाण के अनुसार लिखें|लागू हो तभी C/O, फिर मकान, सड़क/क्षेत्र, Landmark और PIN भरें|ऑपरेटर से State/District और संपर्क विवरण पुष्टि करें', 'क्षेत्र/मकान खाली न छोड़ें और केवल ऑटो-भरे जिले पर निर्भर न रहें।'],
        ['चरण 4: स्थानीय भाषा की वर्तनी ऑपरेटर के साथ जाँचें', 'डेटा एंट्री स्क्रीन → स्थानीय भाषा पूर्वावलोकन → पुष्टि', 'ऑपरेटर विवरण को हिन्दी/क्षेत्रीय भाषा में लिप्यंतरित कर सकता है। पुष्टि से पहले स्क्रीन/पूर्वावलोकन दिखाने को कहें।', 'अंग्रेज़ी और स्थानीय भाषा का नाम/पता जाँचें|लिप्यंतरण और मकान/PIN अंक सुधारें|बायोमेट्रिक या अंतिम पुष्टि से पहले हर अनुरोधित फ़ील्ड देखें', 'केंद्र पर पुष्टि की गलती सुधारने के लिए नया अपडेट आवेदन लग सकता है।'],
        ['चरण 5: मूल प्रमाण या HoF अनुरोध जमा करें', 'दस्तावेज़ जाँच → प्रमाण श्रेणी / HoF सत्यापन', 'सत्यापन के लिए मूल पता प्रमाण दिखाएँ। निवासी के नाम पर प्रमाण न हो तो ASK से पूछें कि HoF मार्ग स्वीकार है या नहीं।', 'स्वीकृत मूल प्रमाण दिखाएँ; माँगे तो ही प्रतियाँ दें|HoF मार्ग में HoF आधार और संबंध दिखाने वाला स्वीकार्य POR रखें|निर्देशानुसार HoF सहमति प्रमाणीकरण उपलब्ध रखें', 'HoF अनुरोध में संबंध प्रमाण और HoF सहमति चाहिए; टोकन से पहले स्थानीय प्रक्रिया पूछें।'],
        ['चरण 6: मोबाइल, फोटो/बायोमेट्रिक्स और शुल्क पूरा करें', 'बायोमेट्रिक काउंटर → मोबाइल/फोटो/बायोमेट्रिक्स → शुल्क काउंटर', 'ASK पर मोबाइल/फोटो और बायोमेट्रिक्स दर्ज होते हैं, जो ऑनलाइन अपडेट नहीं हो सकते। केंद्र शुल्क जनसांख्यिकीय के लिए ₹75 और बायोमेट्रिक के लिए ₹125 है।', 'बताएँ कि कौन-सा अपडेट चाहिए; पुराने मोबाइल की पहुँच केंद्र सत्यापन का विकल्प नहीं|निर्देशानुसार फोटो, फिंगरप्रिंट/आइरिस या मोबाइल अपडेट कराएँ|दिखाया शुल्क जाँचकर आधिकारिक रसीद पर भुगतान करें', 'UIDAI से वर्तमान शुल्क की पुष्टि करें; बिना रसीद शुल्क न दें।'],
        ['चरण 7: स्क्रीन जाँचें और पावती लें', 'आवेदक पूर्वावलोकन → सत्यापन अधिकारी → रसीद / URN', 'अंतिम जमा से पहले ऑपरेटर स्क्रीन जाँचें और अपडेट संदर्भ/URN वाली पावती लें।', 'नाम, जन्मतिथि, लिंग, पता/स्थानीय भाषा और मोबाइल जाँचें|साइन-ऑफ से पहले गलती सुधारने को कहें|तारीख वाली रसीद और URN रखें', 'पावती ट्रैकिंग संदर्भ है, मंजूरी का प्रमाण नहीं।'],
        ['चरण 8: अपडेट का परिणाम ट्रैक करें', 'UIDAI अपडेट स्थिति → URN भरें → परिणाम', 'UIDAI स्थिति सेवा में संदर्भ डालें। सत्यापन के अनुसार प्रक्रिया में 90 दिन तक लग सकते हैं।', 'पर्ची पर छपा URN/reference ठीक उसी तरह भरें|मंजूर, लंबित या अस्वीकृत स्थिति देखें|अस्वीकृति हो तो कारण पढ़ें और सही प्रमाण/अनुरोध दें', 'लंबित आवेदन दोबारा न दें; UIDAI की स्थिति के निर्देश मानें।']
    ]
};

const passportStageRows = {
    en: {
        new: [
            ['Stage 1: Register and select the correct RPO', 'Passport Seva Home → Register Now / mPassport Seva → RPO selection', 'Register at passportindia.gov.in or in the official mPassport Seva app. Select the Regional Passport Office (RPO) for the current residential address and verify the account email using its link within 24 hours.', 'Use only the official portal/app and check the domain or app publisher|Choose the RPO serving the present address, not a preferred appointment city|Use an email and mobile number that the applicant can access|Complete the email verification link before it expires', 'An incorrectly selected RPO or unverified account can delay booking; check the current portal instructions.'],
            ['Stage 2: Start a fresh application and choose booklet/service', 'Login → Apply for Fresh Passport/Re-issue of Passport → Fresh Passport', 'Select Fresh Passport, then Normal or Tatkaal and the booklet size. Adult 36-page and 60-page passports have 10-year validity; a minor passport is for 5 years or until age 18, whichever is earlier. Fees differ by category; check eligibility before selecting Tatkaal.', 'Select 36 pages or 60 pages for an eligible adult|For a child below 18, select the minor 36-page/5-year option|Confirm validity, service type and applicant category on the live form|Save the application and note any displayed expiry/deadline', 'Do not select Re-issue for a first passport; Tatkaal eligibility is not automatic.'],
            ['Stage 3: Answer ECR / Non-ECR eligibility accurately', 'Application form → Other Details → Non-ECR eligibility', 'Applicants who passed Class 10/Matriculation or a higher recognised qualification generally qualify for Non-ECR. If that applies, answer Yes to the Non-ECR eligibility question and carry the original 10th marksheet/certificate or another accepted proof.', 'Read the current eligibility list because other categories may also qualify|Enter the answer truthfully; do not select Yes solely to avoid ECR conditions|Keep the original Matriculation proof and a self-attested copy ready|Check the current accepted-document list for the specific qualification', 'The RPO decides whether the submitted proof is acceptable; do not rely on an unchecked declaration.'],
                        ['Stage 4: Enter family, address and emergency references', 'Application form → Applicant / Family / Present address / Emergency contact', 'Enter the applicant name exactly as supported by identity and date-of-birth records. Provide full present and previous address history where asked and two reachable local references (often neighbours) with full names, addresses and mobile numbers.', 'Check spelling against the strongest supporting records; explain any genuine mismatch|Enter complete address and dates of residence accurately|Choose two local people who know the applicant and may be contacted|Tell references to expect a verification call; do not invent details', 'Police may contact references, but signatures or witness requirements depend on the local verification process.'],
            ['Stage 5: Use DigiLocker only with consent', 'Application → Documents / DigiLocker → Consent and fetch', 'Where Passport Seva offers DigiLocker retrieval, link the applicant’s account and consent to fetch Aadhaar and Matriculation proof digitally. Carry originals to the appointment even when a digital record is fetched.', 'Authenticate directly with DigiLocker; never share its password or OTP|Select only the documents requested and confirm fetched details match the form|Keep original documents and copies as backup|If retrieval is unavailable, follow the portal upload/physical-proof instructions', 'DigiLocker availability and accepted records vary by document and case; digital retrieval does not waive PSK scrutiny.'],
                        ['Stage 6: Pay the fee and book a PSK / POPSK appointment', 'Application home → Pay and Schedule Appointment → Choose PSK / POPSK', 'Use the live fee calculator before paying. Revised listed amounts: adult 36 pages ₹2,500 Normal / ₹5,000 Tatkaal (₹2,500 base plus ₹2,500 Tatkaal fee); adult 60 pages ₹3,500 / ₹6,000; minor 36 pages ₹1,750 / ₹4,250. A 10% rebate on basic fee is listed for fresh applications by children under 8 and applicants over 60.', 'Pay through the official gateway using an offered method such as UPI or net banking; use the portal/PSK payment instructions for the Tatkaal component|Choose a convenient Passport Seva Kendra (PSK) or Post Office PSK (POPSK)|Download the appointment receipt and save the ARN/application reference|The stated limit is two reschedules within one year; confirm the live appointment policy before changing a slot', 'The live fee calculator and payment screen control; fee components and rescheduling rules can change.'],
                        ['Stage 7: Complete the mandatory PSK / POPSK visit', 'PSK / POPSK → Security and token → Counter A → Counter B → Counter C → Exit', 'Arrive about 15 minutes early with originals and two self-attested photocopy sets as a preparation set. Follow centre security rules; many centres restrict bags and chargers. The usual flow is token check, Counter A (TCS staff), Counter B document verification and Counter C granting review.', 'Show appointment confirmation/ARN SMS or printout and original documents at token check|At Counter A, staff capture the live photo and biometrics, scan originals and print a data sheet; review every field before signing|For a clear photo, follow staff instructions; avoid spectacles if directed, keep ears visible if requested, and a dark collared shirt is a practical choice|At Counter B, present originals for comparison with scans|At Counter C, confirm whether the decision is granted or subject to police verification, then collect the exit slip', 'Counter names and order can vary by centre. Do not leave without checking the printed data sheet and keeping the exit slip.'],
                        ['Stage 8: Complete police verification and track dispatch', 'Local police station / verification visit → Passport Seva status → India Post tracking', 'If required, local police using the mPassport Police App/workflow may arrange a home or station verification; a call within 3–7 days is a possible planning estimate, not a guaranteed timeline. After grant/printing, track dispatch using the number shown by Passport Seva and India Post.', 'Respond to the local police contact and attend the stated verification location|Show originals such as Aadhaar, Voter ID or registered rent agreement only as requested|Ask the local unit whether reference-person presence/signatures are required|Track the application with its file number/ARN and use the India Post consignment number when issued|An e-Passport with an electronic chip is issued where applicable under the current programme', 'Police app, timing and documents vary locally. Tracking number format/prefix is not universal; rely on official status, not an assumed “PP” format.'],
        ],
        update: [
            ['Stage 1: Open Re-issue and identify the existing passport', 'Login → Apply for Fresh Passport/Re-issue → Re-issue of Passport', 'Choose Re-issue for renewal, expiry, exhausted pages, a personal-particular change, or a lost/damaged passport. Use the existing passport details and select the reason that matches the case.', 'Keep the old passport and file number available|Select the applicant category and booklet requested|Use the current residential RPO|Do not choose Fresh Passport when replacing an existing passport', 'A reason or category mismatch can trigger a query; use the exact reason shown on the current form.'],
            ['Stage 2: Select the specific re-issue reason', 'Re-issue form → Reason for re-issue', 'Available reasons include validity expired within 3 years/due to expire within 1 year, exhaustion of pages, change in existing personal particulars, and lost/damaged passport. Choose every applicable option only as allowed by the form.', 'For a name or spouse-name change, identify the requested change and supporting proof|For address change, enter the new address and matching proof|For page exhaustion, select the replacement booklet size|For loss or damage, follow the separate report and annexure process', 'Do not misstate a loss, damage or expiry date to fit a category.'],
            ['Stage 3: Enter changed details and address history', 'Re-issue form → Existing passport details → Personal particulars / Address', 'Copy passport number, issue date and place from the old passport. Enter only the accurate new name, spouse details or address and provide supporting documents required for that change.', 'Match spelling and dates to supporting civil records|Enter previous/current addresses and residence dates fully|Add spouse particulars only where relevant and supported|Review the generated application summary', 'Changing a detail on the application does not itself update other identity records.'],
            ['Stage 4: Follow the lost/damaged passport route when applicable', 'Re-issue → Lost/Damaged → Police report / Annexure F', 'For a lost passport, report the loss to police and obtain the report/FIR required by the RPO; complete Annexure F when required. An online e-FIR is available only where the relevant police jurisdiction supports it. The listed 36-page lost/damaged replacement fee is ₹5,000.', 'Record passport number and circumstances of loss/damage|File the local police report promptly and keep its acknowledgement/FIR copy|Complete Annexure F truthfully and attach documents requested by Passport Seva|For a damaged booklet, preserve and take the damaged passport if available', 'Do not assume every state offers online e-FIR or that an online complaint alone satisfies the RPO.'],
            ['Stage 5: Upload proof, choose booklet and check fee', 'Re-issue form → Documents / Booklet → Fee calculator', 'Upload only the requested proofs and choose the correct Normal/Tatkaal and booklet option. Current listed standard amounts are 36 pages ₹2,500/₹5,000, 60 pages ₹3,500/₹6,000, minor 36 pages ₹1,750/₹4,250; lost/damaged 36-page replacement is listed at ₹5,000.', 'Upload complete, legible documents within the limits shown beside each field|Check whether police report, Annexure F or change-specific proof is required|Use the portal calculator for the final amount and any fee component|Save uploaded-file previews and the payment receipt', 'Tatkaal may not be available for every reason or applicant; the portal decision is controlling.'],
            ['Stage 6: Pay and schedule the in-person appointment', 'Application home → Pay and Schedule Appointment → PSK / POPSK', 'Pay through Passport Seva and book an appointment at a PSK or POPSK. Save the ARN, appointment confirmation and receipt.', 'Select the RPO and a convenient centre/date|Keep the ARN and appointment message accessible|Check rescheduling limits on the portal before changing the appointment|Prepare originals and self-attested copies of each requested proof', 'Payment or an appointment is not approval; do not pay twice while a transaction is pending.'],
            ['Stage 7: Attend PSK / POPSK with the old passport', 'PSK / POPSK → Token → Counter A → Counter B → Counter C', 'Carry the old original passport and all requested originals. Staff verify identity, capture/refresh photo and biometrics as required, scan proofs, and route the case through verification and granting review.', 'Show ARN/appointment confirmation at the token counter|At Counter A, check the data sheet carefully before signing|At Counter B, show old passport and original change/loss documents|At Counter C, confirm the case status and collect the exit slip|Ask the officer how the old passport will be marked and returned', 'The old passport is normally cancelled and returned when required; do not leave it behind without an official receipt.'],
            ['Stage 8: Keep the cancelled passport and track the replacement', 'Exit slip → Passport Seva status → Police verification → India Post tracking', 'Retain the old passport if returned with a cancellation mark. Existing visas may need to be presented with the new passport; validity and travel acceptance are decided by the issuing country and carrier.', 'Complete police verification if directed, including updated-address checks|Track with the file number and date of birth on Passport Seva|Use the India Post consignment number once dispatch is recorded|Keep the exit slip, payment receipt and old passport safely', 'Do not assume a visa remains usable in every situation; check the destination authority and carry both passports if instructed.']
        ],
        surrender: [
            ['Stage 1: Confirm whether surrender or application cancellation applies', 'Passport Seva → Surrender Certificate / Cancel appointment or application', 'A Surrender Certificate is generally required after acquiring foreign citizenship because India does not permit dual citizenship. If you only need to cancel a pending application or appointment, use the relevant cancellation option instead of applying for a Surrender Certificate.', 'Identify whether a passport was issued and whether foreign citizenship was acquired|Check the current Passport Seva service options and RPO guidance|Do not use the application-cancellation route to avoid a statutory surrender requirement', 'The asserted three-year deadline and ₹10,000–₹50,000 penalty range require confirmation against current Passport Act/Rules and RPO guidance.'],
            ['Stage 2: Register/sign in and select Surrender Certificate', 'Passport Seva Home → Login / Register → Apply for Surrender Certificate', 'Choose the Surrender Certificate service for the Indian passport after foreign citizenship acquisition. Use the RPO for the current address and enter the foreign citizenship details accurately.', 'Use the official Passport Seva portal/app|Select the correct RPO and applicant category|Keep old passport number and foreign-naturalisation date ready|For a pending application cancellation, follow its own portal option', 'A Surrender Certificate is not the same service as cancelling an appointment or an unissued application.'],
            ['Stage 3: Complete the form and disclose citizenship details', 'Surrender Certificate form → Indian passport / Foreign citizenship details', 'Enter the Indian passport particulars and foreign citizenship/naturalisation details requested. Review declarations and upload the documents specified by the current form.', 'Use the name and dates shown on the passports/certificates|State when foreign citizenship was acquired truthfully|Enter contact and present address details|Download/retain the application acknowledgement', 'Do not travel on an Indian passport after acquiring foreign citizenship; check official travel and surrender requirements.'],
            ['Stage 4: Prepare the old passport and naturalisation evidence', 'Documents → Original Indian passport → Foreign Naturalization Certificate', 'Prepare the original Indian passport and original foreign Naturalization Certificate or other accepted citizenship proof, plus any identity/address documents requested.', 'Carry all passport booklets issued to the applicant if instructed|Make copies of the bio-data and relevant visa/citizenship pages|Check whether a translated/certified copy is required|Keep copies of the full submitted set', 'Document requirements can differ for citizenship route, passport history and RPO; use the live checklist.'],
            ['Stage 5: Pay the listed fee and book a PSK / POPSK slot', 'Application → Fee payment → Appointment scheduling', 'The listed fee for a Surrender Certificate is ₹750. Pay through the official portal and book the available PSK/POPSK appointment.', 'Confirm the service and exact amount in the fee calculator|Save the payment receipt and ARN|Choose a centre serving the correct RPO|Print/download the appointment confirmation', 'Use only the fee shown by Passport Seva; do not pay a facilitator an unofficial charge.'],
            ['Stage 6: Attend the appointment with originals', 'PSK / POPSK → Token counter → Document verification', 'Arrive with the old Indian passport, foreign citizenship certificate and every requested original/copy. Submit the application for scrutiny and answer any document query.', 'Show the appointment confirmation and ARN|Present originals for inspection and submit copies as directed|Review the details staff enter before confirming|Ask for a receipt if any original is retained', 'Do not leave an original document without a dated official acknowledgement.'],
            ['Stage 7: Complete passport cancellation and collect the exit record', 'PSK / POPSK → Verification / Granting officer → Cancelled passport', 'The centre verifies the case, cancels/marks the Indian passport as directed and processes the Surrender Certificate request. Follow the officer’s instructions about the cancelled booklet.', 'Confirm that the passport number on the record matches the booklet|Ask whether the cancelled passport is returned or retained|Collect the exit slip and acknowledgement|Keep the cancelled passport separate from valid travel documents', 'Do not use a cancelled Indian passport for travel.'],
            ['Stage 8: Track and retain the Surrender Certificate', 'Passport Seva status → Surrender Certificate → Download / collection', 'Track the request with its ARN/file reference and follow Passport Seva instructions to receive the official Surrender Certificate. Preserve it with the cancelled passport record.', 'Check status through the official portal|Respond to any deficiency notice by its deadline|Save a digital and paper copy of the certificate|Update relevant records only after official issuance', 'Confirm the current deadline and any penalty exposure with the RPO or qualified counsel; the three-year and penalty figures above are not independently verified here.']
        ]
    },
    hi: {
        new: [
            ['चरण 1: पंजीकरण करें और सही RPO चुनें', 'Passport Seva Home → Register Now / mPassport Seva → RPO चयन', 'passportindia.gov.in या आधिकारिक mPassport Seva ऐप पर पंजीकरण करें। वर्तमान आवासीय पते के अनुसार Regional Passport Office (RPO) चुनें और ईमेल लिंक से 24 घंटे के भीतर खाता सत्यापित करें।', 'केवल आधिकारिक पोर्टल/ऐप खोलें और डोमेन या ऐप प्रकाशक जाँचें|पसंदीदा शहर नहीं, वर्तमान पते का RPO चुनें|आवेदक का चालू ईमेल और मोबाइल दें|लिंक की समय-सीमा से पहले ईमेल सत्यापन पूरा करें', 'गलत RPO या असत्यापित खाता अपॉइंटमेंट में देरी कर सकता है; वर्तमान पोर्टल निर्देश जाँचें।'],
            ['चरण 2: नया आवेदन शुरू करें और पुस्तिका/सेवा चुनें', 'Login → Apply for Fresh Passport/Re-issue of Passport → Fresh Passport', 'Fresh Passport चुनें, फिर Normal या Tatkaal और पुस्तिका का आकार चुनें। वयस्क 36 और 60-पृष्ठ पासपोर्ट की वैधता 10 वर्ष है; नाबालिग पासपोर्ट 5 वर्ष या 18 वर्ष की आयु तक, जो पहले हो, मान्य है। फीस अलग है; Tatkaal से पहले पात्रता जाँचें।', 'पात्र वयस्क के लिए 36 या 60 पृष्ठ चुनें|18 वर्ष से कम बच्चे के लिए नाबालिग 36-पृष्ठ/5-वर्ष विकल्प चुनें|लाइव फॉर्म में वैधता, सेवा और आवेदक श्रेणी जाँचें|आवेदन सहेजें और दिखाई गई समय-सीमा नोट करें', 'पहले पासपोर्ट के लिए Re-issue न चुनें; Tatkaal स्वतः उपलब्ध नहीं होता।'],
            ['चरण 3: ECR / Non-ECR पात्रता का सही उत्तर दें', 'Application form → Other Details → Non-ECR eligibility', 'कक्षा 10/मैट्रिकुलेशन या उससे ऊपर की मान्य योग्यता वाले आवेदक सामान्यतः Non-ECR के पात्र होते हैं। यह लागू हो तो Non-ECR पात्रता प्रश्न में Yes चुनें और मूल 10वीं अंकपत्र/प्रमाणपत्र या अन्य स्वीकृत प्रमाण साथ रखें।', 'वर्तमान पात्रता सूची पढ़ें; अन्य श्रेणियाँ भी पात्र हो सकती हैं|सही उत्तर दें; ECR शर्तों से बचने के लिए गलत Yes न चुनें|मूल मैट्रिक प्रमाण और स्वयं-सत्यापित प्रति रखें|योग्यता के लिए स्वीकृत दस्तावेज़ की वर्तमान सूची जाँचें', 'कौन-सा प्रमाण स्वीकार होगा इसका निर्णय RPO करता है; बिना प्रमाण घोषणा न करें।'],
            ['चरण 4: परिवार, पता और आपातकालीन संदर्भ भरें', 'Application form → Applicant / Family / Present address / Emergency contact', 'नाम को पहचान और जन्मतिथि रिकॉर्ड के अनुसार भरें। वर्तमान/पूर्व पते और निवास अवधि जहाँ माँगी जाए दें। दो ऐसे आपातकालीन संपर्क दें जिनका पूरा नाम, पता और मोबाइल हो और जो आवेदक को जानते हों।', 'नाम की वर्तनी प्रमाण से मिलाएँ और वास्तविक अंतर स्पष्ट करें|पूरा पता और निवास तिथियाँ सही भरें|दो उपलब्ध लोगों के पूरे विवरण दें जिन्हें संपर्क किया जा सके|संदर्भ व्यक्तियों को संभावित सत्यापन कॉल की जानकारी दें; विवरण न गढ़ें', 'पुलिस संपर्क कर सकती है, लेकिन हस्ताक्षर/गवाह की आवश्यकता स्थानीय सत्यापन पर निर्भर करती है।'],
            ['चरण 5: सहमति से DigiLocker दस्तावेज़ लें', 'Application → Documents / DigiLocker → Consent and fetch', 'जहाँ Passport Seva DigiLocker सुविधा देता है, वहाँ आवेदक का खाता जोड़कर Aadhaar और मैट्रिक प्रमाण डिजिटल रूप से प्राप्त करने की सहमति दें। डिजिटल दस्तावेज़ मिलने पर भी PSK पर मूल दस्तावेज़ ले जाएँ।', 'DigiLocker में सीधे प्रमाणीकरण करें; पासवर्ड/OTP साझा न करें|केवल माँगे दस्तावेज़ चुनें और फॉर्म के विवरण से मिलाएँ|मूल दस्तावेज़ और प्रतियाँ बैकअप के रूप में रखें|सुविधा न मिले तो पोर्टल के अपलोड/भौतिक प्रमाण निर्देश मानें', 'डिजिटल दस्तावेज़ की उपलब्धता/स्वीकृति अलग हो सकती है; इससे PSK जाँच समाप्त नहीं होती।'],
                        ['चरण 6: शुल्क दें और PSK / POPSK अपॉइंटमेंट लें', 'Application home → Pay and Schedule Appointment → Choose PSK / POPSK', 'भुगतान से पहले लाइव fee calculator देखें। सूचीबद्ध संशोधित राशि: वयस्क 36 पृष्ठ ₹2,500 Normal / ₹5,000 Tatkaal (₹2,500 मूल शुल्क + ₹2,500 Tatkaal शुल्क); वयस्क 60 पृष्ठ ₹3,500 / ₹6,000; नाबालिग 36 पृष्ठ ₹1,750 / ₹4,250। नए आवेदन में 8 वर्ष से कम बच्चों और 60 वर्ष से अधिक आयु वालों की मूल फीस पर 10% छूट सूचीबद्ध है।', 'आधिकारिक भुगतान गेटवे पर उपलब्ध UPI/नेटबैंकिंग आदि से भुगतान करें; Tatkaal घटक के लिए पोर्टल/PSK भुगतान निर्देश मानें|निकट PSK या Post Office PSK (POPSK) चुनें|अपॉइंटमेंट रसीद डाउनलोड करें और ARN/आवेदन संदर्भ रखें|बताई गई सीमा एक वर्ष में दो reschedule है; स्लॉट बदलने से पहले लाइव नियम पुष्टि करें', 'लाइव fee calculator और भुगतान स्क्रीन ही अंतिम हैं; शुल्क घटक और reschedule नियम बदल सकते हैं।'],
                        ['चरण 7: अनिवार्य PSK / POPSK विज़िट पूरी करें', 'PSK / POPSK → Security and token → Counter A → Counter B → Counter C → Exit', 'मूल दस्तावेज़ और तैयारी के लिए दो स्वयं-सत्यापित प्रति सेट लेकर लगभग 15 मिनट पहले पहुँचें। सुरक्षा नियम मानें; कई केंद्रों में बैग/चार्जर प्रतिबंधित हैं। सामान्य क्रम: टोकन जाँच, Counter A (TCS कर्मचारी), Counter B दस्तावेज़ जाँच और Counter C स्वीकृति समीक्षा।', 'टोकन काउंटर पर अपॉइंटमेंट/ARN SMS या प्रिंट और मूल दस्तावेज़ दिखाएँ|Counter A पर लाइव फोटो, बायोमेट्रिक्स और मूल दस्तावेज़ स्कैन होते हैं; छपी शीट पढ़कर ही हस्ताक्षर करें|स्पष्ट फोटो के लिए निर्देश मानें; कहा जाए तो चश्मा हटाएँ, कान दिखाएँ; गहरे रंग की कॉलर वाली शर्ट उपयोगी विकल्प है|Counter B पर मूल दस्तावेज़ स्कैन से मिलवाएँ|Counter C पर स्वीकृति या पुलिस सत्यापन के अधीन निर्णय की पुष्टि करें और exit slip लें', 'काउंटर के नाम/क्रम केंद्र अनुसार बदल सकते हैं। जाने से पहले छपी शीट जाँचें और exit slip रखें।'],
                        ['चरण 8: पुलिस सत्यापन और डाक ट्रैकिंग पूरी करें', 'स्थानीय पुलिस स्टेशन / सत्यापन → Passport Seva स्थिति → India Post ट्रैकिंग', 'जहाँ जरूरी हो, स्थानीय पुलिस mPassport Police App/कार्यप्रवाह से घर या थाने पर सत्यापन तय कर सकती है; 3–7 दिन में कॉल संभावित अनुमान है, निश्चित समय नहीं। मंजूरी/प्रिंट के बाद Passport Seva और India Post पर जारी ट्रैकिंग संख्या से डाक देखें।', 'स्थानीय पुलिस का संपर्क आए तो जवाब दें और बताए स्थान पर जाएँ|माँगे जाने पर Aadhaar, Voter ID या पंजीकृत किराया समझौते जैसे मूल प्रमाण दिखाएँ|संदर्भ व्यक्तियों की मौजूदगी/हस्ताक्षर चाहिए या नहीं, स्थानीय इकाई से पूछें|फाइल संख्या/ARN और जारी India Post consignment number से स्थिति देखें|वर्तमान कार्यक्रम के अंतर्गत जहाँ लागू हो इलेक्ट्रॉनिक चिप वाला e-Passport जारी होता है', 'पुलिस ऐप, समय और दस्तावेज़ स्थानीय रूप से बदलते हैं। ट्रैकिंग संख्या प्रारूप/उपसर्ग तय नहीं; आधिकारिक स्थिति देखें, “PP” प्रारूप न मानें।'],
        ],
        update: [
            ['चरण 1: Re-issue खोलें और मौजूदा पासपोर्ट पहचानें', 'Login → Apply for Fresh Passport/Re-issue → Re-issue of Passport', 'नवीनीकरण, समाप्ति, पृष्ठ समाप्त, व्यक्तिगत विवरण बदलाव या खोए/क्षतिग्रस्त पासपोर्ट के लिए Re-issue चुनें। पुराने पासपोर्ट का विवरण भरें और लागू कारण चुनें।', 'पुराना पासपोर्ट और फाइल संख्या तैयार रखें|आवेदक श्रेणी और माँगी पुस्तिका चुनें|वर्तमान पते का RPO चुनें|पहले से जारी पासपोर्ट बदलते समय Fresh Passport न चुनें', 'कारण/श्रेणी में अंतर से आपत्ति हो सकती है; लाइव फॉर्म में सही विकल्प चुनें।'],
            ['चरण 2: पुनः जारी करने का सही कारण चुनें', 'Re-issue form → Reason for re-issue', 'कारणों में वैधता समाप्त हुए 3 वर्ष के भीतर/1 वर्ष में समाप्त होने वाला, पृष्ठ समाप्त, मौजूदा व्यक्तिगत विवरण बदलाव, और खोया/क्षतिग्रस्त पासपोर्ट शामिल हैं। फॉर्म के अनुसार लागू कारण चुनें।', 'नाम/पति-पत्नी नाम बदलाव में सहायक प्रमाण पहचानें|पता बदलने पर नया पता और प्रमाण दें|पृष्ठ समाप्त होने पर नई पुस्तिका चुनें|खोने/क्षति पर अलग रिपोर्ट और Annexure प्रक्रिया अपनाएँ', 'श्रेणी के अनुरूप दिखने के लिए नुकसान/समाप्ति की गलत जानकारी न दें।'],
            ['चरण 3: बदले विवरण और पता इतिहास भरें', 'Re-issue form → Existing passport details → Personal particulars / Address', 'पुराने पासपोर्ट से संख्या, जारी तिथि और स्थान भरें। केवल सही नया नाम, पति/पत्नी विवरण या पता लिखें और बदलाव के लिए माँगे प्रमाण दें।', 'नाम और तारीखें नागरिक प्रमाण से मिलाएँ|वर्तमान/पूर्व पते और निवास अवधि पूरी भरें|लागू और प्रमाणित हो तभी जीवनसाथी विवरण बदलें|तैयार सारांश जाँचें', 'आवेदन में बदलाव करने से अन्य पहचान रिकॉर्ड अपने-आप अपडेट नहीं होते।'],
            ['चरण 4: खोने/क्षति पर रिपोर्ट और Annexure प्रक्रिया अपनाएँ', 'Re-issue → Lost/Damaged → Police report / Annexure F', 'खोए पासपोर्ट की सूचना पुलिस को दें और RPO द्वारा माँगी रिपोर्ट/FIR लें; जहाँ आवश्यक हो Annexure F भरें। ऑनलाइन e-FIR तभी संभव है जब संबंधित पुलिस क्षेत्र यह सुविधा देता हो। 36-पृष्ठ खोए/क्षतिग्रस्त पासपोर्ट का सूचीबद्ध प्रतिस्थापन शुल्क ₹5,000 है।', 'पासपोर्ट संख्या और खोने/क्षति की परिस्थिति लिखें|स्थानीय पुलिस में शीघ्र रिपोर्ट कर acknowledgement/FIR प्रति रखें|Annexure F सही भरें और Passport Seva द्वारा माँगे दस्तावेज़ लगाएँ|क्षतिग्रस्त पुस्तिका उपलब्ध हो तो उसे सुरक्षित रखकर ले जाएँ', 'हर राज्य में ऑनलाइन e-FIR नहीं होती; केवल ऑनलाइन शिकायत RPO की आवश्यकता पूरी करेगी, यह न मानें।'],
            ['चरण 5: प्रमाण अपलोड करें, पुस्तिका और शुल्क जाँचें', 'Re-issue form → Documents / Booklet → Fee calculator', 'माँगे गए प्रमाण अपलोड करें और सही Normal/Tatkaal व पुस्तिका विकल्प चुनें। सूचीबद्ध मानक राशि: 36 पृष्ठ ₹2,500/₹5,000, 60 पृष्ठ ₹3,500/₹6,000, नाबालिग 36 पृष्ठ ₹1,750/₹4,250; खोए/क्षतिग्रस्त 36-पृष्ठ प्रतिस्थापन ₹5,000।', 'हर फ़ील्ड की सीमा में पूरा और पढ़ने योग्य दस्तावेज़ दें|जाँचें कि पुलिस रिपोर्ट, Annexure F या बदलाव-विशिष्ट प्रमाण चाहिए या नहीं|अंतिम राशि/घटक पोर्टल calculator से लें|अपलोड पूर्वावलोकन और भुगतान रसीद रखें', 'हर कारण/आवेदक के लिए Tatkaal उपलब्ध नहीं; पोर्टल की पात्रता जाँच मानें।'],
            ['चरण 6: भुगतान करके व्यक्तिगत अपॉइंटमेंट लें', 'Application home → Pay and Schedule Appointment → PSK / POPSK', 'Passport Seva पर भुगतान करके PSK/POPSK अपॉइंटमेंट बुक करें। ARN, पुष्टि और रसीद सुरक्षित रखें।', 'सही RPO और सुविधाजनक केंद्र/तारीख चुनें|ARN और अपॉइंटमेंट संदेश पास रखें|स्लॉट बदलने से पहले पोर्टल की reschedule सीमा देखें|हर माँगे प्रमाण के मूल और स्वयं-सत्यापित प्रतियाँ तैयार रखें', 'भुगतान/अपॉइंटमेंट मंजूरी नहीं है; लेन-देन लंबित होने पर दोबारा भुगतान न करें।'],
            ['चरण 7: पुराने पासपोर्ट सहित PSK / POPSK जाएँ', 'PSK / POPSK → Token → Counter A → Counter B → Counter C', 'पुराना मूल पासपोर्ट और माँगे सभी मूल प्रमाण साथ ले जाएँ। कर्मचारी पहचान जाँचेंगे, आवश्यकतानुसार फोटो/बायोमेट्रिक्स लेंगे, प्रमाण स्कैन करेंगे और मामला सत्यापन/स्वीकृति काउंटर पर भेजेंगे।', 'टोकन काउंटर पर ARN/अपॉइंटमेंट दिखाएँ|Counter A की डेटा शीट हस्ताक्षर से पहले पढ़ें|Counter B पर पुराना पासपोर्ट और बदलाव/हानि प्रमाण दिखाएँ|Counter C पर स्थिति पूछें और exit slip लें|पूछें कि पुराना पासपोर्ट कैसे रद्द कर लौटाया जाएगा', 'जहाँ आवश्यक हो पुराना पासपोर्ट रद्द मुहर के साथ लौटाया जाता है; आधिकारिक रसीद बिना उसे न छोड़ें।'],
            ['चरण 8: रद्द पासपोर्ट रखें और नए पासपोर्ट को ट्रैक करें', 'Exit slip → Passport Seva status → Police verification → India Post tracking', 'यदि पुराना पासपोर्ट रद्द मुहर के साथ लौटे तो सुरक्षित रखें। पुराने पासपोर्ट के मौजूदा वीज़ा के साथ नया पासपोर्ट दिखाना पड़ सकता है; उपयोग/वैधता देश और वाहक के नियम पर निर्भर है।', 'निर्देश मिलने पर पुलिस सत्यापन पूरा करें, खासकर बदले पते का|Passport Seva पर फाइल संख्या और जन्मतिथि से ट्रैक करें|डाक दर्ज होने पर India Post consignment number उपयोग करें|exit slip, भुगतान रसीद और पुराना पासपोर्ट सुरक्षित रखें', 'हर स्थिति में वीज़ा मान्य रहेगा, ऐसा न मानें; गंतव्य देश से जाँचें और निर्देश हो तो दोनों पासपोर्ट साथ रखें।']
        ],
        surrender: [
            ['चरण 1: सरेंडर या आवेदन रद्द करने का सही विकल्प पहचानें', 'Passport Seva → Surrender Certificate / Cancel appointment or application', 'विदेशी नागरिकता लेने के बाद सामान्यतः Surrender Certificate चाहिए क्योंकि भारत दोहरी नागरिकता की अनुमति नहीं देता। यदि केवल लंबित आवेदन/अपॉइंटमेंट रद्द करना है, तो प्रमाणपत्र के बजाय संबंधित cancellation विकल्प लें।', 'पहचानें कि पासपोर्ट जारी हुआ है या नहीं और विदेशी नागरिकता ली है या नहीं|वर्तमान Passport Seva सेवा और RPO निर्देश जाँचें|वैधानिक सरेंडर आवश्यकता से बचने के लिए आवेदन-रद्द विकल्प न चुनें', 'बताई गई 3-वर्ष समय-सीमा और ₹10,000–₹50,000 जुर्माना वर्तमान Passport Act/Rules तथा RPO से पुष्टि योग्य हैं; यहाँ स्वतंत्र पुष्टि नहीं है।'],
            ['चरण 2: लॉगिन कर Surrender Certificate सेवा चुनें', 'Passport Seva Home → Login / Register → Apply for Surrender Certificate', 'विदेशी नागरिकता मिलने के बाद भारतीय पासपोर्ट के लिए Surrender Certificate सेवा चुनें। वर्तमान पते का RPO चुनकर विदेशी नागरिकता विवरण सही भरें।', 'आधिकारिक Passport Seva पोर्टल/ऐप उपयोग करें|सही RPO और आवेदक श्रेणी चुनें|पुराना पासपोर्ट नंबर और विदेशी नागरिकता की तारीख रखें|लंबित आवेदन रद्द करना हो तो उसका अलग पोर्टल विकल्प अपनाएँ', 'Surrender Certificate, अपॉइंटमेंट या जारी न हुए आवेदन को रद्द करने की सेवा से अलग है।'],
            ['चरण 3: फॉर्म और विदेशी नागरिकता विवरण भरें', 'Surrender Certificate form → Indian passport / Foreign citizenship details', 'भारतीय पासपोर्ट और विदेशी नागरिकता/नेचुरलाइज़ेशन के माँगे गए विवरण भरें। घोषणा जाँचें और वर्तमान फॉर्म द्वारा माँगे दस्तावेज़ अपलोड करें।', 'पासपोर्ट और प्रमाणपत्र में दिए नाम/तारीख लिखें|विदेशी नागरिकता कब मिली यह सही बताएँ|संपर्क और वर्तमान पता भरें|आवेदन पावती सुरक्षित रखें', 'विदेशी नागरिकता मिलने के बाद भारतीय पासपोर्ट पर यात्रा न करें; आधिकारिक यात्रा/सरेंडर नियम जाँचें।'],
            ['चरण 4: पुराना पासपोर्ट और नेचुरलाइज़ेशन प्रमाण तैयार करें', 'Documents → Original Indian passport → Foreign Naturalization Certificate', 'मूल भारतीय पासपोर्ट और विदेशी Naturalization Certificate या स्वीकृत नागरिकता प्रमाण तैयार करें; साथ में माँगे पहचान/पता प्रमाण रखें।', 'निर्देश हो तो आवेदक के सभी जारी पासपोर्ट साथ लें|बायोडाटा और संबंधित वीज़ा/नागरिकता पृष्ठों की प्रतियाँ रखें|अनुवाद/प्रमाणित प्रति चाहिए या नहीं जाँचें|जमा दस्तावेज़ों के पूरे सेट की प्रति रखें', 'नागरिकता मार्ग, पासपोर्ट इतिहास और RPO के अनुसार सूची बदल सकती है; वर्तमान checklist मानें।'],
            ['चरण 5: शुल्क देकर PSK / POPSK स्लॉट लें', 'Application → Fee payment → Appointment scheduling', 'Surrender Certificate की सूचीबद्ध फीस ₹750 है। आधिकारिक पोर्टल पर भुगतान करें और उपलब्ध PSK/POPSK अपॉइंटमेंट लें।', 'Fee calculator में सही सेवा और राशि की पुष्टि करें|भुगतान रसीद और ARN रखें|सही RPO का केंद्र चुनें|अपॉइंटमेंट पुष्टि डाउनलोड/प्रिंट करें', 'केवल Passport Seva पर दिखाई फीस दें; अनधिकृत सुविधा शुल्क न दें।'],
            ['चरण 6: मूल दस्तावेज़ के साथ अपॉइंटमेंट पर जाएँ', 'PSK / POPSK → Token counter → Document verification', 'पुराना भारतीय पासपोर्ट, विदेशी नागरिकता प्रमाणपत्र तथा सभी माँगे मूल/प्रतियाँ लेकर जाएँ। आवेदन जाँच के लिए दें और दस्तावेज़ संबंधी प्रश्नों का उत्तर दें।', 'टोकन काउंटर पर ARN और अपॉइंटमेंट पुष्टि दिखाएँ|जाँच के लिए मूल प्रस्तुत करें और निर्देशानुसार प्रतियाँ दें|कर्मचारी द्वारा दर्ज विवरण पुष्टि से पहले जाँचें|कोई मूल दस्तावेज़ रखा जाए तो रसीद लें', 'तारीख वाली आधिकारिक पावती के बिना मूल दस्तावेज़ न छोड़ें।'],
            ['चरण 7: पासपोर्ट रद्दीकरण पूरा करें और निकास पावती लें', 'PSK / POPSK → Verification / Granting officer → Cancelled passport', 'केंद्र मामले की जाँच कर भारतीय पासपोर्ट को निर्देशानुसार रद्द/चिह्नित करेगा और Surrender Certificate अनुरोध आगे बढ़ाएगा। रद्द पुस्तिका के बारे में अधिकारी के निर्देश मानें।', 'रिकॉर्ड पर पासपोर्ट नंबर पुस्तिका से मिलाएँ|पूछें कि रद्द पासपोर्ट लौटेगा या कार्यालय रखेगा|exit slip और पावती लें|रद्द पासपोर्ट को वैध यात्रा दस्तावेज़ों से अलग रखें', 'रद्द भारतीय पासपोर्ट से यात्रा न करें।'],
            ['चरण 8: प्रमाणपत्र ट्रैक कर सुरक्षित रखें', 'Passport Seva status → Surrender Certificate → Download / collection', 'ARN/फाइल संदर्भ से आवेदन ट्रैक करें और आधिकारिक Surrender Certificate प्राप्त करने के निर्देश मानें। इसे रद्द पासपोर्ट रिकॉर्ड के साथ सुरक्षित रखें।', 'आधिकारिक पोर्टल पर स्थिति देखें|कमी सूचना का समय-सीमा में उत्तर दें|प्रमाणपत्र की डिजिटल और कागज़ी प्रति रखें|आधिकारिक जारी होने के बाद ही संबंधित रिकॉर्ड अपडेट करें', 'समय-सीमा और संभावित दंड RPO या योग्य कानूनी सलाहकार से पुष्टि करें; 3 वर्ष/दंड राशि यहाँ स्वतंत्र रूप से सत्यापित नहीं है।']
        ]
    }
};

const passportGuideResources = {
    en: {
        uploadHeading: 'Passport document preparation',
        uploadIntro: 'Passport Seva’s live checklist and upload controls take priority; a photo is normally captured at the PSK/POPSK.',
        uploadItems: [
            'Upload only the file types, pages and file sizes requested by the current Passport Seva form; no single size limit applies to every document/case.',
            'Use complete, legible, unaltered scans. Include both sides/pages when requested and keep originals for the appointment.',
            'Do not upload an applicant photo unless the current service specifically requests it; PSK/POPSK generally captures the live photograph.',
            'DigiLocker retrieval is available only for supported records and does not guarantee that the RPO will waive original-document scrutiny.'
        ],
        officeHeading: 'PSK / POPSK appointment preparation',
        officeIntro: 'The service application and appointment are managed through Passport Seva; the applicant must attend the selected centre for in-person processing.',
        officeItems: [
            'Carry the appointment confirmation/ARN, all requested originals and a preparation set of two self-attested copies; follow the current RPO checklist if it differs.',
            'Arrive early and follow centre security restrictions. The usual sequence includes entry/token, Counter A processing, Counter B document verification and Counter C granting review.',
            'At Counter A, review the printed application data sheet carefully before signing. Keep the exit slip and any official receipt.',
            'Do not leave an original document at the centre without a dated acknowledgement; the old passport may be cancelled and returned in re-issue cases.'
        ],
        trackingHeading: 'After submission: Passport tracking',
        trackingStages: [
            ['ARN / file number and appointment status', 'Save the Application Reference Number (ARN), appointment receipt and payment confirmation. Use Passport Seva status with the file number and date of birth; an acknowledgement is not approval.'],
            ['Police verification and RPO decision', 'Follow the status shown by Passport Seva and answer any local police/RPO contact promptly. Verification timing and required proofs vary by address and case; do not assume a fixed 3–7-day window.'],
            ['Printing and India Post dispatch', 'After issue/printing, use the dispatch/consignment reference shown in official status and India Post tracking. Tracking formats vary; rely on the generated number rather than an assumed prefix or length.']
        ],
        rejectionHeading: 'Common passport application queries and how to prevent them',
        rejectionReasons: [
            ['Name, date of birth or address differs from supporting records', 'Use consistent source documents, complete address history and explain genuine variations with accepted proof before submission.'],
            ['Wrong ECR/Non-ECR declaration or insufficient eligibility proof', 'Read the current eligibility list, answer truthfully and carry original Matriculation/other accepted proof for the RPO to inspect.'],
            ['Incorrect service reason, booklet, fee or Tatkaal eligibility', 'Check Fresh vs Re-issue, the precise reason, applicant category, booklet size and live fee calculator before payment.'],
            ['Incomplete, unreadable or unsupported documents; unavailable references', 'Follow the case-specific checklist, keep originals available and enter reachable emergency contacts who know the applicant.'],
            ['Police verification could not confirm the current address', 'Keep current residence proof ready, respond to the local police unit and provide references only as requested by that unit.']
        ]
    },
    hi: {
        uploadHeading: 'पासपोर्ट दस्तावेज़ तैयार करना',
        uploadIntro: 'Passport Seva की लाइव checklist और upload नियंत्रण सर्वोपरि हैं; फोटो सामान्यतः PSK/POPSK पर लिया जाता है।',
        uploadItems: [
            'वर्तमान Passport Seva फॉर्म में माँगे फ़ाइल प्रकार, पृष्ठ और आकार ही उपयोग करें; हर दस्तावेज़/मामले के लिए एक समान सीमा नहीं है।',
            'पूरा, स्पष्ट और बिना बदलाव का स्कैन दें। माँगे जाने पर दोनों तरफ/पृष्ठ शामिल करें और अपॉइंटमेंट के लिए मूल दस्तावेज़ रखें।',
            'जब तक वर्तमान सेवा स्पष्ट रूप से न माँगे, आवेदक की फोटो अपलोड न करें; PSK/POPSK पर सामान्यतः लाइव फोटो लिया जाता है।',
            'DigiLocker सुविधा केवल समर्थित रिकॉर्ड के लिए है और इससे RPO की मूल दस्तावेज़ जाँच समाप्त होना सुनिश्चित नहीं होता।'
        ],
        officeHeading: 'PSK / POPSK अपॉइंटमेंट की तैयारी',
        officeIntro: 'आवेदन और अपॉइंटमेंट Passport Seva से होते हैं; व्यक्तिगत प्रक्रिया के लिए आवेदक को चुने केंद्र पर जाना होगा।',
        officeItems: [
            'अपॉइंटमेंट पुष्टि/ARN, सभी माँगे मूल दस्तावेज़ और तैयारी हेतु दो स्वयं-सत्यापित प्रति सेट ले जाएँ; RPO checklist अलग हो तो वही मानें।',
            'समय से पहले पहुँचें और केंद्र सुरक्षा नियम मानें। सामान्य क्रम: प्रवेश/टोकन, Counter A, Counter B दस्तावेज़ जाँच और Counter C स्वीकृति समीक्षा।',
            'Counter A पर हस्ताक्षर से पहले छपी आवेदन जानकारी ध्यान से जाँचें। Exit slip और आधिकारिक रसीद रखें।',
            'तारीख वाली पावती के बिना मूल दस्तावेज़ न छोड़ें; पुनः जारी मामले में पुराना पासपोर्ट रद्द कर लौटाया जा सकता है।'
        ],
        trackingHeading: 'जमा करने के बाद: पासपोर्ट ट्रैकिंग',
        trackingStages: [
            ['ARN / फाइल संख्या और अपॉइंटमेंट स्थिति', 'Application Reference Number (ARN), अपॉइंटमेंट रसीद और भुगतान पुष्टि रखें। Passport Seva स्थिति में फाइल संख्या और जन्मतिथि से देखें; पावती मंजूरी नहीं है।'],
            ['पुलिस सत्यापन और RPO निर्णय', 'Passport Seva की स्थिति देखें और स्थानीय पुलिस/RPO संपर्क का शीघ्र उत्तर दें। सत्यापन समय और प्रमाण पता/मामले के अनुसार बदलते हैं; निश्चित 3–7 दिन न मानें।'],
            ['प्रिंटिंग और India Post डाक', 'जारी/प्रिंट होने के बाद आधिकारिक स्थिति में दिए dispatch/consignment संदर्भ से India Post ट्रैक करें। प्रारूप बदल सकता है; अनुमानित prefix/लंबाई के बजाय जारी नंबर उपयोग करें।']
        ],
        rejectionHeading: 'पासपोर्ट आवेदन की सामान्य आपत्तियाँ और बचाव',
        rejectionReasons: [
            ['नाम, जन्मतिथि या पता सहायक रिकॉर्ड से अलग', 'एकसमान मूल दस्तावेज़ उपयोग करें, पूरा पता इतिहास दें और वास्तविक अंतर को जमा करने से पहले स्वीकृत प्रमाण से स्पष्ट करें।'],
            ['गलत ECR/Non-ECR घोषणा या पात्रता प्रमाण अधूरा', 'वर्तमान पात्रता सूची पढ़ें, सही उत्तर दें और RPO जाँच के लिए मूल मैट्रिक/अन्य स्वीकृत प्रमाण रखें।'],
            ['गलत सेवा कारण, पुस्तिका, शुल्क या Tatkaal पात्रता', 'भुगतान से पहले Fresh/Re-issue, सही कारण, आवेदक श्रेणी, पुस्तिका आकार और लाइव fee calculator जाँचें।'],
            ['दस्तावेज़ अधूरे/अपठनीय/अस्वीकृत या संपर्क उपलब्ध नहीं', 'मामले की checklist मानें, मूल दस्तावेज़ तैयार रखें और ऐसे आपातकालीन संपर्क दें जो आवेदक को जानते हों।'],
            ['पुलिस वर्तमान पते की पुष्टि नहीं कर पाई', 'वर्तमान निवास प्रमाण रखें, स्थानीय पुलिस इकाई से संपर्क बनाएँ और संदर्भ तभी दें जब वह इकाई माँगे।']
        ]
    }
};

const civicLicenceStageRows = {
    en: {
        voter: {
            new: [
                ['Stage 1: Check age and qualifying-date eligibility', 'ECI voter services → Eligibility / qualifying dates', 'ECI uses four qualifying dates each year: 1 January, 1 April, 1 July and 1 October. A 17-year-old may submit an advance application for enrolment when eligible for the upcoming qualifying date; the final age/roll decision follows ECI rules.', 'Check ordinary residence and existing electoral-roll entries first|Choose the qualifying date relevant to the applicant’s 18th birthday|Do not submit a duplicate registration for an existing entry', 'An advance application does not mean enrolment before the qualifying age or guarantee immediate inclusion.'],
                ['Stage 2: Open Form 6 on the official channel', 'voters.eci.gov.in / Voter Helpline App → Fill Form 6', 'Register or sign in on the ECI Voters’ Services Portal or use the official Voter Helpline App, then start Form 6 for new voter registration.', 'Verify the portal domain/app publisher|Select new registration for an Indian resident elector|Keep a usable mobile number and email available for status messages', 'Do not pay an agent; voter registration and these forms are free.'],
                ['Stage 3: Select constituency and enter applicant details', 'Form 6 → State → District → Assembly Constituency → Applicant details', 'Choose the applicant’s State, District and Assembly Constituency of ordinary residence. Enter the name and date of birth exactly as supported by records; use the portal virtual keyboard to correct Hindi transliteration.', 'Check English spelling and Hindi preview before continuing|Enter relative’s name and relationship where requested|Add the relative’s EPIC number if available to help identify the household record|Enter Aadhaar only if the applicant chooses to provide it; use the no-Aadhaar option if applicable', 'Aadhaar is not a condition of the right to register; do not enter another person’s number.'],
                ['Stage 4: Add age and ordinary-residence proofs', 'Form 6 → Date of birth / Ordinary residence → Document upload', 'Upload accepted proof of age and ordinary residence. Common examples include a 10th marksheet or birth certificate for age, and a utility bill, bank passbook or Aadhaar for address, subject to ECI’s current accepted-document list.', 'Use only documents belonging to the applicant/household as permitted|Enter the current ordinary-residence address completely|Upload PDF/JPEG files within the displayed limit (requested target: up to 2 MB per file)|Keep originals for possible BLO verification', 'Document examples and acceptable residence proof depend on the current ECI checklist.'],
                ['Stage 5: Prepare and upload the photograph', 'Form 6 → Photograph → Preview', 'Provide an upright, recent passport-style face photograph in JPEG/JPG, up to 2 MB as requested. Follow the live crop/preview instructions so the face is clear and correctly oriented.', 'Use a plain background and a front-facing, unobstructed face|Avoid sideways, blurred, filtered or group photos|Check the uploaded preview and file size before proceeding', 'The upload control’s current dimensions and file limit take precedence over general preparation guidance.'],
                ['Stage 6: Complete declaration and submit', 'Form 6 → Declaration → Place / Date → Submit', 'Complete the declaration with the correct place and date. Review the full form and submit once; keep the 11/12-character reference number (for example, S04…) shown after successful submission.', 'Check name, birth date, constituency, address, references and attached proofs|Confirm every declaration is true|Save the acknowledgement/reference number and a screenshot or PDF', 'A reference number confirms submission, not approval or inclusion in the electoral roll.'],
                ['Stage 7: Complete BLO field verification or physical filing', 'BLO / local polling booth or school → Form 6 and document verification', 'For an offline application, submit the signed physical Form 6, two colour photographs and photocopies of proofs to the area BLO at the designated local polling booth/school. For an online application, respond when the BLO arranges field verification; the officer may use GARUDA/BLO tools where deployed.', 'Ask the BLO which local office/booth accepts paper forms|Keep a dated receipt or acknowledgement|Show original age/address proofs if requested|Be available at the stated residence for field verification', 'GARUDA app use and field-visit arrangements depend on ECI deployment in the area.'],
                ['Stage 8: Track ERO decision and obtain EPIC', 'ECI portal / Voter Helpline App → Track application → e-EPIC / EPIC delivery', 'The BLO’s report goes to the Electoral Registration Officer (ERO) for decision. After approval, an EPIC number is generated; download e-EPIC PDF when enabled and track any physical PVC card dispatch through the official status channel.', 'Track with the saved reference number|Respond to any ERO/BLO notice by its deadline|Check the final electoral roll and verify the EPIC details|Physical PVC delivery may take about 30–45 days, but timing and dispatch method vary', 'Do not treat a submitted form or e-EPIC download screen as proof until the ERO approves the entry.']
            ],
            update: [
                ['Stage 1: Choose the correct Form 8 request', 'voters.eci.gov.in / Voter Helpline App → Fill Form 8', 'Use Form 8 to shift ordinary residence, correct an existing electoral-roll entry, request a replacement EPIC without correction, or request marking as a Person with Disability (PwD).', 'Open the existing elector record using EPIC/reference details|Select only the applicable Form 8 request category|For a move, choose shifting of residence rather than deletion', 'Do not submit Form 7 as a substitute for an ordinary address shift; Form 8 is the shift route.'],
                ['Stage 2: Select the specific Form 8 checkbox', 'Form 8 → Request type / checkbox selection', 'The four request types are: (1) Shifting of Residence within or to another constituency; (2) Correction of Entries in Existing Electoral Roll; (3) Issue of Replacement EPIC without correction; (4) Request for Marking as Person with Disability (PwD).', 'Choose one request type that matches the actual need|For correction, identify the specific field shown by the form|For lost EPIC, follow the portal’s requested loss declaration or police report instructions', 'Selecting multiple or incorrect request types can delay scrutiny.'],
                ['Stage 3: Enter EPIC and identify requested changes', 'Form 8 → Elector details → EPIC / correction fields', 'Enter the elector’s EPIC number and select the details to correct, such as name, date of birth, gender, photograph or mobile number, only as the live form permits.', 'Compare existing and corrected values with accepted records|For shifting, enter the new ordinary-residence address and constituency|For replacement, confirm the record remains unchanged|Review transliteration and photo preview', 'Do not use a correction request to create a second elector record.'],
                ['Stage 4: Link or update mobile details for e-EPIC access', 'Form 8 → Contact details / Mobile → OTP verification', 'Keep the mobile number in the elector record current if you plan to download e-EPIC. If the number is missing or outdated, use Form 8’s available correction/contact option and complete the requested verification.', 'Enter a number you can access for OTP and status messages|Confirm it is attached to the correct elector record|Retry e-EPIC only after the portal reflects the verified mobile update', 'A mobile link may be required for e-EPIC authentication; confirm the current portal download rules.'],
                ['Stage 5: Upload proof for the selected request', 'Form 8 → Proof selection → Upload', 'Upload age/address or correction proof requested for the chosen category. For a lost EPIC, attach an FIR/police report if the portal or ERO requires it; a damaged replacement is free under the stated ECI service.', 'Use a complete, legible PDF/JPEG within the displayed limit (requested target up to 2 MB)|For address shift, provide current ordinary-residence proof|For PwD marking, attach the accepted disability certificate if requested|Keep originals available for verification', 'Proof requirements vary by correction type and current ECI instructions.'],
                ['Stage 6: Review declaration and submit Form 8', 'Form 8 → Preview → Declaration → Submit', 'Check the request category, EPIC, new address/corrected fields and declaration, then submit free of charge and save the application reference.', 'Check each selected checkbox and corresponding proof|Confirm place/date and applicant contact|Download the acknowledgement and note the reference number', 'Do not submit duplicate requests while the first is pending.'],
                ['Stage 7: Respond to BLO verification', 'BLO field verification → Residence / document check', 'The BLO or election office may verify the new address, correction proof or replacement request. Provide originals and clarifications when asked.', 'Be reachable at the new address for a shift|Show supporting records and old EPIC if available|Keep the BLO visit/notice reference and respond by the deadline', 'Do not surrender an original EPIC unless the officer provides an official receipt.'],
                ['Stage 8: Confirm roll update and download replacement/e-EPIC', 'ECI portal → Track Form 8 → Updated electoral roll / e-EPIC', 'Track the Form 8 decision. After ERO approval, confirm the corrected/shifting record and use the portal’s current e-EPIC download or replacement-card instructions.', 'Verify the EPIC and constituency in the published roll|Complete mobile OTP authentication for e-EPIC if requested|Use the official dispatch reference for any physical PVC card', 'A request receipt alone does not update the roll or make e-EPIC download available.']
            ],
            surrender: [
                ['Stage 1: Confirm that Form 7 is the correct route', 'voters.eci.gov.in / Voter Helpline App → Fill Form 7', 'Form 7 is for objection to inclusion or deletion of an existing name, including a deceased elector or an entry that is no longer eligible. For an ordinary residence shift, use Form 8 instead.', 'Check the electoral roll for the exact entry|Choose whether filing an objection or requesting deletion|Do not request deletion solely to move an address when Form 8 shifting applies', 'Avoid duplicate/false objections; ERO may issue notice and verify the grounds.'],
                ['Stage 2: Identify the applicant and elector to be deleted', 'Form 7 → Applicant details → Objected/deceased elector details', 'Enter the applicant’s own EPIC number and the EPIC number of the person whose entry is challenged/deleted. Provide the relationship or grounds requested.', 'Use the applicant’s own reachable contact details|Copy both EPIC numbers carefully|If the elector has no EPIC, provide the identifiers the form accepts', 'Do not enter only the other elector’s number; the applicant’s details are also required.'],
                ['Stage 3: Select the grounds for objection/deletion', 'Form 7 → Reason → Death / shifting / ineligible or duplicate entry', 'Select the truthful reason: death, ineligibility, duplicate entry or another reason available on the current form. A permanent move may require a Form 8 shift request or a properly supported Form 7 objection, as the ERO directs.', 'For a deceased family member, attach the death certificate where available/requested|For a duplicate, identify the exact roll entries|Explain facts and dates without speculation', 'A move alone does not automatically make a Form 7 objection the correct service; follow ERO guidance.'],
                ['Stage 4: Attach evidence and declaration', 'Form 7 → Supporting documents → Declaration', 'Provide the death certificate, duplicate-entry particulars or other evidence requested. Complete the declaration and upload legible copies.', 'Use age/address/document format and limits shown by the portal|Keep originals for any field verification|Review names and EPICs against the electoral roll', 'False information can result in rejection and other legal consequences.'],
                ['Stage 5: Submit online or file through the BLO', 'Form 7 → Review → Submit / BLO or designated election office', 'Submit Form 7 free of charge online or deliver the signed physical form to the BLO/designated election office. Save the reference or dated receipt.', 'Check all applicant and affected-elector details|For offline filing, obtain acknowledgement|Keep a copy of the complete form and proof set', 'Do not pay an unofficial fee for receiving or processing Form 7.'],
                ['Stage 6: Attend field verification and respond to notice', 'BLO field inquiry → ERO notice / hearing → Reply', 'The BLO may conduct field verification. The ERO can issue notice and allow the affected person to respond; the notice period is stated in the official notice (a 7-day period may apply).', 'Keep phone/address accessible|Attend a hearing or provide requested clarification|Submit a timely reply and retain proof of delivery', 'Do not assume deletion is immediate or that every case uses an identical notice period.'],
                ['Stage 7: Track ERO decision', 'ECI portal → Track Form 7 → ERO decision', 'Track with the reference number and wait for the ERO’s reasoned decision after verification and any notice process.', 'Check status through the official portal/app|Provide any additional evidence by the deadline|Ask the ERO office for the next step if status remains pending beyond its stated period', 'The BLO’s field report is not itself the final deletion order.'],
                ['Stage 8: Confirm the electoral roll entry', 'Published electoral roll → Search by EPIC / elector details', 'After approval, verify that the specific entry was deleted or the objection decided in the electoral roll. Keep the decision/acknowledgement for records.', 'Search the latest roll for the affected constituency|Check for accidental deletion of a different elector with a similar name|If incorrect, contact the ERO promptly with the reference', 'Do not assume a voter ID penalty applies automatically; avoid duplicate enrolment and follow the ERO’s order.']
            ]
        },
        drivingLicence: {
            new: [
                ['Stage 1: Select state and start Learner’s Licence Form 2', 'sarathi.parivahan.gov.in → Select State → Apply for Learner Licence', 'A new licence is a two-stage process: Learner’s Licence (LL), then permanent Driving Licence (DL). Start Form 2 on Sarathi and select the state where the licensing RTO has jurisdiction.', 'Check minimum age for the vehicle class|Enter applicant name, date of birth and address from records|Choose Aadhaar authentication only where the state offers it|Keep the application number and selected RTO', 'State implementations differ; some LL services still require an RTO visit or test there.'],
                ['Stage 2: Choose vehicle class and authentication route', 'Form 2 → Vehicle Class → Aadhaar authentication / RTO route', 'Select the correct class: MCWOG for a gearless two-wheeler, MCWG for a geared motorcycle, and LMV-NT for a non-transport car/jeep. Aadhaar authentication may allow an online LL test from home in participating states.', 'Select only classes you intend to drive and meet the minimum age for each|Check the exact class description shown by Sarathi|If Aadhaar authentication is unavailable, follow the state’s in-person process', 'Aadhaar-based home testing is not available in every state or for every applicant.'],
                ['Stage 3: Complete Form 1 and any Form 1A medical certificate', 'Sarathi application → Medical declarations → Form 1 / Form 1A', 'Complete Form 1 self-declaration carefully and answer every medical/fitness question truthfully. Form 1A from a registered medical practitioner may be required for applicants aged 40 or above and commercial/transport classes, subject to current rules.', 'Read each Yes/No declaration before selecting|Upload signed/stamped Form 1A if Sarathi/RTO requires it|Do not guess at colour-vision or other medical answers|Ask the RTO how to correct a submitted medical declaration', 'A mistaken answer can trigger scrutiny; never misstate a medical condition to pass eligibility checks.'],
                ['Stage 4: Upload proofs and complete the LL application', 'Form 2 → Photo / Signature / Age and address proofs → Fee payment', 'Upload the photograph, signature and supporting documents in the sizes shown by Sarathi. Preparation targets supplied here are photo JPEG 10–20 KB at 35 × 45 mm, black-ink signature JPEG 10–20 KB, and supporting PDF/JPEG under 500 KB.', 'Use a clear upright photo and a legible signature scan|Upload age/address proofs and Form 1A if required|Pay the state-calculated LL fee and save the receipt|Review the submitted form and appointment/test instructions', 'The live upload controls and state fee schedule override these preparation targets.'],
                ['Stage 5: Take the Learner’s Licence knowledge test', 'Sarathi → STALL / LL test → Road signs and rules', 'Where online STALL is offered, watch the mandatory road-safety tutorial until its timer completes, retrieve the test password by SMS and follow the proctoring instructions. A 60% score is commonly required (for example 9/15 or 12/20); question count and format vary by state.', 'Use a quiet, well-lit location and keep only the applicant in frame if webcam proctoring is required|Do not change tabs or leave the exam where the instructions prohibit it|If testing at the RTO, follow the local computer-test process|Use the result screen to confirm pass/fail', 'Webcam proctoring, test password and number of questions are not universal Sarathi features.'],
                ['Stage 6: Download LL Form 3 and observe the waiting period', 'Sarathi → LL approval → Print Learner’s Licence (Form 3)', 'After passing and approval, download/print Form 3. The usual window is Day 31 through Day 180: do not apply for the permanent DL during the first 30 days, and complete the application before the LL expires at about 180 days.', 'Check LL issue/expiry dates and every vehicle class printed|Carry the LL while practising and obey learner conditions|Schedule the permanent test between Day 31 and Day 180 where those dates apply|If the LL expires, ask the RTO whether renewal or a fresh LL application is required', 'Confirm the exact LL expiry shown on the licence and the state’s current process; an expired LL cannot support a permanent-test application.'],
                ['Stage 7: Apply for permanent DL and book the RTO test', 'Sarathi → Apply for Driving Licence → LL number and DOB → Fee / Slot', 'After the waiting period, enter LL number and date of birth, select the class(es), pay the test/licence charges shown (often about ₹500–₹1,000 in total, depending on state/classes) and book an RTO driving-track slot.', 'Check that every requested class is linked to the LL|Choose an available RTO track/date|Save application number, fee receipt and slot confirmation|Prepare a legally registered, insured vehicle of the test class', 'Fees and slot availability vary by state; use Sarathi’s calculated amount, not a fixed estimate.'],
                ['Stage 8: Take the physical driving test and track issue', 'RTO driving track → Biometric / test → Sarathi approval → DigiLocker / mParivahan / India Post', 'Attend the RTO test with original LL, receipt, Aadhaar/ID and a valid registered test vehicle with RC, insurance, PUC and red L signs front/rear where required. Track approval; digital DL may appear in DigiLocker/mParivahan, with a physical card dispatched if the state issues one.', 'Follow the examiner’s instructions for the class-specific course|Two-wheel tests may use an 8-track; cars may use H/S-track, gradient or reverse tests depending on the RTO|Do not touch the ground on a two-wheeler task if the examiner specifies that rule|After a pass, check approved class and delivery status|Physical card delivery commonly takes 15–21 days but varies', 'Track layouts, test rules, vehicle requirements and card delivery differ by RTO/state; confirm locally.']
            ],
            update: [
                ['Stage 1: Open Services on Driving Licence', 'Sarathi → Select State → Services on Driving Licence', 'Choose the service for renewal, address/name correction, duplicate licence or addition of a vehicle class (COV). Use the state where the licence is maintained.', 'Keep the DL number and date of birth ready|Enter the DL number in the format shown on the card/portal (often SS-RRYYYYNNNNNNN)|Select only the service needed|Check whether an RTO appointment/medical form is required', 'Do not apply for a duplicate and a correction simultaneously unless the RTO directs it.'],
                ['Stage 2: Choose the correct service and renewal window', 'Services on DL → Renewal / Change of Address / Correction / Add COV', 'For renewal, the general window is up to one year before expiry through one year after expiry. Applying later may require a fresh driving test or other RTO action under applicable rules.', 'For address change, select “Change of Address in DL”|For renewal, enter the expiry date and check eligibility|For name correction, prepare matching legal proof|For an added class, check learner/test prerequisites', 'The one-year grace period is subject to current law and state processing; confirm requirements after expiry.'],
                ['Stage 3: Enter licence and applicant details', 'Service application → DL number / DOB → Applicant details', 'Authenticate using DL number and date of birth, then verify the applicant identity, address and existing vehicle classes shown by the portal.', 'Check state/RTO jurisdiction|Correct name/address details only against accepted records|For adding COV, select the exact class|Keep mobile/email reachable for OTP and status updates', 'If the record is not found or details conflict, contact the licensing RTO before starting another application.'],
                ['Stage 4: Upload proof and medical forms', 'Application → Documents → Photo / Signature / Form 1 / Form 1A', 'Upload address/name proof, existing DL and any medical declaration/certificate required for the selected service/class. Preparation targets: photo JPEG 10–20 KB, 35 × 45 mm; black-ink signature JPEG 10–20 KB; supporting files PDF/JPEG under 500 KB.', 'Use the formats and per-field limits displayed in Sarathi|Complete Form 1 where requested|Attach Form 1A signed/stamped by a registered practitioner where required|Review each upload preview', 'Medical and upload requirements vary with age, vehicle class and state; the live checklist controls.'],
                ['Stage 5: Review declaration and pay the service fee', 'Preview → Declaration → Fee payment', 'Review the requested change and pay the state-calculated fee; address/name/renewal requests commonly total about ₹200–₹400 but additional tests or services can change the amount.', 'Compare the DL record and supporting proof|Read the declaration before confirming|Pay only through Sarathi’s official payment gateway|Save the receipt and application number', 'Do not make another payment while the first transaction is pending.'],
                ['Stage 6: Book an RTO slot or submit documents as directed', 'Sarathi → Appointment / RTO selection → Confirmation', 'Book a slot if the service requires in-person scrutiny, biometrics, medical review or a driving test. Some correction/renewal requests are processed without a visit.', 'Choose the jurisdictional RTO and available date|Print/save appointment and application receipt|Bring original DL and source documents|For COV addition, prepare for the required learner/test stages', 'A portal submission does not guarantee that no RTO visit is needed.'],
                ['Stage 7: Complete verification or test', 'RTO counter → Document / biometric verification → Test if required', 'Attend with originals when summoned. The RTO may verify address/name evidence, capture biometrics or require a driving test for an added class or expired renewal.', 'Present DL and original proofs|Answer discrepancy questions and correct only with valid evidence|For a test, use the correct class vehicle and follow RTO instructions|Collect the dated acknowledgement', 'Do not drive a class of vehicle that is not currently endorsed on the DL.'],
                ['Stage 8: Track and verify the updated DL', 'Sarathi application status → Approved record → DigiLocker / mParivahan / dispatch', 'Track with the application number. After approval, verify the corrected address/name, renewal validity or added class in the digital record and follow physical-card dispatch if offered.', 'Check the final DL number and COV list|Download the digital record from an official app if available|Use the India Post reference when dispatched|Contact the RTO if the card or status exceeds its stated time', 'A payment receipt is not a valid updated licence; wait for approval and check the final record.']
            ],
            surrender: [
                ['Stage 1: Decide whether to surrender the full DL or a specific class', 'Sarathi → Services on DL → Surrender of COV(s)/Badge', 'Use this service to surrender one or more vehicle classes (COVs) or a badge, for example when no longer qualified or when required for a separate licensing process. Confirm the receiving RTO’s requirements before proceeding.', 'Identify the DL number, issuing state and exact class/badge|Check whether the whole licence or only a class is being surrendered|Ask the RTO whether another-country move requires any separate NOC', 'Surrendering one class may affect the right to drive that class; confirm the consequences first.'],
                ['Stage 2: Sign in and select the Sarathi surrender service', 'sarathi.parivahan.gov.in → Select State → Services on DL → Surrender of COV(s)/Badge', 'Choose the issuing state and start “Surrender of COV(s)/Badge” or the current equivalent option. Enter DL number and date of birth to retrieve the record.', 'Verify the domain and selected RTO|Authenticate with OTP where asked|Check the displayed DL/COV details|Select only the class/badge you intend to surrender', 'If the service is not available online for the state, contact the licensing RTO for its paper route.'],
                ['Stage 3: Complete application and reason', 'Surrender service → COV / Badge selection → Declaration', 'State the reason truthfully and confirm the class/badge to surrender. Review the generated request and submit through Sarathi if online submission is enabled.', 'Enter current contact/address details|Read declarations and any consequences|Save application number and instructions for physical submission', 'Do not surrender a class by mistake; reversal may require a new application/test.'],
                ['Stage 4: Prepare licence and supporting documents', 'Application checklist → Original smart card → ID / written request', 'Prepare the original smart-card DL and identity proof. Include a signed request or NOC-related documents if the RTO asks for them.', 'Print/download the application and acknowledgement|Make a copy of the DL and application before surrender|Check whether the RTO requires an appointment or fee|Keep other valid classes clearly recorded', 'Never mail or hand over the original card without a receipt or traceable official process.'],
                ['Stage 5: Visit the RTO Zonal Office counter', 'RTO Zonal Office → Token / receiving counter → DL services', 'Submit the application and physical smart card at the designated RTO/Zonal Office counter when instructed. The online request alone may not complete surrender.', 'Bring original ID, DL card and application receipt|Ask staff to verify the exact COV/badge being removed|Obtain a stamped, dated acknowledgement for the card|Ask whether any separate NOC is issued', 'The counter and paper-card requirements differ by state; follow the issuing RTO’s instructions.'],
                ['Stage 6: Complete review and receive surrender/NOC record', 'RTO scrutiny → Licence record update → NOC / Surrender Receipt', 'The RTO reviews the request and records the surrendered class/badge. Collect the NOC or surrender receipt provided for the case.', 'Check the receipt names the correct DL and COV|Ask whether the remaining classes stay active|Keep a digital and paper copy|Respond to any RTO clarification promptly', 'Do not rely on an application number alone as proof that the class was surrendered.'],
                ['Stage 7: Track final status', 'Sarathi application status → RTO confirmation', 'Check the Sarathi status or contact the issuing RTO until the record reflects the completed surrender.', 'Use the application/reference number|Confirm the effective date and affected class|Correct an error promptly through the RTO|Keep any NOC with your licence records', 'Do not drive a surrendered class while the update is pending or after it is recorded.'],
                ['Stage 8: Retain records and verify remaining entitlement', 'Final DL record → COV list → NOC / Surrender Receipt', 'Review the final licence record to ensure only the intended class/badge was removed and preserve the RTO receipt/NOC for future applications.', 'Download the latest DL record from an official source|Check expiry and validity of remaining classes|Present the NOC if another authority requests it', 'An NOC is not a new licence or permission to drive a class not shown as valid.']
            ]
        }
    },
    hi: {
        voter: {
            new: [
                ['चरण 1: आयु और अर्हता तिथि जाँचें', 'ECI मतदाता सेवा → पात्रता / अर्हता तिथियाँ', 'ECI में हर वर्ष चार अर्हता तिथियाँ हैं: 1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर। 17 वर्ष का व्यक्ति आगामी अर्हता तिथि के लिए अग्रिम आवेदन दे सकता है; अंतिम आयु/सूची निर्णय ECI नियमों के अनुसार होगा।', 'सामान्य निवास और मौजूदा मतदाता सूची प्रविष्टि पहले जाँचें|18वें जन्मदिन के अनुसार लागू अर्हता तिथि चुनें|मौजूदा प्रविष्टि के लिए डुप्लिकेट आवेदन न दें', 'अग्रिम आवेदन का अर्थ पात्र आयु से पहले नाम जुड़ना या तत्काल सूची में शामिल होना नहीं है।'],
                ['चरण 2: आधिकारिक माध्यम पर Form 6 खोलें', 'voters.eci.gov.in / Voter Helpline App → Fill Form 6', 'ECI Voters’ Services Portal पर पंजीकरण/साइन इन करें या आधिकारिक Voter Helpline App खोलें और नए मतदाता पंजीकरण के लिए Form 6 शुरू करें।', 'पोर्टल डोमेन/ऐप प्रकाशक जाँचें|भारतीय निवासी मतदाता के नए पंजीकरण का विकल्प चुनें|स्थिति संदेशों के लिए चालू मोबाइल/ईमेल रखें', 'मतदाता पंजीकरण और ये फॉर्म निःशुल्क हैं; एजेंट को शुल्क न दें।'],
                ['चरण 3: निर्वाचन क्षेत्र और आवेदक विवरण भरें', 'Form 6 → State → District → Assembly Constituency → Applicant details', 'सामान्य निवास के अनुसार State, District और Assembly Constituency चुनें। रिकॉर्ड के अनुसार नाम/जन्मतिथि भरें और हिंदी लिप्यंतरण की वर्तनी सुधारने के लिए पोर्टल का virtual keyboard उपयोग करें।', 'आगे बढ़ने से पहले अंग्रेज़ी नाम और हिंदी पूर्वावलोकन जाँचें|जहाँ पूछा जाए संबंधी का नाम/रिश्ता भरें|परिवार के सदस्य का EPIC उपलब्ध हो तो रिकॉर्ड खोजने में सहायता के लिए दें|Aadhaar देना वैकल्पिक है; लागू हो तो no-Aadhaar विकल्प चुनें', 'पंजीकरण के अधिकार के लिए Aadhaar अनिवार्य नहीं; किसी अन्य व्यक्ति की संख्या न दें।'],
                ['चरण 4: आयु और सामान्य निवास प्रमाण दें', 'Form 6 → Date of birth / Ordinary residence → Document upload', 'स्वीकृत आयु और सामान्य निवास प्रमाण अपलोड करें। उदाहरण: आयु के लिए 10वीं अंकपत्र/जन्म प्रमाणपत्र और पते के लिए उपयोगिता बिल, बैंक पासबुक या Aadhaar, ECI की वर्तमान स्वीकृत सूची के अधीन।', 'केवल आवेदक/परिवार के अनुमत दस्तावेज़ उपयोग करें|वर्तमान सामान्य निवास का पूरा पता भरें|दिखाई गई सीमा में PDF/JPEG अपलोड करें (तैयारी लक्ष्य प्रत्येक फ़ाइल 2 MB तक)|BLO जाँच के लिए मूल दस्तावेज़ रखें', 'दस्तावेज़ उदाहरण और स्वीकार्य पते का प्रमाण वर्तमान ECI सूची पर निर्भर हैं।'],
                ['चरण 5: फोटो तैयार करके अपलोड करें', 'Form 6 → Photograph → Preview', 'सीधा, हाल का passport-style चेहरा JPEG/JPG में दें; अनुरोधित सीमा 2 MB तक है। स्पष्ट और सही दिशा वाली फोटो के लिए लाइव crop/preview निर्देश मानें।', 'सादे बैकग्राउंड पर सामने देखते हुए स्पष्ट फोटो लें|तिरछी, धुंधली, फ़िल्टर या समूह फोटो न दें|जमा से पहले preview और आकार जाँचें', 'अपलोड नियंत्रण में दी मौजूदा सीमा सामान्य तैयारी मार्गदर्शन से ऊपर है।'],
                ['चरण 6: घोषणा भरें और आवेदन जमा करें', 'Form 6 → Declaration → Place / Date → Submit', 'घोषणा में सही स्थान और तारीख भरें। पूरा फॉर्म जाँचकर एक बार जमा करें और सफल जमा के बाद दिखा 11/12-अक्षर/अंक वाला संदर्भ (जैसे S04…) सुरक्षित रखें।', 'नाम, जन्मतिथि, निर्वाचन क्षेत्र, पता, संदर्भ और प्रमाण जाँचें|सभी घोषणाएँ सही होने पर ही पुष्टि करें|पावती/संदर्भ संख्या का PDF या स्क्रीनशॉट रखें', 'संदर्भ संख्या जमा होने का प्रमाण है, मंजूरी या सूची में नाम जुड़ने का नहीं।'],
                ['चरण 7: BLO क्षेत्र सत्यापन या भौतिक आवेदन पूरा करें', 'BLO / स्थानीय मतदान केंद्र या स्कूल → Form 6 और दस्तावेज़ जाँच', 'ऑफलाइन आवेदन में हस्ताक्षरित Form 6, दो रंगीन फोटो और प्रमाणों की प्रतियाँ अपने क्षेत्र के BLO को निर्धारित स्थानीय मतदान केंद्र/स्कूल पर दें। ऑनलाइन आवेदन में BLO के क्षेत्र सत्यापन के समय उपलब्ध रहें; जहाँ लागू हो अधिकारी GARUDA/BLO उपकरण उपयोग कर सकता है।', 'BLO से पूछें कि स्थानीय स्तर पर कागज़ी फॉर्म कहाँ जमा होगा|तारीख वाली पावती लें|माँगे जाने पर आयु/पता प्रमाण के मूल दिखाएँ|घर पर सत्यापन के लिए बताए समय उपलब्ध रहें', 'GARUDA ऐप और घर-भेंट की व्यवस्था क्षेत्र में ECI तैनाती पर निर्भर है।'],
                ['चरण 8: ERO निर्णय ट्रैक करें और EPIC प्राप्त करें', 'ECI पोर्टल / Voter Helpline App → Track application → e-EPIC / EPIC delivery', 'BLO रिपोर्ट Electoral Registration Officer (ERO) के निर्णय के लिए जाती है। मंजूरी के बाद EPIC संख्या बनती है; उपलब्ध होने पर e-EPIC PDF डाउनलोड करें और भौतिक PVC कार्ड की डाक आधिकारिक स्थिति से ट्रैक करें।', 'सहेजे संदर्भ नंबर से स्थिति देखें|BLO/ERO नोटिस का समय पर उत्तर दें|अंतिम मतदाता सूची और EPIC विवरण जाँचें|PVC कार्ड आने में लगभग 30–45 दिन लग सकते हैं, लेकिन समय/डाक क्षेत्र अनुसार बदलते हैं', 'ERO की मंजूरी तक आवेदन या डाउनलोड स्क्रीन को सूची में नाम जुड़ने का प्रमाण न मानें।']
            ],
            update: [
                ['चरण 1: सही Form 8 अनुरोध चुनें', 'voters.eci.gov.in / Voter Helpline App → Fill Form 8', 'Form 8 का उपयोग सामान्य निवास बदलने, मतदाता सूची प्रविष्टि सुधारने, बिना सुधार replacement EPIC माँगने या Person with Disability (PwD) चिह्नित कराने के लिए करें।', 'EPIC/संदर्भ से मौजूदा मतदाता रिकॉर्ड खोलें|लागू Form 8 अनुरोध श्रेणी चुनें|पता बदलने पर deletion नहीं, shifting विकल्प चुनें', 'सामान्य पता बदलाव के लिए Form 7 न दें; Form 8 स्थानांतरण का सही मार्ग है।'],
                ['चरण 2: Form 8 का सही checkbox चुनें', 'Form 8 → Request type / checkbox selection', 'चार अनुरोध प्रकार हैं: (1) Shifting of Residence, उसी या दूसरे निर्वाचन क्षेत्र में; (2) Correction of Entries in Existing Electoral Roll; (3) Issue of Replacement EPIC without correction; (4) Request for Marking as Person with Disability (PwD)।', 'वास्तविक जरूरत से मेल खाता विकल्प चुनें|सुधार में फॉर्म द्वारा दिखाया गया फ़ील्ड चुनें|खोए EPIC में पोर्टल/ERO की हानि घोषणा या पुलिस रिपोर्ट निर्देश मानें', 'गलत या एक से अधिक विकल्प चुनने पर जाँच में देरी हो सकती है।'],
                ['चरण 3: EPIC और संशोधन विवरण भरें', 'Form 8 → Elector details → EPIC / correction fields', 'मतदाता का EPIC भरें और लाइव फॉर्म द्वारा अनुमत बदलाव चुनें, जैसे नाम, जन्मतिथि, लिंग, फोटो या मोबाइल नंबर।', 'मौजूदा और सही विवरण स्वीकृत रिकॉर्ड से मिलाएँ|पता बदलने पर नया सामान्य निवास पता/निर्वाचन क्षेत्र दें|Replacement में पुष्टि करें कि रिकॉर्ड में बदलाव नहीं चाहिए|लिप्यंतरण और फोटो preview जाँचें', 'दूसरी मतदाता प्रविष्टि बनाने के लिए correction अनुरोध न दें।'],
                ['चरण 4: e-EPIC के लिए मोबाइल अपडेट/लिंक करें', 'Form 8 → Contact details / Mobile → OTP verification', 'यदि e-EPIC डाउनलोड करना है तो मतदाता रिकॉर्ड का मोबाइल चालू और अद्यतन रखें। नंबर न हो/पुराना हो तो Form 8 में उपलब्ध संपर्क-सुधार विकल्प और सत्यापन पूरा करें।', 'OTP और स्थिति संदेश पाने वाला नंबर भरें|सही मतदाता रिकॉर्ड से जुड़ा होना जाँचें|पोर्टल में मोबाइल अपडेट दिखने के बाद e-EPIC दोबारा डाउनलोड करें', 'e-EPIC प्रमाणीकरण के लिए मोबाइल लिंक माँगा जा सकता है; वर्तमान डाउनलोड नियम देखें।'],
                ['चरण 5: चुने अनुरोध के प्रमाण अपलोड करें', 'Form 8 → Proof selection → Upload', 'चुनी श्रेणी के लिए माँगा आयु/पता/सुधार प्रमाण दें। खोए EPIC में पोर्टल/ERO माँगे तो FIR/पुलिस रिपोर्ट लगाएँ; क्षतिग्रस्त कार्ड के replacement की ECI सेवा निःशुल्क है।', 'दिखाई सीमा में पूरा PDF/JPEG दें (तैयारी लक्ष्य 2 MB तक)|पता बदलाव के लिए वर्तमान निवास प्रमाण रखें|PwD चिह्न के लिए माँगे तो स्वीकृत disability certificate दें|सत्यापन हेतु मूल प्रमाण रखें', 'प्रमाण की जरूरत बदलाव और ECI निर्देशों के अनुसार बदलती है।'],
                ['चरण 6: घोषणा जाँचकर Form 8 जमा करें', 'Form 8 → Preview → Declaration → Submit', 'श्रेणी, EPIC, नया पता/सुधार और घोषणा जाँचें; निःशुल्क आवेदन जमा करके संदर्भ संख्या रखें।', 'चुना checkbox और प्रमाण एक-दूसरे से मिलाएँ|स्थान/तारीख और संपर्क जाँचें|पावती डाउनलोड कर संदर्भ सुरक्षित करें', 'पहला आवेदन लंबित रहते डुप्लिकेट अनुरोध न दें।'],
                ['चरण 7: BLO सत्यापन में सहयोग करें', 'BLO field verification → Residence / document check', 'BLO/चुनाव कार्यालय नए पते, सुधार प्रमाण या replacement अनुरोध का सत्यापन कर सकता है। बुलाए जाने पर मूल और स्पष्टीकरण दें।', 'पता बदलाव में नए पते पर उपलब्ध रहें|सहायक रिकॉर्ड और पुराना EPIC हो तो दिखाएँ|BLO भेंट/नोटिस संदर्भ रखें और समय में उत्तर दें', 'अधिकारी की रसीद के बिना मूल EPIC जमा न करें।'],
                ['चरण 8: सूची अपडेट की पुष्टि कर e-EPIC लें', 'ECI portal → Track Form 8 → Updated electoral roll / e-EPIC', 'Form 8 निर्णय ट्रैक करें। ERO मंजूरी के बाद सुधारी/स्थानांतरित प्रविष्टि जाँचें और e-EPIC डाउनलोड या replacement card के मौजूदा निर्देश मानें।', 'प्रकाशित सूची में EPIC और निर्वाचन क्षेत्र जाँचें|माँगे जाने पर मोबाइल OTP सत्यापन करें|भौतिक PVC कार्ड के लिए आधिकारिक डाक संदर्भ उपयोग करें', 'पावती से सूची अपडेट या e-EPIC डाउनलोड उपलब्ध होना सुनिश्चित नहीं होता।']
            ],
            surrender: [
                ['चरण 1: पुष्टि करें कि Form 7 सही सेवा है', 'voters.eci.gov.in / Voter Helpline App → Fill Form 7', 'Form 7 मौजूदा नाम पर आपत्ति या हटाने के लिए है, जैसे मृत मतदाता या अपात्र प्रविष्टि। सामान्य निवास स्थानांतरण के लिए Form 8 उपयोग करें।', 'मतदाता सूची में सटीक प्रविष्टि खोजें|आपत्ति या नाम हटाने का अनुरोध चुनें|पता बदलने के लिए Form 8 लागू हो तो Form 7 न दें', 'गलत/झूठी आपत्ति न करें; ERO कारण और तथ्य सत्यापित कर सकता है।'],
                ['चरण 2: आवेदक और हटाई जाने वाली प्रविष्टि पहचानें', 'Form 7 → Applicant details → Objected/deceased elector details', 'आवेदक का अपना EPIC नंबर और जिस व्यक्ति की प्रविष्टि हटाने/चुनौती देने का अनुरोध है उसका EPIC नंबर भरें। माँगा संबंध/आधार भी दें।', 'आवेदक का चालू संपर्क विवरण दें|दोनों EPIC संख्या ध्यान से लिखें|दूसरे मतदाता का EPIC न हो तो फॉर्म द्वारा स्वीकृत पहचान भरें', 'केवल प्रभावित मतदाता का EPIC देने से आवेदक विवरण पूरा नहीं होता।'],
                ['चरण 3: आपत्ति/हटाने का सही आधार चुनें', 'Form 7 → Reason → Death / shifting / ineligible or duplicate entry', 'सही कारण चुनें: मृत्यु, अपात्रता, डुप्लिकेट प्रविष्टि या फॉर्म में उपलब्ध अन्य आधार। स्थायी स्थानांतरण पर Form 8 shifting या ERO द्वारा निर्देशित समर्थित Form 7 का उपयोग हो सकता है।', 'परिवार सदस्य की मृत्यु पर माँगे/उपलब्ध मृत्यु प्रमाणपत्र लगाएँ|डुप्लिकेट में संबंधित दोनों सूची प्रविष्टियाँ पहचानें|तथ्य और तारीखें सही दें', 'केवल स्थान बदलना अपने-आप Form 7 का कारण नहीं; ERO का निर्देश मानें।'],
                ['चरण 4: प्रमाण और घोषणा संलग्न करें', 'Form 7 → Supporting documents → Declaration', 'मृत्यु प्रमाणपत्र, डुप्लिकेट प्रविष्टि विवरण या माँगा अन्य प्रमाण दें। घोषणा पूरी करें और स्पष्ट प्रति अपलोड करें।', 'पोर्टल की फ़ाइल सीमा और format मानें|क्षेत्र सत्यापन के लिए मूल प्रमाण रखें|नाम और EPIC सूची से मिलाएँ', 'गलत जानकारी से आवेदन अस्वीकृत हो सकता है और कानूनी परिणाम हो सकते हैं।'],
                ['चरण 5: ऑनलाइन जमा करें या BLO को दें', 'Form 7 → Review → Submit / BLO or designated election office', 'Form 7 ऑनलाइन निःशुल्क जमा करें या हस्ताक्षरित भौतिक फॉर्म BLO/निर्धारित चुनाव कार्यालय में दें। संदर्भ या तारीख वाली पावती सुरक्षित रखें।', 'आवेदक और प्रभावित मतदाता का विवरण जाँचें|ऑफलाइन जमा पर पावती लें|फॉर्म और प्रमाणों के पूरे सेट की प्रति रखें', 'Form 7 लेने/प्रक्रिया के लिए अनधिकृत शुल्क न दें।'],
                ['चरण 6: क्षेत्र सत्यापन और नोटिस का उत्तर दें', 'BLO field inquiry → ERO notice / hearing → Reply', 'BLO क्षेत्र सत्यापन कर सकता है। ERO नोटिस देकर प्रभावित व्यक्ति को जवाब का अवसर दे सकता है; लागू नोटिस अवधि आधिकारिक नोटिस में होगी (जहाँ निर्धारित हो, 7 दिन हो सकते हैं)।', 'फोन/पते पर उपलब्ध रहें|सुनवाई में जाएँ या माँगा स्पष्टीकरण दें|समय में उत्तर और जमा प्रमाण रखें', 'तुरंत deletion या हर मामले में एक जैसी नोटिस अवधि न मानें।'],
                ['चरण 7: ERO निर्णय ट्रैक करें', 'ECI portal → Track Form 7 → ERO decision', 'संदर्भ संख्या से आवेदन ट्रैक करें और सत्यापन/नोटिस प्रक्रिया के बाद ERO के निर्णय की प्रतीक्षा करें।', 'आधिकारिक पोर्टल/ऐप पर स्थिति देखें|अतिरिक्त प्रमाण समय में दें|निर्धारित अवधि से आगे लंबित हो तो ERO कार्यालय से अगला कदम पूछें', 'BLO की क्षेत्र रिपोर्ट अंतिम deletion आदेश नहीं है।'],
                ['चरण 8: मतदाता सूची में अंतिम निर्णय जाँचें', 'Published electoral roll → Search by EPIC / elector details', 'मंजूरी के बाद नवीनतम मतदाता सूची में पुष्टि करें कि सही प्रविष्टि हटाई गई या आपत्ति पर निर्णय हुआ। आदेश/पावती सुरक्षित रखें।', 'संबंधित निर्वाचन क्षेत्र की नवीन सूची खोजें|समान नाम वाले दूसरे मतदाता की प्रविष्टि गलती से हटने की जाँच करें|गलती हो तो संदर्भ सहित तुरंत ERO से संपर्क करें', 'Voter ID जुर्माना अपने-आप लगेगा, ऐसा न मानें; डुप्लिकेट पंजीकरण से बचें और ERO आदेश मानें।']
            ]
        },
        drivingLicence: {
            new: [
                ['चरण 1: राज्य चुनें और Learner’s Licence Form 2 शुरू करें', 'sarathi.parivahan.gov.in → Select State → Apply for Learner Licence', 'नया लाइसेंस दो चरणों में बनता है: Learner’s Licence (LL), फिर स्थायी Driving Licence (DL)। Sarathi पर Form 2 शुरू करें और उस राज्य को चुनें जहाँ लाइसेंसिंग RTO का अधिकार क्षेत्र है।', 'वाहन श्रेणी की न्यूनतम आयु जाँचें|रिकॉर्ड के अनुसार नाम, जन्मतिथि और पता भरें|Aadhaar authentication तभी चुनें जब राज्य देता हो|आवेदन संख्या और चुना RTO रखें', 'राज्य प्रक्रिया अलग है; कुछ LL सेवाओं में RTO जाना या वहीं टेस्ट देना पड़ता है।'],
                ['चरण 2: वाहन श्रेणी और प्रमाणीकरण मार्ग चुनें', 'Form 2 → Vehicle Class → Aadhaar authentication / RTO route', 'सही श्रेणी चुनें: MCWOG बिना गियर दोपहिया, MCWG गियर वाली मोटरसाइकिल, LMV-NT गैर-परिवहन कार/जीप। भाग लेने वाले राज्यों में Aadhaar प्रमाणीकरण घर से LL टेस्ट की अनुमति दे सकता है।', 'केवल वे श्रेणियाँ चुनें जिन्हें चलाना है और जिनकी न्यूनतम आयु पूरी है|Sarathi का सटीक श्रेणी विवरण पढ़ें|Aadhaar सुविधा न हो तो राज्य की व्यक्तिगत प्रक्रिया अपनाएँ', 'घर से Aadhaar-आधारित टेस्ट हर राज्य/आवेदक के लिए उपलब्ध नहीं।'],
                ['चरण 3: Form 1 और जहाँ आवश्यक हो Form 1A भरें', 'Sarathi application → Medical declarations → Form 1 / Form 1A', 'Form 1 की शारीरिक फिटनेस घोषणा सावधानी से भरें और हर मेडिकल प्रश्न का सही उत्तर दें। वर्तमान नियम के अधीन 40 वर्ष या अधिक आयु और commercial/transport श्रेणी में पंजीकृत चिकित्सक का Form 1A माँगा जा सकता है।', 'हर Yes/No घोषणा पढ़कर चुनें|Sarathi/RTO माँगे तो हस्ताक्षरित/मुहर वाला Form 1A अपलोड करें|रंग-दृष्टि या अन्य मेडिकल उत्तर का अनुमान न लगाएँ|गलत घोषणा जमा हो तो सुधार के लिए RTO से पूछें', 'मेडिकल जानकारी गलत न दें; इससे आवेदन की जाँच/पात्रता प्रभावित हो सकती है।'],
                ['चरण 4: प्रमाण अपलोड करें और LL आवेदन पूरा करें', 'Form 2 → Photo / Signature / Age and address proofs → Fee payment', 'Sarathi पर दिखाए आकार में फोटो, हस्ताक्षर और सहायक दस्तावेज़ अपलोड करें। तैयारी लक्ष्य: फोटो JPEG 10–20 KB, 35 × 45 mm; सफेद कागज़ पर काली स्याही का हस्ताक्षर JPEG 10–20 KB; सहायक PDF/JPEG 500 KB से कम।', 'सीधी स्पष्ट फोटो और पढ़ने योग्य हस्ताक्षर स्कैन दें|आयु/पता प्रमाण और आवश्यक Form 1A अपलोड करें|राज्य द्वारा गणना LL शुल्क दें और रसीद रखें|भरा फॉर्म और टेस्ट निर्देश जाँचें', 'लाइव upload सीमा और राज्य शुल्क सूची इन तैयारी लक्ष्यों से ऊपर हैं।'],
                ['चरण 5: Learner’s Licence ज्ञान परीक्षा दें', 'Sarathi → STALL / LL test → Road signs and rules', 'जहाँ ऑनलाइन STALL उपलब्ध हो, अनिवार्य road-safety tutorial का timer पूरा करें, SMS से test password लें और proctoring निर्देश मानें। सामान्य pass mark 60% है (उदाहरण: 15 में 9 या 20 में 12); प्रश्न और format राज्य के अनुसार बदलते हैं।', 'Webcam परीक्षा हो तो शांत/रोशनी वाली जगह और फ्रेम में केवल आवेदक रखें|जहाँ निर्देश मना करें वहाँ tab न बदलें|RTO परीक्षा हो तो स्थानीय computer-test प्रक्रिया मानें|परिणाम स्क्रीन पर pass/fail पुष्टि करें', 'Webcam proctoring, SMS password और प्रश्न संख्या Sarathi की सार्वभौमिक सुविधा नहीं हैं।'],
                ['चरण 6: LL Form 3 डाउनलोड करें और प्रतीक्षा अवधि पूरी करें', 'Sarathi → LL approval → Print Learner’s Licence (Form 3)', 'पास होने और मंजूरी के बाद Form 3 डाउनलोड/प्रिंट करें। सामान्य आवेदन अवधि Day 31 से Day 180 है: पहले 30 दिन स्थायी DL आवेदन न दें और LL की लगभग 180-दिन वैधता समाप्त होने से पहले प्रक्रिया करें।', 'LL जारी/समाप्ति तिथि और छपी वाहन श्रेणी जाँचें|अभ्यास में LL साथ रखें और learner शर्तें मानें|जहाँ ये तिथियाँ लागू हों, Day 31–180 में स्थायी टेस्ट लें|LL समाप्त हो तो RTO से नवीनीकरण/नया LL आवेदन पूछें', 'LL पर छपी वास्तविक समाप्ति और राज्य की प्रक्रिया जाँचें; समाप्त LL से स्थायी टेस्ट आवेदन नहीं किया जा सकता।'],
                ['चरण 7: स्थायी DL आवेदन देकर RTO टेस्ट बुक करें', 'Sarathi → Apply for Driving Licence → LL number and DOB → Fee / Slot', 'प्रतीक्षा अवधि के बाद LL नंबर/जन्मतिथि भरें, श्रेणी चुनें, दिखाया टेस्ट/लाइसेंस शुल्क दें (कुल लगभग ₹500–₹1,000, राज्य/श्रेणी अनुसार) और RTO driving track स्लॉट बुक करें।', 'हर माँगी श्रेणी LL से जुड़ी है जाँचें|उपलब्ध RTO track/date चुनें|आवेदन नंबर, रसीद और स्लॉट पुष्टि रखें|परीक्षा श्रेणी का पंजीकृत और वैध वाहन तैयार करें', 'शुल्क और स्लॉट राज्य अनुसार बदलते हैं; Sarathi की गणना को मानें।'],
                ['चरण 8: भौतिक ड्राइविंग टेस्ट दें और जारी लाइसेंस ट्रैक करें', 'RTO driving track → Biometric / test → Sarathi approval → DigiLocker / mParivahan / India Post', 'मूल LL, रसीद, Aadhaar/ID और वैध RC, insurance, PUC तथा जहाँ माँगे आगे/पीछे लाल L वाले पंजीकृत test vehicle के साथ RTO जाएँ। मंजूरी ट्रैक करें; डिजिटल DL DigiLocker/mParivahan में आ सकता है और राज्य जारी करे तो कार्ड डाक से आता है।', 'निर्धारित श्रेणी का track examiner के निर्देश से पूरा करें|दोपहिया पर 8-track और कार पर H/S-track, gradient/reverse test RTO अनुसार हो सकता है|निर्देश हो तो दोपहिया अभ्यास में पैर जमीन पर न रखें|पास होने पर स्वीकृत COV और delivery स्थिति जाँचें|भौतिक कार्ड में 15–21 दिन लग सकते हैं, पर समय बदलता है', 'Track layout, परीक्षा नियम, वाहन दस्तावेज़ और डिलीवरी RTO/राज्य के अनुसार बदलते हैं; पहले पुष्टि करें।']
            ],
            update: [
                ['चरण 1: Services on Driving Licence खोलें', 'Sarathi → Select State → Services on Driving Licence', 'Renewal, पता/नाम सुधार, duplicate licence या वाहन श्रेणी (COV) जोड़ने की सेवा चुनें। उस राज्य का Sarathi खोलें जहाँ DL रिकॉर्ड है।', 'DL नंबर और जन्मतिथि रखें|कार्ड/पोर्टल पर दिखा नंबर प्रारूप भरें (अक्सर SS-RRYYYYNNNNNNN)|केवल आवश्यक सेवा चुनें|RTO अपॉइंटमेंट/मेडिकल फॉर्म की जरूरत जाँचें', 'RTO के निर्देश बिना duplicate और correction अनुरोध साथ न भेजें।'],
                ['चरण 2: सही सेवा और renewal अवधि चुनें', 'Services on DL → Renewal / Change of Address / Correction / Add COV', 'Renewal सामान्यतः समाप्ति से एक वर्ष पहले से समाप्ति के एक वर्ष बाद तक किया जा सकता है। उसके बाद लागू नियमों में नया driving test या RTO कार्रवाई माँगी जा सकती है।', 'पता बदलाव के लिए “Change of Address in DL” चुनें|Renewal में समाप्ति तिथि और पात्रता जाँचें|नाम सुधार के लिए कानूनी प्रमाण रखें|COV जोड़ने में LL/test की शर्तें जाँचें', 'एक वर्ष की grace अवधि और बाद के नियम वर्तमान कानून/राज्य के अनुसार पुष्टि करें।'],
                ['चरण 3: लाइसेंस और आवेदक विवरण भरें', 'Service application → DL number / DOB → Applicant details', 'DL नंबर और जन्मतिथि से प्रमाणीकरण करें, फिर पोर्टल में दिखे आवेदक, पता और मौजूदा वाहन श्रेणियाँ जाँचें।', 'राज्य/RTO अधिकार क्षेत्र जाँचें|नाम/पता केवल स्वीकृत प्रमाण अनुसार सुधारें|COV जोड़ने पर सही श्रेणी चुनें|OTP/status के लिए चालू मोबाइल/ईमेल दें', 'रिकॉर्ड न मिले या विवरण अलग हों तो नया आवेदन देने से पहले RTO से बात करें।'],
                ['चरण 4: प्रमाण और मेडिकल फॉर्म अपलोड करें', 'Application → Documents → Photo / Signature / Form 1 / Form 1A', 'पता/नाम प्रमाण, मौजूदा DL और सेवा/श्रेणी द्वारा माँगी मेडिकल घोषणा/प्रमाणपत्र अपलोड करें। तैयारी लक्ष्य: फोटो JPEG 10–20 KB, 35 × 45 mm; काली स्याही हस्ताक्षर JPEG 10–20 KB; सहायक PDF/JPEG 500 KB से कम।', 'Sarathi की प्रति-फ़ील्ड सीमा और format मानें|जहाँ माँगा हो Form 1 भरें|आवश्यक होने पर पंजीकृत चिकित्सक का हस्ताक्षर/मुहर वाला Form 1A दें|हर upload preview जाँचें', 'मेडिकल और upload नियम आयु, वाहन श्रेणी और राज्य पर निर्भर हैं; लाइव checklist मानें।'],
                ['चरण 5: घोषणा जाँचें और शुल्क दें', 'Preview → Declaration → Fee payment', 'बदलाव जाँचें और राज्य-गणित शुल्क दें; पता/नाम/renewal में आम तौर पर लगभग ₹200–₹400 लग सकते हैं, पर टेस्ट/अतिरिक्त सेवा से राशि बदलती है।', 'DL रिकॉर्ड और प्रमाण मिलाएँ|सही होने पर घोषणा स्वीकारें|आधिकारिक Sarathi gateway से भुगतान करें|रसीद और आवेदन नंबर सुरक्षित करें', 'पहला भुगतान लंबित हो तो दूसरी बार भुगतान न करें।'],
                ['चरण 6: RTO स्लॉट लें या निर्देशानुसार दस्तावेज़ जमा करें', 'Sarathi → Appointment / RTO selection → Confirmation', 'जहाँ दस्तावेज़ जाँच, बायोमेट्रिक्स, मेडिकल समीक्षा या driving test जरूरी हो वहाँ स्लॉट लें। कुछ सुधार/renewal अनुरोध बिना विज़िट पूरे होते हैं।', 'अधिकार क्षेत्र वाला RTO और तारीख चुनें|अपॉइंटमेंट/आवेदन रसीद सहेजें|मूल DL और स्रोत दस्तावेज़ ले जाएँ|COV जोड़ने पर आवश्यक LL/test चरण तैयार करें', 'पोर्टल पर जमा होने से RTO विज़िट की जरूरत समाप्त होना निश्चित नहीं।'],
                ['चरण 7: सत्यापन या टेस्ट पूरा करें', 'RTO counter → Document / biometric verification → Test if required', 'बुलाए जाने पर मूल दस्तावेज़ लेकर जाएँ। RTO पता/नाम प्रमाण जाँच सकता है, बायोमेट्रिक्स ले सकता है या नए COV/समाप्त renewal के लिए driving test माँग सकता है।', 'DL और मूल प्रमाण दिखाएँ|अंतर संबंधी प्रश्नों का सही प्रमाण से जवाब दें|Test हो तो सही श्रेणी का वाहन और RTO निर्देश मानें|तारीख वाली पावती लें', 'DL पर दर्ज न हुई वाहन श्रेणी न चलाएँ।'],
                ['चरण 8: अपडेटेड DL ट्रैक और जाँचें', 'Sarathi application status → Approved record → DigiLocker / mParivahan / dispatch', 'आवेदन संख्या से स्थिति ट्रैक करें। मंजूरी के बाद डिजिटल रिकॉर्ड में सही पता/नाम, renewal validity या जोड़ी गई श्रेणी जाँचें और उपलब्ध हो तो कार्ड dispatch देखें।', 'अंतिम DL नंबर और COV सूची जाँचें|उपलब्ध आधिकारिक ऐप से डिजिटल रिकॉर्ड लें|डाक पर India Post संदर्भ उपयोग करें|बताए समय से आगे देरी हो तो RTO से संपर्क करें', 'भुगतान रसीद अपडेटेड लाइसेंस नहीं; मंजूरी और अंतिम रिकॉर्ड की पुष्टि करें।']
            ],
            surrender: [
                ['चरण 1: पूरा DL या विशिष्ट वाहन श्रेणी सरेंडर करना तय करें', 'Sarathi → Services on DL → Surrender of COV(s)/Badge', 'जब वाहन श्रेणी (COV) या badge छोड़ना हो, जैसे अब उस श्रेणी के योग्य न रहना या अलग लाइसेंस प्रक्रिया, यह सेवा उपयोग करें। आगे बढ़ने से पहले RTO की शर्तें पूछें।', 'DL नंबर, जारीकर्ता राज्य और सही COV/badge पहचानें|तय करें पूरा लाइसेंस या केवल श्रेणी छोड़नी है|दूसरे देश जाने पर अलग NOC चाहिए या नहीं RTO से पूछें', 'एक श्रेणी छोड़ने से उस वाहन को चलाने का अधिकार समाप्त हो सकता है; पहले परिणाम समझें।'],
                ['चरण 2: Sarathi में surrender सेवा चुनें', 'sarathi.parivahan.gov.in → Select State → Services on DL → Surrender of COV(s)/Badge', 'जारीकर्ता राज्य चुनकर “Surrender of COV(s)/Badge” या वर्तमान समकक्ष सेवा खोलें। DL नंबर और जन्मतिथि देकर रिकॉर्ड प्राप्त करें।', 'डोमेन और RTO जाँचें|माँगे जाने पर OTP प्रमाणीकरण करें|दिखे DL/COV विवरण मिलाएँ|केवल वही श्रेणी/badge चुनें जिसे छोड़ना है', 'राज्य में ऑनलाइन सेवा न हो तो RTO से कागज़ी प्रक्रिया पूछें।'],
                ['चरण 3: आवेदन और कारण पूरा करें', 'Surrender service → COV / Badge selection → Declaration', 'कारण सही भरें और छोड़ी जाने वाली श्रेणी/badge की पुष्टि करें। Sarathi ऑनलाइन जमा की अनुमति दे तो अनुरोध जमा करें।', 'चालू संपर्क/पता भरें|घोषणा और परिणाम पढ़ें|आवेदन नंबर और भौतिक जमा निर्देश सहेजें', 'गलत श्रेणी न छोड़ें; वापस पाने में नया आवेदन/टेस्ट लग सकता है।'],
                ['चरण 4: लाइसेंस और सहायक दस्तावेज़ तैयार करें', 'Application checklist → Original smart card → ID / written request', 'मूल smart-card DL और पहचान प्रमाण तैयार रखें। RTO माँगे तो हस्ताक्षरित अनुरोध या NOC संबंधित दस्तावेज़ जोड़ें।', 'आवेदन/पावती डाउनलोड या प्रिंट करें|जमा करने से पहले DL और आवेदन की प्रति रखें|RTO अपॉइंटमेंट/शुल्क जाँचें|बची हुई वैध श्रेणियाँ स्पष्ट नोट करें', 'आधिकारिक पावती/ट्रैकिंग प्रक्रिया के बिना मूल कार्ड डाक से न भेजें।'],
                ['चरण 5: RTO Zonal Office काउंटर पर कार्ड जमा करें', 'RTO Zonal Office → Token / receiving counter → DL services', 'निर्देश मिलने पर आवेदन और भौतिक smart card निर्धारित RTO/Zonal Office काउंटर पर दें। केवल ऑनलाइन अनुरोध से सरेंडर पूरा न भी हो।', 'मूल ID, DL कार्ड और आवेदन पावती ले जाएँ|कर्मचारी से सही COV/badge हटाने की पुष्टि कराएँ|कार्ड के बदले तारीख/मुहर वाली पावती लें|पूछें कि अलग NOC जारी होगा या नहीं', 'काउंटर और कागज़ी कार्ड की जरूरत राज्य अनुसार बदलती है; issuing RTO के निर्देश मानें।'],
                ['चरण 6: जाँच पूरी कर NOC / Surrender Receipt लें', 'RTO scrutiny → Licence record update → NOC / Surrender Receipt', 'RTO अनुरोध जाँचकर छोड़ी गई श्रेणी/badge रिकॉर्ड में अपडेट करेगा। मामले में जारी NOC या surrender receipt लें।', 'रसीद पर DL और COV सही जाँचें|पूछें कि बाकी श्रेणियाँ सक्रिय रहेंगी या नहीं|डिजिटल और कागज़ी प्रति रखें|RTO की अतिरिक्त सूचना का तुरंत जवाब दें', 'सिर्फ आवेदन नंबर श्रेणी सरेंडर होने का प्रमाण नहीं।'],
                ['चरण 7: अंतिम स्थिति ट्रैक करें', 'Sarathi application status → RTO confirmation', 'Sarathi स्थिति देखें या जारीकर्ता RTO से संपर्क करें, जब तक रिकॉर्ड में surrender पूरा न दिखे।', 'आवेदन/संदर्भ संख्या उपयोग करें|प्रभावी तारीख और हटाई गई श्रेणी की पुष्टि करें|गलती हो तो RTO से शीघ्र सुधार माँगें|NOC लाइसेंस रिकॉर्ड के साथ रखें', 'लंबित रहते या दर्ज होने के बाद surrendered श्रेणी का वाहन न चलाएँ।'],
                ['चरण 8: दस्तावेज़ रखें और शेष अधिकार जाँचें', 'Final DL record → COV list → NOC / Surrender Receipt', 'अंतिम लाइसेंस रिकॉर्ड में पुष्टि करें कि केवल इच्छित श्रेणी/badge हटाया गया है। आगे के आवेदन के लिए RTO पावती/NOC सुरक्षित रखें।', 'आधिकारिक स्रोत से नवीनतम DL रिकॉर्ड डाउनलोड करें|बाकी श्रेणियों की समाप्ति/वैधता जाँचें|दूसरा प्राधिकरण माँगे तो NOC दें', 'NOC नया लाइसेंस नहीं है और हटाई गई/अमान्य श्रेणी चलाने की अनुमति नहीं देता।']
            ]
        }
    }
};

const civicLicenceGuideResources = {
    en: {
        voter: {
            uploadHeading: 'ECI upload preparation',
            uploadIntro: 'Use the current ECI portal/app file controls where they differ from these preparation limits.',
            uploadItems: [
                'Photograph: upright, recent face portrait, JPEG/JPG, up to 2 MB.',
                'Age proof and ordinary-residence proof: accepted PDF or JPEG, up to 2 MB per file as requested.',
                'Use clear, complete, legible scans; make sure the displayed crop/orientation matches the original.',
                'Keep the original proofs available for BLO field verification; upload Aadhaar only if the applicant chooses to provide it.'
            ],
            officeHeading: 'BLO paper filing and field verification',
            officeIntro: 'A paper application can be filed with the area BLO/designated election office; an online application may still require field verification.',
            officeItems: [
                'For new registration, take signed Form 6, two colour photographs and photocopies of accepted age/address proofs to the designated BLO/polling location.',
                'For Form 8 or Form 7, carry the existing EPIC details and the proof relevant to the selected request.',
                'Keep a dated acknowledgement/reference and show originals only for verification; do not leave originals without a receipt.',
                'Answer BLO/ERO notices and verify the final published electoral roll after the ERO decision.'
            ],
            trackingHeading: 'After submission: ECI application status',
            trackingStages: [
                ['Reference number and receipt', 'Save the 11/12-character portal reference or the paper acknowledgement. Track Form 6/7/8 in the ECI portal/app; a submitted reference is not approval.'],
                ['BLO field verification and ERO decision', 'The BLO may verify residence/documents and forward a report. Respond to notices; the ERO decides inclusion, correction, replacement or deletion. Timing depends on constituency workload and roll revision.'],
                ['Roll update, e-EPIC and physical PVC', 'Verify the decision in the published electoral roll. Download e-EPIC when enabled and complete mobile OTP requirements; track any physical PVC dispatch using the official reference. A 30–45-day delivery estimate is not guaranteed.']
            ],
            rejectionHeading: 'Common ECI application objections and prevention',
            rejectionReasons: [
                ['Applicant is already enrolled or constituency is incorrect', 'Search the current roll first, enter ordinary residence and select the correct Assembly Constituency; avoid duplicate Form 6 requests.'],
                ['Name/date of birth or Hindi transliteration mismatch', 'Match accepted records, inspect the Hindi virtual-keyboard preview and correct spelling before submission.'],
                ['Unaccepted, unreadable or incomplete age/address proof', 'Use the current ECI document list, upload all requested pages and keep originals available for BLO verification.'],
                ['Wrong Form 8 checkbox or Form 7 deletion grounds', 'Select one request that matches the need; use Form 8 for an address shift and provide evidence for Form 7 objections.'],
                ['BLO could not verify residence or contact the applicant', 'Keep the current address/contact reachable, respond to field visits/notices and provide accurate references.']
            ]
        },
        drivingLicence: {
            uploadHeading: 'Sarathi photo, signature and document preparation',
            uploadIntro: 'The application’s state-specific upload control is final; these are preparation targets, not a guarantee of acceptance.',
            uploadItems: [
                'Photo target: JPEG, 10–20 KB, 35 mm × 45 mm, upright and clear.',
                'Signature target: JPEG, 10–20 KB, black ink on white paper.',
                'Supporting documents: PDF/JPEG under 500 KB per file where the state portal accepts that size.',
                'Use the live Sarathi preview and field limits; keep originals for RTO scrutiny and medical documents where required.'
            ],
            officeHeading: 'RTO learner and driving-test workflow',
            officeIntro: 'A learner test or permanent driving test may require an RTO visit even when the application is online; state rules determine the route.',
            officeItems: [
                'Bring application/slot receipt, LL, identity and age/address originals, medical forms if required, and a vehicle of the test class.',
                'For the test vehicle, confirm current RC, insurance, PUC, learner L-marking and any state/RTO conditions.',
                'Complete biometrics/document scrutiny and follow the examiner’s track instructions; track the outcome on Sarathi.',
                'Keep the digital DL in an official DigiLocker/mParivahan record after approval; physical card dispatch varies by state.'
            ],
            trackingHeading: 'After submission: Sarathi and RTO status',
            trackingStages: [
                ['Application number and LL/test slot', 'Save the Sarathi application number, payment receipt and LL test/RTO slot details. Use the selected state portal; test dates depend on RTO availability.'],
                ['Test result and approval', 'Check LL test or driving-test result on Sarathi and complete any required RTO verification. Approval depends on documents, eligibility and passing the relevant test.'],
                ['Digital licence and physical dispatch', 'After approval, verify the DL/COV details in Sarathi and an official DigiLocker/mParivahan record where supported. Track a physical card only with the dispatch reference issued by the state.']
            ],
            rejectionHeading: 'Common Sarathi application issues and prevention',
            rejectionReasons: [
                ['Wrong vehicle class, age or LL validity', 'Check minimum age, exact COV and LL expiry before payment or test booking.'],
                ['Incorrect medical declaration or missing Form 1A', 'Answer Form 1 accurately and attach the required practitioner-certified Form 1A for the applicable age/class.'],
                ['Photo, signature or proof rejected by upload validation', 'Use the current state portal dimensions/file limits and inspect every preview before submission.'],
                ['Expired LL or permanent test booked too early', 'Observe the minimum 30-day holding period and apply within the LL validity shown on the licence.'],
                ['Failed test, invalid test vehicle or incomplete vehicle papers', 'Use a registered vehicle of the correct class with current documents and follow the local RTO track requirements.']
            ]
        }
    },
    hi: {
        voter: {
            uploadHeading: 'ECI अपलोड की तैयारी',
            uploadIntro: 'इन तैयारी सीमाओं से अलग होने पर ECI पोर्टल/ऐप पर दिखाई मौजूदा सीमा मानें।',
            uploadItems: [
                'फोटो: सीधा, हाल का चेहरे का चित्र, JPEG/JPG, अधिकतम 2 MB।',
                'आयु और सामान्य निवास प्रमाण: माँगे अनुसार स्वीकृत PDF/JPEG, प्रत्येक फ़ाइल अधिकतम 2 MB।',
                'स्पष्ट, पूरा और पढ़ने योग्य स्कैन दें; crop/direction मूल दस्तावेज़ से मिलाएँ।',
                'BLO क्षेत्र सत्यापन के लिए मूल प्रमाण रखें; Aadhaar आवेदक चाहे तभी दें।'
            ],
            officeHeading: 'BLO पर कागज़ी आवेदन और क्षेत्र सत्यापन',
            officeIntro: 'कागज़ी आवेदन क्षेत्र के BLO/निर्धारित चुनाव कार्यालय में दिया जा सकता है; ऑनलाइन आवेदन में भी क्षेत्र सत्यापन हो सकता है।',
            officeItems: [
                'नए पंजीकरण के लिए हस्ताक्षरित Form 6, दो रंगीन फोटो और स्वीकृत आयु/पता प्रमाण की प्रतियाँ निर्धारित BLO/मतदान केंद्र पर ले जाएँ।',
                'Form 8/7 के लिए मौजूदा EPIC विवरण और चुने अनुरोध का प्रमाण रखें।',
                'तारीख वाली पावती/संदर्भ लें; सत्यापन हेतु मूल दिखाएँ, रसीद बिना मूल न छोड़ें।',
                'BLO/ERO नोटिस का उत्तर दें और ERO निर्णय के बाद प्रकाशित मतदाता सूची जाँचें।'
            ],
            trackingHeading: 'जमा करने के बाद: ECI आवेदन स्थिति',
            trackingStages: [
                ['संदर्भ संख्या और पावती', '11/12-अक्षर वाला पोर्टल संदर्भ या कागज़ी पावती रखें। ECI पोर्टल/ऐप पर Form 6/7/8 ट्रैक करें; संदर्भ संख्या मंजूरी नहीं है।'],
                ['BLO क्षेत्र सत्यापन और ERO निर्णय', 'BLO पता/दस्तावेज़ जाँच कर रिपोर्ट भेज सकता है। नोटिस का उत्तर दें; नाम जोड़ने, सुधार, replacement या deletion का निर्णय ERO करता है। समय निर्वाचन क्षेत्र और सूची संशोधन पर निर्भर है।'],
                ['सूची अपडेट, e-EPIC और भौतिक PVC', 'प्रकाशित सूची में निर्णय जाँचें। उपलब्ध होने पर e-EPIC डाउनलोड करें और मोबाइल OTP की शर्त पूरी करें; भौतिक PVC की डाक आधिकारिक संदर्भ से ट्रैक करें। 30–45 दिन की अवधि निश्चित नहीं।']
            ],
            rejectionHeading: 'ECI आवेदन की सामान्य आपत्तियाँ और बचाव',
            rejectionReasons: [
                ['आवेदक पहले से पंजीकृत या निर्वाचन क्षेत्र गलत', 'पहले मौजूदा सूची खोजें, सामान्य निवास सही भरें और सही Assembly Constituency चुनें; डुप्लिकेट Form 6 न दें।'],
                ['नाम/जन्मतिथि या हिंदी लिप्यंतरण में अंतर', 'स्वीकृत रिकॉर्ड से मिलाएँ, virtual keyboard preview देखें और जमा से पहले वर्तनी सुधारें।'],
                ['आयु/पता प्रमाण अमान्य, अस्पष्ट या अधूरा', 'वर्तमान ECI दस्तावेज़ सूची मानें, माँगे सभी पृष्ठ अपलोड करें और BLO जाँच के लिए मूल रखें।'],
                ['Form 8 checkbox या Form 7 deletion का गलत आधार', 'जरूरत के अनुसार एक सही अनुरोध चुनें; पता बदलाव के लिए Form 8 और Form 7 आपत्ति के लिए प्रमाण दें।'],
                ['BLO पता सत्यापित या आवेदक से संपर्क नहीं कर पाया', 'वर्तमान पता/संपर्क चालू रखें, क्षेत्र भेंट/नोटिस का उत्तर दें और सही संदर्भ दें।']
            ]
        },
        drivingLicence: {
            uploadHeading: 'Sarathi फोटो, हस्ताक्षर और दस्तावेज़ की तैयारी',
            uploadIntro: 'राज्य के आवेदन में दिखी upload सीमा अंतिम है; ये तैयारी लक्ष्य हैं, स्वीकृति की गारंटी नहीं।',
            uploadItems: [
                'फोटो लक्ष्य: JPEG, 10–20 KB, 35 mm × 45 mm, सीधा और स्पष्ट।',
                'हस्ताक्षर लक्ष्य: JPEG, 10–20 KB, सफेद कागज़ पर काली स्याही।',
                'सहायक दस्तावेज़: जहाँ राज्य पोर्टल स्वीकार करे, प्रत्येक PDF/JPEG 500 KB से कम।',
                'लाइव Sarathi preview/सीमा मानें; RTO जाँच और आवश्यक मेडिकल प्रमाण के लिए मूल रखें।'
            ],
            officeHeading: 'RTO लर्नर और ड्राइविंग टेस्ट प्रक्रिया',
            officeIntro: 'आवेदन ऑनलाइन होने पर भी LL या स्थायी टेस्ट के लिए RTO जाना पड़ सकता है; मार्ग राज्य नियम तय करते हैं।',
            officeItems: [
                'आवेदन/स्लॉट पावती, LL, पहचान व आयु/पता मूल, आवश्यक मेडिकल फॉर्म और टेस्ट श्रेणी का वाहन ले जाएँ।',
                'टेस्ट वाहन के RC, बीमा, PUC, learner L-चिह्न और राज्य/RTO की अन्य शर्तें पहले जाँचें।',
                'बायोमेट्रिक/दस्तावेज़ जाँच पूरी करें, examiner के track निर्देश मानें और Sarathi पर नतीजा देखें।',
                'मंजूरी के बाद आधिकारिक DigiLocker/mParivahan रिकॉर्ड में डिजिटल DL रखें; भौतिक कार्ड डाक राज्य के अनुसार बदलती है।'
            ],
            trackingHeading: 'जमा करने के बाद: Sarathi और RTO स्थिति',
            trackingStages: [
                ['आवेदन संख्या और LL/test स्लॉट', 'Sarathi आवेदन संख्या, भुगतान रसीद और LL टेस्ट/RTO स्लॉट रखें। चुने राज्य पोर्टल पर देखें; टेस्ट तारीख RTO उपलब्धता पर निर्भर है।'],
                ['टेस्ट नतीजा और मंजूरी', 'Sarathi पर LL/ड्राइविंग टेस्ट परिणाम देखें और आवश्यक RTO सत्यापन पूरा करें। मंजूरी दस्तावेज़, पात्रता और टेस्ट पास होने पर निर्भर करती है।'],
                ['डिजिटल DL और भौतिक डाक', 'मंजूरी के बाद Sarathi और समर्थित आधिकारिक DigiLocker/mParivahan रिकॉर्ड में DL/COV विवरण जाँचें। भौतिक कार्ड हो तो राज्य द्वारा जारी dispatch संदर्भ से ट्रैक करें।']
            ],
            rejectionHeading: 'Sarathi आवेदन की सामान्य समस्याएँ और बचाव',
            rejectionReasons: [
                ['गलत वाहन श्रेणी, आयु या LL वैधता', 'शुल्क/टेस्ट से पहले न्यूनतम आयु, सही COV और LL समाप्ति जाँचें।'],
                ['गलत मेडिकल घोषणा या Form 1A अनुपस्थित', 'Form 1 सही भरें और लागू आयु/श्रेणी के लिए चिकित्सक-प्रमाणित Form 1A लगाएँ।'],
                ['फोटो, हस्ताक्षर या प्रमाण upload में अस्वीकृत', 'राज्य पोर्टल के मौजूदा आकार/सीमा मानें और जमा से पहले हर preview जाँचें।'],
                ['LL समाप्त या स्थायी टेस्ट बहुत जल्दी बुक', 'न्यूनतम 30 दिन की अवधि मानें और LL पर छपी वैधता के भीतर आवेदन करें।'],
                ['टेस्ट में असफलता, गलत वाहन या अधूरे वाहन कागज़', 'सही श्रेणी का पंजीकृत वाहन, चालू दस्तावेज़ रखें और स्थानीय RTO track नियम मानें।']
            ]
        }
    }
};

function createDeepStages(documentKey, actionKey, language, mode, guide) {
    const stageRows = documentKey === 'aadhaar' && actionKey === 'update' && mode === 'offline'
        ? offlineAadhaarUpdateRows[language]
        : deepStageRows[language][documentKey][actionKey];
    const route = procedureRoutes[documentKey];
    const isBhuvanEnrolmentLookup = documentKey === 'aadhaar' && actionKey === 'new' && mode === 'online';
    const root = isBhuvanEnrolmentLookup
        ? 'Bhuvan Aadhaar Locator'
        : mode === 'online' ? route.portal : route.office;
    const home = language === 'en' ? 'Home' : 'होम';
    const stages = stageRows.map(([title, navigation, details, substeps, warning], index) => ({
        title,
        navigationPath: isBhuvanEnrolmentLookup
            ? `${root} → ${navigation}`
            : mode === 'online'
            ? `${root} → ${home} → ${route.service[actionKey]} → ${navigation}`
            : `${root} → ${language === 'en' ? 'Entry / token counter' : 'प्रवेश / टोकन काउंटर'} → ${route.service[actionKey]} → ${navigation}`,
        details: `${mode === 'offline' && documentKey === 'aadhaar' && actionKey === 'surrender'
            ? (language === 'en' ? 'Biometric lock is a digital UIDAI service; the ASK can assist, but the lock request itself must be completed through myAadhaar. ' : 'बायोमेट्रिक लॉक UIDAI की डिजिटल सेवा है; ASK सहायता कर सकता है, लेकिन लॉक अनुरोध myAadhaar से ही पूरा होगा। ')
            : ''}${details} ${mode === 'offline' && index === 0
            ? (language === 'en' ? `Offline selection: ${guide.offlineOffice}.` : `ऑफलाइन कार्यालय: ${guide.offlineOffice}।`)
            : ''}`,
        substeps: substeps.split('|'),
        warning
    }));
    return stages;
}

function createPassportStages(actionKey, language, mode) {
    const route = mode === 'online'
        ? (language === 'en' ? 'Passport Seva portal / mPassport Seva app' : 'Passport Seva पोर्टल / mPassport Seva ऐप')
        : (language === 'en' ? 'PSK / POPSK assisted service → Passport Seva portal / app' : 'PSK / POPSK सहायता → Passport Seva पोर्टल / ऐप');
    const serviceNames = {
        en: {new: 'Fresh Passport', update: 'Re-issue Passport', surrender: 'Surrender Certificate / cancellation'},
        hi: {new: 'नया पासपोर्ट', update: 'पासपोर्ट पुनः जारी', surrender: 'Surrender Certificate / रद्दीकरण'}
    };
    return passportStageRows[language][actionKey].map(([title, navigation, details, substeps, warning]) => ({
        title,
        navigationPath: `${route} → ${serviceNames[language][actionKey]} → ${navigation}`,
        details: mode === 'offline' && title.includes(language === 'en' ? 'Stage 1' : 'चरण 1')
            ? `${details} ${language === 'en'
                ? 'Offline route: staff may assist with portal access, but application/payment and appointment follow Passport Seva; the applicant must attend the selected PSK/POPSK.'
                : 'ऑफलाइन मार्ग: कर्मचारी पोर्टल उपयोग में सहायता कर सकते हैं, लेकिन आवेदन/भुगतान और अपॉइंटमेंट Passport Seva से होते हैं; आवेदक को चुने PSK/POPSK जाना होगा।'}`
            : details,
        substeps: substeps.split('|'),
        warning
    }));
}

function createCivicLicenceStages(documentKey, actionKey, language, mode) {
    const root = documentKey === 'voter'
        ? mode === 'online'
            ? 'voters.eci.gov.in / Voter Helpline App'
            : language === 'en' ? 'Area BLO / local polling booth / ERO' : 'क्षेत्रीय BLO / स्थानीय मतदान केंद्र / ERO'
        : mode === 'online'
            ? 'Sarathi Parivahan (sarathi.parivahan.gov.in)'
            : language === 'en' ? 'Regional Transport Office (RTO)' : 'क्षेत्रीय परिवहन कार्यालय (RTO)';
    const serviceNames = {
        en: {
            voter: {new: 'Form 6 new registration', update: 'Form 8 correction / shift / replacement', surrender: 'Form 7 objection / deletion'},
            drivingLicence: {new: 'Learner Licence → Permanent DL', update: 'Services on Driving Licence', surrender: 'Surrender of COV(s)/Badge'}
        },
        hi: {
            voter: {new: 'Form 6 नया पंजीकरण', update: 'Form 8 सुधार / पता बदलाव / replacement', surrender: 'Form 7 आपत्ति / नाम हटाना'},
            drivingLicence: {new: 'Learner Licence → स्थायी DL', update: 'Services on Driving Licence', surrender: 'Surrender of COV(s)/Badge'}
        }
    };
    return civicLicenceStageRows[language][documentKey][actionKey].map(([title, navigation, details, substeps, warning], index) => ({
        title,
        navigationPath: `${root} → ${serviceNames[language][documentKey][actionKey]} → ${navigation}`,
        details: mode === 'offline' && index === 0
            ? `${details} ${language === 'en'
                ? documentKey === 'voter'
                    ? 'Offline route: obtain the paper form from the area BLO or official portal and confirm the designated submission point.'
                    : 'Offline route: confirm the state/RTO paper process and required visit; online authentication or testing may not be available.'
                : documentKey === 'voter'
                    ? 'ऑफलाइन मार्ग: क्षेत्रीय BLO या आधिकारिक पोर्टल से कागज़ी फॉर्म लें और जमा करने का निर्धारित स्थान पूछें।'
                    : 'ऑफलाइन मार्ग: राज्य/RTO की कागज़ी प्रक्रिया और व्यक्तिगत विज़िट की पुष्टि करें; ऑनलाइन प्रमाणीकरण/टेस्ट उपलब्ध न भी हो।'}`
            : details,
        substeps: substeps.split('|'),
        warning
    }));
}

function makeNavigationPath(documentKey, actionKey, mode, index, language) {
    const route = procedureRoutes[documentKey];
    const root = mode === 'online' ? route.portal : route.office;
    const service = route.service[actionKey];
    const routeStages = language === 'en'
        ? ['Check eligibility', 'Choose service', 'Applicant and proof details', 'Review / declaration / payment', 'Acknowledgement / status']
        : ['पात्रता जाँच', 'सेवा चुनें', 'आवेदक और प्रमाण विवरण', 'जाँच / घोषणा / भुगतान', 'पावती / स्थिति'];
    const home = language === 'en' ? 'Home' : 'होम';
    const signIn = language === 'en' ? 'Sign in / identify applicant' : 'लॉगिन / आवेदक पहचान';
    const onlinePrefix = mode === 'online'
        ? [root, home, signIn, service]
        : language === 'en'
            ? [root, 'Entry / security', 'Token / appointment', service]
            : [root, 'प्रवेश / सुरक्षा', 'टोकन / अपॉइंटमेंट', service];
    const step = language === 'en' ? routeStages[index] : routeStages[index];
    return [...onlinePrefix, step || service].join(' → ');
}

function enrichProcedureData() {
    Object.entries(documentData).forEach(([documentKey, languages]) => {
        Object.entries(languages).forEach(([language, actions]) => {
            const resources = procedureResources[language];
            Object.entries(actions).forEach(([actionKey, modes]) => {
                Object.entries(modes).forEach(([mode, guide]) => {
                    const isOnline = mode === 'online';
                    const stageTitles = language === 'en'
                        ? resources.stages
                        : [procedureStageTitlesHi.preparation, procedureStageTitlesHi.access, procedureStageTitlesHi.details, procedureStageTitlesHi.review, procedureStageTitlesHi.tracking];
                    if (documentKey === 'passport') {
                        guide.steps = createPassportStages(actionKey, language, mode);
                    } else if (documentKey === 'voter' || documentKey === 'drivingLicence') {
                        guide.steps = createCivicLicenceStages(documentKey, actionKey, language, mode);
                        if (documentKey === 'drivingLicence') {
                            guide.officialPortal = 'https://sarathi.parivahan.gov.in';
                        }
                    } else if (deepStageRows[language][documentKey] && deepStageRows[language][documentKey][actionKey]) {
                        guide.steps = createDeepStages(documentKey, actionKey, language, mode, guide);
                    } else {
                        guide.steps = guide.steps.map((sourceDetails, index) => {
                            const stageIndex = Math.min(index, resources.stages.length - 1);
                            const stageTitle = stageTitles[stageIndex];
                            const title = language === 'en'
                                ? `Stage ${index + 1}: ${stageTitle}`
                                : `चरण ${index + 1}: ${stageTitle}`;
                            const substeps = [...resources.substeps[stageIndex]];
                            if (stageIndex === 2) {
                                substeps.push(...documentFieldChecks[documentKey][language]);
                            }
                            return {
                                title,
                                navigationPath: makeNavigationPath(documentKey, actionKey, mode, stageIndex, language),
                                details: `${sourceDetails} ${resources.details[stageIndex]}`,
                                substeps,
                                warning: resources.warnings[stageIndex]
                            };
                        });
                    }

                    const tutorialQuery = language === 'en'
                        ? `${guide.title} ${documentKey === 'aadhaar' ? 'UIDAI official step by step' : documentKey === 'passport' ? 'Passport Seva official step by step' : documentKey === 'voter' ? 'ECI Form 6 Form 8 Form 7 voter services official' : documentKey === 'drivingLicence' ? 'Sarathi Parivahan learner licence driving licence official' : 'PAN application official step by step'} English`
                        : `${guide.title} ${documentKey === 'aadhaar' ? 'UIDAI official step by step' : documentKey === 'passport' ? 'Passport Seva आधिकारिक चरणबद्ध प्रक्रिया' : documentKey === 'voter' ? 'ECI Form 6 Form 8 Form 7 मतदाता सेवा आधिकारिक' : documentKey === 'drivingLicence' ? 'Sarathi Parivahan लर्नर ड्राइविंग लाइसेंस आधिकारिक' : 'PAN आवेदन आधिकारिक चरणबद्ध प्रक्रिया'} Hindi`;
                    const videoQuery = encodeURIComponent(tutorialQuery).replace(/%20/g, '+');
                    const channelQuery = encodeURIComponent(`${procedureRoutes[documentKey].portal} official government channel`).replace(/%20/g, '+');
                    guide.youtubeSearchUrl = `https://www.youtube.com/results?search_query=${videoQuery}`;
                    guide.officialChannelUrl = `https://www.youtube.com/results?search_query=${channelQuery}`;

                    const guideResources = documentKey === 'passport'
                        ? passportGuideResources[language]
                        : documentKey === 'voter' || documentKey === 'drivingLicence'
                            ? civicLicenceGuideResources[language][documentKey]
                            : resources;
                    if (documentKey === 'passport' || documentKey === 'voter' || documentKey === 'drivingLicence') {
                        guide.uploadSpecs = {
                            heading: guideResources.uploadHeading,
                            introduction: guideResources.uploadIntro,
                            items: guideResources.uploadItems
                        };
                    }

                    if (isOnline) {
                        guide.uploadSpecifications = {
                            heading: guideResources.uploadHeading,
                            introduction: guideResources.uploadIntro,
                            items: guideResources.uploadItems
                        };
                    } else {
                        guide.officeWorkflow = {
                            heading: guideResources.officeHeading,
                            introduction: guideResources.officeIntro,
                            items: guideResources.officeItems
                        };
                    }

                    guide.trackingProcess = {
                        heading: guideResources.trackingHeading,
                        stages: documentKey === 'passport' || documentKey === 'voter' || documentKey === 'drivingLicence'
                            ? guideResources.trackingStages
                            : resources.trackingStages[documentKey]
                    };
                    guide.rejectionReasons = documentKey === 'passport' || documentKey === 'voter' || documentKey === 'drivingLicence'
                        ? guideResources.rejectionReasons
                        : resources.rejectionReasons;
                });
            });
        });
    });
}

enrichProcedureData();
