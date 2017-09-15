## Web Design 1: Code Your First Website (HTML/CSS)

*Updated September 15, 2017 by Eric Huntley ([ehuntley@mit.edu](ehuntley@mit.edu))*

Let's get started!

Start this week by downloading and unzipping the [workshop materials](duspviz.mit.edu/resources/web-design-01.zip) to your desktop. Then change directory to this folder (website). If you want to do this in the terminal, try:

```sh
# Change Directory
$ cd ~/Desktop
# List Files
$ ls -fl
```

### Use a Text Editor

Code is best written using a text editor capable of highlighting language syntax such as [Atom](https://atom.io), [Sublime Text](https://www.sublimetext.com/), or (for the very brave and/or foolhardy) [Emacs](https://www.gnu.org/software/emacs/). To complete the workshop, you will want to do all of your coding one of these editors---at DUSP, we're moving toward supporting the Free and Open Source text editor Atom as our primary text editor. If you're using a personal computer and you don't have it installed, feel free to [download](https://atom.io/) it and install it at this time.

### Organize your Directory

Open Atom and use File > Add Project Folder... (or Shift-Apple-O) to add it your web directory. The web directory should be organized in the following manner.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/file-structure.png" alt="Drawing"/>

When a browser requests your page, your server will return the `index.html` file in the root directory. Create a new blank text document in your text editor and save it as `index.html` in your web folder. The `index.html` is your 'root'... or 'home'... page.

### Start up a Web Server

To work with our website, we need our computer to act like a webserver, allowing it to access files online. There are many tools for doing this; a very simple one is built right into Python, which is accessible from your Terminal.

A note on Terminals: they're kind of scary! It's okay to be a little freaked out by the terminal window if you're not accustomed to using one. But they're one of the most powerful ways of interacting with your file system, so we'll be using them periodically in DUSPViz sessions. Impress your nerd-friends! Learn the terminal!

If you haven't, use the Terminal to **change directory** to the folder in which your website files reside. Once there, start a simple Python server. The commands look like this (assuming that you've downloaded the workshop content to your desktop):

```sh
$ cd ~/Desktop/web-design-01/
$ python -m SimpleHTTPServer 8080
```

