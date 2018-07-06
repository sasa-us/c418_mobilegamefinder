<!-- <form> -->
    <!-- <input class="userID" type = "number" name = "user_id" > -->
    <!-- <button class="submit" type="button">Submit</button>     -->
<!-- </form> -->

<!-- <script src="https://code.jquery.com/jquery-3.1.0.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

    axios.get('mainpage.php', {
        params: {
            action: 'get_mainpage'
        }
    }).then(resp => {
        console.log('GET RESPONSE:', resp);
    });

// $(document).ready(init);

// function init() {
    
//     var ajaxData = {
//         action: 'get_mainpage',
//     };
//     $.ajax({
//         url: 'mainpage.php',
//         data: ajaxData,
//         dataType: 'json',
//         method: 'get',
//         success: function (response) {
//             console.log('response is ', response);
//     },
//         error: function(res) {
//             console.log('server not response');
//         }
//     });

// }//end init()


</script>