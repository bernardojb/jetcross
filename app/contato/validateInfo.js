export default function validadeInfo(values) {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = "Digite seu nome!";
  }

  //Email
  if (!values.email) {
    errors.email = "Digite o seu email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Digite um email valido.";
  }

  //Phone
  if (!values.phone) {
    errors.phone = "Digite seu telefone!";
  }

  //Organization
  if (!values.organization) {
    errors.organization = "Qual a sua empresa?";
  }

  //Budget
  if (!values.budget) {
    errors.budget = "Quanto pretende investir?";
  }

  //Message
  if (!values.message) {
    errors.message = "Fale sobre seu projeto!";
  }

  return errors;
}
