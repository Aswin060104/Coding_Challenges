var s1 = "javascript express";
var s2 = "rtscript ety";
var ans = 0;
var ansString = "";
var i = 0;
while (i < s1.length) {
    var j = 0; // Reset j for each iteration of i
    while (j < s2.length) {
        if (s1[i] == s2[j]) {
            var x = i;
            var y = j;
            var tem = "";
            // Continue while characters from s1 and s2 are matching
            while (x < s1.length && y < s2.length && s1[x] == s2[y]) {
                tem += s1[x];
                x++;
                y++;
            }
            if (tem.length > ans) {
                ansString = tem;
                ans = tem.length;
            }
        }
        j++;
    }
    i++;
}
console.log("Longest common substring:", ansString);
console.log("Length of longest common substring:", ans);
