const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let clients = [
    { id: 1, nome: 'felipe picoli', telefone: '53987456321' },
    { id: 5, nome: 'carlos cunha', telefone: '53987856377' },
    { id: 4, nome: 'gil cunha', telefone: '53987412388' },
    { id: 2, nome: 'carol silva', telefone: '53987776399' },
]
/**
 * Retorna todos clientes em json
 */
app.get('/clients', (request, response) => response.json(clients))

/**
 * Buscar UM único recurso
 */
app.get('/clients/:id', (request, response) =>
    response.json(clients.filter(value => value.id == request.params.id)))

/**
 * Inserir dados no servidor - BD
 */
app.post('/clients', (request, response) => {
   const client = request.body;
    clients.push(client);
    response.json(client);

})
/**
 * Atualizar nome de clientes
 */
app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const nome = request.body.nome;

    let client = clients.filter(value => value.id == id);
    client[0].nome = nome;

    response.json(client[0]);

})
app.delete('/clients/:id', (request, response) => {
    const id = request.params.id;
   clients= clients.filter(value => value.id != id);
   response.json(clients);
})
app.listen(3000);