import React, { useState } from 'react';
import axios from 'axios'; // Install axios: npm install axios

function App() {

  const [business_name, setBusiness_name] = useState('');
  const [abn, setAbn] = useState('');
  const [catagory, setCatagory] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/businesses/register', {
        business_name,
        abn,
        catagory,
        email,
        mobile,
      });
      console.log(response.data); // Handle successful response (optional)
      setBusiness_name('');
      setAbn('');
      setCatagory('');
      setEmail('');
      setMobile('');
    } catch (error) {
      console.error(error); // Handle errors (optional)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="business_name">business_name:</label>
      <input type="text" id="business_name" value={business_name} onChange={(e) => setBusiness_name(e.target.value)} />

      <label htmlFor="abn">abn:</label>
      <input type="text" id="abn" value={abn} onChange={(e) => setAbn(e.target.value)} />

      <label htmlFor="catagory">catagory:</label>
      <input type="text" id="catagory" value={catagory} onChange={(e) => setCatagory(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label htmlFor="mobile">Mobile:</label>
      <textarea type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App
