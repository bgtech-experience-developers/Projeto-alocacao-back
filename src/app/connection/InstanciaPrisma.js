"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanciaPrismas = void 0;
var client_1 = require("@prisma/client");
var InstanciaPrismas = /** @class */ (function () {
    function InstanciaPrismas() {
    }
    InstanciaPrismas.createConnection = function () {
        return this.instaciaprisma
            ? this.instaciaprisma
            : (this.instaciaprisma = new client_1.PrismaClient());
    };
    return InstanciaPrismas;
}());
exports.InstanciaPrismas = InstanciaPrismas;
