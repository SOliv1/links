{"filter":false,"title":"main.js","tooltip":"/ajax-script/main.js","undoManager":{"mark":36,"position":36,"stack":[[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":188},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":189}],[{"start":{"row":29,"column":28},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":190}],[{"start":{"row":17,"column":6},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":191},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":4},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":4},"end":{"row":20,"column":0},"action":"insert","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":4},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":21,"column":4},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":192},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":4},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":19,"column":3},"end":{"row":35,"column":1},"action":"insert","lines":["xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","","function writeToDocument(type) {","","    getData(type, function(data) {","","        document.getElementById(\"data\").innerHTML = data;","","    });","","}"],"id":193}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":194}],[{"start":{"row":0,"column":0},"end":{"row":51,"column":0},"action":"remove","lines":["function getData(cb) {","","    var xhr = new XMLHttpRequest();","","    xhr.open(\"GET\", \"https://swapi.co/api/\");","","    xhr.send();","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","    ","   xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","function writeToDocument(type) {","","    getData(type, function(data) {","","        document.getElementById(\"data\").innerHTML = data;","","    });","","} ","    ","    ","    ","    ","","}","","","","function printDataToConsole(data) {","","    console.log(data);","","}","","getData(printDataToConsole);",""],"id":195}],[{"start":{"row":0,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["const baseURL = \"https://swapi.co/api/\";","","","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","","function writeToDocument(type) {","","    getData(type, function(data) {","","        document.getElementById(\"data\").innerHTML = data;","","    });","","}"],"id":196}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["",""],"id":197},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":198},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":40},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":199}],[{"start":{"row":1,"column":28},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":200}],[{"start":{"row":8,"column":57},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":201}],[{"start":{"row":0,"column":0},"end":{"row":31,"column":1},"action":"remove","lines":["const baseURL = \"https://swapi.co/api/\";","function getData(type, cb) {","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","            cb(JSON.parse(this.responseText));","","        }","","    };","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","","function writeToDocument(type) {","","    getData(type, function(data) {","","        document.getElementById(\"data\").innerHTML = data;","","    });","","}"],"id":202}],[{"start":{"row":0,"column":0},"end":{"row":52,"column":1},"action":"insert","lines":["const baseURL = \"https://swapi.co/api/\";","","","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","","function writeToDocument(type) {","","    var el = document.getElementById(\"data\");","","    el.innerHTML = \"\";","","","","    getData(type, function(data) {","","        data = data.results;","","","","        data.forEach(function(item) {","","            el.innerHTML += \"<p>\" + item.name + \"</p>\";","","        });","","    });","","}"],"id":203}],[{"start":{"row":44,"column":37},"end":{"row":45,"column":0},"action":"remove","lines":["",""],"id":204}],[{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"remove","lines":["",""],"id":205},{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":38,"column":34},"end":{"row":39,"column":0},"action":"remove","lines":["",""],"id":206}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":207},{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":32,"column":45},"end":{"row":33,"column":0},"action":"remove","lines":["",""],"id":208}],[{"start":{"row":30,"column":32},"end":{"row":31,"column":0},"action":"remove","lines":["",""],"id":209}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":210}],[{"start":{"row":26,"column":1},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":211}],[{"start":{"row":24,"column":15},"end":{"row":25,"column":0},"action":"remove","lines":["",""],"id":212}],[{"start":{"row":22,"column":42},"end":{"row":23,"column":0},"action":"remove","lines":["",""],"id":213}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["",""],"id":214}],[{"start":{"row":18,"column":6},"end":{"row":19,"column":0},"action":"remove","lines":["",""],"id":215}],[{"start":{"row":16,"column":9},"end":{"row":17,"column":0},"action":"remove","lines":["",""],"id":216}],[{"start":{"row":14,"column":46},"end":{"row":15,"column":0},"action":"remove","lines":["",""],"id":217}],[{"start":{"row":12,"column":57},"end":{"row":13,"column":0},"action":"remove","lines":["",""],"id":218}],[{"start":{"row":10,"column":41},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":219}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":220}],[{"start":{"row":6,"column":35},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":221}],[{"start":{"row":4,"column":28},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":222}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":223}],[{"start":{"row":0,"column":40},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":224}]]},"ace":{"folds":[],"scrolltop":172,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":10,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1568294776600,"hash":"11abbe854c10808f97eed506a7335700b0fe4ec3"}