console.log('Client side javascript file is loaded!');

const frmSearch = document.querySelector('.frmSearch');
const txtSearch = document.querySelector('.txtSearch');
const pError = document.querySelector('.pError');
const pResult = document.querySelector('.pResult');

frmSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = txtSearch.value;

    pError.textContent = 'Loading...⏳';
    pResult.textContent = '';
    
    (async () => {
        const response = await fetch(`/weather?address=${location}`)
    
        const data = await response.json();
        if(data.error) {
            pResult.textContent = '';
            pError.textContent = data.error;
        } else {
            pError.textContent = '';
            pResult.textContent = `${data.location}. ${data.forecast}`;
        }
    
    })();

});