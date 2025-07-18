// Ensure jQuery and Bootstrap's JS are loaded first for proper functionality
$(document).ready(function () {
    // This ensures the dropdown works, even if the page is refreshed with an open accordion
    $('#faqAccordion').on('show.bs.collapse', function (e) {
        // Adding smooth transition effect when a FAQ item is opened
        var card = $(e.target).closest('.card');
        card.css({
            'transition': 'height 0.3s ease-in-out'
        });
    });

    // When a FAQ item is opened or closed, apply a slight animation to make the experience smoother
    $('#faqAccordion').on('shown.bs.collapse hidden.bs.collapse', function (e) {
        var card = $(e.target).closest('.card');
        card.animate({
            opacity: 1
        }, 300);
    });

    // Hover effect for each FAQ header (hover color change) for better user interaction
    $('.faq-header').hover(
        function () {
            $(this).css('background-color', '#f1f3f5');
        },
        function () {
            $(this).css('background-color', 'transparent');
        }
    );

    // Adding animation to the FAQ card when expanding or collapsing
    $('#faqAccordion .collapse').on('show.bs.collapse', function () {
        var card = $(this).closest('.card');
        card.addClass('faq-card-expanded'); // Add an expanded class
    }).on('hidden.bs.collapse', function () {
        var card = $(this).closest('.card');
        card.removeClass('faq-card-expanded'); // Remove expanded class
    });
});
