# GraphVik

One of my favorite artists is [Vik Muniz](http://www.vikmuniz.net/).
He's an amazingly grounded, humble, and truly engaged human being that has
found a way to harness the power of art for immediate benefits to his
hometown communities and beyond.

He knows his roots and has given back immensely, while conveying brilliance
and thought in his art that is both fresh and exciting to me.

If you are not familiar with his work, I encourage you to check out the following resources about him:

* [Vik Muniz website](http://www.vikmuniz.net/)
* [Vik Muniz Wikipedia](http://en.wikipedia.org/wiki/Vik_Muniz)
* [Wasteland](http://www.wastelandmovie.com/) is an amazing documentary; you'll instantly understand what I have said about him above after watching.

As a tribute to him and his work, and in acknowledgement of his particular
style of art via assemblage, I put together this toy project that I call
**GraphVik**. It's a force directed graph visualization of Vik based on
828 SVG rendered tiles derived from a photograph of him.

I used the following tools for this little project:

* [D3.js](http://mbostock.github.com/d3/)
* [ImageMagick](http://imagemagick.org/)
* [Metalsmith](http://www.metalsmith.io/)
* [Zurb Foundation](http://foundation.zurb.com/)

I sliced the tiles with the following simple command:


```
convert -crop 32x32@ Vik-Muniz-1024.jpg.png tile_%d.png
```

The photograph is reused with permission from The World Economic Forum.

This is the kind of stuff I enjoy whipping up on a Sunday morning whim over coffee.
