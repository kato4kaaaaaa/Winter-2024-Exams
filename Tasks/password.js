// Generate random password

let GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
const GeneratePassword = (alphabet, length) => {
  const max = alphabet.length
  let key = " "

  for (let i = 0; i < length; i++) {
    const Index = Math.floor(Math.random() * max)
    key = key + alphabet[Index]
 }

return key 
}  
