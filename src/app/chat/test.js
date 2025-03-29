const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("データベースに接続しました！");
  } catch (error) {
    console.error("データベース接続エラー:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
