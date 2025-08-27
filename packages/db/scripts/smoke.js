const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async () => {
  try {
    const userCount = await prisma.user.count();
    const mediaCount = await prisma.media.count();
    const reviewCount = await prisma.review.count();
    console.log({ userCount, mediaCount, reviewCount });
  } catch (err) {
    console.error('Smoke test failed:', err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
