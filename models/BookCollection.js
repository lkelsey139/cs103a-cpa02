'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var bookCollectionSchema = Schema({
    userID: ObjectId,
    book: ObjectId,
})
module.exports = mongoose.model( 'BookCollection', bookCollectionSchema );