exports.handler = async () => {
    const number = Math.floor(Math.random() * 100);
    const even = number % 2 === 0;
    console.log('Number:', number, '| Even:', even);
  
    return {
      even // returns: { "even": true } or { "even": false }
    };
  };
