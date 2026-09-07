const fs = require("fs");
const [source, output] = process.argv.slice(2);
let s = fs.readFileSync(source, "utf8");
s = s.slice(s.indexOf("const worlds:W[]="), s.indexOf("export default function Campaign"));
s = s.replace("const worlds:W[]=", "const worlds=");
const q = (x, a, b, c, k, f) => [x, a, b, c, k, f];
const fix = (value) => typeof value === "string" && /[ÃÂâ]/.test(value)
  ? Buffer.from(value, "latin1").toString("utf8")
  : Array.isArray(value) ? value.map(fix)
  : value && typeof value === "object" ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, fix(item)]))
  : value;
eval(`${s}\nfs.writeFileSync(output, 'window.WORLDS=' + JSON.stringify(fix(worlds)) + ';(()=>{const l=document.createElement(\\'link\\');l.rel=\\'stylesheet\\';l.href=\\'battle-polish.css?v=7\\';document.head.append(l);const z=document.createElement(\\'script\\');z.src=\\'battle-polish.js?v=7\\';document.head.append(z)})();', 'utf8');`);
