// Adding items to shopping cart once clicked
let shoppingCart = [];

$('#add-botCap').on('click', function () {
    const bottleCap = $('#add-botCap').data();
    shoppingCart.push(bottleCap);
})

$('#add-camera').on('click', function () {
    const camera = $('#add-camera').data();
    shoppingCart.push(camera);
})

$('#add-coke').on('click', function () {
    const coke = $('#add-coke').data();
    shoppingCart.push(coke);
})

$('#add-phone').on('click', function () {
    const phone = $('#add-phone').data();
    shoppingCart.push(phone);
})

$('#add-radio').on('click', function () {
    const radio = $('#add-radio').data();
    shoppingCart.push(radio);
})

$('#add-record').on('click', function () {
    const record = $('#add-record').data();
    shoppingCart.push(record);
})

$('#add-reebok').on('click', function () {
    const reebok = $('#add-reebok').data();
    shoppingCart.push(reebok);
})

$('#add-suitcase').on('click', function () {
    const suitcase = $('#add-suitcase').data();
    shoppingCart.push(suitcase);
})

$('#add-type-writer').on('click', function () {
    const typeWriter = $('#add-type-writer').data();
    shoppingCart.push(typeWriter);
})



$('#shopping-cart').on('click', function() {
    console.log(shoppingCart);
})



