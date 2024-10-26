interface CreateCollaborator {
  id: number;
  cpf: string;
  pis: string;
  rg: string;
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
// id Int @id @default(autoincrement())
// cpf String @db.VarChar(11) @unique
// pis String @db.VarChar(11)
// rg  String @db.VarChar(35)
// renova Int
// name String @db.VarChar(75)
// address String @db.VarChar(75)
// neighborhood String @db.VarChar(40)
// complement String ? @db.VarChar(40)
// cep String @db.VarChar(8)
// sex Int
// education Int
// phone1 String @db.VarChar(20)
// cell_phone1 String @db.VarChar(20)
// phone2  String @db.VarChar(15)
// cell_phone2 String @db.VarChar(15)
// cod_bank Int
// agency String @db.VarChar(20)
// account String @db.VarChar(20)
// type_account Int?
// variation Int?
// email String @db.VarChar(50)
// work String @db.VarChar(3)
// type String @db.VarChar(20)
// organ Int
// position String @db.VarChar(60)
// registration String @db.VarChar(20)
// sector String @db.VarChar(60)
// experience1 String? @db.VarChar(150)
// experience2  String @db.VarChar(150)
// experience3  String @db.VarChar(150)
// location_proof String @db.VarChar(90)
// created_at DateTime @default(now())
interface DeleteCollaborator {}
interface GetCollaborators {
  rosana: "202";
}
interface AllInterfaces {
  BodyCreateCollaboratorInner: {
    id: number;
    cpf: string;
    pis: string;
    rg: string;
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
  };
  casinha: number;
}
