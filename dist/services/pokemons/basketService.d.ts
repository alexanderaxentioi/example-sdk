/**
 * Adds multiple items to the basket. This function can handle different types of basket operations
 * such as depositing items, applying surcharges, or setting quantities directly.
 *
 * @param items An array of tuples where each tuple contains an item ID and a quantity.
 *              The quantity can represent a deposit (positive number), a surcharge (negative number),
 *              or setting the quantity directly (any number).
 */
export declare const addItemsToBasket: (items: [id: string, quantity: number][]) => Promise<void>;
/**
 * Adds a single item to the basket.
 *
 * @param item A tuple containing an item ID and a quantity.
 */
export declare const addItemToBasket: (item: [id: string, quantity: number]) => Promise<void>;
/**
 * Removes a single item from the basket.
 *
 * @param key The item ID to remove from the basket.
 */
export declare const removeItemFromBasket: (key: string) => Promise<void>;
export declare const updateItemInBasket: (key: string, quantity: number) => Promise<void>;
export declare const mergeBasket: (prevBasket: string, newBasket: string) => Promise<void>;
export declare const basketKeyGeneration: (customerId?: string) => string;
