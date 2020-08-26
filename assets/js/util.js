// *--- Copy ----*
let copy = function() {
    // Get text to copy
    const copy = $(this).data("copy");

    if (copy == "") return;

    // Create textarea to copy text from
    const el = document.createElement('textarea');
    el.value = copy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';

    // Add textarea to document
    document.body.appendChild(el);

    // Copy text in textarea
    el.select();
    document.execCommand('copy');

    // Remove textarea
    document.body.removeChild(el);
}

$("body, html").on("click", ".copy", copy);

// *--- Mobile Menu ---*
$("body, html").on("click", "#open--mobile", function() {
    $("#mobile--nav").addClass("open");
});
$("body, html").on("click", "#mobile--nav #close", function() {
    $("#mobile--nav").removeClass("open");
});