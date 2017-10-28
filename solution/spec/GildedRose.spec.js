'use strict';

let should = require('chai').should();

const GildedRose = require('../../issue/src/GildedRose');
const Item = require('../../issue/src/Item');

describe("Gilded Rose",function(){
    it('green test', function () {
        true.should.equal(true);
    });

    it('item decrement quality', function () {
        let item = Item("anyItem",20,2);
        new GildedRose([item]).updateQuality();

        item.quality.should.equal(1);
    });

    it('item decrement sellIn', function () {
        let item = Item("anyItem",2,20);

        new GildedRose([item]).updateQuality();

        item.sellIn.should.equal(1);
    });

    it('quality item never is negative', function () {
        let item = Item("anyItem",0,0);

        new GildedRose([item]).updateQuality();

        item.quality.should.equal(0);
    });

    it('once sell date has passes quality degrade twice fast', function () {
        let item = Item("anyItem",0,4);

        new GildedRose([item]).updateQuality();

        item.quality.should.equal(2);
    });

    it('sulfuras never decrement quality', function () {
        let item = Item("Sulfuras, Hand of Ragnaros",20,80);

        new GildedRose([item]).updateQuality();

        item.quality.should.equal(80);
    });

    it('backstage passes quality increase by 2 there are 10 days or less', function () {
        let item = Item("Backstage passes to a TAFKAL80ETC concert",10,4);

        new GildedRose([item]).updateQuality();

        item.quality.should.equal(6);
    });

    it('backstage passes quality increase by 3 there are 5 days or less', function () {
        let item = Item("Backstage passes to a TAFKAL80ETC concert",5,4);

        new GildedRose([item]).updateQuality();

        item.quality.should.equal(7);
    });

    it('backstage passes quality 0 when sellIn 0', function () {
        let item = Item("Backstage passes to a TAFKAL80ETC concert",0,50);

        new GildedRose([item]).updateQuality();

        item.quality.should.equal(0);
    });
});
