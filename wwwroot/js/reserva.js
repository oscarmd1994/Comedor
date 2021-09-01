$(function(){
    $(function () {

        var ActualDate = Date.now();

        getSpace = (horario_id) => {
            $(".modal").modal("show");

            if (horario_id = 1) {
                $('#horarioSelected').html('1 - 2 PM');
            } else if (horario_id = 2) {
                $('#horarioSelected').html('2 - 3 PM');
            } else if (horario_id = 3) {
                $('#horarioSelected').html('3 - 4 PM');
            }
        }


        $('.custom-file-input').on('change', function () {
            let fileName = $(this).val().split('\\').pop();
            console.log(fileName);
            if (fileName == "") {
                fileName = "Selecciona tu archivo";
            }
            $(this).next('.custom-file-label').addClass("selected").html(fileName);
        });



    });
});