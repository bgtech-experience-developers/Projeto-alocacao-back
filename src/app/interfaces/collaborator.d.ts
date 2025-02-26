type optinalValueCreate = string | null;
type optinalValueNumber = number | null;
interface colaborator {
  id: number;
  cpf: string;
  pis: optinalValueCreate;
  rg: optinalValueCreate;
  name: optinalValueCreate;
  sex: optinalValueNumber;
  education: optinalValueNumber;
  phone1: optinalValueCreate;
  cell_phone1: optinalValueCreate;
  phone2: optinalValueCreate;
  cell_phone2: optinalValueCreate;
  cod_bank: optinalValueCreate;
  agency: optinalValueCreate;
  account: optinalValueCreate;
  type_account: optinalValueNumber;
  variation: optinalValueNumber;
  email: optinalValueCreate;
  experience1: optinalValueCreate;
  experience2: optinalValueCreate;
  experience3: optinalValueCreate;
  location_proof: optinalValueCreate;
  type: optinalValueCreate;
  update_at: Date;
  created_at: Date;
}
interface ColaboratorInner {
  renova: optinalValueNumber;
  work: optinalValueCreate;
  type: optinalValueCreate;
  organ: optinalValueNumber;
  position: optinalValueCreate;
  registration: optinalValueCreate;
  sector: optinalValueCreate;
}
interface createColaborator {
  colaborador: colaborator;
  colaboradorInterno: ColaboratorInner;
  endereco: address;
}
interface address {
  complement: optinalValueCreate;
  street: optinalValueCreate;
  cep: optinalValueCreate;
  neighborhood: optinalValueCreate;
}
interface login {
  email: string;
  password: string;
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

interface UpdateSchool {
  name_school: string,
  cnpj: string,
  answerable_school: string,
  answerable_phone: string,
  answerable_email: string,
  number: (null | string),
  street: (null | string),
  cep: (null | string),
  neighborhood: (null | string),
  state: (null | string),
  city: (null | string)
}