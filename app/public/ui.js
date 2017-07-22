function validateForm()
{
    var isValid = true;
    $(".form-control").each(function(){
        if($(this).val()==="")
        {
            isValid= false;
        }
    });
    
    return isValid;
   
}

$("#submit").click(function(){
    if(validateForm())
    {
        newFriend={
            name: $("#name").val().trim(),
            photo: $("#pic").val().trim(),
            scores: []
        };
        $(".score").each(function(){
            newFriend.scores.push(parseInt($(this).val().trim()));
        });
        //console.log(newFriend);
        
        //ajax post for the data from the survey
        $.post("/api/new",newFriend).done(function(data){
            //console.log(data);

            topMatchHtml="<h2>"+data.name+"</h2><div>"
                        +"<img src=\""+data.photo+"\" style=\"width:100%\"></div>";

            $(".modal-body").html(topMatchHtml);

            //Modal alert for the top match
            $('#myModal').modal('show');

        });

        //clear the form
         $(".form-control").each(function(){
            $(this).val("");
         });
        

    }
    else{
        alert("Please fill out all the questions.");
    }
})