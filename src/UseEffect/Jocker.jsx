import React, { useEffect, useState } from "react";

function Jocker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [jock, setJock] = useState({});
  const getNewJockes = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    setJock({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstjockes() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      //   console.log(jsonResponse);
      setJock({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstjockes();
  }, []);
  return (
    <div>
      <h1>Jocker!</h1>
      <h2>{jock.setup}</h2>
      <h2>{jock.punchline}</h2>
      <button onClick={getNewJockes}>New Jockes</button>
    </div>
  );
}

export default Jocker;
