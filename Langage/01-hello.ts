function bonjour(name: string) {
  return `Hello ${name.toUpperCase()}`;
}

const names = ['Jean', 'Eric'];

names.forEach((prenom) => {
  console.log(bonjour(prenom));
});
