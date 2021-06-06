export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
           .then(response => response.json())
           .then(data => data)

           .catch(err => "Sorry we're having trouble finding that reservation, please call our cafe directly")
}

export const postNewReservation = (rezoData) => {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rezoData),
  }
  return fetch('http://localhost:3001/api/v1/reservations', init)
           .then(response => {
             if(response.ok) {
               return response.json()
             }
           })

           .catch(err => "Please try again later, it looks we're having trouble with our server today")
}
