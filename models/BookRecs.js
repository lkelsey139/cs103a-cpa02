'use strict';
const mongoose = require( 'mongoose' );
// const { schema } = require('./BookRecs');
const Schema = mongoose.Schema;


var bookRecsSchema = Schema({
    title: String,
    writer: String,
    genre: String,
})
module.exports = mongoose.model( 'BookRecs', bookRecsSchema );