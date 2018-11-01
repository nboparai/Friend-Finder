# Friend-Finder
"FriendFinder" application is basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

 Express is used to handle routing. 

Survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Express is used to handle routing.
htmlRoutes.js file include two routes:
    -A GET Route to /survey which should display the survey page.
    -default, catch-all route that leads to home.html which displays the home page. 

apiRoutes.js file contains two routes:
    -A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
    -A POST routes /api/friends. This is used to handle incoming survey results. This route is also be used to handle the compatibility logic. 


Application's data is stored inside of app/data/friends.js as an array of objects. 



Best match is found by comparing the difference between current user's scores against those from other users, question by question. Absoukte values of differences are added to get total score. Person with the minimum score is found to be the best match




Applicairon is pushed to Github and Hosted on Heroku
Other technolgies used: Node, express, jquery, javascript, bootstrap, HTML, CSS

