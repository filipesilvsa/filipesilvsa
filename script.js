document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = event.target.email.value;

  fetch('https://YOUR_NETLIFY_FUNCTION_URL/.netlify/functions/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
    alert('Inscrição realizada com sucesso!');
    event.target.reset();
  })
  .catch(error => {
    console.error('Erro ao enviar o formulário:', error);
  });
});
