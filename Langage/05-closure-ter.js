// 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

function externe(msg) {
  return function() {
    console.log(msg);
  };
}

// 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}
