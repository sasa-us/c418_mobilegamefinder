<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

// how to call the search and details page is the same only difference 
// the endpoint address:
// for search it's post_searchpage.php
// for details it's post_detailspage.php


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

params.append('searchrequest', 'happy');
    axios.post('post_searchpage.php', params).then(resp => {
// =====change to search call
// params.append('searchrequest', 'com.rovio.baba');
//     axios.post('post_detailspage.php', params).then(resp => {
// =====end search call

        console.log('GET RESPONSE:', resp);
    }).catch(function(error){
        console.log(error)});


</script>