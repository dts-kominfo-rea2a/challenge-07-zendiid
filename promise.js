const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ekspresi) => {
  let paramFungsi = (
    await promiseTheaterIXX()).concat((await promiseTheaterVGC())
    );

  return paramFungsi.filter(
    data => (data.hasil === ekspresi)).length;
};;

module.exports = {
  promiseOutput,
};
