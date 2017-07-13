const db = require('./db');
const Models = require('./db/models/');
const Campus = Models.Campus;
const Student = Models.Student;
const User = Models.User;

const campuses = [{
  name: 'Asteroid 325',
  image: '/images/littleprince.jpg'
}, {
  name: 'King\'s Planet',
  image: '/images/king.jpg'
}, {
  name: 'Drunkard\'s Planet',
  image: '/images/drunkenman.jpg'
}, {
  name: 'Businessman\'s Planet',
  image: '/images/businessman.jpg'
}, {
  name: 'Lamplighter\'s Planet',
  image: '/images/lamplighter.jpg'
}, {
  name: 'Geographer\'s Planet',
  image: '/images/geographer1.jpg'
}, {
  name: 'Earth',
  image: '/images/threetrees.jpg'
}, {
  name: 'Vainman\'s Planet',
  image: '/images/concededman.jpg'
}];

const students = [{
  name: 'Prince',
  email: 'prince@gmail.com',
  image: '/images/a325.jpg',
  campusId: 1
}, {
  name: 'Rose',
  email: 'rose@gmail.com',
  image: '/images/Rose.jpg',
  campusId: 1
}, {
  name: 'King',
  image: '/images/King2.jpg',
  campusId: 2
}, {
  name: 'Conceited',
  image: '/images/conceitedman.jpg',
  campusId: 3
}, {
  name: 'Drunkard',
  image: '/images/Drunkard.jpg',
  campusId: 4
}, {
  name: 'Businessman',
  image: '/images/Businessman2.jpg',
  campusId: 5
}, {
  name: 'Lamplighter',
  image: '/images/Lamplighter2.jpg',
  campusId: 6
}, {
  name: 'Geographer',
  image: '/images/Geographer.jpg',
  campusId: 7
}, {
  name: 'Pilot',
  image: '/images/Pilot.jpg',
  campusId: 8
}, {
  name: 'Fox',
  image: '/images/thefox.jpg',
  campusId: 8
}];

const users = [{
  name: 'danni',
  email: 'socratesmosaic@gmail.com',
  password: 'admin1'
}];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  ).then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  ))
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
