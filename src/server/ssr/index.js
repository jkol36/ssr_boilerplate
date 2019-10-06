const config = require("../../config/index");
const isProd = config["isProd"];
const toHtml = config["path"]["toHtml"];
const toDist = config["path"]["toDist"];

const fs = require("fs");
const htmlExists = fs.existsSync(toHtml());

const express = require("express");

const path = require("path");
const template = path.join(__dirname + "/template.html");

module.exports =
  isProd && htmlExists
    ? express.static(toDist())
    : (req, res) => {
        res.sendFile(template);
      };
