//
// // -----------------------------------------------------------------------------
// // Mentoring component
// // Assuming ".face, .faces/or mentoring" exists somewhere on the site,
// // their functionality should be broken out of the main functionality of the
// // site. I blindly put this together because I couldn't find its useage on the
// // homepage or elsewhere on the site :( (By blind, I mean untested)
// //
// // formally mentoringBubbleClick
// // -----------------------------------------------------------------------------
//
// (function ($) {
//
//     // select the elements
//     var toggle = document.getElementById('mobile-toggle');
//     var nav = document.getElementById('fun1');
//
//     var navUl = nav.children[0]; // select the ul, the first child of the nav element
//     var navItems = navUl.children; // create a variable that holds all navigation items (li's)
//
// // var logoBar = navItems[0];
// // var logoHeight = window.getComputedStyle(logoBar).height;
//     var logoHeight = '50px'; // getComputedStyle is 2px too much because of some other items altering the height :(
//
// // The below code calculates what the max-height should be
//     var itemHeight = window.getComputedStyle(navItems[1]).height; // get the height of the first normal nav item ("52px")
//     var itemHeightNumber =
//         parseInt(
//             itemHeight.slice(0, itemHeight.length - 2), // remove the last two characters from itemHeight ("px")
//             10 // convert the result ("52") to a base 10 number (decimal)
//         );
//     var totalHeightNumber =  itemHeightNumber * navItems.length; // multiply the height of a single item by the total amount of items (52 * 6 = 312)
//     var totalHeight = totalHeightNumber + 'px'; // "312px"
//
// // set the default state to closed
//     var open = false;
//     nav.style.maxHeight = logoHeight;
//
// // when the toggle button is clicked
//     toggle.addEventListener('click', function() {
//         open = !open; // invert open
//         nav.style.maxHeight = open ? totalHeight : logoHeight; // if open, set to totalHeight, if closed, set to logoHeight
//     });
//
//     // $("#mobile-toggle").click(function() {
//     //     $(this).toggleClass("on");
//     // });
//     //
//     document.getElementById('#mobile-toggle').onclick = function() {
//
//         var className = ' ' + myButton.className + ' ';
//
//         if ( ~className.indexOf(' on ') ) {
//             this.className = className.replace(' on ', ' ');
//         } else {
//             this.className += ' on';
//         }
//     }
//
//     var tooltips = document.getElementsByClassName('tooltip');
//
//     for (var i = tooltips.length; i--;) {
//         var self = tooltips[i];
//
//         var title = self.title;
//         var coords = self.coords.split(',').map(parseFloat);
//         // map loops over all the elements in the array and calls the callback function on them with the element as the argument
//         // it returns a new array with the values returned from the callback
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//         // I also could've done this in the jQuery version
//         var radius = coords[2];
//         var x = coords[0] - radius + 'px';
//         var y = coords[1] - radius - 30 + 'px';
//
//         var tooltip = document.createElement('span');
//         tooltip.classList.add('tooltiptoggle');
//         tooltip.style.top = y;
//         tooltip.style.left = x;
//         tooltip.textContent = title;
//
//         self.parentElement.insertBefore(tooltip, self.nextSibling);
//         // this is a bit hacky
//         // there is no insertAfter, so we insert it before the next item :D
//         // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Example
//
//         tooltip.style.left = coords[0] - tooltip.getBoundingClientRect().width / 2 + 'px';
//
//         // This could've been done with CSS, but not all browsers agree :(
//         self.addEventListener('mouseover', showTooltip);
//         self.addEventListener('mouseout', hideTooltip);
//     }
//
//     function showTooltip() {
//         this.nextSibling.style.opacity = 1;
//     }
//
//     function hideTooltip() {
//         this.nextSibling.style.opacity = 0;
//     }
//
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1){
//             $('header.fancy').addClass("sticky");
//         }
//         else{
//             $('header.fancy').removeClass("sticky");
//         }
//     });
//
// })(jQuery);


(function () {

    // // Mobile-toggle
    // document.getElementById('mobile-toggle').addEventListener('click', function() {
    //     this.classList.toggle('on');
    // });
    //
    var pContainerHeight = document.querySelector('.fancy').offsetHeight;
    window.addEventListener('scroll', function(){
        var wScroll = this.pageYOffset;
        if (wScroll >= pContainerHeight + 55) {
            document.querySelector('.fancy').classList.add('sticky');
        } else {
            document.querySelector('.fancy').classList.remove('sticky');
        }
    });

    // select the elements
    var toggle = document.getElementById('mobile-toggle');
    var nav = document.getElementById('fun1');

    var navUl = nav.children[0]; // select the ul, the first child of the nav element
    var navItems = navUl.children; // create a variable that holds all navigation items (li's)

// var logoBar = navItems[0];
// var logoHeight = window.getComputedStyle(logoBar).height;
    var logoHeight = '50px'; // getComputedStyle is 2px too much because of some other items altering the height :(

// The below code calculates what the max-height should be
    var itemHeight = window.getComputedStyle(navItems[1]).height; // get the height of the first normal nav item ("52px")
    var itemHeightNumber =
        parseInt(
            itemHeight.slice(0, itemHeight.length - 2), // remove the last two characters from itemHeight ("px")
            10 // convert the result ("52") to a base 10 number (decimal)
        );
    var totalHeightNumber =  itemHeightNumber * navItems.length; // multiply the height of a single item by the total amount of items (52 * 6 = 312)
    var totalHeight = totalHeightNumber + 'px'; // "312px"

// set the default state to closed
    var open = false;
    nav.style.maxHeight = logoHeight;

// when the toggle button is clicked
    toggle.addEventListener('click', function() {
        open = !open; // invert open
        nav.style.maxHeight = open ? totalHeight : logoHeight; // if open, set to totalHeight, if closed, set to logoHeight
        document.getElementById('mobile-toggle').classList.toggle('on');
    });

    var tooltips = document.getElementsByClassName('tooltip');

    for (var i = tooltips.length; i--;) {
        var self = tooltips[i];

        var title = self.title;
        var coords = self.coords.split(',').map(parseFloat);
        // map loops over all the elements in the array and calls the callback function on them with the element as the argument
        // it returns a new array with the values returned from the callback
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        // I also could've done this in the jQuery version
        var radius = coords[2];
        var x = coords[0] - radius + 'px';
        var y = coords[1] - radius - 30 + 'px';

        var tooltip = document.createElement('span');
        tooltip.classList.add('tooltiptoggle');
        tooltip.style.top = y;
        tooltip.style.left = x;
        tooltip.textContent = title;

        self.parentElement.insertBefore(tooltip, self.nextSibling);
        // this is a bit hacky
        // there is no insertAfter, so we insert it before the next item :D
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Example

        tooltip.style.left = coords[0] - tooltip.getBoundingClientRect().width / 2 + 'px';

        // This could've been done with CSS, but not all browsers agree :(
        self.addEventListener('mouseover', showTooltip);
        self.addEventListener('mouseout', hideTooltip);
    }

    function showTooltip() {
        this.nextSibling.style.opacity = 1;
    }

    function hideTooltip() {
        this.nextSibling.style.opacity = 0;
    }

}());




