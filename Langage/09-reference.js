const s1 = 'Jean';
let s2 = s1;
s2 = 'Eric';
console.log(s1); // Jean

const o1 = {s: 'Jean'};
const o2 = o1;
o2.s = 'Eric';
console.log(o1.s); // Eric
