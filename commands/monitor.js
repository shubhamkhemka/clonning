const fs=require('chokidar');
const path=require('path');


module.exports.monitor=function(){
    console.log("i am monitor");
    let src=arguments[0];
    fs.watch(src, (eventType, filename) => {
        console.log(eventType);
          var datetime = new Date();
    console.log(datetime);
        console.log(filename);
        })
}