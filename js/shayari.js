// Variable ka naam "shayariData" hona chahiye
const shayariData = [
    {
        title: "Muddaten guzre us baat",
        // Dekho yahan maine " ki jagah ` use kiya hai
        text: `Muddaten guzre us baat, us zamane ko,
Tum aaj aaye ho mujhko aazmane ko...

Dil ne toh kab ka chhod diya tha zikr tera,
Phir kyun jagaya dard ke iss afsaane ko...

Hum bhi muskura dete teri ek ada par,
Gar tum na aate phir se dil dukhane ko...

Ab laut bhi jao toh kya badal paoge,
Raakh kabhi kaafi nahi hoti ghar jalane ko...`,
        volume: "4",
        topics: ["alone", "sad","deep"],
        date: "2026-05-22"
    },
    // Agli shayari...

    {
        title: "Kaisi Mohabbat h",
        text: `तुम रोकती भी नहीं, 
        और जाने भी नहीं देती,
              ये कैसी मोहब्बत है
            जो जीने भी नहीं देती। .`,
        volume: "4",
        topics: ["life", "love"],
        date: "2026-05-22"
    },
    {
        title: "Hatheli pr",
        text: `मुद्दतों की धूल थी… या तेरे हाल का असर,
चाँद आ ठहरा है चुपके से मेरी हथेली पर।

रात ने ओढ़ ली है तेरी यादों की चाँदनी,
ख़्वाब टपके हैं सितारों से किसी सहेली पर।

तेरी आँखों की नमी में भीगता रहता हूँ मैं,
जैसे सावन उतर आया हो सूखी कलियों पर।

एक तेरा ज़िक्र क्या आया हवाओं में,
रूह महकने लगी वीरान सी हवेली पर।


अब किसे देखूँ मैं — तुझे, या इस चाँद को,
दोनों ही आ बैठे हैं मेरी हथेली पर… `,
        volume: "2",
        topics: ["love"],
        date: "2026-05-22"
    },
    {title: "Adhura h",
        text: `Har ek gaam  adhura hai, har ek baat adhuri hai,
Har din hai adhura, har raat adhuri hai।

Tere bina jo likhu main, woh jazbaat adhure hain,
Meri hasi ke peeche chhupe alfaaz adhure hain।

Jo khwaab sajaye humne baith kar kabhi saath,
Aaj un khwaabon ki har  mulaqaat adhuri hai।

Har ek din hai adhura, har ek baat adhuri hai...
`,
        volume: "4",
        topics: ["sad","alone"],
        date: "2026-05-23"
    },
    // shayari.js ke end mein is tarah naya data jodo:
{
    title: "Sochna phir bolna",
    text: `Sochna phir bolna,
Bol kar phir sochna…
Zubaa se nikle alfaz,
Dil par bojh na hone dena…


Sochna phir bolna,
Bol kar phir sochna…
Har baat ka ek asar hai,
Isse pehle thoda dekhna…

Sochna phir bolna,
Bol kar phir sochna…
Baaton ka bhi wajood hota hai,
Inhe halka mat samajhna…

Sochna phir bolna,
Bol kar phir sochna…
Choti si baat kabhi-kabhi,
Rishta bhi tod hai chuka...

Sochna phir bolna,
Dil ki baat ko pehle rokna.`,
    volume: "3",        // <-- Naya Volume Number
    topics: ["motivation", "life"], // <-- Naya Topic Name (choti ABCD mein)
    date: "2026-05-24"
},
{title: "Hairani lagti h",
        text: `ईर्ष्या द्वेष कलह की बातें तेरी,
मुझको तो हैरानी लगती हैं।
ये जो लहजा दिखा रहे हो तुम,
ये तुम नहीं... X2
ये  तहजीब तो खानदानी लगती हैं।`,
        volume: "1",
        topics: ["reality","deep","attitude","life"],
        date: "2026-05-24"
    },  

{title: "Jis taraf dekhu",
        text: `Jis taraf dekhu is jehno jahaan mein,
bas tu nazar aaye,


Har manzar mein tu hi tu ho,
har lamha tera asar laaye,
Duniya ki har ek rangat bhi,
tere noor ke aage फीकी पड़ जाए।

Aur jb kuch na nazar aaye,
Tb v shirf tu hi tu nazar aaye।`,
        volume: "2",
        topics: ["love","memories"],
        date: "2026-05-24"
    },
{title: "Zindagi Ka Sach",
        text: `अपने हिस्से की ज़िंदगी तो हम जी चुके,
अब तो बस धड़कनों का लिहाज़ करते हैं।
क्या कहें इस   दुनिया वालों से,
जो आख़िरी साँस पर भी एतराज़ करते हैं।


अपने ख़ामोशी में दर्द का दरिया समेटे है,
और ये लोग ज़ख्मों का हिसाब करते हैं।
मर भी जाएँ तो सुकून न मिले शायद,
यहाँ लोग मरने के बाद भी सवाल करते हैं।`,
        volume: "3",
        topics: ["life","deep","alone"],
        date: "2026-05-24"
    },
{title: "Bechain tha",
        text: `Main garmi Se Bechain tha apni chardiwari ke andar 
 bahar nikala to Jana kitni Tej hawa aayi thi thi`,
        volume: "3",
        topics: ["life","reality"],
        date: "2026-05-24"
    },
  {title: "DUR Jane ki baat krte ho ",
        text: `Main milna chahun pr...
 tum mujhe imandar nhi lgte 

Main toh chahun  Krna wafa pr...
  mujhe tum wafadar nhi lgte 

 jo dil se nibha sake har mod pe,
tum woh kirdaar nahi lagte…

jo kr sake kdar rishte ki ,
tum mujhe.. itne hoshiyar nahi lagte…

Or....x2
tum mujhse.. Dur jaane ki baat krte ho ....x2
 Yaar....tum mujhe samjhdaaar nhi lagte...
`,
        volume: "",
        topics: ["alone","reality"],
        date: "2026-05-24"
    },
    {title: "Abhi main hoon",
        text: `अभी मैं हूँ… अभी कहानी बाकी है,
गिरा हूँ कई बार, पर उड़ान  बाकी है।

जो समझ बैठे हैं खत्म हो चुका मैं, वो सुन लें—
मेरे हौसलों की पहचान अभी बाकी है।

वक़्त ने रोका है..., हराया नहीं मुझे,
मेरी जीत का ऐलान अभी बाकी है।`,
        volume: "3",
        topics: ["life","reality","deep","motivation"],
        date: "2026-05-24"
    },
    {title: "Khawishen",
        text: `खामोश रहना अब आदत सा बन गया है,
क्योंकि जवाब देने से लोग अपने नहीं होते।
मैंने वक़्त से एक बात सीख ली है—
यहाँ क़दर नहीं… बस ज़रूरतें बदली जाती हैं।`,
        volume: "3",
        topics: ["life","reality","alone"],
        date: "2026-05-24"
    },
    {title: "Zindagi ",
        text: `“शायद वो कहीं अपनी दुनिया संवार रहा होगा,
जैसे मैं यहाँ अपने कल को निखार रहा हूँगा…
हमें एक-दूसरे को बदलने की ज़रूरत नहीं ,
क्योंकि हमारा साथ ही हमें पूरा कर रहा होगा।”`,
        volume: "4",
        topics: ["life","alone","reality"],
        date: "2026-05-24"
    },



    {title: "Dhundhta hu",
        text: `"बिखरे हुए पन्नों पर खामोशी का ही शोर होता है,
ढूँढता हूँ खुद को पर अब हर तरफ कोई और होता है।"`,
        volume: "1",
        topics: ["alone","deep"],
        date: "2026-05-24"
    },
    {title: "Behtar",
        text: `“किसी और से बेहतर होने की ज़िद नहीं है मेरी,
बस अपने ही पुराने ‘मैं’ से थोड़ा बेहतर होना चाहता हूँ।”1`,
        volume: "1",
        topics: ["alone","motivation"],
        date: "2026-05-24"
    },
    {title: "Khud ko bhool gaye",
        text: `दूसरों की उम्मीदों पे खरा उतरते उतरते,
हम खुद को भूल गए…
हम वो परिंदे हैं,
जो उड़ान भरने से पहले उड़ना भूल गए।`,
        volume: "1",
        topics: ["alone","reality","life","deep"],
        date: "2026-05-24"
    },
    {title: "Mushkil",
        text: `“मुश्किल सवालों में उलझा हुआ हर एक लम्हा है,
हल मिल जाएगा — यकीन है,
पर अभी ये सफर तन्हा है…”`,
        volume: "1,3",
        topics: ["alone","deep","life"],
        date: "2026-05-"
    },
    {title: "Khud hi kho chuka hu",
        text: `खुद ही खुद में खो चुका हूँ,
जाने किसका हो चुका हूँ…

रास्ते तो खुद ही चुने  ,
पर उनमें अब उलझ चुका हूँ।

हर मोड़ पे सहमा सा  
 फैसलों से अपने डर चुका हूं ।

गलत नहीं था इरादा मेरा,
बस हर दिशा में बंट चुका हूं  ।

दिन में खुद को समझा  हूँ लेता,
रातों में फिर हूं टूटता।

कभी है लगता  सब ठीक होगा,
कभी इस सोच से हूं थक चुका ।

चल तो रहा हूँ अब भी मैं…
पर जाने किस ओर हूं मुड़ा।`,
        volume: "3",
        topics: ["alone","deep","life"],
        date: "2026-05-24"
    },
    {title: "Puchti ho",
        text: `जान… जाने से पहले क्यों पूछती हो,
मेरे इंतज़ार का सबब,  पूछती हो…

जब जाना ही था… 
तो सवाल, क्यों …


जान भी जिस्म से जाती है…
 तो, कब पूछती है… 💔`,
        volume: "4",
        topics: ["reality","love","sad"],
        date: "2026-05-24"
    }
  

];