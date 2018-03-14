$(document).ready(function() {
    // console.log($('#cowMilPrice').html(), cowMilPrice, cowMilQuantity);

    var itemJSON = {
        "milk": {
            "Cow Milk": 21,
            "Full Cream Milk": 26,
            "Toned Milk": 21,
            "Full Toned Milk": 18
        },
        "bread": {
            "Brown Bread": 27,
            "Atta Bread": 30,
            "Sandwich Bread": 27,
            "White Bread": 20,
            "Multi-grain Bread": 50
        },
        "eggs": { "White Eggs": 6 },
        "butter": {
            "Butter (10g)": 6,
            "Butter (100g)": 46,
            "Butter (500g)": 225
        }
    };

    var orderJSON = {};

    $('#cowMilPrice').html('&#8377 ' + itemJSON['milk']['Cow Milk']);
    $('#fatMilPrice').html('&#8377 ' + itemJSON['milk']['Full Cream Milk']);
    $('#tonMilPrice').html('&#8377 ' + itemJSON['milk']['Toned Milk']);
    $('#lytMilPrice').html('&#8377 ' + itemJSON['milk']['Full Toned Milk']);
    $('#brnBrdPrice').html('&#8377 ' + itemJSON['bread']['Brown Bread']);
    $('#ataBrdPrice').html('&#8377 ' + itemJSON['bread']['Atta Bread']);
    $('#swcBrdPrice').html('&#8377 ' + itemJSON['bread']['Sandwich Bread']);
    $('#wytBrdPrice').html('&#8377 ' + itemJSON['bread']['White Bread']);
    $('#mgnBrdPrice').html('&#8377 ' + itemJSON['bread']['Multi-grain Bread']);
    $('#wytEggPrice').html('&#8377 ' + itemJSON['eggs']['White Eggs']);
    $('#kidBtrPrice').html('&#8377 ' + itemJSON['butter']['Butter (10g)']);
    $('#smlBtrPrice').html('&#8377 ' + itemJSON['butter']['Butter (100g)']);
    $('#lrgBtrPrice').html('&#8377 ' + itemJSON['butter']['Butter (500g)']);


    console.log(typeof itemJSON['milk']['Cow Milk']);


    //this function feeds values and calculates final price
    function funcCalculateTotal() {
        var btnId = this.id;
        var itemType = '';

        switch (btnId.slice(3, 6)) {
            case 'Mil':
                itemType = 'milk';
                break;
            case 'Brd':
                itemType = 'bread';
                break;
            case 'Egg':
                itemType = 'eggs';
                break;
            case 'Btr':
                itemType = 'butter';
                break;
        }
        console.log(this.id);
        var item = $('#' + btnId.slice(0, 6) + 'Item').html();
        var price = itemJSON[itemType][item];
        var quantity = parseInt($('#' + btnId.slice(0, 6) + 'Quantity').html(), 10);
        var entryTotal = parseInt($('#' + btnId.slice(0, 6) + 'Total').html().slice(1), 10);
        // var price = $('#' + btnId.slice(0, 6) + 'Price').html();
        if (this.id.indexOf('Add') !== -1) {
            quantity += 1;
        } else if (this.id.indexOf('Less') !== -1 && quantity > 0) {
            quantity -= 1;
        } else if (this.id.indexOf('Dozn') !== -1) {
            quantity += 12;
        } else if (this.id.indexOf('Thty') !== -1) {
            quantity += 30;
        }
        if (quantity === 0 && orderJSON.hasOwnProperty(itemType)) {
            delete orderJSON[itemType];
        } else {
            //adding orders in orderJSON
            if (!orderJSON.hasOwnProperty(itemType)) {
                orderJSON[itemType] = {};
            }
            orderJSON[itemType][item] = quantity;
        }
        $('#' + btnId.slice(0, 6) + 'Quantity').html(quantity);
        entryTotal = price * quantity;
        $('#' + btnId.slice(0, 6) + 'Total').html('&#8377 ' + entryTotal);
        console.log(item, itemType, price, quantity, entryTotal, typeof $('#' + btnId.slice(0, 6) + 'Total').html().slice(1));
    }
    console.log(orderJSON);
    $('.buttonSize, .mdl-button--colored').on('click', funcCalculateTotal);
    $('#addToCart').on('click', function() {
        console.log(orderJSON);
    });
});