//listen to create forms on index.handlebars
// listen to burger.name and devour
// match values 
$(function() {

    $(".change-status").on("click", function(event) {
        const id = $(this).data("id");

        const newBurgerState = {
            devoured: true
        };

        console.log(newBurgerState);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("Changed burger status to ", newBurgerState.devoured);
                location.reload();
            }
        )
    })

    $(".newBurgerForm").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#newBurgerName").val().trim(),
            devoured: 0
        }

        console.log(newBurger);

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        )
    })
});
