This is a tutorial Backbone.js application for my **Backbone, Jasmine, and Handlebars** brown bag lunch talk at [Sift Science](https://siftscience.com/).

Except for the explanatory comments, this was entirely live-coded from scratch during the tech talk. Part 1 was presented at lunch Wednesday, Feb. 20, and gets to displaying a simple Backbone user view/model with a Handlebars template and Jasmine specs. Part 2 will cover Jasmine jQuery fixtures (for spec'ing views), Handlebars helpers, and Backbone collections, events, subviews, and sync.

Accompanying video and slides will be emailed out.

# Usage

Simply start a static file server from the project root directory:

    $ ls
    README.md        SpecRunner.html  index.html       lib/             spec/            static/
    $ python -m SimpleHTTPServer
    Serving HTTP on 0.0.0.0 port 8000 ...

(I have this as bash alias `pyserve` in my [.bashrc](https://github.com/divad12/dotfiles/blob/master/.bash_aliases#L34) (idea stolen from @phleet's dotfiles)).

Then hit [`http://localhost:8000`](http://localhost:8000) in your browser.

To run Jasmine specs (tests), hit `http://localhost:8000/SpecRunner.html`.

# Exercises

@fredsadaghiani asked for it.

## Part 1

1. Say you were bribed to build a [Trello](https://trello.com/board/trello-development/4d5ea62fd76aa1136000000c) clone in Backbone (even though Trello was built in Backbone). What are some appropriate models and views? (Bonus: collections?) What would be different if you were blackmailed instead of bribed?
1. Where does `this.model` come from in `UserView#render()` (line 34 of `trainer.js`)? Bonus: what happens if you have multiple models?
1. Add a field `last_seen` to the user model and display it. Alternatively, do 50 push-ups right now.
1. Write a Backbone view for a progress bar showing number of users rated. For now, just hook it up to a model which just has `num_rated` as a property. We'll learn how to hook it up to a collection of `User` models in Part 2.
