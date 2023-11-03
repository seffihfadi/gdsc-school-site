import csvtojson from 'csvtojson'

export default async function csvToJSON (csvFilePath) {
  const jsonObject = await csvtojson().fromFile(csvFilePath);
  return jsonObject
}