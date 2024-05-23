import React, { useState } from 'react';
import './App.css'; 
function App() {
  const [users, setUsers] = useState([]);
  const [createUserDisabled, setCreateUserDisabled] = useState(false);

  const userNames = ["Alpha", "Beta", "Gamma", "Delta"]; // Predefined user names

  const handleCreateUser = () => {
    const newUser = { id: Date.now(), name: userNames[users.length % userNames.length], currentStep: 1 };
    setUsers([...users, newUser]);
    setCreateUserDisabled(true);
  };

  const handleNext = (userId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const nextStep = user.currentStep === 4 ? 1 : user.currentStep + 1;
        return { ...user, currentStep: nextStep };
      }
      return user;
    }));
    if (users.some(user => user.id === userId && users[users.length - 1].currentStep === 4)) {
      setCreateUserDisabled(false);
    }
  };

  return (
    <StepButton key={step} label={'Step ' + step} active={user.currentStep === step} />
  );
}

function StepButton({ label, active }) {
  return <button className={"step-btn " + (active ? "active" : "")}>{label}</button>;
}

export default App;