interface UserData {
    id: string;
    name_companies: string;
    address_companies: string;
    email_companies: string;
    lat_companies: number;
    long_companies: number;
    CNPJ_companies: string;
    phone_companies: string;
    is_active_companies: boolean;
}
interface Credentials {
    CNPJ: string;
    password: string;

}

interface DeliveriesProduct {
    code_deliveries: string;
    companiesID: string;
    delivermanID: string;
    created_at: string;
    name_client_product: string;
    address_client_product: string;
    change_product: string;
    lat_product: number;
    long_product: number;
    price_product: string;
    product: string;
    status_product: string;
    payment_method_product: string;
    deliveriesID: string;
    id: string;
    name_companies: string;
    lat_companies: number;
    long_companies: number;
    address_companies: string;
    phone_companies: number;

}
export type { UserData, Credentials, DeliveriesProduct }