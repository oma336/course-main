const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// HTML + CSS + JS في نفس الملف
const html = `
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>🔥 شات مباشر 🔥</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(to right, #1e3c72, #2a5298);
      color: #fff;
      margin: 0;
      padding: 0;
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }
    .chat-container {
      background: #ffffff22;
      padding: 20px;
      border-radius: 12px;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 0 10px #00000066;
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .messages {
      height: 300px;
      overflow-y: auto;
      background: #00000033;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .message {
      margin: 5px 0;
      padding: 8px;
      background: #ffffff33;
      border-radius: 6px;
    }
    form {
      display: flex;
      gap: 10px;
    }
    input[type="text"] {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 6px;
      outline: none;
    }
    button {
      padding: 10px 15px;
      background-color: #ff4081;
      border: none;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background-color: #e91e63;
    }
  </style>
</head>
<body>
  <div class="chat-container">
    <h2>🔥 شات مباشر 🔥</h2>
    <div id="messages" class="messages"></div>
    <form id="chat-form">
      <input id="username" type="text" placeholder="اسمك" required />
      <input id="message" type="text" placeholder="اكتب رسالتك..." required autocomplete="off" />
      <button type="submit">إرسال</button>
    </form>
  </div>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    const form = document.getElementById('chat-