Now open a browser and access your site at [http://localhost:8080](http://localhost:8080). You've probably noticed that you're seeing a blank browser window, which is just fine: we haven't put anything in our HTML file yet!

Your page now appears as it would if it were live on the internet, except it is only visible to you locally---even the most experienced coders would never edit the live version of their websites! It's too easy for fingers to slip and break things. For more on the Python Web Server, see the following[DUSPviz page on localhosts](http://duspviz.mit.edu/tutorials/localhost-servers/).

## HTML: The Core Concepts

<img src="images/environment.png" alt="Drawing" style="text-align: center; width: 75%;"/>

New coders tend to be slippery with their language and call HTML a 'programming language.' It is not! It is a **markup language,** and one of many (others include Markdown and LaTeX). Basically, Markdown languages allow you to structure information in documents. One way to remember this are the acronyms WYSIWYG and WYSIWYM (pronounced 'wizzy-wig' and 'wizzy-wim'). The word processors you're familiar with are WYSIWYG: what you see is what you get. They do not separate form from content, so you're editing your styling even as you're editing your content. Markup languages are WYSIWYM: What You See is What You Mean. They allow you to modify the structure of your document with a great deal of specificity and to separate form from content (which can be very liberating!).

HTML, standing for [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML), organizes the **content**
of your page by placing it within **elements**.

All HTML documents start with the following line of code:

```html
<!DOCTYPE html>
```

Elements of the page are organized by tags. HTML tags are keywords surrounded by angled brackets. This tag states for the browser that the rest of your file will be written in HTML. The rest of our document will follow a very simple rule, no matter how complex the code. When you write a tag (aka start tag), you will need a second tag that declares the end of that part of the document (aka end tag). **Content goes between the start and end tags**.


```html
<tag>...</tag>
```

Some tags don't include 'content' in this sense (for example, `<img />`). These are called **void elements** and use a slightly different syntax.

```html
<tag />
```

Comments look like the following. They are used to write human-readable notes in your code, but are ignored by the browser. Comments are great for sharing and revisiting code---it lets other coders (and yourself six months from now) see what you were thinking.

```html
<!-- ... -->
```

A basic page, all together, will look like this. Copy and paste this into your `index.html` document and refresh `localhost`.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<title>Hello World</title>
	</head>
	<body>
		<!-- This is a comment -->
		<h1>Hello World</h1>
		<div id="main">
			...
		</div>
	</body>
</html>
```

### The DOM: Document Object Model

HTML documents are just documents. [The first rule of tautology club is the first rule of tautology club.](https://xkcd.com/703/) Really: you've been structuring documents for years now. Every time you decide what content in your paper should be a subheader, where your paragraph breaks should go, which citation style to use, you're building an ad hoc model for your document. On the web, the [Document Object Model](https://www.w3.org/DOM/) describes the hierarchy of elements in web pages. This is modeled using something commonly called the **DOM Tree**, and it consists of our HTML elements.

<img src="images/dom.png" alt="DOM" style="width: 50%;"/>

### HTML Elements

#### Structure Elements

These elements are large containers for two different types of information; each appears once in every HTML file.

```html
<!-- HEAD element containing metadata, style, and links -->
<head>
	...
</head>
<!-- BODY element containing all document content elements -->
<body>
	...
</body>
```

#### Body Elements

```html
<!-- LINKS. <a> is used to define a hyperlink -->
<a href="http://somesite.www">...</a>
<!-- IMAGE tag to define a link to an image in your document. It is a void element. -->
<img />
<!-- PARAGRAPH tag for large blocks of body text -->
<p>...</p>
<!-- SPAN is for groups of inline elements -->
<span>...</span>
```

##### *Lists*

```html
<!-- UL defines an unordered list -->
<ul>
	<li>...</li> <!-- line in list -->
</ul>
<!-- OL defines an ordered list -->
<ol>
	<li>...</li> <!-- line in list -->
</ol>
```

##### *`<div>`*

Perhaps the most common body element, **div** tags contain a section of an HTML page. One page can contain many **div** elements, and one **div** element can contain many nested elements. The div tag is an element of HTML that allows you to group content into containers (or divisions) you can organize and style on your web page, and divs play nicely with CSS (Cascading Style Sheets). CSS is a style sheet language used for describing the look and formatting of an HTML page, we will introduce it in the next step.

```html
<div id="main">
	<!-- Content goes here -->
	...
</div>
```

### Tag Attributes, Classes, and IDs

Tags are specified and defined using attributes, classes, and IDs. These attributes, classes, and IDs allow you to identify specific elements, modify individual elements and groups of elements, and set the characteristics of the elements.

- *Attributes* define properties of the elements. Elements can have multiple attributes. For example, if the element is a link, where does the link take you.

- *Classes* identify a group of elements that operate similarly or work in the same fashion. For example, a button.

- *IDs* identify unique features and allow for and operations to be performed on that unique feature. In each document, each ID should be unique.

*For Example:*

```html
<a href="http://www.github.com" class="button" id="unique">...</tag>
```

*or*


```html
<div style="background-color:#0000FF" class="header" id="main">...</div>
```
===

### Modify your Document

Now that we understand how HTML documents work and how they are structured, let's modify your web page and insert some content!

#### i. Add Text

We can start by modifying the heading that welcomes visitors to our site and add a couple paragraph elements.

Modify the HTML code on the page to include the following. Add some paragraph (`<p>`) elements and at least one heading (`<h1>`) within the `<div>` elements on your page.

```xml
<div id="main">
	<h1 id="headtext">Body Heading</h1>
	<p id="foo">This is my first paragraph.</p>
	<p id="bar">This is my second paragraph.</p>
</div>
```

The `<h1>` tag is one of a series of heading tags ranging from `<h1>` to `<h6>`; use these as you would use heading and subheadings to structure any document. The `<p>` tag signifies a paragraph that can contain large blocks of text. [Read more about HTML page elements](https://www.lehigh.edu/~inwww/seminar/reference/htmlchart.html).

#### ii. Add a Link

Adding a link to your site is simple. To add a link, we use the `<a>` tag. The a tag defines a hyperlink that can be used to link from one page to another. HTML tags can have attributes. Attributes define and provide additional information about an element. To create a hyperlink, we use the href attribute of the a tag. The following line contains a link to the DUSP home page, and illustrates how you would set up a link. You can place links separate from your paragraphs, or place them within. Write the following line of code at the end your second paragraph, just before the p end tag.

```html
<a href="http://dusp.mit.edu">Take me to DUSP.</a>
```

You have many options for links. [Read about them here](http://www.w3schools.com/tags/tag_a.asp). For example, if you want a link to open in a new page, you can use `target="_blank"` as a property of the `<a>` tag - this is very common!

*Can you add a link that takes you to Google Maps?*

#### iii. Add an Image

Adding an image is just as easy as adding a hyperlink, although a bit different. An image is not stored on your webpage, but it sits on your server, just like your other files. When you display an image in an html file, you are linking to the image. The HTML tells the browser to locate and display it. Therefore, we will follow a multiple step process.

* Locate the folder named `images` in your project directory. You will find one image here named `cat.jpg`. Here you store all subsequent images you want to use in your page.
* Use the `<img />` tag to link to that image in `index.html`.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/file-structure-images1.png" alt="file-structure-images" width="134" height="130" class="aligncenter size-full wp-image-1503" />

Now we can add the image to our index.html. The following line of code uses the `<img>` tag, and then links to our image. We will use the `src` attribute to name the source of the image. The image is coming from our own server, we don't need to go anywhere to find it, so we can put the name of the folder and image as our image address (i.e., `"images/cat.jpg"`)

*Can you add another image, perhaps a photo of the Boston skyline?*

If you want to add an image from another page, you can simply include the URL at which the image is located. The following links to an image on Wikimedia.

```xml
<img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/North_End%2C_Boston.jpg"/>
```

#### Our Code

At present, your document will look something like the following.

```xml
<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8">
    	<title>Hello World</title>
	</head>
	<body>
		<!-- This is a comment -->
		<h1>Hello World</h1>
		<div id="main">
			<p id="foo">This is my first paragraph.</p>
			<p id="bar">This is my second paragraph. <a href="http://dusp.mit.edu">Take me to DUSP.</a></p>
			<img src="images/cat.jpg"/>
		</div>
	</body>
</html>
```

Our page, with this code, contains a bit more content now.

<img src="images/simple_page.png" alt="page" />

*What does our DOM Tree look like at this point?*

===

## CSS: The Core Concepts

### Cascading Style Sheets

Cascading Style Sheets (CSS) is a styling language used for describing the look and formatting of an HTML page. It uses the DOM and styles 'cascade' from higher elements in the DOM tree to elements further down.

We are going to be using CSS3, which is the third iteration of the CSS styling language. CSS is a very useful styling system, and allows you to style items on your page according to a number of methods based on the element it falls within (ie div, body, p, etc), the id of the element, or the class of the element.

### Why Cascading?

The language 'cascades' in the effect that if you style an element, any nested elements in the DOM will get the same styling unless you specify otherwise. For example, if you set the font for your body element, a p (paragraph) will also be set to the same font, unless you specify specifically in the CSS that you want that p to have another font. This is a useful method in that is minimizes the code you need to write and forces you to be careful with your page organization.

### Link a CSS File to your Site

CSS can be added to style your website in one of a few ways. You can apply CSS to individual elements, embed it within your HTML document, or create a separate CSS file and link it to your HTML doc. In your file, add the following link between the `<head>` tags of your `index.html` file.

```html
<link href="css/main.css" rel="stylesheet" />
```

Save your document, and refresh your page. Everything should center. This is because we applied CSS code to our document by linking to our style file.

In the materials for this week, locate the file 'main.css'. This is our stylesheet. We can name it anything really, as long as it has the CSS file type. Open this in your text editor to view the contents. It is a very simple bit of CSS that tells everything in the `<body>` element to center in the page.

```css
body {
	text-align: center;
}
```

### Basic Syntax

Basic CSS syntax looks like the following.

```css
[selector] {
	[property]: [value];
}
```

Selectors refer to specific tags, ids, titles, classes, etc. in our HTML. For example, if we want to style everything that falls in the `<body>` tag, we use the `<body>` selector as above.

Selectors can be specified **by element:**

```css
p {
	font-size: 12;
}
```

**By class:**

```css
.main {
	font-size: 12;
}
```

**By ID:**

```css
#main {
	font-size: 12;
}
```

Note that all have slightly different syntax; elements are simply the name of the element. Classes are specified with a period (`.`). IDs are specified with a hash (`#`). Recall that classes are groups of elements you'd like to style similarly and the IDs are unique!

