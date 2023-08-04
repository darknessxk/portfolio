// Run: mongo < setup\mongodb\projects-documents.js
db.getCollection("Info").drop();
db.createCollection("Info")
db.getCollection("Info").insertOne({
    source: "https://github.com/darknessxk/portfolio",
    version: "1.0.0",
});