// Load data from freinds.js

var memberData = require("../data/friends");

module.exports = function(app) {
    
  
    

    app.post("/api/friends", function(req, res) {
        
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        
          memberData.push(req.body);
         console.log(memberData);

         var k = memberData.length;
                console.log(`total members ${k}`);
                console.log(`old members ${memberData}`);
                var resultData = [];
                for (let i = 0; i < memberData.length-1; i++) {
                        var total = 0;
                        for (let j = 0; j < 10; j++) {
                                // console.log(`memebrs scores are ${memberData[i].scores[j]}`)
                                total = total + Math.abs(memberData[i].scores[j] - memberData[k-1].scores[j])
                        }
                        resultData.push(total);

                        console.log(`score array is ${resultData}`);
                        
                
                }
                        
                console.log(`score array is ${resultData}`);
                var min = Math.min(...resultData);  
                var index = resultData.indexOf(min);
                var bestFriend = memberData[index];
                console.log(bestFriend);

                res.json(bestFriend);
      
       
      });
      // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
      app.get("/api/friends", function(req, res) {
        res.json(memberData);
      });
}