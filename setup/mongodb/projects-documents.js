// Run: mongo < setup\mongodb\projects-documents.js
db.getCollection("Projects").drop();
db.createCollection("Projects")
db.getCollection("Projects").insertMany([
    {
        title: "CompreAlugueAgora",
        description: "I have experience with Java and Spring Boot (versions 11 and 18), using Maven and Kafka for integration. Additionally, I have worked on Functional Java programming and stream data processing with KSQL. I implemented e-commerce solutions with Magento 2, employing Docker for deployment, and utilized Elastic Search, Elastic Log, and Kafka RedPanda for efficient data handling.",
        preview: "https://www.comprealugueagora.com.br",
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["PHP", "Java 11 e 18", "Maven", "Springboot", "Kafka", "Docker", "Elastic Search", "Elastic Log", "KSQL", "Bash Scripting", "Magento 2"],
    },
    {
        title: "Blockbit",
        description: "In my active development role, I worked extensively with embeddable systems. I developed IPv6 implementations from ICMP to Ping, along with TCP-layer requirements to run simultaneously with IPv4. Additionally, I handled the migration of legacy C98 code to C++11 and made necessary fixes to the internal backend using PHP interfaces.",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["C/C++", "PHP", "Linux", "Embaddable systems", "PostgreSQL", "ZeroMQ", "GoLang", "Linux", "Bash Scripting", "Perl Scripting"],
    },
    {
        title: "Devires E-mail Marketing",
        description: "In my role, I managed frontend pages, making on-premise changes as needed. However, the most enjoyable aspect was developing a comprehensive system to handle significant email marketing challenges arising from various Outlook versions, Windows 10 Mail, and other mail services. This project allowed me creative freedom, and I successfully integrated existing templating engines into their email marketing pipeline.",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["Node.js", "Redux.js", "CSS3", "HTML5", "React.js", "GraphQL", "Outlook", "Email marketing"],
    },
    {
        title: "HomeGuru App",
        description: "My primary focus was addressing mobile map performance problems and enhancing their React Native pipeline. I utilized effective techniques, such as optimized rendering for Android and IOS, and grouped multiple map pointers into a single one, displaying the total number of location pings in each chunk. This solution resolved the core performance issue and significantly improved the app's stability, with 90% of tested devices no longer experiencing crashes or lag.",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["React Native", "GraphQL", "ExpoJS", "Redux.js", "Android", "iOS"],
    },
    {
        title: "KKE - KatLab Kernel Emulator",
        description: "Created with intention to emulate a fully operational Windows Kernel with the purpose of debugging malwares that operates on the same level as the Ring0 a.k.a Kernel Mode those are called Rootkits and this tools is created with the intention to see what those rootkits can do and how they behave on many environments",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["C++", "Reverse Engineering", "Kernel Mode", "Windows"],
    },
    {
        title: "KLS - KatLab Licensing Service",
        description: "Created to manage and automate the selling for digital assets, contain a fully implemented sealed rsa box based on the same principles used in sodium lib, has a proper implementation for oAuth2 and LDAP highly customizable and is widely used to manage those digital assets containing even the subscription management model",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["Node.js", "OAuth2", "LDAP", "MySQL", "Sealed RSA Box", "JWT", "Digital Assets", "Subscription Management", "Docker", "DRM"],
    },
    {
        title: "ARL: App Remote Loader",
        description: "Project entirely created to remote load code into the v8 engine directly this is created to make customers code arrive their clients in a same manner using C++ custom code to manage V8 injection and uses C++ to intercept and decrypt the payloads for a safe loading",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["C++", "V8", "Reverse Engineering", "Windows", "Linux", "macOS", "Electron", "Node.js", "Docker"],
    },
    {
        title: "KatVM - KatLab Virtual Machine for V8",
        description: "This is a fork for the V8 Engine the engine is following the mainline of the original code but with the encrypted payload injection as the core for using in parallel with ARL project uses heavy obfuscation as one of the protections against potential crackers and LLVM tricks to obscure the entire IL tree before the linking processes",
        preview: undefined,
        source: undefined,
        imageSrc: "https://v1.tailwindcss.com/img/card-top.jpg",
        stack: ["C++", "V8", "Reverse Engineering", "Windows", "Linux", "macOS"],
    }
]);