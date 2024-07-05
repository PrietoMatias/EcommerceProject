import mongoose from 'mongoose'

//Add the extension of MongoDB for VScode and page this connection string
const uri:string = 'mongodb+srv://gentsgentleman:gentsgentleman7743@clauster1.zfn7x48.mongodb.net/?retryWrites=true&w=majority/ecommerceFlowerClothes'

const connection = async():Promise<void> =>{
    try {
       await mongoose.connect(uri)
        console.log('Success to connect at database')
    } catch (error) {
        console.log('Error, ' + error)
        process.exit(1) //This line ends the process if cannot connect to database
    }
}

export default connection
