function c(s) {
  if (!s.length) return '';
  let h = s.reduce((a,b) => a.length <= b.length ? a :  b), m = h.length;
  for (let l = m; l > 0; l--){
    for (let b = 0; b <= m-l; b++){
      let o = h.substring(b, b+l);
      if (s.every( e=> e.includes(o)))
        return o;
    }
  }
  return '';
}
console.log(c(process.argv.slice(2)))
