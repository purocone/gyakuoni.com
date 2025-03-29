const { PrismaClient } = require("@prisma/client");
const express = require('express');
const app = express();
const PORT = 8000;

// Prismaを使う準備
const prisma = new PrismaClient();
app.use(express.json());

// ✅投稿を作成
app.post("/createPost", async (req:any,res:any) => {
    // リクエストからタイトルと本文を取得
    const {chat_id,room_id,user_pid,chat} = req.body;

    // データベースに1件追加
    const newPost =  await prisma.posts.create({
        data: {
					chat_id:req.chat_id,
					room_id:req.room_id,
					user_pid:req.user_pid,
					chat:req.chat
        },
    });
    return res.json(newPost);
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});