// $(document).ready(function(){
// // alert();
//     $("#search").keyup(function(){
//         var val = $("#search").val();
//         $("#tbl tbody tr").filter(function(){
//             console.log($("#tbl tbody tr").text());
//             $(this).toggle($(this).text().indexOf(val) > -1);
//         });
//     })
// });

$(document).ready(function(){
    // alert();
        $("#search").keyup(function(){
            var val = $("#search").val().toLowerCase();
            $(".container div").filter(function(){
                console.log($(".container").text());
                $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
            });
        })
    });
    


// $(document).ready(function(){
//     // alert();
//         $("#btn").click(function(){
//             var val = $("#search").val();
//             $("td").filter(function(){
//                 $(this).toggle($(this).text().indexOf(val) > -1);
//             });
//         })
//     });
    
    
    
