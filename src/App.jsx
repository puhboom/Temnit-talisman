import React from 'react';
import './App.css';

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
    <main>
      <h1>Talisman, <i>know your audience</i></h1>

      <h2>What is talisman?</h2>
      <p>Who is your biggest fan? ...and critic? Link an account and Talisman will review the past month of interactions.</p>
      <p><li>What are people saying?</li><li> Who is annoying?</li>  <li>Who needs reporting?</li> </p>
      <p><br></br><i><b>You are in charge.</b></i>
      </p>

      <button className="button primary-button" onClick={() => handleCreate('LinkedIn')}>Create with LinkedIn</button><br></br>
      <button className="button primary-button" onClick={() => handleCreate('Facebook')}>Create with Facebook</button><br></br>
      <button className="button primary-button" onClick={() => handleCreate('GitHub')}>Create with GitHub</button><br></br>
      <button className="button primary-button" onClick={() => handleCreate('Instagram')}>Create with Instagram</button><br></br>
      <button className="button primary-button" onClick={() => handleCreate('TikTok')}>Create with TikTok</button><br></br>
      <button className="button primary-button" onClick={handleSAML}>Whomever does SAML</button>

    </main>
  );
};

export default App;
