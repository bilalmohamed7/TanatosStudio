/*global $, alert, console*/
$(function () {
    'use strict';
    
    // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 10,
        cursorborder: '1px solid #f7600e'
        
        });
    
    // Change Header Height
    var myheader = $('.header');
    
    myheader.height($(window).height());
    
    $(window).resize(function () {
        
        myheader.height($(window).height());
        
        });
        
        // Scroll To Features
        
        $('.header .arrow i').click(function() {
            
            $('html,body').animate({
                
                scrollTop: $('.features').offset().top
                
            }, 1000);
            
            });
        
        $('.hire').click(function () {
            
            $('html,body').animate({
                
                scrollTop: $('.our-team').offset().top
                
            }, 4000);
            
            });
        
        $('.our').click(function () {
            
            $('html,body').animate({
                
                scrollTop: $('.our-work').offset().top
                
            }, 3000);
            
            });
        
        
        // show Hidden Items From Work
        
        $('.show-more').click(function () {
        
            $('.our-work .hidden').fadeIn(2000);
        
        });
        
        // Check Testimonials
        
        var leftArrow = $('.testim .fa-chevron-left'),
            
            rightArrow = $('.testim .fa-chevron-right');
        
        function checkClients() {
            
            if ($('.client:first').hasClass('active')) {
                
                leftArrow.fadeOut();
                
            } else {
                
                leftArrow.fadeIn();
                
            }
            if ($('.client:last').hasClass('active')) {
                
                rightArrow.fadeOut();
                
            } else {
                
                rightArrow.fadeIn();
                
            }
            
            
        }
        
        checkClients();
        
        $('.testim i').click(function () {
            
            if ($(this).hasClass('fa-chevron-right')) {
                
                $('.testim .active').fadeOut(100, function () {
                    
                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                    
                    checkClients();
                    
                    });
            } else {
                $('.testim .active').fadeOut(100, function () {
                    
                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                    
                    checkClients();
                    
                    });
            }
    });
});