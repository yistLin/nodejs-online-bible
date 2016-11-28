var updateBtn = document.getElementById('update');

updateBtn.addEventListener('click', function(){
    fetch('quotes',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name':'example',
            'quote':'This is an example quote.'
        })
    });
});
