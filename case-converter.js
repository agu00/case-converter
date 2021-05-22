    function sentenceCase() {
            var firstInput = document.getElementById('textInput').value.trim().toLowerCase().split(' ');
            for(var i = 0;i < firstInput.length;i++) {
                firstInput[0] = firstInput[0].charAt(0).toUpperCase() + firstInput[0].slice(1);
                document.getElementById('result').innerHTML = firstInput.join(' ');

            }

        }

        function capitalizedCase() {
            var firstInput = document.getElementById('textInput').value.trim().toLowerCase().split(' ');
            
            for(var i = 0;i < firstInput.length;i++) {
                firstInput[i] = firstInput[i].charAt(0).toUpperCase() + firstInput[i].slice(1); 
                document.getElementById('result').innerHTML = firstInput.join(' ');
            }         
        }            
            
        function urlCase() {
            document.getElementById('result').innerHTML = document.getElementById('textInput').value.toLowerCase().trim().replace('&','and').replace(/ś/ig, 's').replace(/ń/ig, 'n').replace(/ć/ig, 'c').replace(/ź/ig, 'z').replace(/ż/ig, 'z').replace(/ą/ig,'a').replace(/ę/ig,'e').replace(/ó/ig,'o').replace(/ł/ig,'l').replace('@', 'at').replace('#', 'number-').replace('£', 'pound').replace(/ /g, '-').replace(/–|\|/,'').replace('--','-').replace('---','-').replace(/^-+|-+$|:|;|,|\.|'|"|\?|\!|\(|\)/gi,'');  

        }
        
        function copyText() {
            document.getElementById('result').select();
            document.execCommand("copy");

        }
