'use strict';

let should = require('chai').should();

const GildedRose = require('../../issue/src/GildedRose');
const Item = require('../../issue/src/Item');

describe("Gilded Rose",function(){
    it('green test', function () {
        true.should.equal(true);
    });

    it('item decrement quality', function () {
        let item = new Item("anyItem",20,2);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(1);
    });

    it('item decrement sellIn', function () {
        let item = new Item("anyItem",2,20);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getSellIn().should.equal(1);
    });

    it('quality item never is negative', function () {
        let item = new Item("anyItem",0,0);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(0);
    });

    it('once sell date has passes quality degrade twice fast', function () {
        let item = new Item("anyItem",0,4);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(2);
    });

    it('sulfuras never decrement quality', function () {
        let item = new Sulfuras("Sulfuras, Hand of Ragnaros",20);


        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(80);
    });

    it('backstage passes quality increase by 2 there are 10 days or less', function () {
        let item = new Backstage("Backstage passes to a TAFKAL80ETC concert",10,4);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(6);
    });

    it('backstage passes quality increase by 3 there are 5 days or less', function () {
        let item = new Backstage("Backstage passes to a TAFKAL80ETC concert",5,4);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(7);
    });

    it('backstage passes quality 0 when sellIn 0', function () {
        let item = new Backstage("Backstage passes to a TAFKAL80ETC concert",0,50);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(0);
    });


    it('conjured updateQuality decrease quality by 2', function () {
        let item = new Conjured("Conjured",10,50);

        let items = {item};
        new GildedRose(items).updateQuality();

        item.getQuality().should.equal(48);
    });
});
