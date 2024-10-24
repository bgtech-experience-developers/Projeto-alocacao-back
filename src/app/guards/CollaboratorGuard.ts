//terá acesso as interfaces globais definidas, ou até mesmo podemos definir as interfaces locais............
//temos duas formas de realizar essa funcionalidade de interfaces, tanto globais quanto locais. localmente seria definida dentro de um arquivo e somente aquele arquivo tem o poder de acessar ja globalmente todos os arquivos tem esse poder de manipular e acessar. qual o beneficio de ser global? qualquer parte do programa terá acesso poupando fazer uma importação de tal interface ou type lados negativos, caso você tenha determinado um nome de uma interface localmente idêntico a um definido globalmente e caso vc puxe essa interface global para  o mesmo arquivo no qual a  ja exista uma interface local com o mesmo nome, irá ocorrer um overwrite, a local irá literalmente sobrescrever a global..... então decidam qual abordagem querem utilizar.
const abc = 10;

export const checkInterfaceCreate = <$Interface>(
  value: unknown,
  ...properties: string[]
): value is $Interface => {
  if (value && typeof value === "object") {
    const property = properties.find((props) => {
      if (!(props in value)) {
        return props;
      }
    });
    if (property) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};
