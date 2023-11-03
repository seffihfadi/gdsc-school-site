import csvFilePath from "../utils/csvReader.js";

export const authUser = async (req, res) => {
  const {email} = req.body
  try {
    const data = await csvFilePath('./db.csv');
    const person = data.find((person) => person.personEmail === email);

    console.log('emailExists', person)
    if(!person) {
      res.status(400).json({message: 'email does\'n exist'})
      return;
    } 

    res.status(200).json(person)
    

    
  } catch (error) {
    console.log('error', error)
  }
}