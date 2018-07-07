<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>

    axios.get('mainpage.php', {
        params: {
            action: 'get_detailspage'
        }
    }).then(resp => {
        console.log('GET RESPONSE:', resp);
    });
</script>