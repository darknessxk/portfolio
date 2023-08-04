// Run: mongo < setup\mongodb\socials-documents.js
db.getCollection("Socials").drop();
db.createCollection("Socials")
db.getCollection("Socials").insertMany([
    {
        href: "https://github.com/darknessxk",
        icon: "FaGithub",
    },
    {
        href: "https://linkedin.com/in/darknessxk",
        icon: "FaLinkedIn",
    }
]);