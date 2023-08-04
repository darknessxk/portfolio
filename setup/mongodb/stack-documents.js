// Run: mongo < setup\mongodb\stack-documents.js
db.getCollection("Stack").drop();
db.createCollection("Stack")
db.getCollection("Stack").insertMany([
        {
            Name: "HTML5",
            Tags: ["Language", "Web"],
            Item: "SiHtml5",
            Class: "text-red-500"
        },
        {
            Name: "PHP",
            Tags: ["Language", "Web", "Featured"],
            Item: "SiPhp",
            Class: "text-blue-500"
        },
        {
            Name: "C++",
            Tags: ["Language", "Desktop", "Mobile", "Embedded", "Web", "Featured"],
            Item: "SiCplusplus",
            Class: "text-gray-800"
        },
        {
            Name: "AWS",
            Tags: ["Cloud", "Featured"],
            Item: "SiAmazonaws",
            Class: "text-yellow-500"
        },
        {
            Name: "Google Cloud",
            Tags: ["Cloud", "Featured"],
            Item: "SiGooglecloud",
            Class: ""
        },
        {
            Name: "Postgres",
            Tags: ["Database", "Featured"],
            Item: "SiPostgresql",
            Class: "text-blue-300"
        },
        {
            Name: "Apache Kafka",
            Tags: ["Message"],
            Item: "SiApachekafka",
            Class: "text-gray-800"
        },
        {
            Name: "Kubernetes",
            Tags: ["Cloud", "Container", "Orchestration", "CD", "Featured"],
            Item: "SiKubernetes",
            Class: "text-blue-800"
        },
        {
            Name: "Docker",
            Tags: ["Container", "Cloud", "CD", "Virtualization", "Featured"],
            Item: "SiDocker",
            Class: "text-blue-800"
        },
        {
            Name: "Webstorm",
            Tags: ["Tool"],
            Item: "SiWebstorm",
            Class: "text-blue-800"
        },
        {
            Name: "Flutter",
            Tags: ["Language", "Desktop", "Mobile", "Embedded", "Web", "Featured"],
            Item: "SiFlutter",
            Class: "text-blue-400"
        },
        {
            Name: "React",
            Tags: ["Framework", "Web"],
            Item: "SiReact",
            Class: "text-blue-800"
        },
        {
            Name: "Typescript",
            Tags: ["Language", "Web", "Desktop", "Mobile"],
            Item: "SiTypescript",
            Class: "text-blue-800"
        },
        {
            Name: "WebAssembly",
            Tags: ["Framework", "Web", "Desktop", "Mobile"],
            Item: "SiWebassembly",
            Class: "text-blue-800"
        },
        {
            Name: "WebGL",
            Tags: ["Framework", "Web", "Desktop", "Mobile"],
            Item: "SiWebgl",
            Class: "text-blue-800"
        },
        {
            Name: "Next.js",
            Tags: ["Framework", "Web"],
            Item: "SiNextdotjs",
            Class: "text-gray-800"
        },
        {
            Name: "Nest.js",
            Tags: ["Framework", "Web"],
            Item: "SiNestjs",
            Class: "text-red-700"
        },
        {
            Name: "Arduino",
            Tags: ["Framework", "Hardware", "Embedded"],
            Item: "SiArduino",
            Class: "text-green-400"
        },
        {
            Name: "Apple",
            Tags: ["OS"],
            Item: "SiApple",
            Class: "text-gray-800"
        },
        {
            Name: "CircleCI",
            Tags: ["CI"],
            Item: "SiCircleci",
            Class: "text-gray-600"
        },
        {
            Name: "C",
            Tags: ["Language", "Desktop", "Mobile", "Embedded"],
            Item: "SiC",
            Class: "text-gray-800"
        },
        {
            Name: "CSS3",
            Tags: ["Language", "Web"],
            Item: "SiCss3",
            Class: "text-blue-400"
        },
        {
            Name: "HeadlessUI",
            Tags: ["Framework", "Web"],
            Item: "SiHeadlessui",
            Class: "text-gray-800"
        },
        {
            Name: "Helm",
            Tags: ["Framework", "Orchestration"],
            Item: "SiHelm",
            Class: "text-gray-800"
        },
        {
            Name: "Jira",
            Tags: ["Tool", "Management"],
            Item: "SiJira",
            Class: "text-blue-800"
        },
        {
            Name: "Kotlin",
            Tags: ["Language", "Web", "Desktop", "Mobile"],
            Item: "SiKotlin",
            Class: "text-gray-800"
        },
        {
            Name: "Koa",
            Tags: ["Framework", "Web"],
            Item: "SiKoa",
            Class: "text-gray-800"
        },
        {
            Name: "Laravel",
            Tags: ["Framework", "Web"],
            Item: "SiLaravel",
            Class: "text-red-400"
        },
        {
            Name: "Laravel Horizon",
            Tags: ["Framework", "Web"],
            Item: "SiLaravelhorizon",
            Class: "text-red-500"
        },
        {
            Name: "Linux",
            Tags: ["OS"],
            Item: "SiLinux",
            Class: "text-black"
        },
        {
            Name: "Less",
            Tags: ["Language", "Web"],
            Item: "SiLess",
            Class: "text-red-500"
        },
        {
            Name: "MySQL",
            Tags: ["Database"],
            Item: "SiMysql",
            Class: "text-blue-500"
        },
        {
            Name: "Node.js",
            Tags: ["Language", "Web", "Desktop", "Mobile"],
            Item: "SiNodedotjs",
            Class: "text-green-400"
        },
        {
            Name: "NPM",
            Tags: ["Tool", "Package Manager"],
            Item: "SiNpm",
            Class: "text-red-500"
        },
        {
            Name: "Nuget",
            Tags: ["Tool", "Package Manager"],
            Item: "SiNuget",
            Class: "text-blue-500"
        },
        {
            Name: "Nuxt.js",
            Tags: ["Framework", "Web"],
            Item: "SiNuxtdotjs",
            Class: "text-green-500"
        },
        {
            Name: "OpenGL",
            Tags: ["Framework", "Web", "Desktop", "Mobile"],
            Item: "SiOpengl",
            Class: "text-blue-500"
        },
        {
            Name: "OpenID",
            Tags: ["Framework"],
            Item: "SiOpenid",
            Class: "text-gray-700"
        },
        {
            Name: "PfSense",
            Tags: ["OS"],
            Item: "SiPfsense",
            Class: "text-blue-500"
        },
        {
            Name: "Playwright",
            Tags: ["Framework", "Web", "Testing"],
            Item: "SiPlaywright",
            Class: "text-blue-500"
        },
        {
            Name: "Plesk",
            Tags: ["Tool", "Management", "Cloud"],
            Item: "SiPlesk",
            Class: "text-gray-700"
        },
        {
            Name: "Prisma",
            Tags: ["Framework", "Database"],
            Item: "SiPrisma",
            Class: "text-gray-500"
        },
        {
            Name: "Redis",
            Tags: ["Database"],
            Item: "SiRedis",
            Class: "text-red-500"
        },
        {
            Name: "OpenShift",
            Tags: ["Framework", "Orchestration"],
            Item: "SiRedhatopenshift",
            Class: "text-red-600"
        },
        {
            Name: "Rust",
            Tags: ["Language", "Web", "Desktop", "Mobile", "Embedded"],
            Item: "SiRust",
            Class: "text-red-600"
        },
        {
            Name: "Subversion",
            Tags: ["Tool", "Versioning"],
            Item: "SiSubversion",
            Class: "text-blue-600"
        },
        {
            Name: "SurrealDB",
            Tags: ["Database"],
            Item: "SiSurrealdb",
            Class: "text-purple-600"
        },
        {
            Name: "Swagger",
            Tags: ["Framework", "Web"],
            Item: "SiSwagger",
            Class: "text-gray-600"
        },
        {
            Name: "Terraform",
            Tags: ["Framework", "CI", "CD"],
            Item: "SiTerraform",
            Class: "text-gray-600"
        },
        {
            Name: "Three.js",
            Tags: ["Framework", "Web"],
            Item: "SiThreedotjs",
            Class: "text-purple-600"
        },
        {
            Name: "Vault",
            Tags: ["Framework", "Security"],
            Item: "SiVault",
            Class: "text-gray-600"
        },
        {
            Name: "Github",
            Tags: ["Tool", "Versioning", "Cloud", "CI", "CD"],
            Item: "SiGithub",
            Class: "text-gray-600"
        },
        {
            Name: "Gitlab",
            Tags: ["Tool", "Versioning", "Cloud", "CI", "CD"],
            Item: "SiGitlab",
            Class: "text-red-500"
        },
        {
            Name: "Vercel",
            Tags: ["Tool", "Cloud", "CI", "CD"],
            Item: "SiVercel",
            Class: "text-gray-600"
        },
        {
            Name: "Vmware",
            Tags: ["Tool", "Virtualization"],
            Item: "SiVmware",
            Class: "text-gray-600"
        }
    ]
)
