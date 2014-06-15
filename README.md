RailsIssuesOnGitHub
===================

A demo HTML, CSS, JavaScript, jQuery, Backbone, Underscore, Modernizr project

This simple web app displays the latest open issues on the Rails repo on GitHub. It displays well on desktop, tablet and mobile phone devices, and is a relatively effortless responsive design.

It applies the master-detail pattern, displaying a list of issues which can be selected for viewing additional details.

This web app has two distinctly different stylesheets, which can be swapped out by commenting out one stylesheet reference in the document header.

Best practice for a larger app would be to break out the HTML and JavaScript files into separate files. For example, the script templates would be removed from the issueList.html page and placed into one or more separate files. Likewise, the models, views and controllers in the script.js file would be moved out into separate files. The main reason that I have not done this here is that I wanted to retain the ability to test my code on various devices and platforms (iPad and Android phone) by posting it on CodePen.

The green and white version is at http://codepen.io/daphneokeefe/pen/vwqyd

The black and red version is at http://codepen.io/daphneokeefe/pen/CFpfj

The missing feature: pagination. There are some details here: https://developer.github.com/v3/#pagination
Basically, it entails reading the response header to get the URLs for the next and previous page.
