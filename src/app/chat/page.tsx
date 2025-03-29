'use client'
import React, { useState } from 'react';

const ChatPage: React.FC = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [input, setInput] = useState<string>('');

	const handleSend = () => {
		if (input.trim()) {
			setMessages([...messages, input]);
			setInput('');
		}
	};

	return (
		<div style={{ padding: '20px' }}>
			<h1>Chat Page</h1>
			<div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
				{messages.map((message, index) => (
					<div key={index} style={{ margin: '10px 0' }}>
						{message}
					</div>
				))}
			</div>
			<div style={{ marginTop: '10px' }}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					style={{ width: '80%', padding: '10px' }}
				/>
				<button onClick={handleSend} style={{ padding: '10px 20px', marginLeft: '10px' }}>
					Send
				</button>
			</div>
		</div>
	);
};

export default ChatPage;