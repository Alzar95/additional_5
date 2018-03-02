module.exports = function check(str, bracketsConfig) {
    var tmp = 0;
    var last = [];
    var arrayBool = [];

    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] == str.charAt(i)) {
                if(bracketsConfig[j][0] == bracketsConfig[j][1] && (arrayBool[j] == undefined || arrayBool[j] == false)) {
                    arrayBool[j] = true;
                    tmp++;
                    last.push(i);
                }
                else if(bracketsConfig[j][0] == bracketsConfig[j][1] && arrayBool[j] == true) {
                    arrayBool[j] = false;
                    tmp--;

                    if(last.length > 0) {
                        if (str.charAt(last[last.length - 1]) != bracketsConfig[j][0]) {
                            return false;
                        } else {
                            last.pop();
                        }
                    }
                }
                else {
                    tmp++;
                    last.push(i);
                }
            } else if(bracketsConfig[j][1] == str.charAt(i)) {
                    tmp--;

                if(last.length > 0) {
                    if (str.charAt(last[last.length - 1]) != bracketsConfig[j][0]) {
                        return false;
                    } else {
                        last.pop();
                    }
                }
            }
            if(tmp == -1) {
                return false;
            }
        }
    }

   return last.length == 0;
}
