export interface School {
  name_school: string;
  cnpj: string;
  manager: string;
  manager_email: string;
  phone: string;

  address: Address;
  rooms: Room[]
}

interface Room {
  floor: string;
  identificator: string;
  ceps: string;
  chair_qtd: number;
  chair_type: string;
}

interface Address {
  cep: string;
  street: string;
  neighborhood: string;
  state: string;
  city: string
}
