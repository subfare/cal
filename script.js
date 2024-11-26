body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f3e9;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.calendar-container {
    text-align: center;
    max-width: 600px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #8b0000;
}

.calendar {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.door {
    position: relative;
    width: 100px;
    height: 100px;
    background: #d4af37;
    border: 2px solid #8b0000;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}

.door.locked {
    background: #8b0000;
    cursor: not-allowed;
}

.door.locked::after {
    content: "🎁";
    font-size: 2rem;
    color: #fff;
}

.door.unlocked::after {
    content: "🎁";
    font-size: 2rem;
    animation: bounce 0.8s infinite;
}

.door .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    color: #333;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.door.unlocked .content {
    display: flex;
    animation: fadeIn 0.5s ease;
}

.door:hover {
    transform: scale(1.1);
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
