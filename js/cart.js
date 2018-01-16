// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZDEBkZ1_sNbOd70t-nb1SBYkeGTMrTX4",
    authDomain: "vintage-5a991.firebaseapp.com",
    databaseURL: "https://vintage-5a991.firebaseio.com",
    projectId: "vintage-5a991",
    storageBucket: "vintage-5a991.appspot.com",
    messagingSenderId: "148579613208"
  };

firebase.initializeApp(config);

var database = firebase.database();

let shoppingCart;


//  Store Click Data to Firebase in a JSON property by name of store object
//  Firebase .set() method
$('#add-botCap').on('click', function () {
    const bottleCap = $('#add-botCap').data();
    shoppingCart = {
        name: bottleCap.name,
        image: bottleCap.image,
        price: bottleCap.price,
        description: bottleCap.description
    }
    database.ref().push(shoppingCart);
})

$('#add-botCapTwo').on('click', function () {
    const bottleCap2 = $('#add-botCapTwo').data();
    console.log('asd')
    console.log(bottleCap2);
    shoppingCart = {
        name: bottleCap2.name,
        image: bottleCap2.image,
        price: bottleCap2.price,
        description: bottleCap2.description
    }
        database.ref().push(shoppingCart);
})

$('#add-camera').on('click', function () {
    const camera = $('#add-camera').data();
    shoppingCart = {
        name: camera.name,
        image: camera.image,
        price: camera.price,
        description: camera.description
    }
    database.ref().push(shoppingCart);
})

$('#add-cameraTwo').on('click', function () {
    const camera = $('#add-cameraTwo').data();
    shoppingCart = {
        name: camera.name,
        image: camera.image,
        price: camera.price,
        description: camera.description
    }
    database.ref().push(shoppingCart);
})

$('#add-coke').on('click', function () {
    const coke = $('#add-coke').data();
    shoppingCart = {
        name: coke.name,
        image: coke.image,
        price: coke.price,
        description: coke.description
    }
    database.ref().push(shoppingCart);
})

$('#add-cokeTwo').on('click', function () {
    const coke = $('#add-cokeTwo').data();
    shoppingCart = {
        name: coke.name,
        image: coke.image,
        price: coke.price,
        description: coke.description
    }
    database.ref().push(shoppingCart);
})

$('#add-phone').on('click', function () {
    const phone = $('#add-phone').data();
    shoppingCart = {
        name: phone.name,
        image: phone.image,
        price: phone.price,
        description: phone.description
    }
    database.ref().push(shoppingCart);
})

$('#add-phoneTwo').on('click', function () {
    const phone = $('#add-phoneTwo').data();
    shoppingCart = {
        name: phone.name,
        image: phone.image,
        price: phone.price,
        description: phone.description
    }
    database.ref().push(shoppingCart);
})

$('#add-radio').on('click', function () {
    const radio = $('#add-radio').data();
    shoppingCart = {
        name: radio.name,
        image: radio.image,
        price: radio.price,
        description: radio.description
    }
    database.ref().push(shoppingCart);
})

$('#add-radioTwo').on('click', function () {
    const radio = $('#add-radioTwo').data();
    shoppingCart = {
        name: radio.name,
        image: radio.image,
        price: radio.price,
        description: radio.description
    }
    database.ref().push(shoppingCart);
})

$('#add-record').on('click', function () {
    const record = $('#add-record').data();
    shoppingCart = {
        name: record.name,
        image: record.image,
        price: record.price,
        description: record.description
    }
    database.ref().push(shoppingCart);
})

$('#add-recordTwo').on('click', function () {
    const record = $('#add-recordTwo').data();
    shoppingCart = {
        name: record.name,
        image: record.image,
        price: record.price,
        description: record.description
    }
    database.ref().push(shoppingCart);
})

$('#add-reebok').on('click', function () {
    const reebok = $('#add-reebok').data();
    shoppingCart = {
        name: reebok.name,
        image: reebok.image,
        price: reebok.price,
        description: reebok.description
    }
    database.ref().push(shoppingCart);
})

$('#add-reebokTwo').on('click', function () {
    const reebok = $('#add-reebokTwo').data();
    shoppingCart = {
        name: reebok.name,
        image: reebok.image,
        price: reebok.price,
        description: reebok.description
    }
    database.ref().push(shoppingCart);
})

$('#add-suitcase').on('click', function () {
    const suitcase = $('#add-suitcase').data();
    shoppingCart = {
        name: suitcase.name,
        image: suitcase.image,
        price: suitcase.price,
        description: suitcase.description
    }
    database.ref().push(shoppingCart);
})

$('#add-suitcaseTwo').on('click', function () {
    const suitcase = $('#add-suitcaseTwo').data();
    shoppingCart = {
        name: suitcase.name,
        image: suitcase.image,
        price: suitcase.price,
        description: suitcase.description
    }
    database.ref().push(shoppingCart);
})

$('#add-type-writer').on('click', function () {
    const typeWriter = $('#add-type-writer').data();
    shoppingCart = {
        name: typeWriter.name,
        image: typeWriter.image,
        price: typeWriter.price,
        description: typeWriter.description
    }
    database.ref().push(shoppingCart);
})

$('#add-type-writerTwo').on('click', function () {
    const typeWriter = $('#add-type-writerTwo').data();
    shoppingCart = {
        name: typeWriter.name,
        image: typeWriter.image,
        price: typeWriter.price,
        description: typeWriter.description
    }
    database.ref().push(shoppingCart);
})

// Using .on("value", function(snapshot)) syntax will retrieve the data
database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());

});


$('#shopping-cart').on('click', function() {
    console.log(shoppingCart);
})

$(document).ready(function() {
    const addedModal = $('#modal__added-to-cart');
    console.log(addedModal);
    // if () {

    // }
})
