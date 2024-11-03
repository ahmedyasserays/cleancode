
let reservations = [
    { arrival_date: '2019-10-01', departure_date: '2019-10-03' },
    { arrival_date: '2019-10-02', departure_date: '2019-10-04' },
    { arrival_date: '2019-10-01', departure_date: '2019-10-02' },
    { arrival_date: '2019-10-04', departure_date: '2019-10-05' },
]


reservations.forEach(reservation => {
    console.log(reservation.arrival_date)
});
