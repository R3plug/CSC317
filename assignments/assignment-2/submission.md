# CSC 317 Assignment 2 Submission

**Name:** Phillip Davis  
**Student ID:** 923980431  
**GitHub Username:** R3plug  
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
This project involved making a personal website/portfolio with html and minimal CSS for styling. Using head, body, article, lists, tables and other formatting tags to display relevant information in a clean way. I linked the different sections with a navigation list at the top of the site.



## Approach / What I Did:
When struturoing the project I tried to keep sections distinct both in the html and rendered in the browser to make review easy. Using lists and tables to clearly define and organize sections and varios header styles to separate sections. When it came to embedding google maps and youtube it was not as simple as of some sources made it out to be. I tried to implement both myself but could not get it to work. Even youtubes html that it provides for embedding videos does not work. This was not a huge issue as I did not record an intro video and the embedded video was a joke. 



## Code Explanation:
The head of the html includes the necessary meta tags needed for search engines to document the page as well as for the page to auto resize when on mobile.
'''html
<!DOCTYPE HTML>
<html lang=""eng>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Professional webiste and profile of Phillip Davis">
    <meta name="keywords" contents="Software Developement,Phillip Davis, Resume, HTML, Python, C++, SFSU, San Francisco State University, San Francisco">
    <meta name="author" contents="Phillip Davis">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Phillip Davis - Portfolio</title>
    <link rel="icon" type="image/x-icon" href="images/baybridge.jpeg">
</head>

The nav sections links the rest of the project to a menu at the top. tags are set that are placed at the top of each section to automatically direct users to the needed section.
'''html
<nav>
        <ul>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#extracurricular">Extra Curriculars</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#intro">Intro Video</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
    </nav>

Creates a contact form
'''html
 