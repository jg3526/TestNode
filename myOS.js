var os = require('os')	// bringing in the os module
var message = "Here is some information about my Operating System:";

var sysarray = new Array('Type: ' + os.type(),
						'Node Version: ' + process.version,	// process object can be accessed globally without pulling in
						'Platform: ' + os.platform(),
						'Hostname: ' + os.hostname(),
						'Total Memory: ' + os.totalmem(),
						'Free Memory: ' + os.freemem(),
						'Uptime: ' + os.uptime());

console.log(message);

var len = sysarray.length;

var i = 0;
while (i < len) {
	console.log(sysarray[i]);
	i++;
}
