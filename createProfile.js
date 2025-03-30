const { PrismaClient } = require("@prisma/client");
const bcryptjs = require("bcryptjs");
const prisma = new PrismaClient();

(async () => {
    const hashedPassword = await bcryptjs.hash("1234", 10);

    await prisma.user.create({
        data: {
            name: "Warden",
            collegeId: "warden@imsec.ac.in",
            role: "WARDEN",
            password: hashedPassword,
        },
    });

    console.log("User created successfully");
    await prisma.$disconnect();
})();
