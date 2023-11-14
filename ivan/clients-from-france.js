// Задача. Вывести клиентов из France

db.clients.find(
   { country: 'France' }
)