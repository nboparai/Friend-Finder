// Load data from freinds.js

var memberData = require("../data/friends");

module.exports = function(app) {
    
  
    

    app.post("/api/friends", function(req, res) {
        
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        
          memberData.push(req.body);
         console.log(memberData);
       
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