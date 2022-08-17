export interface IVegetables {
  title: string,
  minAmount: number,
  maxAmount: number,
}

export interface ISpecials {
  title: string,
  minAmount: number,
  maxAmount: number,
}

export interface IMeat {
  title: string,
  minAmount: number,
  maxAmount: number,
  mandatorytoppings?: IVegetables | ISpecials,
  notallowedtoppings?: IVegetables | ISpecials,
}
