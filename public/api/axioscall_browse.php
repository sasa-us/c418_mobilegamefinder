<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>
// By Rating, By Genre, By Price (Free or Paid)
    const newItem = {
        //all_rating: '5',
        genre:  'board',
        //price_value: 'paid'
    };
    const postnewItem = formatPostData(newItem);
   // axios.get('mainpage.php', {
    axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'browse'
            }
    }).then(resp => {
        console.log('POST RESPONSE:', resp);
    });

    function formatPostData(data){
    const params = new URLSearchParams();

    for(let [k, v] of Object.entries(data)){
        params.append(k, v);
    }

    return params;
}


</script>