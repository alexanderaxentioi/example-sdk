"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basketKeyGeneration = exports.mergeBasket = exports.updateItemInBasket = exports.removeItemFromBasket = exports.addItemToBasket = exports.addItemsToBasket = void 0;
var utils_1 = require("../../utils");
var uuid_1 = require("uuid");
/**
 * Adds multiple items to the basket. This function can handle different types of basket operations
 * such as depositing items, applying surcharges, or setting quantities directly.
 *
 * @param items An array of tuples where each tuple contains an item ID and a quantity.
 *              The quantity can represent a deposit (positive number), a surcharge (negative number),
 *              or setting the quantity directly (any number).
 */
var addItemsToBasket = function (items) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Adding items to basket', items);
                return [4 /*yield*/, items.reduce(function (promise, item) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, promise];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, (0, exports.addItemToBasket)(item)];
                            }
                        });
                    }); }, Promise.resolve())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.addItemsToBasket = addItemsToBasket;
/**
 * Adds a single item to the basket.
 *
 * @param item A tuple containing an item ID and a quantity.
 */
var addItemToBasket = function (item) { return __awaiter(void 0, void 0, void 0, function () {
    var id, quantity;
    return __generator(this, function (_a) {
        id = item[0], quantity = item[1];
        console.log('Adding item to basket', item);
        if (quantity > 0) {
            // Handle deposit
            console.log("Depositing ".concat(quantity, " of item ").concat(id));
            // Add your deposit logic here
        }
        else if (quantity < 0) {
            // Handle surcharge
            console.log("Applying surcharge of ".concat(-quantity, " to item ").concat(id));
            // Add your surcharge logic here
        }
        else {
            // Handle set quantity
            console.log("Setting quantity of item ".concat(id, " to ").concat(quantity));
            // Add your set quantity logic here
        }
        return [2 /*return*/];
    });
}); };
exports.addItemToBasket = addItemToBasket;
/**
 * Removes a single item from the basket.
 *
 * @param key The item ID to remove from the basket.
 */
var removeItemFromBasket = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Removing item from basket', key);
        return [2 /*return*/];
    });
}); };
exports.removeItemFromBasket = removeItemFromBasket;
var updateItemInBasket = function (key, quantity) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Updating item in basket', key, quantity);
        return [2 /*return*/];
    });
}); };
exports.updateItemInBasket = updateItemInBasket;
var mergeBasket = function (prevBasket, newBasket) { return __awaiter(void 0, void 0, void 0, function () {
    var mergedBasket;
    return __generator(this, function (_a) {
        console.log('Merging remote and local basket', prevBasket, newBasket);
        mergedBasket = {
        // ...prevBasket,
        // ...newBasket
        };
        return [2 /*return*/];
    });
}); };
exports.mergeBasket = mergeBasket;
var basketKeyGeneration = function (customerId) {
    if (customerId) {
        return "basket-".concat(utils_1.SHOP_ID, "-").concat(customerId);
    }
    var uuid = (0, uuid_1.v4)();
    return "basket-".concat(uuid);
};
exports.basketKeyGeneration = basketKeyGeneration;
