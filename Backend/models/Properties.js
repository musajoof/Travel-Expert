import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true  },
  location: { type: String, required: true },
  description: { type: String, required: true, },
  price: { type: String, required: true },
  image: { type: String, required: false },
  property_type: { type: String, required: false },
  //  timeStamp: true
})

 const Property = mongoose.model('Property', PropertySchema);

 export default Property;