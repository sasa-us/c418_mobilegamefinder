<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>
// how to call the wizard page 
// the endpoint address: post_wizardpage.php
// can have platform right now on the post since it won't be used
// but on backend platform does NOT work yet because we do not 
// have that column in the table yet (will be inputted on Monday)

// use the function below to auto generate stuff 
// when doing the front end calls 
// according to Scott you should be using this

// export function formatPostData(data){
//     const params = new URLSearchParams();

//     for(let [k, v] of Object.entries(data)){
//         params.append(k, v);
//     }

//     return params;
// }
    const params = new URLSearchParams();

    params.append(
        'genre', 'board'
    );
    params.append(
        'platform', 'android'
    )
    params.append(
        'price_value', 'free'
    )


    axios.post('post_wizardpage.php', params).then(resp => {
        console.log('GET RESPONSE:', resp);
    }).catch(function(error){
        console.log(error)});


</script>