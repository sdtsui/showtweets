# showtweets
showtweets - Full-Stack Application in jQuery, Bootstrap, ES5, Node/Express, and HTML5/CSS3, on 06-30.  
Uses LocalStorage and Twitter API.

#Adding Readme:
###Minor Points:
- Chose not to use a framework after estimating how much time I had to complete the front-end after scoping. jQuery DOM manupulation isn't well commented, but function calls are modular: refactoring would be quite easy.
(See the commit history for a bit more detail on that.)
- With 24h, I'd have used Backbone, expecting to be able to use templates and view rerendering to create a stack of overlaid tinder-like cards.
- With 48h, I'd have used Angular, with more confidence that I'd be able to expand functionality and optimize on serverside with AngularFire.
Also, [ng-fx](https://github.com/Hendrixer/ngFx), an animation library, would have been a great match for these cards (and your actual ionic app!)
- The single serverside endpoint is hacky and would be cleaner written with promises. My plan was to have the tweets checked there (if a user had seen them), instead of the clientside filtering and (incomplete) use of localstorage.
