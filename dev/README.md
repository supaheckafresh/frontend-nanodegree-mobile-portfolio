Instructions for reviewer:

1.  Reviewer should be able to use the deployed gh-pages sites for evaluating PageSpeed Insights and animation framerate.
    Here are direct links to the relevant pages:
        * http://supaheckafresh.github.io/frontend-nanodegree-mobile-portfolio/
        * http://supaheckafresh.github.io/frontend-nanodegree-mobile-portfolio/pizza.html
    
    Here's a quick link to the PageSpeed test for the portfolio page if you're feeling lazy:
        * https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fsupaheckafresh.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile
   
2.  When reviewing my code, it should be the noted that the files associated with the deployed links above are minimized 
    (contained in 'master/production/' directory of git repository), so reviewer should view files contained in the
    'master/dev/' directory for easier reading. I also chose to simplify the production directory structure as I felt
    separating the pizza-related files into their own 'views' directory was more confusing than beneficial.
  
3.  I'm using Gulp for partially automating the build process. Running the command 'gulp' in the terminal while in the
    'master' branch generates the minified/optimized files found in 'master/production'. I don't think it will be 
    necessary for the reviewer to build the site themselves, but if you would like to do so you'll need to first 
    download a local copy of my repository, including 'gulpfile.js' and 'dev/package.json'. Running the terminal command 
    'npm update' should install the required dependencies (the 'gulp' command described above should work after the 
    dependencies are installed).

4.  Thanks so much for reviewing my project & let me know if you have any questions. Have an awesome day!