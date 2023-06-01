import './App.css'
import React from 'react';

const App = () => {
  const handleCreate = (platform) => {
    console.log(`Creating with ${platform}...`);
    // Add your logic here to create with the selected platform
  };

  const handleSAML = () => {
    console.log('Doing SAML...');
    // Add your logic here for SAML integration
  };

  return (
    <div>
      <h1>Talisman, <i>know your audience</i></h1>

      <button onClick={() => handleCreate('LinkedIn')}>Create with LinkedIn</button>
      <button onClick={() => handleCreate('Facebook')}>Create with Facebook</button>
      <button onClick={() => handleCreate('GitHub')}>Create with GitHub</button>
      <button onClick={() => handleCreate('Instagram')}>Create with Instagram</button>
      <button onClick={() => handleCreate('TikTok')}>Create with TikTok</button>
      <button onClick={handleSAML}>Whomever does SAML</button>

      <h3>What is Talisman?</h3>
      <p>
        Who is your biggest fan and critic? Link an account and Talisman reviews the past month of interactions.</p>
      <p>What are people saying? Who is annoying? Who needs reporting?
      </p>
      <p>You are in charge.</p>
    </div>
  );
};

export default App;
