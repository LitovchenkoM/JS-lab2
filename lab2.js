var fs = require("fs");
var f1 = fs.readFileSync('access.log', 'utf8');
var ip = f1.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ig);
var s = [];
var ips = [];

for (var i in ip) {
    var seti = ip[i].match(/\d{1,3}\.\d{1,3}\.\d{1,3}\./i);
    if (!(s.includes(seti[0]))) {
        s.push(seti[0]);
    }	
    if (!(ips.includes(ip[i]))) {
        ips.push(ip[i]);
    }
}
s.sort();
for (var i in s) {
    console.log("\nPodset " + s[i]);
    for (var j in ips){
        if (ips[j].startsWith(s[i])) {
           console.log(ips[j]);
        }
    }
}