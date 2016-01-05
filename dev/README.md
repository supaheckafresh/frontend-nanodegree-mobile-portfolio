## TODO: update readme! Include gulp instructions for building site.

Instructions for reviewer:

1. Reviewer should be able to use the deployed gh-pages sites for evaluating PageSpeed Insights and animation framerate.
  Here are direct links to the relevant pages:
    * http://supaheckafresh.github.io/frontend-nanodegree-mobile-portfolio/
    * http://supaheckafresh.github.io/frontend-nanodegree-mobile-portfolio/pizza.html
    
  Here's a quick link to the PageSpeed test for the portfolio page if you're feeling lazy:
    * https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fsupaheckafresh.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile
   
2. It should be the noted that the files associated with the deployed links above are minimized (contained in 
  'master/production/' directory of git repository), so reviewer should view files contained in 'master/dev/' directory 
  for easier reading. I also chose to simplify the production directory structure as I didn't see the merit of keeping
  the pizza related files in a separate 'views' directory.
  
3. I did use gulp for partially automating the build process. Running the command 'gulp' in the terminal while in the
  'master' branch generates the minified/optimized files contained in 'master/production'. I don't think it will be 
  necessary for the reviewer to build the site themselves, but if you'd like to do so you'll need to first download a
  local copy of my repository, including 'gulpfile.js' and 'dev/package.json'. Running the terminal command 
  'npm update' should install the required dependencies.
  