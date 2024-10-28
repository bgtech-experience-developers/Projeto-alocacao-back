interface CreateCollaboratorInner {
  cpf: string;
  pis: string;
  rg: string;
  password: string;
  renova: number;
  name: string;
  address: string;
  neighborhood: string;
  complement?: string;
  cep: string;
  sex: number;
  education: number;
  phone1: string;
  cell_phone1: string;
  phone2: string;
  cell_phone2: string;
  cod_bank: number;
  agency: string;
  account: string;
  type_account?: number;
  variation?: number;
  email: string;
  work: string;
  type: string;
  organ: number;
  position: string;
  registration: string;
  sector: string;
  experience1?: string;
  experience2: string;
  experience3: string;
  location_proof: string;
}

interface ParamsId {
  id: number;
}
interface HeaderRequest {}
interface GetCollaborators {
  rosana: string;
  carro: number;
  levi: string;
}

interface AllInterfaces {
  BodyCreateCollaboratorInner: {
    id: number;
    cpf: string;
    pis: string;
    rg: string;
    renova: number | string;
    name: string;
    address: string;
    neighborhood: string;
    complement?: string;
    cep: string;
    sex: number;
    education: number;
    phone1: string;
    cell_phone1: string;
    phone2: string;
    cell_phone2: string;
    cod_bank: number;
    agency: string;
    account: string;
    type_account?: number;
    variation?: number;
    email: string;
    work: string;
    type: string;
    organ: number;
    position: string;
    registration: string;
    sector: string;
    experience1?: string;
    experience2: string;
    experience3: string;
    location_proof: string;
  };
  casinha: number;
}
