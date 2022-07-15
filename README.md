This was my first project using javascript without a tutorial that shows how to build the intire project.

When you open the file there's three movie-posters in it already, they're been render by a simples system that uses a list of links and a loop that write the image 
one by one until the list.length is over

you can add new posters by copying a link in the input and clicking the button
you cann also remove posters by clicking the respective poster you want out



I had a few problems doing this:

first my loop wasn't working properly, it was  re-writing the  html erasing whole the page and setting only the first image with the original dimensions

after i fixed this, the default posters were been writen outside the proper div, but the new posters were in the right place, so instead of the new appears on the side
of the default, they were pushing it down
Becouse of this problem i also couldn't exclude the default posters, only the new ones

i fixed all by moving the tag <script> inside the div where all of this should happen so now is working properly
