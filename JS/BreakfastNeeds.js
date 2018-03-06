$(document).ready(function() {
    // console.log($('#cowMilPrice').html(), cowMilPrice, cowMilQuantity);

    var jsonData = {
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
    $('#cowMilPrice').html('&#8377 ' + jsonData['milk']['Cow Milk']);
    $('#fatMilPrice').html('&#8377 ' + jsonData['milk']['Full Cream Milk']);
    $('#tonMilPrice').html('&#8377 ' + jsonData['milk']['Toned Milk']);
    $('#lytMilPrice').html('&#8377 ' + jsonData['milk']['Full Toned Milk']);
    $('#brnBrdPrice').html('&#8377 ' + jsonData['bread']['Brown Bread']);
    $('#ataBrdPrice').html('&#8377 ' + jsonData['bread']['Atta Bread']);
    $('#swcBrdPrice').html('&#8377 ' + jsonData['bread']['Sandwich Bread']);
    $('#wytBrdPrice').html('&#8377 ' + jsonData['bread']['White Bread']);
    $('#mgnBrdPrice').html('&#8377 ' + jsonData['bread']['Multi-grain Bread']);
    $('#wytEggPrice').html('&#8377 ' + jsonData['eggs']['White Eggs']);
    $('#kidBtrPrice').html('&#8377 ' + jsonData['butter']['Butter (10g)']);
    $('#smlBtrPrice').html('&#8377 ' + jsonData['butter']['Butter (100g)']);
    $('#lrgBtrPrice').html('&#8377 ' + jsonData['butter']['Butter (500g)']);


    console.log(typeof jsonData['milk']['Cow Milk']);


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

        var item = $('#' + btnId.slice(0, 6) + 'Item').html();
        var price = jsonData[itemType][item];
        var quantity = parseInt($('#' + btnId.slice(0, 6) + 'Quantity').html(), 10);
        var entryTotal = parseInt($('#' + btnId.slice(0, 6) + 'Total').html().slice(1), 10);
        // var price = $('#' + btnId.slice(0, 6) + 'Price').html();
        if (this.id.indexOf('Add') !== -1) {
            quantity += 1;
        } else if (this.id.indexOf('Less') !== -1 && quantity > 0) {
            quantity -= 1;
        }
        $('#' + btnId.slice(0, 6) + 'Quantity').html(quantity);
        entryTotal = price * quantity;
        $('#' + btnId.slice(0, 6) + 'Total').html('&#8377 ' + entryTotal);
        console.log(item, itemType, price, quantity, entryTotal, typeof $('#' + btnId.slice(0, 6) + 'Total').html().slice(1));
    }

    $('img').on('click', funcCalculateTotal);

});
