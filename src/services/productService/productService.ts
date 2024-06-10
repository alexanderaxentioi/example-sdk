import { SHOP_ID } from "../../utils";
import { v4 as uuidv4 } from 'uuid';

/**
 * Adds multiple items to the basket. This function can handle different types of basket operations
 * such as depositing items, applying surcharges, or setting quantities directly.
 * 
 * @param items An array of tuples where each tuple contains an item ID and a quantity.
 *              The quantity can represent a deposit (positive number), a surcharge (negative number),
 *              or setting the quantity directly (any number).
 */
export const addItemsToBasket = async (items: [id: string, quantity: number][]): Promise<void> => {
    console.log('Adding items to basket', items);
    await items.reduce(async (promise, item) => {
        await promise;
        return addItemToBasket(item);
    }, Promise.resolve());
};

/**
 * Adds a single item to the basket.
 * 
 * @param item A tuple containing an item ID and a quantity.
 */
export const addItemToBasket = async (item: [id: string, quantity: number]): Promise<void> => {
    const [id, quantity] = item;
    console.log('Adding item to basket', item);

    if (quantity > 0) {
        // Handle deposit
        console.log(`Depositing ${quantity} of item ${id}`);
        // Add your deposit logic here
    } else if (quantity < 0) {
        // Handle surcharge
        console.log(`Applying surcharge of ${-quantity} to item ${id}`);
        // Add your surcharge logic here
    } else {
        // Handle set quantity
        console.log(`Setting quantity of item ${id} to ${quantity}`);
        // Add your set quantity logic here
    }
};

/**
 * Removes a single item from the basket.
 * 
 * @param key The item ID to remove from the basket.
 */
export const removeItemFromBasket = async (key: string): Promise<void> => {
    console.log('Removing item from basket', key);
};

export const updateItemInBasket = async (key: string, quantity: number): Promise<void> => {
    console.log('Updating item in basket', key, quantity);

    // either deposit/sets/surcharges

};

export const mergeBasket = async (prevBasket: string, newBasket: string): Promise<void> => {
    console.log('Merging remote and local basket', prevBasket, newBasket);
    // query for both baskets and merge them 

    const mergedBasket = {
        // ...prevBasket,
        // ...newBasket
    }

    // return mergedBasket;
};

export const basketKeyGeneration = (customerId?: string): string => {
    if (customerId) {
        return `basket-${SHOP_ID}-${customerId}`
    }

    const uuid = uuidv4();
    return `basket-${uuid}`
};








