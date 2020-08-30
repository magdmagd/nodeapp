var os = require('os');

var message = 'Here is some info about your system';

var sysarray = new Array('Node Version :'+process.version ,
                        'Type :'+os.type(),
                        'Platform :'+os.platform(),
                        'Hostname :'+os.hostname() ,
                        'Total Memory :'+os.totalmem(),
                        'Free Memory :'+os.freemem(),
                        'Up Time  : '+os.uptime()
                           )//end Array

console.log(message+'\n')                           
console.log(sysarray);