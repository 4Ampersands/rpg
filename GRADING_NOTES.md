# Grading Notes

General
- Brownie points (not actually worth anything) for 'this.troll'!
- Really impressed with how much y'all were able to build into your game. The leaderboard is still buggy, but other than that it works as expected.
- Some UX feedback (just for fun, not points):
    - It wasn't super obvious when a character was selected. The only tell was the changing text at the bottom of the screen, which looked pretty similar for all of them. Adding some kind of signifier that something is selected would go a long way: make the selected character bigger perhaps.

CSS
- Overall looks good. 
- There are some places where you're not using the kabob-case convention of naming class names and ID's.
- See the files themselves for other comments.

JS
- So much code! For the most part it's nice and neat, but there were some things that could be cleaned up a bit. There's also so much refactoring y'all could do to make it more DRY.
- You could have utilized your character classes more - wherever you are doing something for each character, you could attach that behavior to your character class. 
- See more notes in each file.

HTML
- I'm puzzled why your `audio` tag is in your `head` instead of `body`, but it makes for a good chance to see the browser's magic in action! Inspect your DOM and you'll see that Chrome puts your `audio` tag in `body`.... along with everything else from your `head`. So yeah, don't put that there.
- I don't think there were any other notes, just a couple indentation issues.
- Also, note that the convention mentioned above about kabob-case applies in your HTML as well.