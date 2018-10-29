// Show the text and options for the given page number
var display_page = function(page_number) {
    // First we need to get the correct page from the book
    var page = book[page_number];

    // Now we display the text for this page in the story section
    document.querySelector("#story").innerHTML = page.text;

    // Then we need to clear out any options that are left over from
    // the last page in the options section
    document.querySelector("#options").innerHTML = ""

    // Finally we display the options for this page. This is the tricky
    // part. The page's "options" property stores a function. Here we
    // call that function.
    page.options();

    // To illustrate what the above does, let's look at page 0 for example.
    // It has the following definition for the options property:
    //
    //     options: function() {
    //         add_button_option("in a galaxy far, far away", 1);
    //         add_button_option("there was a king in his castle", 2);
    //     },
    //
    // So, 'page.options' gives us the function that we defined, and we
    // use '()' to call it. The end result is that two button options
    // are added to the page.
}

// Adds a button to the page with the given text and when it's pressed we
// display the given page number
var add_button_option = function(text, page_number) {
    var options_section = document.querySelector("#options");

    // First we create the button element and add it to the options section.
    // You can read a bit more about the 'createElement' and 'appendChild'
    // functions here: https://www.w3schools.com/js/js_htmldom_nodes.asp
    var button = document.createElement("button");
    options_section.appendChild(button);

    // Then we set the button text to the text that was passed in.
    button.innerHTML = text

    // Then we set the button's 'onclick' property so that when the button
    // is pressed we display the appropriate page.
    button.onclick = function() {
        display_page(page_number);
    };

    // The reason we don't use 'innerHTML' is that when we change that
    // property on the story section all 'onclick' properties on the buttons
    // in it are erased! It's a weird quirk that's really annyoing, but we
    // just work around it by creating the elements manually.
};

var add_image = function(image_url) {
    var options_section = document.querySelector("#options");

    var image = document.createElement("img");
    options_section.appendChild(image);

    image.src = image_url;
}

// Here we store all the pages in the story, one object for each page.
var book = [
    // page 0
    {
        text: "A snake!",
        options: function() {
            add_button_option("Kill it!", 1);
            add_image("tree.png");
            add_button_option("Do nothing", 2);
            add_image("stone.png");
        },
    },

    // page 1
    {
        text: "You slice the snake ... there are three leaves on the ground.",
        options: function() {
            add_button_option("Take the leaves", 3);
        },
    },

    // page 2
    {
        text: "You do nothing and die.",
        options: function() {
            add_button_option("Let's try again", 0);
        },
    },

    // page 3
    {
        text: "You take the leaves.",
        options: function() {

        },
    },
];

// When the page first loads we start by showing page number zero
display_page(0);
