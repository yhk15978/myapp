(function() {
    var cookie = {
        set: function(name, val, date) {
            if (date) {
                var d = new Date();
                d.setDate(d.getDate() + date);
                document.cookie = name + '=' + val + ';expires=' + d + ';path=/';
            } else {
                document.cookie = name + '=' + val + ';path=/';
            }
        },

        get: function(name) {
            var arr = document.cookie.split('; ');
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('=');
                if (arr2[0] === name) {
                    return arr2[1];
                }
            }
            return "";
        },

        remove: function(name) {
            set(name, 1, -1);
        }
    }
    window.cookie = cookie;
})()