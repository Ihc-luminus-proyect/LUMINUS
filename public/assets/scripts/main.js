$.get("_header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
} );
