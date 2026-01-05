const addBookBtn = document.getElementById('addBookBtn');
const bookDialog = document.getElementById('bookDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');

addBookBtn.addEventListener('click', () => bookDialog.showModal());
closeDialogBtn.addEventListener('click', () => bookDialog.close());