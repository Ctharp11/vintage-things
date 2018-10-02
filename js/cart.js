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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + bottleCap.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + bottleCap.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + bottleCap.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + bottleCap.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + bottleCap2.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + bottleCap2.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + bottleCap2.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + bottleCap2.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + camera.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + camera.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + camera.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + camera.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + camera.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + camera.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + camera.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + camera.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + coke.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + coke.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + coke.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + coke.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + coke.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + coke.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + coke.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + coke.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + phone.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + phone.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + phone.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + phone.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + phone.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + phone.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + phone.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + phone.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + radio.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + radio.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + radio.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + radio.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + radio.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + radio.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + radio.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + radio.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + record.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + record.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + record.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + record.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + record.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + record.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + record.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + record.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + reebok.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + reebok.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + reebok.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + reebok.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + reebok.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + reebok.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + reebok.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + reebok.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + suitcase.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + suitcase.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + suitcase.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + suitcase.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + suitcase.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + suitcase.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + suitcase.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + suitcase.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + typeWriter.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + typeWriter.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + typeWriter.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + typeWriter.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"> <a class="modal__add-to-cart--content-link" href="shopping.html"> Check Out Now </a> </div>'
    );
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
    $('#added-to-cart').html(
        '<div class="modal__add-to-cart--content-added"> Added to Cart! </div>' +
        '<div class="modal__add-to-cart--content-title">' + typeWriter.name + '</div>' + 
        '<img class="modal__add-to-cart--content-image" src="' + typeWriter.image + '">' + 
        '<div class="modal__add-to-cart--content-price">' + typeWriter.price + '</div>' +
        '<div class="modal__add-to-cart--content-description">' + typeWriter.description + '</div>' +
        '<div class="modal__add-to-cart--content-btn btn-checkout"><a class="modal__add-to-cart--content-link" href="shopping.html">Check Out Now </a></div>'
    );
    shoppingCart = {
        name: typeWriter.name,
        image: typeWriter.image,
        price: typeWriter.price,
        description: typeWriter.description
    }
    database.ref().push(shoppingCart);
})

let totalPrice = 0;


// Using .on("value", function(snapshot)) syntax will retrieve the data
database.ref().on("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        var name = childData.name;
        var price = childData.price;
        var description = childData.description;
        var image = childData.image;

        
        var priceSub$ = price.substr(1);
        let priceParse = parseFloat(priceSub$);
        totalPrice += priceParse;
        $('.shopping__items--total').html('<h3> Total Price: $' + totalPrice + '</h3>');

        $('#shopping__items').append(
            '<div class="shopping__items--content">' +
                '<img class="shopping__items--content-image" src="' + image + '">' +
                '<div class="shopping__items--content-name">' + name +'</div>' + 
                '<div class="shopping__items--content-description">' + description + '</div>' +
                '<div class="shopping__items--content-price"> Price: ' + price + '</div>' +
                '<div class="shopping__items--content-remove" id="' + childKey + '"> Remove </div>' +
            '</div>'
            );
        $('.shopping__items--content-remove').on('click', function() {

            // database.ref(childKey).removeValue();
            // let removeVal = $('#remove-item').data();
            // console.log('removeVal', removeVal.value);
            // console.log('childKey', childKey);
            // console.log(database.ref().child(childKey))
            // let child = database.ref().child(childKey);
            // database.ref(childKey).remove();
            // location.reload();
        })
    });

    // Number of items in shopping cart 
    let numbersInCart = snapshot.numChildren(); 
    if (snapshot.numChildren() === 0) {
        return
    } else  {
        $('.nav__shopping-card-items--hidden').addClass('nav__shopping-card-items--show');
        $('#items-in-cart').html(numbersInCart);
    }
});