### Inheritance and Order of Operations

CSS follows the DOM model, with styles applied to elements higher in the DOM applied to those that are descendents. If selectors are defined in multiple locations in your CSS, which one gets precedence?

<img src="images/dom.png" alt="DOM"/>

There are two general rules of thumb.

* CSS defined last in your document will supersede CSS set on a selector earlier in your document.
* The more specific selector will override the less specific selector. For example, a style set on the body selector will be overridden by a style set on an element within the body, such as one by ID.


### Properties and Values

There are hundreds of properties you can set using CSS. Some of these include font, color, location on page, opacity, size, etc. An extensive list can be found in CSS reference documents. Two prominent references are by W3Schools and Mozilla, check them out for further reading.

+ [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference](Mozilla CSS Reference)
+ [http://www.w3schools.com/cssref/default.asp](w3Schools CSS Reference)


#### *Style Font and Type Size*

To change the font for all of our document, we change it on the highest level we can by signifying we want to style everything within the html tag. This can be accomplished by adding the following selector and properties to the stylesheet.

```css
html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 32px;
}
```

Font family prioritizes a list of font names for the selected element. Line height specifies the minimal height of line boxes within the element.

#### *Change Background Color*

Adjust the color of an element using background color.

```css
p {
  background-color: #dddddd;
}
```

Colors can specified using hex, RGB, or a set of [preset supported color names](http://www.w3schools.com/colors/colors_names.asp).

#### *Pseudo-Classes and Changing Link Color*

Change link colors using the following.

```css
a {
  color: orange;
}
```

In CSS, elements have what are called [Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes). Pseudo-classes are keywords added to selectors that specifies a special state of the element to be selected. We signify a pseudo-class using a **:**. For example, one pseudo-class is hover, and it signifies what happens you hover over an element. This can be used to change the color a link turns when you hover over it.

```css
a:hover {
  color: orange;
}
```

### Chaining

To find selectors that are nested within other selectors, you can use the concept of **chaining**. Chaining is how we identify multiple ids, classes, and selectors.

```css
a circle {
  color: orange;
}
```

[Read more about it here.](https://css-tricks.com/multiple-class-id-selectors/)

### The Box Model: A Love Story

CSS LOVES boxes. Loves, *loves*, ***loves*** boxes. In fact, it loves boxes so much that it puts all of your elements in them. Then, it loves having elements in boxes so much that it runs off to tell web browsers about the boxes and how the elements are positioned in the boxes, which means it needs a language to describe them. This is good for us: this box language allows us to be very specific about how elements relate to each other... and their boxes.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/padding-width.png" alt="DOM"/>

* **Padding** - The content is surrounded by the padding area, exists between the content and the border.

* **Border** - Every box has a border that exists on the outer edge of the padding area.

* **Margin** - Margin defines the distance between the element and neighboring elements. Margin never has color.

* **Dimensions** - Controls the height and width of the elements.

You can also adjust the margins, padding, and border individually on each side of the element. And example element, along with its styling, is below. Add this to your CSS stylesheet and save to see how it changes our basic webpage.

```css
p {
    background-color: #dddddd;
    padding: 20px;
    width: 320px;
    height: 40px;
    margin-right: 10px;
}
```

#### Positioning

Positioning your element

* **Relative** - Position according to normal document flow, then shift using positioning properties such as *top* or *left*.

* **Absolute** - Take out of normal flow, and manually position against the containing element.

* **Fixed** - Take out of normal flow and manually position against the browser window.

Another available property is called is **float**. Float can be used to wrap text around images.

CSS is the way you style your page, learn more by referring to the references, or playing around in a sandbox such as [CSS Desk](http://www.cssdesk.com/).

===

## What to do next?

I think that one of the best ways to understand website design is to play with popular websites.
