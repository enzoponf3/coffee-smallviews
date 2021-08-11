import { CoffeeShop } from "./types"

export default {
  list: (): Promise<CoffeeShop[]> => {},
  getByName: (name: string): Promise<CoffeeShop[]> => {},
  getById: (id: string): Promise<CoffeeShop> => {},
  add: (coffeeShop: CoffeeShop): Promise<CoffeeShop> => {}
}