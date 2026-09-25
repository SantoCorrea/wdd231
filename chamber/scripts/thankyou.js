const params = new URLSearchParams(window.location.search);
 
function fill(id, key) {
    document.querySelector(`#${id}`).textContent = params.get(key) || '—';
}
 
fill('out-fname', 'fname');
fill('out-lname', 'lname');
fill('out-email', 'email');
fill('out-phone', 'phone');
fill('out-orgname', 'orgname');
fill('out-timestamp', 'timestamp');
 