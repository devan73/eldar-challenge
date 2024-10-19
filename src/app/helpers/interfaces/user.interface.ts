export interface User {
    address: UserAddress,
    company: UserCompany,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

export interface UserCompany {
    bs: string,
    catchPhrase: string,
    name: string
}

export interface UserAddress {
    city: string,
    geo: UserAddressGeo,
    street: string,
    suite: string,
    zipcode: string
}

export interface UserAddressGeo {
    lat: string,
    lng: string
}