(function(){$(function(){return $("#screen, #reel").addClass("move"),$("#tagline img, #tagline div").transition({opacity:1,duration:2e3,delay:800}),$("#reel").on("click",function(){return $(this).transition({rotate:"+=360deg",duration:1500,easing:"ease"})})})}).call(this);