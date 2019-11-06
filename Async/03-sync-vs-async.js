const fs = require('fs');

// SYNC
try {
  const content = fs.readFileSync('.editorconfig', {encoding: 'UTF-8'});
  fs.writeFileSync('.editorconfig.copy', content);
  console.log('COPY SYNC DONE');
} catch (err) {
  console.log(err.message);
}

// ASYNC basée sur des callbacks Node.js
// Callback Hell / Pyramid of doom
fs.readFile('.editorconfig', {encoding: 'UTF-8'}, (err, content) => {
  if (err) {
    return console.log(err.message);
  } else {
    fs.writeFile('.editorconfig.copy', content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('COPY ASYNC DONE');
      }
    });
  }
});

// ^
// |                      writeFile        log
// |readFile ...          =>        ...    =>
// +------------------------------------------------

// ASYNC => Promise / Promesses
// D'abord avec des bibliothèques : Bluebird / q
// Normée en ES6
fs.promises.readFile('.editorconfig', {encoding: 'UTF-8'})
  .then((content) => fs.promises.writeFile('.editorconfig.copy', content))
  .then(() => console.log('COPY ASYNC PROMISE DONE'))
  .catch((err) => console.log(err.message));

// ASYNC (ES2018) => async / await
(async () => {
  try {
    const content = await fs.promises.readFile('.editorconfig', {encoding: 'UTF-8'});
    await fs.promises.writeFile('.editorconfig.copy', content);
    console.log('COPY ASYNC AWAIT DONE');
  } catch (err) {
    console.log(err.message);
  }
})();
