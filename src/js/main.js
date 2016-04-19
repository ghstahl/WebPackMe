require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require("bootstrap");
require("holderjs");
document.write("It works.");
document.write("<br>");
document.write(require("./content.js"));
